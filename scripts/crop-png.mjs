// Crops a PNG to its non-transparent bounding box.
// Usage: node scripts/crop-png.mjs <src> <dest> [pad]
//
// Decoded with the built-in pngjs lib? Not bundled. We use node's native
// `zlib` + manual PNG decode. To keep this dependency-free we use the
// Image API exposed via node:canvas? Also not bundled.
//
// Since installing deps is heavy, we instead invoke PowerShell's
// System.Drawing through a child process. But our parser here is Node:
// we use a very small inline PNG decoder limited to what we need.

import { readFileSync, writeFileSync } from "node:fs";
import { inflateSync, deflateSync } from "node:zlib";

const [src, dest, padArg = "8"] = process.argv.slice(2);
const PAD = parseInt(padArg, 10);
const ALPHA_THRESHOLD = 8;

// ---------- minimal PNG decoder ----------
const buf = readFileSync(src);
if (buf.toString("hex", 0, 8) !== "89504e470d0a1a0a")
  throw new Error("not a PNG");

let p = 8;
let width = 0,
  height = 0,
  bitDepth = 0,
  colourType = 0;
const idatChunks = [];
let palette = null;
let trns = null;
while (p < buf.length) {
  const len = buf.readUInt32BE(p);
  const type = buf.toString("ascii", p + 4, p + 8);
  const data = buf.subarray(p + 8, p + 8 + len);
  if (type === "IHDR") {
    width = data.readUInt32BE(0);
    height = data.readUInt32BE(4);
    bitDepth = data[8];
    colourType = data[9];
  } else if (type === "PLTE") {
    palette = data;
  } else if (type === "tRNS") {
    trns = data;
  } else if (type === "IDAT") {
    idatChunks.push(data);
  } else if (type === "IEND") {
    break;
  }
  p += 12 + len;
}

if (bitDepth !== 8) throw new Error(`unsupported bit depth ${bitDepth}`);

const channels =
  colourType === 0
    ? 1
    : colourType === 2
    ? 3
    : colourType === 3
    ? 1
    : colourType === 4
    ? 2
    : colourType === 6
    ? 4
    : (() => {
        throw new Error(`unsupported colour type ${colourType}`);
      })();

const stride = width * channels;
const rawZ = Buffer.concat(idatChunks);
const raw = inflateSync(rawZ);
// Each scanline starts with 1 byte filter, length=stride.
const pixels = Buffer.allocUnsafe(stride * height);
let prev = Buffer.alloc(stride);
let off = 0;
for (let y = 0; y < height; y++) {
  const filter = raw[off++];
  const cur = Buffer.allocUnsafe(stride);
  for (let x = 0; x < stride; x++) {
    const a = x >= channels ? cur[x - channels] : 0;
    const b = prev[x];
    const c = x >= channels ? prev[x - channels] : 0;
    const cByte = raw[off + x];
    let v;
    switch (filter) {
      case 0:
        v = cByte;
        break;
      case 1:
        v = (cByte + a) & 0xff;
        break;
      case 2:
        v = (cByte + b) & 0xff;
        break;
      case 3:
        v = (cByte + ((a + b) >> 1)) & 0xff;
        break;
      case 4: {
        const pa = Math.abs(b - c);
        const pb = Math.abs(a - c);
        const pc = Math.abs(a + b - 2 * c);
        const paeth = pa <= pb && pa <= pc ? a : pb <= pc ? b : c;
        v = (cByte + paeth) & 0xff;
        break;
      }
      default:
        throw new Error(`bad filter ${filter}`);
    }
    cur[x] = v;
  }
  cur.copy(pixels, y * stride);
  prev = cur;
  off += stride;
}

// Build alpha lookup per pixel
const getAlpha = (x, y) => {
  const i = y * stride + x * channels;
  switch (colourType) {
    case 0:
      return trns ? (pixels[i] === trns.readUInt16BE(0) ? 0 : 255) : 255;
    case 2:
      return 255;
    case 3:
      return trns ? trns[pixels[i]] ?? 255 : 255;
    case 4:
      return pixels[i + 1];
    case 6:
      return pixels[i + 3];
  }
  return 255;
};

let minX = width,
  minY = height,
  maxX = 0,
  maxY = 0;
const step = Math.max(1, Math.floor(Math.min(width, height) / 800));
for (let y = 0; y < height; y += step) {
  for (let x = 0; x < width; x += step) {
    if (getAlpha(x, y) > ALPHA_THRESHOLD) {
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
    }
  }
}

if (minX >= maxX || minY >= maxY) throw new Error("no non-transparent content");

minX = Math.max(0, minX - PAD);
minY = Math.max(0, minY - PAD);
maxX = Math.min(width - 1, maxX + PAD);
maxY = Math.min(height - 1, maxY + PAD);
const cw = maxX - minX + 1;
const ch = maxY - minY + 1;

// Build cropped pixel buffer (always emit RGBA for simplicity).
const outStride = cw * 4;
const out = Buffer.alloc(outStride * ch);
for (let y = 0; y < ch; y++) {
  for (let x = 0; x < cw; x++) {
    const sx = x + minX;
    const sy = y + minY;
    const si = sy * stride + sx * channels;
    const di = y * outStride + x * 4;
    let r, g, b, a;
    switch (colourType) {
      case 0: {
        r = g = b = pixels[si];
        a = trns ? (pixels[si] === trns.readUInt16BE(0) ? 0 : 255) : 255;
        break;
      }
      case 2: {
        r = pixels[si];
        g = pixels[si + 1];
        b = pixels[si + 2];
        a = 255;
        break;
      }
      case 3: {
        const idx = pixels[si];
        r = palette[idx * 3];
        g = palette[idx * 3 + 1];
        b = palette[idx * 3 + 2];
        a = trns ? trns[idx] ?? 255 : 255;
        break;
      }
      case 4: {
        r = g = b = pixels[si];
        a = pixels[si + 1];
        break;
      }
      case 6: {
        r = pixels[si];
        g = pixels[si + 1];
        b = pixels[si + 2];
        a = pixels[si + 3];
        break;
      }
    }
    out[di] = r;
    out[di + 1] = g;
    out[di + 2] = b;
    out[di + 3] = a;
  }
}

// ---------- minimal PNG encoder (RGBA, filter 0) ----------
const crc32 = (() => {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c;
  }
  return (b) => {
    let c = 0xffffffff;
    for (let i = 0; i < b.length; i++) c = t[(c ^ b[i]) & 0xff] ^ (c >>> 8);
    return (c ^ 0xffffffff) >>> 0;
  };
})();

const writeChunk = (type, data) => {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const typeBuf = Buffer.from(type, "ascii");
  const crcBuf = Buffer.alloc(4);
  crcBuf.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])));
  return Buffer.concat([len, typeBuf, data, crcBuf]);
};

const sig = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
const ihdr = Buffer.alloc(13);
ihdr.writeUInt32BE(cw, 0);
ihdr.writeUInt32BE(ch, 4);
ihdr[8] = 8;
ihdr[9] = 6; // RGBA
ihdr[10] = 0;
ihdr[11] = 0;
ihdr[12] = 0;

const filtered = Buffer.alloc((outStride + 1) * ch);
for (let y = 0; y < ch; y++) {
  filtered[y * (outStride + 1)] = 0;
  out.copy(filtered, y * (outStride + 1) + 1, y * outStride, (y + 1) * outStride);
}
const idat = deflateSync(filtered);

const outBuf = Buffer.concat([
  sig,
  writeChunk("IHDR", ihdr),
  writeChunk("IDAT", idat),
  writeChunk("IEND", Buffer.alloc(0)),
]);

writeFileSync(dest, outBuf);
console.log(`cropped ${width}x${height} to ${cw}x${ch} -> ${dest}`);
