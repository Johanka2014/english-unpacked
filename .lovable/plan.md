## Goal

Create an **FCE Word Quest** — a Cambridge B2 vocabulary trainer that reuses the PET Word Quest game engine, powered by the uploaded B2 word list, and add it as a new tile under Practice → Exams next to "FCE Vocabulary Practice" and "PET Word Quest".

## What gets built

### 1. B2 word data — `src/data/fceWordsData.ts`
- Parse the uploaded `level-b2-word-list-1.pdf` (headword + IPA + part of speech + short definition + one example) into a structured dataset.
- Extract ~250–350 high-value B2 headwords across the alphabet (skipping A1/A2 basics like *animal*, *about*, *air*, *all*, *again*) and group them into ~10 thematic topics used by the game UI, e.g.:
  - People & feelings (ambition, anxious, affection, admire…)
  - Actions & change (abandon, abolish, adapt, adjust, acquire…)
  - Society & law (abuse, accuse, agent…)
  - Work & study (analyst, account, activity…)
  - Everyday & travel, Health & body, Nature & environment, Media & tech, Money & business, Ideas & opinions.
- Each entry: `{ word, ipa, pos, definition, example, topic, level: 'B2' }`.
- Keep the shape compatible with what `PETWordQuest.tsx` consumes so the same engine renders it.

### 2. Progress store — `src/store/fceProgress.ts`
- Duplicate `petProgress.ts` with a new persist key (`fce-word-quest-progress`) so B2 XP, streaks, and badges are tracked independently from PET.
- Same shape: XP, level, daily streak, achievements, per-word mastery.

### 3. Game page — `src/pages/FCEWordQuest.tsx`
- Duplicate `PETWordQuest.tsx` and swap:
  - Data import → `fceWordsData`
  - Store import → `fceProgress`
  - Copy: "PET (B1)" → "FCE (B2)", page title, and headings
  - 60-second daily challenge pool draws from B2 words
- Reuse `src/lib/petSound.ts` as-is (audio + speech synthesis + vibration).
- Same four modes: Flashcards, Quiz, Spelling, Listen & Spell.
- Same views via `?view=`: Home, Words, Progress, Challenge.

### 4. Routing — `src/App.tsx`
- Add `const FCEWordQuest = lazy(() => import('./pages/FCEWordQuest'))`.
- Register protected route `/fce-word-quest`.

### 5. Navigation tile — `src/pages/MembersActivities.tsx`
- Add a new activity in the `exams` tab, placed right after "FCE Vocabulary Practice":
  - Title: **FCE Word Quest**
  - Description: *Gamified Cambridge FCE (B2) vocabulary trainer — flashcards, quizzes, spelling, listen & spell, plus a 60-second daily challenge*
  - Icon: `Gamepad2` (same family as PET) with a distinct color, e.g. `text-emerald-600`
  - Path: `/fce-word-quest`

## Not changing

- PET Word Quest, its data, its store, its route, and its tile all stay exactly as they are.
- No changes to `petSound.ts` or the shared UI components.
- No backend/RLS/schema changes — game state is local (Zustand persist).

## Technical notes

- The PDF is 50+ pages; extraction runs during build using `document--parse_document` output (already available in `tool-results://`) plus a short script to filter to the target headwords and write `fceWordsData.ts`. Only the curated ~250–350 B2 words are shipped, not the full PDF text.
- Bundle impact is minimal (JSON-like TS module) — no new dependencies; `zustand` and `canvas-confetti` are already installed.
