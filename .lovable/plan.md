## Pronunciation Practice Course

A new "Pronunciation" tab and full course on `/members/activities`, modelled on the *Pronunciation Practice Activities* (Hewings, CUP 2004) textbook.

### 1. Add new "Pronunciation" tab on Practice page
File: `src/pages/MembersActivities.tsx`
- Add new tab `"pronunciation"` to the `TabsList` (grid expands to 8 cols on md+)
- Add a `pronunciationActivities` array with one tile:
  - Title: "Pronunciation Practice Course"
  - Description: "Master English pronunciation across 8 sections — sounds, connected speech, word stress, intonation, spelling and more"
  - Icon: `Mic` (lucide)
  - Path: `/pronunciation`

### 2. New routes & pages
- Route `/pronunciation` → `PronunciationCourse.tsx` (course hub – grid of 8 section cards)
- Route `/pronunciation/:sectionId` → `PronunciationSection.tsx` (theory units + interactive activities + end-of-section quiz)
- Both protected routes added to `src/App.tsx` (lazy-loaded)

### 3. Course structure (mirrors textbook chapters)
Data file: `src/data/pronunciationData.ts`

| # | Section | Key content |
|---|---|---|
| 1 | Awareness of English Pronunciation | vowels vs consonants, syllables, stress, intonation intro |
| 2 | Sounds: Vowels, Consonants & Clusters | vowel chart, minimal pairs, clusters |
| 3 | Connected Speech | linking, contractions, weak/strong forms, elision |
| 4 | Syllables, Word Stress & Stress in Phrases | counting syllables, stress patterns, -ty/-teen, compounds |
| 5 | Intonation | prominence, tone units, fall/rise tones |
| 6 | Pronunciation, Spelling, Grammar & Vocabulary | vowel/consonant letter rules, -s and -ed endings, homographs |
| 7 | Testing Pronunciation | self-diagnostic quizzes |
| 8 | Resources: Tongue Twisters, Limericks & Jokes | authentic material practice |

### 4. Each section contains
- 2–4 theory "units" with explanation, examples and (where useful) IPA symbols
- 1–3 interactive activities (reusing existing patterns):
  - **Minimal pair matching** (e.g. ship/sheep) – `MatchingExercise` style
  - **Classify by sound** (drag-drop into vowel/consonant groups) – `DragDropCategorize`
  - **Stress pattern matching** (Oo, oO, Ooo…) – `MatchingExercise`
  - **-ed / -s ending classifier** (/t/, /d/, /ɪd/) – `DragDropCategorize`
  - **Tongue twister + limerick reader** with audio play button using `SpeechSynthesisUtterance` (no API key needed)
  - **Homograph picker** (row, lead, tear) – multiple choice with context
- **End-of-section 10-question quiz** (multiple choice) following the same `QuizCategory` pattern used in `TenseMasterWrapper`, with instant feedback and score

### 5. UI/style
- Follows existing `SkillNavigation` smooth-scroll-to-top pattern
- Persist active section via `?tab=` query param (per project convention)
- Color-coded section cards (Mic icon, indigo/violet/teal/etc.)
- Brand colors (Navy/Royal Blue/Accent Orange), Merriweather headings
- Correct answers shown in green; locked/members-only handled by `ProtectedRoute`

### 6. Interactive audio
- Use the browser's built-in `window.speechSynthesis` for "Listen" buttons on example words, minimal pairs, tongue twisters and limericks (en-GB voice). No backend or API key required.

### Technical files to create/edit
- **Edit**: `src/pages/MembersActivities.tsx`, `src/App.tsx`
- **Create**: `src/data/pronunciationData.ts`, `src/pages/PronunciationCourse.tsx`, `src/pages/PronunciationSection.tsx`
- **Create**: small shared component `src/components/pronunciation/SpeakButton.tsx` (wraps speechSynthesis)
- Reuse existing components: `MatchingExercise`, `DragDropCategorize`, `MultipleChoiceQuiz` from `src/components/presentations/`

No database changes required — fully client-side content.