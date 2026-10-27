# Add the photocopiable activities to Module 1 (The Working Day)

The PDF has three groups of activities. Each goes into the matching existing section of Module 1. No new pages.

## 1. Getting Started — add at the end
- **Getting started questions:** three questions to note down (where/when you studied English; why Business English — choose A, B or C). Students type short notes, then compare with a partner.
- **Talking point 1:** pick four questions from the list of nine to interview a partner, then introduce them to the class (speaking prompt card).
- **Talking point 2:** choose two ways of communicating (phone, memo, email, text messages, face-to-face), then discuss the four questions with a partner. A short "Then and now" note adds today's options (WhatsApp/Teams/Slack, video calls) as discussion prompts, since memos are rare now.

## 2. Reading — add after the current "Changing places" activity
- **"My Week — Travelstop" article** (Piet Krens), shown in full in the same news-article style as the other readings.
- Ex 1: tick two adjectives for his week (open answer, compare with a partner).
- Ex 3: when does he do activities 1–9 — every day / every week / one particular day (dropdowns, instant marking).
- Ex 4: sort the activities into Every day / Every week / Not part of his routine, plus the two tense questions (present simple / present continuous).
- Ex 5: gap-fill with the right verb and tense (instant marking, accepting reasonable alternatives).
- Ex 6: four multiple-choice questions A/B/C (instant marking).

## 3. Vocabulary — add at the end
- Ex 1: sort the four like/dislike expressions into two columns (instant marking).
- Ex 2: complete five sentences about your own likes and dislikes (free typing, saved on the page).
- Ex 3: pairwork prompt to compare sentences.

## Notes
- The answer keys aren't in this PDF, so I'll write them from the article. Please check them afterwards.
- Marked activities record right/wrong on the student dashboard like the rest of the module.
- Two-column layouts on computers stack on phones.

## Technical details
- New components in `src/components/business-benchmark/`: `GettingStartedTalkingPoints.tsx`, `TravelstopReading.tsx`, `LikesDislikesVocabulary.tsx`, reusing `EquipmentActivity` for marked items and `useActivityTracking` (`BB Module 1 — …` titles).
- Rendered below the existing content for `organigram-working-day`, `reading-changing-places` and `department-matching` in `BusinessBenchmarkSkill.tsx`.
- Verify with typecheck, build and a signed-in Playwright check on desktop and mobile.
