## Goal

Add a **Music Festivals** lesson to Practice → Topics, matching the existing topic-lesson format (like *The Price of Passion* / *Sport*): a single scrollable page of numbered interactive activities built with the shared renderer and exercise components.

## What the source material contains

I downloaded and read every Drive link — all are publicly readable. Contents:

| Source | Usable content |
| --- | --- |
| British Council "Live music" video page | Video + preparation matching task (8 festival words), comprehension exercises |
| Notting Hill Carnival reading (scan) | Culture reading: origins, steel bands, food stalls |
| Cool for Kids / Underage Festival (scan) | Teen festival reading, no-adults festival |
| Glastonbury neighbours text + verb+ing pronunciation | Reading with tick-the-problems task, -ing pronunciation set, "more words to learn" list |
| Glastonbury (B1 exam-style, 2 scans) | Longer reading + Part 5 multiple-choice questions |
| Rock Werchter / Croatia / Benicàssim culture page | True–false set + compound-noun exercise (headline acts, campsite, shuttle buses…) |
| Oxegen / compound-noun workbook page | Matching 1–8 compound nouns + gap-fill text |
| Festival in the Desert (Timbouctou) | Advanced reading on the Festival au Désert |
| BreakingNews: first woman to conduct the BBC Proms | Article, True/False, synonym match, discussion questions |
| 1 JPEG page + a .ppt and a .doc | To be OCR'd/extracted during the build and folded into the relevant sections |
| LearningApps ph3fskiwc21 | Embedded as an interactive activity iframe |

## Lesson structure (planned)

1. **Warm-up discussion** — festival experience questions.
2. **Vocabulary flashcards** — festival words (line-up, headline act, campsite, wellies, festival-goer, stall, rehearse, up for it…), using the existing `Flashcards` component.
3. **Preparation matching** — the 8 British Council vocabulary/definition pairs (`MatchingExercise`).
4. **Video: Live music (British Council)** — embedded link/video card with the vocabulary in context.
5. **Interactive activity** — LearningApps iframe tile (same pattern as Prepositions of Place).
6. **Reading A: Glastonbury** — text + tick-the-problems and comprehension MCQs.
7. **Reading B: Festivals across Europe** — true/false set.
8. **Compound nouns** — matching + gap-fill (drag/type-to-complete components).
9. **Pronunciation: verb + -ing** — "circle the odd one out" as a click-to-choose exercise.
10. **Reading C: Notting Hill Carnival** — culture reading + MCQs.
11. **Reading D: BBC Proms / first woman conductor** — true/false + synonym matching.
12. **Extension: Festival in the Desert** — advanced reading + discussion.
13. **Speaking / writing task** — discussion prompts and a writing brief from the sources.

## Technical details

- New data file `src/data/musicFestivalsData.ts` typed with the existing `Activity` shape, rendered by `TechnicalRenderer` (already supports reading, word-list, fill-blanks, drag-fill, type-blanks, matching, multiple-choice, task, discussion).
- New page `src/pages/MusicFestivals.tsx`, styled like `PriceOfPassion.tsx` (SEO tag, Navigation, back link to Topics, Footer).
- New route `/music-festivals` in `App.tsx`.
- Add a **Music Festivals** tile to `src/pages/TopicsSport.tsx`'s sibling structure: create a Topics landing entry so Topics shows both *Sport* and *Music Festivals* (update `src/pages/MembersActivities.tsx` Topics tab).
- Any images worth keeping (carnival/festival photos from the scans) uploaded via the assets CLI rather than committed as binaries.
- Lesson prompts will be written to satisfy `scripts/validate-lesson-blanks.mjs` rules if type-blanks are used.

## Notes

- The two Office files (.ppt, .doc) will be extracted during the build; if their content duplicates the PDFs I'll fold it into the matching section rather than adding a redundant activity.
- Level: the material spans A2–C1, so activities will be ordered easiest-first and each section labelled with a level badge.
