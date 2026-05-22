// Quick PNG inspector — reads 8-byte signature + IHDR to report
// width / height / colour-type / bit depth without external deps.
import { readFileSync } from "node:fs";

for (const path of process.argv.slice(2)) {
  const buf = readFileSync(path);
  if (buf.toString("hex", 0, 8) !== "89504e470d0a1a0a") {
    console.log(path, "NOT_A_PNG");
    continue;
  }
  // IHDR starts at byte 8 length(4) type(4) data(13)
  const w = buf.readUInt32BE(16);
  const h = buf.readUInt32BE(20);
  const bd = buf[24];
  const ct = buf[25];
  const ctNames = {
    0: "Greyscale",
    2: "RGB",
    3: "Indexed",
    4: "Greyscale+Alpha",
    6: "RGBA",
  };
  console.log(
    `${path} ${w}x${h} colourType=${ct} (${ctNames[ct] || "?"}) bitDepth=${bd} sizeKB=${Math.round(buf.length / 1024)}`
  );
}
