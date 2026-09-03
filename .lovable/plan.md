# Rebuild the Grammar section around Murphy's English Grammar in Use

Replace the old textbook-based grammar course with a new structure that follows Murphy's *English Grammar in Use* (4th edition, 145 units), keeping every custom lesson we have already built.

## What gets removed

Only the pages that came from the old textbook — the numbered modules with their theory/exercises/exam-practice content, and the old section grouping (Describing Things, Tenses, Nouns & Determiners, Future & Modals, Questions & Prepositions, Verb Patterns, Conditionals, Word Formation, etc.).

## What stays (moved into the matching Murphy section)

| Existing lesson | New home |
| --- | --- |
| Tense Master (present, past, perfect, past perfect, future) | Present and past / Present perfect and past / Future |
| Past Tenses — Holiday lesson, Cambridge lesson | Present and past |
| Modal Verbs Master | Modals |
| So / Such Mastery | Adjectives and adverbs |
| Compound Adjectives | Adjectives and adverbs |
| Prepositions of Time — Practice | Prepositions |
| Prepositions of Place — Practice | Prepositions |
| Verbs & Adjectives + Prepositions — Practice | Prepositions |
| Verb Pattern Practice | -ing and to ... |
| Connected Speech (separate tile) | Untouched |

These keep their existing URLs and components, so nothing breaks.

## New structure (skeleton)

Sections mirror the book's contents:

```text
1  Present and past                 (Units 1–6)
2  Present perfect and past         (Units 7–18)
3  Future                           (Units 19–25)
4  Modals                           (Units 26–37)
5  If and wish                      (Units 38–41)
6  Passive                          (Units 42–46)
7  Reported speech                  (Units 47–48)
8  Questions and auxiliary verbs    (Units 49–52)
9  -ing and to ...                  (Units 53–68)
10 Articles and nouns               (Units 69–81)
11 Pronouns and determiners         (Units 82–91)
12 Relative clauses                 (Units 92–96)
13 Adjectives and adverbs           (Units 97–110)
14 Conjunctions and prepositions    (Units 111–120)
15 Prepositions                     (Units 121–136)
16 Phrasal verbs                    (Units 137–145)
```

Every unit gets a tile with its real Murphy title. Units with no content yet show the existing "Coming soon" treatment, exactly like elsewhere on the site.

## Fully built first (3 units)

- Unit 1 — Present continuous (I am doing)
- Unit 2 — Present simple (I do)
- Unit 3 — Present continuous and present simple 1

Each of these pages will have:
- **Theory** — the unit's left-hand explanation page, rewritten as clean tabbed sections with example tables and notes boxes
- **Book exercises** — the unit's own exercises (1.1, 1.2, 1.3 …) as interactive gap-fill, sentence-writing, correction and choice activities with instant checking and scores
- **Supplementary exercises** — the matching tasks from *English Grammar in Use Supplementary Exercises*, as a third tab

Answers are checked in the browser, and scores feed the existing student progress tracking.

## Look and feel

Identical to the current course: hero with the section image, card grids, brand navy/royal palette, Merriweather headings, the same exercise components used across the site.

## Technical notes

- New `src/data/murphyGrammarData.ts` (types, section/unit index, and content for Units 1–3) replacing `src/data/b1GrammarData.ts`; the old file and its old-textbook-only helper types are deleted.
- New pages `MurphyGrammar.tsx`, `MurphyGrammarSection.tsx`, `MurphyGrammarUnit.tsx` modelled on the current `B1Grammar*` pages, including the single-tile auto-open behaviour so students reach activities in one click.
- Routes: `/grammar`, `/grammar/:sectionId`, `/grammar/:unitId`, with redirects from `/b1-grammar*` so old links and history entries still work.
- Custom lessons are referenced by the same flags/`externalUrl` values they use today (`tenseMaster`, `holidayLesson`, `cambridgeLesson`, `modalMasteryLesson`, `soSuchLesson`, `compoundAdjectivesLesson`), so their components are untouched.
- Exercise rendering reuses the existing shared components (TypeBlanks, gap-fill, matching, multiple choice) plus the theory renderer, so tracking and styling stay consistent.
- Practice > Grammar tile description updated to reference *English Grammar in Use*.
- Unit content is transcribed from the two uploaded PDFs; images/audio are not needed for Units 1–3.

## After review

Once you confirm Units 1–3, I'll flesh out the remaining units section by section in the same format.
