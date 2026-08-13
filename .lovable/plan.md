# English File 5 Intermediate — course scaffold (File 1 built out)

A new self-study course section under Practice › Exams › PET (B1), built from the Student's Book, Workbook and Teacher's Book pages you shared, plus the four YouTube videos for File 1.

## Structure

```text
Practice › Exams › PET (B1)
  └── English File Intermediate (new tile)
        ├── File 1  How we eat / How we shop / How we relax   [built]
        │     ├── 1A  How we eat
        │     ├── 1B  ...
        │     ├── 1C  ...
        │     ├── Practical English 1
        │     └── Revise & Check 1
        └── Files 2–12                                         [locked, "Coming soon"]
```

Three levels, matching the Tech Talk / Engineering pattern already used on the site:
course overview (list of Files) → File page (list of lessons) → lesson page (activities).

Files 2–12 appear as greyed-out cards with the shared "Coming soon" badge, `cursor-not-allowed`, no link and no route — students cannot open them.

## What File 1 contains

Each of 1A, 1B and 1C is a tabbed lesson page in the same style as the Sleep and Music Festivals lessons:

- **Vocabulary** — Vocabulary Bank sets as flashcards, odd-one-out, word–definition matching, picture labelling and gap-fills from the Student's Book.
- **Pronunciation** — the lesson's sound focus (1A: short and long vowel sounds) with click-to-hear buttons using the existing speak component.
- **Grammar** — the lesson's grammar point (1A: present simple vs continuous, action and non-action verbs) with a short explanation panel plus circle-the-correct-form and type-the-answer exercises.
- **Reading** — the Student's Book text with comprehension questions.
- **Video / Listening** — the File 1 YouTube videos embedded, each with pre-watch vocabulary and comprehension questions written from the Teacher's Book answer keys.
- **Speaking** — the questionnaire, discussion statements and the "describing a photo" communicative task, with autosaving note boxes.
- **Homework / extra practice** — the Workbook grammar and vocabulary exercises as self-check activities at the end of each lesson.

**Practical English 1** gets the functional language and the episode video with its tasks. **Revise & Check 1** is a mixed review quiz over the whole File with a score at the end.

Every exercise is self-checking (show answers / instant feedback), with answers taken from the Teacher's Book so they are correct.

## Technical notes

- New data file `src/data/englishFileIntermediateData.ts` holding the File/lesson tree and all activity content, typed with the same `Activity` union used by Tech Talk and Engineering so existing renderers can be reused.
- New pages: `EnglishFileIntermediate.tsx` (course overview), `EnglishFileUnit.tsx` (File 1 lessons), `EnglishFileLesson.tsx` (lesson with tabs), rendering through `TechnicalRenderer` plus a few lesson-specific components where the exercise type doesn't exist yet (picture labelling, circle-the-form).
- Routes added to `src/App.tsx` under `ProtectedRoute`: `/english-file-intermediate`, `/english-file-intermediate/:fileId`, `/english-file-intermediate/:fileId/:lessonId`. Locked Files are not routed.
- Tile added to the `exams` tab in `src/pages/MembersActivities.tsx` with `group: 'PET (B1)'`.
- Videos embedded as YouTube iframes; PDF page content is transcribed into structured data (no PDFs hosted on the site).
- Responsive padding `p-4 sm:p-6` and `space-y-4 sm:space-y-6`, matching the other lesson pages.

## Build order

1. Extract and transcribe all File 1 content from the Student's Book, Workbook and Teacher's Book pages (including OCR of the scanned pages).
2. Data file + course overview and File pages with all 12 Files, 2–12 locked.
3. Lessons 1A, 1B, 1C.
4. Practical English 1 and Revise & Check 1.
5. Route + tile wiring, then a pass on desktop and mobile spacing.
