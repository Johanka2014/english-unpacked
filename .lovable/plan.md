

# Plan: Oxford English for Human Resources Section

## Overview
Create a new "HR" tab in the Practice Activities page with an "Oxford English for Human Resources" card. This links to a hub page with 6 section cards (following the EverydayConversations image-card style), each linking to a module page with skill tiles, and finally individual skill pages with interactive content. Unit 1 (Recruitment) will be fully built out with all activities from the uploaded PDF.

## Textbook Structure (from contents page)

**6 Units:**
1. Recruitment — Job descriptions, person specifications, recruitment sources
2. Selection — Job ads, CVs, interviews, ageism
3. Employee Relations — Contracts, disciplinary/grievance, health & safety
4. HR Development — Appraisals, training, equal opportunities
5. Reward and Remuneration — Salaries, fringe benefits, salary reviews
6. Industrial Relations — Trade unions, labour relations, wage negotiation

## Changes

### 1. Data file: `src/data/hrData.ts`
- Define interfaces (`HRSkill`, `HRUnit`) mirroring `BBUpperSkill`/`BBUpperModule` pattern
- Define all 6 units with their skills (starter, vocabulary, listening, reading, speaking, etc.)
- Unit 1 skills fully populated with `content: true`; others without content (show "Coming soon")

### 2. Hub page: `src/pages/HREnglish.tsx`
- Hero section with HR-themed styling
- 6 cards in a grid (similar to EverydayConversations card style with images, icons, gradient overlays)
- Each card links to `/hr-english/:unitId`
- Use stock-style placeholder images (gradient backgrounds with icons since we don't have actual images yet)

### 3. Unit/Module page: `src/pages/HREnglishUnit.tsx`
- Shows skill tiles for the selected unit (same pattern as `BBUpperModule.tsx`)
- Tiles for: Starter, Vocabulary, Listening, Reading, Speaking/Role-play
- "Coming soon" lock on skills without content

### 4. Skill page: `src/pages/HREnglishSkill.tsx`
- Renders the appropriate component based on `unitId` + `skillId`
- Skill navigation between sections (reuse `SkillNavigation` pattern)

### 5. Unit 1 Components (in `src/components/hr/`)
Build interactive activities from the uploaded PDF:

- **StarterUnit1.tsx** — Recruitment process ordering exercise (put steps in order) + job description vs person specification categorization (drag items into two columns)
- **VocabularyUnit1.tsx** — Multiple activities:
  - Activity 3: True/False on Training Manager job description
  - Activity 4: Verb selection (multiple choice for job description verbs)
  - Activity 5: Manager verbs gap-fill
  - Activity 6: Person specification vocabulary matching (7 terms to definitions)
  - Activity 12: Word formation exercise (employ/recruit word families)
- **ListeningUnit1.tsx** — Two audio activities:
  - Activity 9: Tick recruitment sources mentioned (checkbox exercise, audio placeholder)
  - Activity 10: True/False statements about the conversation (audio placeholder)
  - Activity 11: Vocabulary matching from conversation
- **ReadingUnit1.tsx** — Activity 13: Match recruitment sources to definitions + Reading passage about recruitment advertising agencies with "Over to You" discussion
- **SpeakingUnit1.tsx** — Useful language reference cards for exchanging information, making suggestions, agreeing/disagreeing + role-play partner files

### 6. Members Activities page update (`src/pages/MembersActivities.tsx`)
- Add "HR" tab to the TabsList (7 columns now)
- Add `hrActivities` array with the Oxford English for HR card
- Link to `/hr-english`

### 7. Routes (`src/App.tsx`)
Add 3 new protected routes:
- `/hr-english` → `HREnglish`
- `/hr-english/:unitId` → `HREnglishUnit`
- `/hr-english/:unitId/:skillId` → `HREnglishSkill`

## Technical Details
- Reuses existing interactive components: `DragFillGaps`, `DragDropCategorize`, `MatchingExercise`, `MultipleChoiceQuiz`, `OrderingExercise`, `FillInBlanks`
- Audio activities will have placeholder audio sources (empty strings) for you to fill in later
- All pages are lazy-loaded and behind `ProtectedRoute`
- Follows existing Hub → Module → Skill navigation hierarchy

