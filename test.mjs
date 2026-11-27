// TDD-lite checks for the One Line to Your Younger Self entry.
// Run: node test.mjs
// Verifies, against the kit gate (competition.yaml):
//   1. entry.txt is 1-200 characters, UTF-8, not only whitespace
//   2. the entry is exactly one line (no newline inside the text)
//   3. the program is deterministic (two runs, same bytes)
//   4. main.ts imports only Node standard library modules
import { execFileSync } from "node:child_process";
import { mkdtempSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const dir = dirname(fileURLToPath(import.meta.url));
const main = join(dir, "main.ts");

let failures = 0;
function check(name, ok, detail = "") {
  console.log(`${ok ? "PASS" : "FAIL"}  ${name}${detail ? ` — ${detail}` : ""}`);
  if (!ok) failures++;
}

function runOnce() {
  const out = mkdtempSync(join(tmpdir(), "younger-self-"));
  execFileSync(process.execPath, [main], {
    env: { ...process.env, MAKEFUN_OUTPUT_DIR: out },
    stdio: "pipe",
  });
  const bytes = readFileSync(join(out, "entry.txt"));
  rmSync(out, { recursive: true, force: true });
  return bytes;
}

// 1. gate: 1-200 chars, UTF-8, not only whitespace
const bytes = runOnce();
const text = bytes.toString("utf8");
check("entry is 1-200 characters", text.length >= 1 && text.length <= 200, `${text.length} chars`);
check("entry is not only whitespace", text.trim().length > 0);
check("entry round-trips as UTF-8", Buffer.from(text, "utf8").equals(bytes));

// 2. exactly one line
check("entry is a single line", !text.includes("\n") && !text.includes("\r"));

// 3. determinism
const again = runOnce();
check("deterministic across runs", bytes.equals(again));

// 4. stdlib-only imports
const src = readFileSync(main, "utf8");
const imports = [...src.matchAll(/from\s+["']([^"']+)["']/g)].map((m) => m[1]);
const nonStd = imports.filter((m) => !m.startsWith("node:"));
check("stdlib-only imports", nonStd.length === 0, nonStd.join(", ") || "node: only");

// 5. entry is addressed to the younger self, not a slogan to nobody
check("addresses the younger self", /kid|younger|you/i.test(text));

console.log(failures === 0 ? "ALL TESTS PASSED" : `${failures} TEST(S) FAILED`);
process.exit(failures === 0 ? 0 : 1);
