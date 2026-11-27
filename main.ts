// One Line to Your Younger Self — make.fun entry
// Writes a single line, in English, that the writer would send back to
// their younger self if one line were all they got. No explanation, no
// second sentence: the line alone, up to 200 characters.
//
// The line is drawn from a life actually lived: a forgotten wallet
// password, 407 Dogecoin locked away in 2018, and eight years of chasing
// them back through support tickets. Only the older self who lived it
// could write it — and it stings a little, because it is true.
//
// Node 22, stdlib-only, deterministic: the same run always writes the
// same bytes.
import { writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one line, 132 characters (134 bytes in UTF-8 — the em dash
// is 3 bytes), no trailing newline.
const ENTRY =
  "Kid, write the password down \u2014 the 407 Dogecoin you lock away in 2018 will take you eight years and two support tickets to get back.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
