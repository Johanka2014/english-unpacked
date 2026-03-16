

## Add Theory Vocabulary Word Banks to Practice Exercises

The Practice view already supports a sticky "Key Vocabulary" sidebar when a `wordBank` property is present on an exercise (visible in the `PracticeView` component in `BusinessVocabularyTopic.tsx`). The Work and Jobs practice exercises currently lack this property.

### What to change

**File: `src/data/businessVocabularyData.ts`** — Add `wordBank` arrays to each of the three `topic1Practice` exercises, drawing vocabulary from the corresponding Theory sections:

- **Exercise 1.1** (Correct the mistakes — based on Theory A): `["work for", "work on", "run", "manage", "work under", "responsibilities", "in charge of", "deal with", "responsible for", "work with"]`

- **Exercise 1.2** (Fill in prepositions — based on Theory B): `["to", "at", "in", "off", "out of", "for", "leave for work", "go to work", "get to work", "arrive at work", "at work", "off work"]`

- **Exercise 1.3** (Rewrite — based on Theory C): `["full-time", "part-time", "permanent", "temporary", "full-time job", "part-time job", "permanent job", "temporary job", "works full-time", "works part-time", "temporary work", "permanent work"]`

No component changes needed — the existing `PracticeView` already renders the sticky word bank card on the right when `wordBank` is present.

