## Goal

Add a new lesson section to **B1 Grammar → Tenses → Past Tenses** called **"Talking About My Holiday"**, built from the 19 slides in the supplied Google Slides deck.

**Learning outcome:** by the end of the lesson the student can confidently **talk in detail about the last holiday they went on** — using past simple (regular + irregular), holiday-specific vocabulary, and natural follow-up questions.

It will appear as a new tile next to the existing **Tense Master Practice** tile and open an interactive multi-activity lesson page that scaffolds toward this outcome.

## Lesson flow (build-up → output)

Each activity feeds the final speaking task. The student moves from recognising forms → producing forms → producing full holiday talk.

1. **Past Simple grammar reference** (slides 4, 7) — +/-/? tables; was/were /ɜː/ note. *Gives them the tools.*

2. **Irregular verbs interactive activity** (slides 6, 19) — two-stage game:
   - *Stage A — Past Simple typing drill.* See present form (sing, come, run, drink, fall, give, ride, ring, swim, win, throw, write, sit), type the past form. Live green/red validation, running score, "Try again" reset.
   - *Stage B — Sentence builder.* Drag the correct past form into example sentences ("The dog ___ when he called", "Yesterday she ___ a song", etc.). Reuses the existing `MatchingDragDropExercise` visual pattern.

3. **Holiday vocabulary collocations** (slide 3) — match 9 verbs (try, visit, go, stay, take, write, fly, buy) to nouns (photographs, sightseeing, souvenirs, economy class, at a hotel, shopping, the local food, an art gallery, postcards). *Builds the chunks they'll need to say.*

4. **Model dialogue — Tom & Julie in Bali** (slides 9, 10, 11):
   - Drag/drop gap fill (beautiful, long, sunbathing, food).
   - 4 short-answer comprehension questions.
   - 4 question reconstruction inputs ("Where did you go…?", "How long did you stay?" etc.). *Gives them a model conversation to copy.*

5. **Past simple mixed practice** (slide 5) — 8 sentence rewrites with *yesterday* + 5 mini-dialogue +/-/? gap fills. *Drills the form one more time in context.*

6. **Quiz Time — country imaginations** (slides 13, 14, 15) — match 4 country photos (UK / China / Japan / India), wh-question word reference card (Who/When/How/Where/Why/What). Then a short "imagine you went here on holiday" prompt asking the student to write 2–3 sentences for one of the countries using past simple. *First production attempt with scaffolding.*

7. **Final speaking task — "Tell me about your last holiday"** (slide 12, extended): a guided template that gives the student a clear structure to follow, with the wh-question words and a sentence-starter checklist they can tick off:
   - Where did you go? → *Last summer I went to…*
   - Who did you go with? → *I went with…*
   - How long did you stay? → *I stayed for…*
   - Where did you stay? → *We stayed in/at…*
   - What did you do? → *We tried…, visited…, took…, went…*
   - What was the best part? → *The best part was…*
   - Would you go back? → *I would/wouldn't…*

   Includes 5 follow-up discussion prompts from slide 12 for partner work. Renders as a printable / read-aloud "Your turn" card so the student has everything in one place to actually speak from.

Slides intentionally **excluded** because they belong to other B1 modules: 1, 2, 8, 16, 17, 18 (days of week, ordinal numbers, prepositions of time, dates noticeboard, holiday-photos homophones puzzle).

## Changes

### 1. `src/data/b1GrammarData.ts`
- Add optional `holidayLesson?: true` flag to `B1GrammarModule`.
- On module `past-tenses`, set `holidayLesson: true`.

### 2. `src/components/b1-grammar/PastTensesHolidayLesson.tsx` (new)
Self-contained component rendering activities 1–7 as a vertical stack of `Card`s in the same visual style as existing exercises on `B1GrammarTopic.tsx`. The final "Your turn" speaking card uses the brand orange accent so it stands out as the lesson goal.

### 3. `src/pages/B1GrammarTopic.tsx`
- Import `Plane` lucide icon and the new component.
- Add tile:
  ```ts
  { key: 'holiday', label: 'Talking About My Holiday', icon: Plane, available: !!mod.holidayLesson, color: 'from-cyan-600 to-teal-700' }
  ```
- Extend `activeTab` union with `'holiday'`, add `mod.holidayLesson` to `hasContent`, add render branch.

### 4. No other files
- No backend, route, auth, or SEO changes.

## Out of scope
- Separate modules for dates / ordinals / prepositions of time (slides 1, 2, 8, 16, 17, 18) — can be a follow-up.
- Audio for the 5.3/5.4/5.5 pronunciation clips (files not supplied).
- Voice-recording / speech-to-text for the final speaking task.
