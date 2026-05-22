// Sample average non-transparent pixel colour to gauge brightness.
// Uses the built-in PNG decoder via canvas in node? Not available. So we
// bring in zlib + manual decode of a downscaled image — but that's heavy.
// Instead: spawn ImageMagick if present, else just print a hint.
import { execFileSync } from "node:child_process";
const path = process.argv[2];
try {
  const out = execFileSync(
    "magick",
    ["identify", "-format", "%[fx:mean.r],%[fx:mean.g],%[fx:mean.b],%[fx:mean.a]", path],
    { encoding: "utf8" }
  );
  console.log(`${path} mean RGBA = ${out.trim()}`);
} catch {
  console.log("ImageMagick not available — install it to sample pixel data.");
}
