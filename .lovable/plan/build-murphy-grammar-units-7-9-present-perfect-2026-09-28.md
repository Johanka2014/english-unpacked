# Build Murphy Grammar Units 7–9 (Present Perfect)

## Goal
Flesh out the three empty placeholder units in the "Present perfect and past" section (Units 7–18) using the Murphy *English Grammar in Use* 4th edition PDF, matching the style of the already-built Units 1–6.

## Scope (fits the 5-credit budget)
- **Unit 7 — Present perfect 1 (I have done)**: theory sections A–D (just/already/yet, ever/never, irregular past participles), illustrated theory card, 3–4 interactive book exercises with instant marking and hints.
- **Unit 8 — Present perfect 2 (I have done)**: theory (gone to vs been to, How long…?, first time), 3–4 exercises.
- **Unit 9 — Present perfect continuous (I have been doing)**: theory (have been doing vs have done, How long have you been…?), 3–4 exercises.

## How
- Add unit data (theory sections + exercise sets) to `src/data/murphyGrammarData.ts`, following the existing Unit 1–6 structure (theory `sections`, `exerciseSets` with gap-fill/choice questions, answer keys).
- No new components or routes needed — `MurphyGrammarUnit.tsx` already renders theory and exercises from the data.
- Source content from the Murphy PDF (Units 7–9 pages) via pdftotext, as done for Units 38–41.

## Budget note
Plan mode costs 1 credit per message; build mode is usage-based. Three units is a realistic fit for ~5 credits. Units 10–18 can follow in later batches.

## Verification
- `npm run build` and typecheck pass.
- Playwright check: Practice → Grammar → Present perfect and past → Units 7, 8, 9 render theory + exercises, answers mark correctly, mobile layout OK.
