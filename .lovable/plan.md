# Sleep Lesson (B2) — Topical Lessons hub

## 1. New "Topical Lessons" category

- Add a new tile "Topical Lessons" to the Members Activities hub grid (`src/pages/MembersActivities.tsx`) using the same card style as existing categories. Icon: `Sparkles` or `BookMarked`.
- New landing page `src/pages/TopicalLessons.tsx` at route `/practice/topical-lessons`:
  - Grid of lesson cards. First (and only live) card: **Sleep — Used To (B2)**.
  - Placeholder greyed-out cards using the existing `ComingSoonBadge` for future topics (Travel, Food, Technology) to signal the hub is a growing library.
- Register route in `src/App.tsx` behind `ProtectedRoute`, matching other practice modules.

## 2. Sleep lesson page

Route: `/practice/topical-lessons/sleep`, file `src/pages/SleepLesson.tsx`.

Sticky in-page nav (like `BBUpperSkill`) with 5 sections in this order:

1. **Warm-up & Reading** — "Sleep Matters" (adapted from resource 3)
2. **Vocabulary** — sleep words + similes (resources 4, 5)
3. **Grammar: Used To / Didn't use to / Be used to / Get used to**
4. **Listening** — user-supplied audio (see §4)
5. **Quiz** — mixed 10-question review

Each section rendered as a `Card` with the site's Merriweather headings, Royal Blue accents, matching the existing exercise components (see `ListeningCorporateCultureExercise`, `VocabCorporateCultureExercise` patterns).

## 3. Section content & interactivity

**Reading (Sleep Matters)**
- Short intro prediction task: "Some animals die without this…" reveal button.
- Adapted ~350-word passage from resource 3 rendered with `InfoSection`.
- Gist matching + 5 comprehension MCQs using `MultipleChoiceQuiz`.
- Vocabulary-in-context: 6 items → definitions via `MatchingExercise`.

**Vocabulary**
- Fill-in-the-blanks "sleep race" (yawn, snore, duvet, oversleep, insomnia, siesta, sleeping tablets, sleep like a log, jet-lagged, keep awake) with `TypeBlanks` or `DragFillCollocations`.
- Similes drag-drop (stubborn as a mule, sleeps like a log, drinks like a fish, white as a sheet, blind as a bat, quick as a flash, eats like a horse, works like a dream) via `DragDropMatching`.
- Optional per-word pronunciation using existing `SpeakButton`.

**Grammar: Used To**
- Explanation card with side-by-side contrast:
  - `used to + infinitive` (past habit — no longer true)
  - `didn't use to` / `did you use to…?`
  - `be used to + -ing / noun` (accustomed to)
  - `get used to + -ing / noun` (becoming accustomed)
- Examples framed around sleep habits ("I used to stay up till 2am… now I'm used to going to bed at 10").
- Two exercises:
  1. Choose the correct form (10 MCQs) — reuse `MultipleChoiceQuiz`.
  2. Type-the-blank transformation drill (8 items) — reuse `TypeBlanks`.

**Listening**
- Audio player (same pattern as `EngineeringAudio` / `TechTalkAudio`) sourced from an mp3 the user will upload.
- Pre-listening: 3 prediction questions.
- While-listening gap-fill (8 gaps) using `TypeBlanks`.
- Post-listening comprehension (4 MCQs).
- Placeholder audio file `src/assets/sleep-listening.mp3.asset.json` created via `lovable-assets` once you provide the file. Until then, the section shows an "Audio coming soon" state so the rest of the lesson is fully usable.

**Quiz (mixed review, 10 questions)**
- 4 vocab, 4 used-to, 2 reading-comprehension — all via `MultipleChoiceQuiz` with a final score + retry.

## 4. Audio handoff

After the plan is approved, you upload the mp3 to the chat. I'll:
- Save it via the `lovable-assets` CLI, producing `src/assets/sleep-listening.mp3.asset.json`.
- Wire the pointer into the listening component.

If you'd also like a YouTube backup embed (e.g. TED-Ed "What would happen if you didn't sleep?"), say so and I'll add an `<iframe>` toggle below the mp3 player.

## 5. Data & storage

- Lesson content lives in a new file `src/data/sleepLessonData.ts` (passages, vocab lists, quiz banks) so the page component stays presentational.
- No database or backend changes; fully client-side like the other Business Benchmark exercises.

## 6. Files touched (technical)

Created:
- `src/pages/TopicalLessons.tsx`
- `src/pages/SleepLesson.tsx`
- `src/data/sleepLessonData.ts`
- `src/components/topical/SleepReading.tsx`
- `src/components/topical/SleepVocabulary.tsx`
- `src/components/topical/SleepGrammarUsedTo.tsx`
- `src/components/topical/SleepListening.tsx`
- `src/components/topical/SleepQuiz.tsx`

Modified:
- `src/App.tsx` (2 new routes)
- `src/pages/MembersActivities.tsx` (add Topical Lessons tile)

## 7. Out of scope (this pass)

- Progress tracking / persistence in Supabase.
- Additional topical lessons beyond the greyed placeholders.
- Automatic YouTube search — I'll only embed a video if you ask for one.
