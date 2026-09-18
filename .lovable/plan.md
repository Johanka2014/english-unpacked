# Build Business Benchmark Pre-Intermediate — Module 4: The Internet

Build out the existing greyed-out Module 4 skeleton ("The Internet", Student's Book pp. 22–25) with interactive activities, matching the style and layout of Modules 1–3. The SB, TB and Personal Study Book pages for Module 4 have been uploaded and parsed, including the answer keys, listening transcript and the listening recording (05_Дорожка_5.mp3).

## Keeping it relevant for today's students

The book is from 2006, so the lesson keeps the book's exam-style task types and evergreen business language, but updates the dated parts:

- **Reading article**: kept in full as the exam-style task (it practises "right / wrong / not in text" checking, exactly like BEC Reading Part 4). Dated details (Alta Vista, splash pages, flashing text) stay in the article for the task, but a short modern note under the article explains these are 2006 ideas and what replaced them.
- **Modern discussion extension**: new discussion questions on today's website reality — mobile-first design, customer reviews and social proof, page speed, cookie banners, live chat / AI chatbots, accessibility.
- **Vocabulary extension**: a small set of current internet/business terms alongside the book's list — e.g. phishing, two-factor authentication, cloud storage, password manager, emoji (replacing the book's "emoticons ☺" note).
- **Email writing**: the formal vs informal register work is unchanged — it is still exactly how business emails work today; "Kind regards" as the standard sign-off is still current advice.
- **Listening**: the real 2006 recording is kept (it practises spelling out loud and address symbols — timeless skills); addresses like attcanada.net and hotmail.com are simply part of the drill.
- **Online banking activity** (from the TB): kept — phishing and fraud are more relevant in 2026 than in 2006; only a light framing note updates it.

## What gets built

The five existing skill tiles on the Module 4 page become clickable, each with its own activity page:

1. **Reading** — "Designing your website": the article as a readable text, the advice-matching exercise (advice 1–9 vs paragraph letters A–F, with X for "not included/opposite"), vocabulary gap-fills from the article, plus the modern discussion extension.
2. **Listening** — "Email addresses": the uploaded recording compressed and uploaded to CDN, audio player with full transcript, the "Same or Different" address exercise (8 items, answers from the TB), and the Email/Letter/Both sentence-sorting exercise.
3. **Writing** — Formal vs informal verbs matching (10 pairs), ranking beginnings/endings/requests/apologies by formality, the formal-vs-informal email phrase sort, building the two model emails, and a "rewrite this bad email" task from the Personal Study Book article ("How do I say it on email?").
4. **Speaking** — Discussion prompts on designing a website (updated for today) plus the online-banking role-play cards (Student A / Student B) from the TB.
5. **Vocabulary** — Website-address symbols matching (@, dot, hyphen, slashes, underscore, backslash), flashcards/matching for the Study Book computer vocabulary (browser, spyware, firewall, virus, hacker, spam, server, etc.) with the "circle the correct word" sentences, plus the modern-terms extension.

All exercises have instant answer checking, hints where useful, and right/wrong results tracked on the dashboard.

## Technical details

- Add `content` entries to Module 4 in `src/data/businessBenchmarkData.ts`, following the same pattern as Modules 1–3 (e.g. `content: { type: 'reading-the-internet' }`).
- Create new activity components under `src/components/business-benchmark/` (one per skill, matching existing naming like `ReadingCompanyHistoryExercise.tsx`).
- Wire the content types into `src/pages/BusinessBenchmarkSkill.tsx` so each tile renders its component; tiles with content automatically become clickable and lose the "Coming soon" badge.
- Compress 05_Дорожка_5.mp3 to mono 64 kbps, upload to the CDN with a `.asset.json` pointer under `src/assets/audio/`, and wire it into the listening player (no placeholder needed — the real audio is here).
- Verify with a production build and a browser check of `/business-benchmark/the-internet`.
