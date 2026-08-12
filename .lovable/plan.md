# Weddings — new B2 lesson (Practice › Topics)

## Confirmed source material

All eight links download successfully:

- Macmillan onestopenglish "Weddings: reading" (PDF) — six first-person accounts (Germany, Colombia, Turkey, Maasai, China, US) with country gaps
- Macmillan teacher's notes (PDF) — pre-reading tasks, the 10-items scanning task, answer keys
- Wedding vocabulary document (Word) — ~40 terms with definitions and example sentences
- Marriage and wedding vocabulary document (Word) — gap-fill text with word bank (pop the question, fiancée, break off the engagement...)
- Wedding vocabulary list (text) — hen party / stag night, wedding breakfast, venue, etc.
- Wedding presentation (PowerPoint) — slide material
- Wedding worksheet image (JPG, tall single page)
- hitched.co.uk "Giving notice of marriage" article
- TED-Ed: Alex Gendler, *The history of marriage*

Content is extracted first (including OCR of the JPG and the slides); exact item counts may shift slightly once extraction is done.

## What gets built

A new page at `/weddings`, built with the same tabbed layout as the Sleep and Music Festivals lessons, plus a new tile in the Topics tab.

**Tab 1 — Warm-up**
1. Discussion block: *a wedding* vs *a marriage*, weddings you have been to, wedding customs in your culture.
2. Speculation task with the ten items (jewellery, tie, candles, rice, red, blue, nuts, porcelain, money, shoes) from the teacher's notes.

**Tab 2 — Vocabulary**
3. Flashcard deck (reuses the existing `Flashcards` component) introducing the core terms: propose, engagement, fiancé(e), bride, groom, best man, maid of honour, bridesmaids, ring bearer, aisle, vows, reception, newlyweds.
4. Gap-fill "From proposal to wedding day" built from the second Word doc's word bank (goes down on one knee, pop the question, engaged, engagement ring, breaks off the engagement).
5. Matching: wedding people and things to their definitions (from the vocabulary document).
6. British vs American / event vocabulary set: hen party–bachelorette, stag night–bachelor party, wedding breakfast, registry office, church wedding, venue, RSVP.

**Tab 3 — Reading**
7. The six-account Macmillan text as an interactive country gap-fill (choose the country for each speaker) with a scanning warm-up: which four of the ten items are *not* mentioned.
8. Comprehension multiple-choice and vocabulary-in-context matching drawn from the same text.
9. Second reading from the hitched.co.uk article — giving notice of marriage: passage plus true/false and detail questions on the legal process (28-day notice, register office, documents needed).

**Tab 4 — Listening / Video**
10. Embedded TED-Ed talk *The history of marriage* (Alex Gendler) with pre-watching vocabulary, gap-fill note-taking and comprehension MCQs.

**Tab 5 — Speaking & Writing**
11. Discussion prompts from the presentation and worksheet material (changing traditions, cost of weddings, big wedding vs elopement).
12. Roleplay: planning a wedding on a budget / giving notice at the register office.
13. Writing task with an editable, autosaving text box (same `WritingBox` pattern as Business Benchmark Unit 13): a short article or email about a wedding you attended, with a model answer to reveal.

## Technical notes

- New `src/data/weddingsData.ts` typed with the existing `Activity` shape so it renders through `TechnicalRenderer`.
- New page `src/pages/Weddings.tsx` following the `MusicFestivals.tsx` / `SleepLesson.tsx` tab pattern; responsive padding `p-4 sm:p-6`, `space-y-4 sm:space-y-6`, `p-0` on `service-card` wrappers.
- Route registered in `src/App.tsx`; a "Weddings" tile added to the Topics tab in `src/pages/MembersActivities.tsx` (as a Topics sub-page entry, alongside Sport).
- One generated hero/illustration image for the page, matching the site's existing lesson pages.
- All gap-fill prompts must pass `scripts/validate-lesson-blanks.mjs`; `bun run validate:lessons` and a typecheck run before finishing.
- PDF, slide and worksheet material is adapted into original interactive items rather than reproduced verbatim; the TED-Ed video is embedded from its official embed URL.
- SEO: page-specific title, description and single H1 via the existing `SEO` component.
