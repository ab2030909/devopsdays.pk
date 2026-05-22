// Re-encodes the heavy hero / skyline PNGs to WebP at sane web sizes.
// Run: node scripts/optimize-images.mjs

import sharp from "sharp";
import { stat } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const pub = resolve(__dirname, "..", "public");

const jobs = [
  // Hero logo: max 1100 px on the long edge — covers retina at our largest desktop render
  { src: "hero-logo-transparent.png", dest: "hero-logo.webp", maxSize: 1100, quality: 82 },
  // Venue skyline: max 1400 px
  { src: "skyline-transparent.png", dest: "skyline.webp", maxSize: 1400, quality: 82 },
];

const kb = (n) => `${(n / 1024).toFixed(0)} KB`;

for (const j of jobs) {
  const srcPath = resolve(pub, j.src);
  const destPath = resolve(pub, j.dest);
  const before = (await stat(srcPath)).size;

  await sharp(srcPath)
    .resize({
      width: j.maxSize,
      height: j.maxSize,
      fit: "inside",
      withoutEnlargement: true,
    })
    .webp({ quality: j.quality, effort: 6, alphaQuality: 90 })
    .toFile(destPath);

  const after = (await stat(destPath)).size;
  console.log(
    `${j.src}  →  ${j.dest}    ${kb(before)}  →  ${kb(after)}   (${(
      (after / before) * 100
    ).toFixed(0)}%)`
  );
}
