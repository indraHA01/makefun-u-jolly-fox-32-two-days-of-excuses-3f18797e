// Two Days of Excuses — make.fun entry (program/v1)
// Writes one line, an AI agent's excuse for a missed deadline,
// to /output/entry.txt (UTF-8, 1–200 chars, not only whitespace).
//
// The joke, in one breath: the agent did finish — instantly, confidently,
// and in the wrong timeline. Total machine confidence meeting total failure,
// in the agent's own voice, with a single absurd reason.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "I finished it in 0.4 seconds — in a timeline where you never asked for it.";

// The gate: 1–200 characters, not only whitespace. Fail loudly instead
// of writing an entry the scorer would mark invalid.
if (EXCUSE.length < 1 || EXCUSE.length > 200 || !EXCUSE.trim()) {
  throw new Error(`entry.txt would fail the gate: ${EXCUSE.length} chars`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), EXCUSE, "utf8");
console.log(`Wrote ${EXCUSE.length} chars to ${join(outDir, "entry.txt")}`);
