## Goal

Bring the Sleep lesson (`/lessons/sleep` — `src/pages/SleepLesson.tsx`) up to the same depth and interactivity as the Music Festivals lesson, using the five shared files plus the two TED resources.

## Confirmed source material

All five Drive links are publicly downloadable:

- `NEF Upper Inter 5 Extras – SB module review.pdf` (New English File Upper-Int, File 5 review — *used to* / *be used to* practice)
- `pg 16 – dreamy sleep.jpg` (worksheet page, image)
- `global_elesson081_sleep_TN.pdf` (Macmillan Global e-lesson, teacher's notes)
- `Advanced – Vocabulary and Structure Practice – test 9.pdf`
  &nbsp;

Plus:

- ted-ielts.com Arianna Huffington "How to Succeed? Get More Sleep" page (vocabulary list + comprehension questions — already fetched)
- TED talk: Dan Gartenberg, "The brain benefits of deep sleep and how to get more of it"

Content extraction (text + OCR for the JPG and scanned pages) happens first; every activity below is built from what those files actually contain, so exact item counts may shift slightly.

## What gets built

Keep the existing 5-tab layout (Reading · Vocabulary · Grammar · Listening · Quiz) but enrich each tab, Music-Festivals style: numbered sections, a flashcard warm-up, `TechnicalRenderer` activity blocks, and exam-style readings.

**Vocabulary tab**

1. New `Flashcards` deck (reuses `src/components/presentations/Flashcards.tsx`) introducing sleep vocabulary + the Huffington vocabulary (deprived, exhaustion, brag, one-upmanship, hyper-connected, crisis/crises, faint) before the gap-fills.
2. Keep the existing "Sleep race" gap-fill and similes matching.
3. Add a collocations / phrasal-verbs activity (drop off, nod off, doze off, sleep in, lie in, oversleep…) from the Linguahouse and Global worksheets — drag-fill or matching.

**Reading tab**
4. Keep the existing "Sleep Matters" passage and its exercises.
5. Add a second, exam-style reading built from the Linguahouse *How to Sleep* worksheet: passage + multiple-choice / true-false comprehension + vocabulary-in-context matching.
6. Add a short discussion block from the Global e-lesson warm-up questions.

**Grammar tab**
7. Keep the explanation grid and the two existing exercises.
8. Add a third exercise set from the NEF File 5 review (mixed *used to / be used to / get used to* plus the other File 5 review points that fit — e.g. verb patterns / adverbs, only where they support the lesson).
9. Add a sentence-transformation / error-correction activity from the Advanced Vocabulary & Structure test 9 (kept at a level that suits B2 students, with a "stretch" label).

**Listening tab**
10. Keep the TED-Ed video, transcript and its comprehension quiz.
11. New section: Arianna Huffington, *How to Succeed? Get More Sleep* — embedded TED/YouTube video, pre-watching vocabulary, and comprehension questions adapted from the ted-ielts lesson.
12. New section: Dan Gartenberg, *The brain benefits of deep sleep* — embedded video, gap-fill note-taking task and comprehension MCQs.
13. Keep the three existing Unit 5 audio tracks.

**Quiz tab**
14. Extend the final mixed quiz with items drawn from the new readings, videos and grammar work.

**Speaking / writing wrap-up**
15. Closing task card (discussion prompts + a short writing task on sleep habits), matching the Music Festivals ending.

## Technical notes

- New/expanded content lives in `src/data/sleepLessonData.ts`, typed with the existing `Activity` shape from `src/data/technicalEnglishData.ts` so it renders through `TechnicalRenderer`.
- `src/pages/SleepLesson.tsx` gains the new sections, the `Flashcards` deck and the two video cards; mobile spacing follows the tightened Music Festivals pattern (`p-4 sm:p-6`, reduced section gaps).
- The `pg 16 – dreamy sleep.jpg` worksheet is transcribed into interactive exercises rather than embedded as an image.
- Every new gap-fill prompt must satisfy `scripts/validate-lesson-blanks.mjs` (exactly one `x___` blank, hint letter matching a single-word answer); `bun run validate:lessons` and a typecheck run before finishing.
- Videos are embedded from their official TED/YouTube embed URLs; PDF material is adapted into original interactive items rather than reproduced verbatim.