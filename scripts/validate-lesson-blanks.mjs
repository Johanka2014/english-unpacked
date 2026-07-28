#!/usr/bin/env node
/**
 * Validates the fill-in-the-blank exercises used by the Sleep lesson.
 *
 * TypeBlanks (src/components/technical/TypeBlanks.tsx) renders exactly ONE
 * input per prompt, derived from the first `x___` placeholder. So every prompt
 * must satisfy:
 *   1. exactly one blank placeholder
 *   2. the blank must carry a leading hint letter (`x___`, not a bare `___`)
 *   3. the hint letter must equal the first letter of the expected answer
 *   4. the answer must be a single word (multi-word answers can't fit the hint)
 *
 * Run: node scripts/validate-lesson-blanks.mjs
 */
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const DATA_FILE = "src/data/sleepLessonData.ts";
const ARRAYS = ["sleepVocabBlanks", "usedToTransform"];

const source = readFileSync(resolve(root, DATA_FILE), "utf8");

/** Extract `{ prompt: "...", answer: "..." }` entries from a named export array. */
function extractItems(name) {
  const start = source.indexOf(`export const ${name} = [`);
  if (start === -1) throw new Error(`Could not find export "${name}" in ${DATA_FILE}`);
  const open = source.indexOf("[", start);
  let depth = 0;
  let end = -1;
  for (let i = open; i < source.length; i++) {
    if (source[i] === "[") depth++;
    else if (source[i] === "]") {
      depth--;
      if (depth === 0) {
        end = i;
        break;
      }
    }
  }
  if (end === -1) throw new Error(`Unterminated array for "${name}"`);
  const block = source.slice(open, end + 1);
  const items = [];
  const re = /prompt:\s*"((?:[^"\\]|\\.)*)"\s*,\s*answer:\s*"((?:[^"\\]|\\.)*)"/g;
  let m;
  while ((m = re.exec(block)) !== null) {
    items.push({
      prompt: m[1].replace(/\\"/g, '"'),
      answer: m[2].replace(/\\"/g, '"'),
    });
  }
  if (items.length === 0) throw new Error(`No prompt/answer pairs parsed from "${name}"`);
  return items;
}

const errors = [];

for (const name of ARRAYS) {
  const items = extractItems(name);
  items.forEach((item, index) => {
    const label = `${name}[${index}] "${item.prompt}"`;
    const blanks = item.prompt.match(/_{2,}/g) || [];

    if (blanks.length !== 1) {
      errors.push(`${label}\n    → expected exactly 1 blank, found ${blanks.length}. TypeBlanks renders only one input.`);
      return;
    }

    const hinted = item.prompt.match(/([a-zA-Z])(_{2,})/);
    if (!hinted) {
      errors.push(`${label}\n    → blank has no leading hint letter (use "x___", not "___").`);
      return;
    }

    const hint = hinted[1].toLowerCase();
    const answer = item.answer.trim();

    if (/\s/.test(answer)) {
      errors.push(`${label}\n    → answer "${answer}" is multi-word; a single-letter hint can only introduce one word.`);
      return;
    }

    if (answer.charAt(0).toLowerCase() !== hint) {
      errors.push(`${label}\n    → hint letter "${hinted[1]}" does not match answer "${answer}".`);
    }
  });
  console.log(`✓ ${name}: ${items.length} prompts checked`);
}

if (errors.length > 0) {
  console.error(`\n✗ Lesson blank validation failed (${errors.length} issue${errors.length === 1 ? "" : "s"}):\n`);
  errors.forEach((e) => console.error(`  • ${e}\n`));
  process.exit(1);
}

console.log("✓ All lesson blanks are valid.");
