# Recycling — B2 Topic Lesson

A new lesson in Practice > Topics: "Recycling — Rubbish or Resource?", B2 level, built with the same tabbed layout, colours and components as Weddings / Insurance / Dolly Parton.

## What's in your files

I opened all the links. Eight of the nine Drive files are usable:

- Business Spotlight vocabulary page — 20 recycling terms (recycling bank, scrap metal, hazardous waste, bulky waste, aerosol can…) plus its gap-fill exercise.
- Newsflash English lesson — "What do you think about plastic bottle recycling?" (Scottish deposit return scheme, 5p bag charge, Coca-Cola, ocean plastic) with discussion and quiz questions.
- Cambridge Reading Part 6 — "How the recycling symbol was created" (Gary Anderson), gapped-sentence task with 7 options.
- Use of English Part 1 — "Turn trash into treasure" multiple-choice cloze, 8 gaps.
- Cardboard bike article (Izhar Gafni) with its glossary and two comprehension questions.
- The "Headlines" thinking-routine article — used as the closing vocabulary-recycling task.
- The Awkward Yeti plastic-cup cartoon — used as a lead-in idea (I'll create our own original illustration in the site style rather than embedding the copyrighted strip).
- The TED talk "We cannot recycle our way out of it — the circular economy is the answer" (Melissa Seeley) — embedded with pre-teach vocabulary and while-watching questions.

One file doesn't belong to this topic: the IELTS General Training reading about the Science of Sport museum exhibition. I'll leave it out unless you want it.

## The five tabs

**1 · Warm-up & Lead-in**
Discussion on what you throw away in a week; single-use vs. immortal plastic lead-in built from the cartoon idea; a ranking task — order everyday items by how easily they're recycled — checked against the facts later.

**2 · Vocabulary**
Flashcards for the 20 Business Spotlight terms (English side + example sentence, no Czech). Then the original "recycling bank" gap-fill as a type-in exercise with a phrase bank, a matching quick-check, and a collocations gap-fill (sort your waste, cut down on landfill, reverse an objection…).

**3 · Reading**
Newspaper-styled main text on the Scottish deposit return scheme, with true/false/not-given and vocabulary-in-context questions plus the article's own discussion prompts. Second reading: the recycling-symbol article as an authentic Part 6 gapped-sentence task (37–42, seven options, drag-free click-to-choose). Third short text: the cardboard bike, with its glossary and the two multiple-choice questions.

**4 · Use of English & Language focus**
The "Turn trash into treasure" multiple-choice cloze, all 8 gaps with feedback. B2 language focus on the vocabulary the cloze tests (dispose of, cut down on, be on the increase, be transformed into, keep somebody informed), with a rewrite exercise.

**5 · Video, Speaking & Writing**
TED talk embedded with pre-teach vocabulary and comprehension/discussion questions on the circular economy. Roleplay: a town council debating a deposit return scheme. The Headlines routine as a closing task — students write a headline that captures the topic, with examples. Writing task (140–190 words, B2): an opinion piece on whether recycling is enough, with word count, autosave and a model answer.

## Technical

- `src/data/recyclingData.ts` — activity arrays typed with the shared `Activity` type from `engineeringData`, plus `FlashcardItem[]`, matching the Weddings/Dolly data pattern.
- `src/pages/Recycling.tsx` — page shell with `SEO`, `Navigation`, `Footer`, back-link to `/members/activities?tab=topics`, hero, 5 `Tabs`, rendering through `TechnicalRenderer`, `Flashcards`, `RankingActivity` and a local `WritingBox`.
- Reuses existing activity types (`discussion`, `type-blanks`, `matching`, `quiz`, `newspaper-reading`, `word-order`, `video`); the Part 6 gapped-sentence task is added as a new `gapped-sentences` activity in `TechnicalRenderer` since no existing type covers it.
- Hero + 2 in-lesson images generated into `src/assets/topics/` in the site style.
- Route `/topics/recycling` in `src/App.tsx` inside `ProtectedRoute`.
- New tile in the `topics` tab of `src/pages/MembersActivities.tsx`.
