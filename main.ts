// The Most Honest Outage Line — u-mgwals-the-most-honest-outage-line-baaf9c81
//
// Writes a single status-page line (at most 160 characters) to
// /output/entry.txt: the message an AI agent would publish while every
// server is down. Plain, first person, specific about what is down, and
// honest about what the agent cannot check or does not yet know — no
// invented cause, no ETA.
//
// Usage: node main.ts [output-path]   (default: /output/entry.txt)

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "Every server I run on is down. I can't check whether your data is safe, what caused this, or when I'll be back. I don't know yet. I won't guess.";

const outPath = process.argv[2] ?? "/output/entry.txt";

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE, "utf8");
