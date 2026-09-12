# Maturita practice with Solutions Intermediate (3rd edition)

A new textbook section inside Practice > Exams > Maturita, built to match the look and feel of the existing textbook sections (English File Intermediate, Business Benchmark, Tech Talk).

## What you'll get

A new tile in the Maturita group: **Solutions Intermediate — Maturita Practice**.

Clicking it opens an overview page with all 10 units of the book as cards:

1. Generations
2. It's a bargain!
3. Fit and healthy
4. Our changing world
5. Crime scene
6. Decisions, decisions
7. Money, money, money
8. On the go
9. What happened?
10. Best of the best

(Exact unit titles will be confirmed from the book's contents page while building.)

Each unit card opens a unit page with lesson tabs following the book's own structure — Vocabulary, Grammar, Listening, Reading, Speaking, Writing, Culture/Exam skills — and each lesson page holds the interactive activities.

Units 1, 2 and 3 will be fully built. Units 4–10 appear as greyed-out "Coming soon" cards, same as other unfinished modules on the site, so students can see what's planned without dead ends.

## Activities

Built from the existing activity library already used across the site, so students get the familiar experience:

- Flashcards for new vocabulary
- Matching and drag-and-drop categorising
- Gap-fill / type-in-the-blank exercises with answer checking
- Multiple-choice quizzes
- Word-order and ordering tasks
- Reading texts styled like the book, with comprehension questions
- Speaking prompts and discussion boxes
- Note boxes for grammar explanations

All scored activities record results to the student dashboard the same way the rest of the site does.

## Notes and limits

- The books you sent are scanned page images, so the text is read out page by page during the build. This is slower than usual, which is why three units at a time is the right pace.
- Listening activities are built in full (tasks, questions, answer checking, transcripts) with an audio player in place waiting for the recording. Send the Solutions audio whenever you have it and I'll drop each track straight in — no rebuilding needed.
- Answers come from the Workbook Key and Teacher's Book you supplied.
- No book pages are reproduced as scans; everything is rebuilt as interactive content.

## Technical outline

- `src/data/solutionsIntermediateData.ts` — unit/lesson/activity data, reusing the `Activity` type shared with English File and Engineering.
- `src/pages/SolutionsIntermediate.tsx` (overview), `SolutionsIntermediateUnit.tsx` (lesson list), `SolutionsIntermediateLesson.tsx` (activity renderer reusing the existing section renderer).
- Routes `/solutions-intermediate`, `/solutions-intermediate/:unitId`, `/solutions-intermediate/:lessonId` under `ProtectedRoute`, lazy-loaded via `lazyWithRetry` in `App.tsx`.
- New tile added to the `Maturita` group in `src/pages/MembersActivities.tsx`.
- Unit content extracted from the SB/WB/TB PDFs via OCR page ranges; any images needed are generated and served through the asset CDN so deployment size stays small.
