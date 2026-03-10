## Plan: Add Word Bank to Practice Exercise 3.1

**What**: Add a helper box alongside Exercise 3.1 containing the key vocabulary words from the Theory section, giving students a reference to choose from.

**How**:

1. **Update `businessVocabularyData.ts**` — Add a `wordBank` property to the Exercise 3.1 object containing the relevant vocabulary: `recruited`, `hiring`, `recruit`, `hire`, `employs`, `headhunters`, `headhunt`, `headhunting`, `situations vacant`, `advertising for`, `applied for`, `application form`, `application`, `CV`, `covering letter`, `advertise`, `applicants`, `candidates`, `interviews`, `psychometric tests`, `shortlist`, `references`, `referees`, `offer the job`, `turn it down`, `accept`, `appoint`.
2. **Update `PracticeExercise` type** in `businessVocabularyData.ts` — Add an optional `wordBank?: string[]` field to the type definition.
3. **Update `PracticeView` in `BusinessVocabularyTopic.tsx**` — When `ex.wordBank` exists, switch the exercise layout to a two-column grid: exercise content on the left (2/3), word bank card on the right (1/3) with a sticky position and a gradient background. The word bank card will have a heading like "Key Vocabulary" and list the words as styled badges/chips. On mobile, the word bank will appear above the exercise items.