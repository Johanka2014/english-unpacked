# Dolly Parton — B2 Business Topic Lesson

A new lesson in Practice > Topics: "Dolly Parton — Building an Empire", B2 level, business focus. Same tabbed layout, colours and components as Weddings / Insurance / Music Festivals.

## Content (five tabs)

**1 · Warm-up & Lead-in**
- Discussion: what turns fame into a business? Which celebrities have built real companies?
- Two-column tile: image of Dolly in the office + ranking task — rank her ventures by likely value, then check against the facts later.
- Quick fact-quiz prediction (Dollywood visitors, catalogue value, total fortune).

**2 · Vocabulary (business of celebrity)**
- Flashcards: brand equity, licensing, royalties, catalogue rights, co-own a stake, diversify, venture, revenue stream, franchise, philanthropy, endowment, equity stake, IP, merchandising, spin-off, valuation, ROI, joint venture.
- Follow-up matching quick-check, plus a collocations gap-fill (launch a line, retain the rights, hold a 50% stake…).
- **Word order activity** — a new interactive `word-order` type in TechnicalRenderer: students tap scrambled words to rebuild ten B2 sentences drawn from the lesson texts (e.g. "Dollywood employs over four thousand people every season"), with check/reset and correct/incorrect highlighting.

**3 · Reading — the empire, venture by venture**
- Newspaper-styled reading built from the supplied slides: Dollywood (1986, 50/50 with Herschend, stake valued $165m in 2021, 3.5m visitors, 4,500 staff), the 3,000+ song catalogue she never sold (~$150m), Sandollar Productions (1985, with Sandy Gallin), the 2021 fragrance/beauty line ($2.7m in 24 hours on HSN), Doggy Parton pet apparel (2022), and the ~$450m estimated fortune.
- Comprehension: true/false/not given + numbers-matching.
- Second short text: *9 to 5* — the film about workers introducing childcare, paid leave and flexible hours, and the 20% productivity claim — used as a bridge to workplace-culture discussion.

**4 · Business analysis & Language focus**
- Case-study task: why keeping her song catalogue mattered — ownership vs. one-off payment; students argue both sides.
- Philanthropy tile: Imagination Library and the Moderna vaccine donation — is celebrity philanthropy good business?
- B2 language focus: evaluative language for business discussion (this proved lucrative, it's widely seen as, a smart move), plus a rewrite exercise turning simple facts into more analytical sentences.

**5 · Speaking & Writing**
- Roleplay: pitch a licensing deal to the Dolly brand team; assessment criteria included.
- Discussion: does a strong personal brand outlast its owner?
- Writing task (140–190 words, B2): a short business-magazine "brand legacy" article, with word count, autosave and a model answer, using the same WritingBox pattern as Weddings.

Facts are taken from the uploaded slides. The slides themselves are reference material for the text, not embedded; imagery will be newly generated in the site style.

## Technical

- `src/data/dollyPartonData.ts` — activity arrays typed with the shared `Activity` type from `engineeringData`, plus `FlashcardItem[]`, matching the Weddings data pattern.
- `src/pages/DollyParton.tsx` — page shell with `SEO`, `Navigation`, `Footer`, back-link to `/members/activities?tab=topics`, hero, 5 `Tabs`, rendering through `TechnicalRenderer`, `Flashcards`, `RankingActivity` and a local `WritingBox`.
- Extend `src/components/technical/TechnicalRenderer.tsx` and the `Activity` type in `src/data/engineeringData.ts` with the new `word-order` activity (array of target sentences; words are shuffled automatically).
- Hero + 2 in-lesson images generated into `src/assets/topics/`.
- Route `/topics/dolly-parton` in `src/App.tsx` inside `ProtectedRoute`.
- New tile in the `topics` tab of `src/pages/MembersActivities.tsx`.
