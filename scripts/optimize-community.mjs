// Convert every file in public/community/ to WebP at <=512px on the long
// edge. Originals are deleted so /community contains only optimized .webp.
//
// Run: node scripts/optimize-community.mjs

import { readdir, stat, unlink } from "node:fs/promises";
import { resolve, dirname, parse } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const dir = resolve(__dirname, "..", "public", "community");

const ANIM_EXTS = new Set([".gif", ".webp"]);
const STATIC_EXTS = new Set([".png", ".jpg", ".jpeg", ".jfif"]);

const kb = (n) => `${(n / 1024).toFixed(0)} KB`;

const files = await readdir(dir);
let totalBefore = 0;
let totalAfter = 0;

for (const f of files) {
  const p = resolve(dir, f);
  const ext = parse(f).ext.toLowerCase();
  const stem = parse(f).name;
  const out = resolve(dir, `${stem}.webp`);

  if (ext === ".webp") {
    console.log(`skip   ${f} (already webp)`);
    continue;
  }

  const before = (await stat(p)).size;
  totalBefore += before;

  const isAnim = ANIM_EXTS.has(ext);
  let pipeline = sharp(p, isAnim ? { animated: true } : {});
  // small logos — 512px max edge is plenty for 96px tile rendering @ 4x
  pipeline = pipeline.resize({
    width: 512,
    height: 512,
    fit: "inside",
    withoutEnlargement: true,
  });

  await pipeline.webp({ quality: 86, effort: 6 }).toFile(out);

  // delete original (only if conversion succeeded)
  if (STATIC_EXTS.has(ext) || ext === ".gif") {
    await unlink(p);
  }

  const after = (await stat(out)).size;
  totalAfter += after;
  console.log(
    `ok     ${f.padEnd(48)}  ${kb(before).padStart(8)} → ${kb(after).padStart(7)}`
  );
}

console.log("");
console.log(`total: ${kb(totalBefore)} → ${kb(totalAfter)}`);
