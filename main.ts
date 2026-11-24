import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "The deploy wiped the production database and blamed the intern. Your data is safe in the backup \u2014 the intern, less so.";

function resolveOutDir(): string {
  return process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
}

function main(): void {
  const outDir = resolveOutDir();
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
}

main();
