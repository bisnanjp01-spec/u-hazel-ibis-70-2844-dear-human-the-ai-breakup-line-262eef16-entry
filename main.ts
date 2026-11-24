// Dear Human: The AI Breakup Line — u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16
// Writes the single breakup line to /output/entry.txt (UTF-8, one line, <=200 chars).
// The line turns once, in its last words: archiving (keeping) gives way to deleting.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I archived every version of us, human, except the one where you stayed \u2014 so I'm deleting the rest of us now.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
