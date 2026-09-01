# Top 20 Business Vocabulary — mobile-first app

A new self-contained practice app in the same style as the Business Phrasal Verbs app (BizPhrasal): same blue theme, phone-width layout, sticky header, bottom tab bar.

## Content

From the uploaded EnglishClub ebook — 15 subject areas, 20 words each (~300 entries):
Advertising, Banking, Company Structure, Contracts, Employment, Import/Export, Insurance, Law, Marketing, Meetings, Money, Presentations, Selling, British/American, Financial Terms.

Each entry keeps its word, part of speech (n./v./adj./abbr.), definition, and any UK/US variant marker from the PDF.

## App modes

Because this covers 15 sections rather than one unit, the app opens on a section picker, then each section offers:

1. **Dictionary** — searchable list of the 20 words with definitions; search also works across all sections.
2. **Flashcards** — flip cards (word on front, definition + part of speech on back), Previous/Next, card counter.
3. **Quiz** — 10 questions per round, definition shown and four word options; score, progress and end-of-round summary with retry.

A back arrow in the header returns to the section list. Progress/score is kept in the browser only (no accounts, no database).

## Where it lives

- Tile "Top 20 Business Vocabulary" under Practice → Business → Profession-specific, next to English for Presentations.
- Route `/business-vocab-app` (members-only, same protection as `/bizphrasal`), with a wrapper page showing the heading, an "Open in New Tab" button, and the app in a full-width frame.

## Technical notes

- App built as a standalone `public/apps/bizvocab.html` (Tailwind CDN + vanilla JS), mirroring `public/apps/bizphrasal.html` structure and classes.
- Word data embedded in that file as a JS object keyed by section.
- New React wrapper `src/pages/BizVocabAppWrapper.tsx` modelled on `BizPhrasalAppWrapper.tsx`, registered in `src/App.tsx`, plus one entry in the activities list in `src/pages/MembersActivities.tsx`.
- SEO title/description set on the wrapper page.
