## Goal

Add a new **Word Formation** section to **Practice → Grammar → B1 Grammar** containing prefixes and suffixes, using the same tile/section/module pattern as the existing 8 sections (e.g. Tenses, Conditionals).

## New section

`b1GrammarSections` gets a 9th entry:

- **id:** `word-formation`
- **title:** Word Formation
- **description:** Prefixes and suffixes
- **icon:** `Type` (lucide)
- **image:** new generated asset `b1-word-formation.jpg` (same style as other section thumbnails)
- **modules:**
  - **31. Prefixes** — `id: prefixes`, subtitle "negative prefixes; un-, dis-, in-/im-/il-/ir-, mis-, re-, pre-, ex-, half-"
  - **32. Suffixes** — `id: suffixes`, subtitle "noun, adjective, adverb and verb suffixes; -er/-or, -ment, -tion, -ness, -ity, -ful/-less, -ly"
  - **33. Word Formation Quiz** — `id: word-formation-quiz`, subtitle "mixed prefix + suffix review quiz"

Each module reuses the existing `theory` + `exercises` + `examPractice` shape rendered by `B1GrammarTopic.tsx` — no UI plumbing changes needed beyond data.

## Module 31 — Prefixes

**Theory sections** (same `GrammarTheorySection` HTML format used by other modules):

1. **What is a prefix?** — definition, hyphen vs no hyphen note, distinction between negative meaning (`like → dislike`) and reversal (`lock → unlock`).
2. **Negative prefixes** — table of `un-`, `dis-`, `in-`, `im-`, `il-`, `ir-` with the spelling rules (`il-` before l, `im-` before m/p, `ir-` before r) and examples.
3. **Other useful prefixes** — `mis-` (wrongly), `re-` (again), `pre-` (before), `over-` (too much), `inter-` (between), `ex-` (former), `half-` (50%).

**Exercises** (built from the PDFs, using existing exercise types):

- **P1 — Choose the right prefix** (`multiple-choice`): 5 items adapted from the Skillswise Using prefixes worksheet (un/dis/re/pre choices in sentences like "I'm ___able to come", "___vise for my exam", etc.).
- **P2 — Make the opposite** (`fill-blank`): 12 items from PET prefixes ex. b — agree → disagree, lock → unlock, employed → unemployed, legal → illegal, regular → irregular, formal → informal, honest → dishonest, understand → misunderstand, visible → invisible, dressed → undressed, happy → unhappy, like → dislike/unlike.
- **P3 — Match prefix to meaning** (`matching`): ex- = was but not now; dis- = not (verbs); half- = 50%; in-/im-/il- = not (adjectives); mis- = incorrectly; re- = again; un- = not (adjectives or verbs).
- **P4 — Complete the sentences** (`fill-blank`, with word bank): 9 items from PET prefixes ex. e — impossible, halfway, uncomfortable, disappear, ex-wife, misunderstood, reorganising, unlock, unpacked.
- **P5 — Sentence meaning** (`multiple-choice`): 3 items from Skillswise — reappoint, precondition, disappear.

## Module 32 — Suffixes

**Theory sections:**

1. **What is a suffix?** — suffixes change word class; brief overview.
2. **Verb → noun suffixes** — table: `-ment` (adjust→adjustment), `-tion/-ation/-sion/-ition` (combine→combination), `-er/-or` (publish→publisher, survive→survivor), `-ance/-ence`, `-ant`, `-al`, `-ee`.
3. **Adjective → noun** — `-ness` (friendly→friendliness), `-ity` (popular→popularity), `-ance/-ence`.
4. **Noun → adjective** — `-y`, `-ful`, `-less`, `-ous`, `-al`, `-ic`, `-ish`.
5. **People nouns** — `-er` (sing→singer), `-or` (act→actor), `-ist` (art→artist), `-ian` (electricity→electrician), `-ee` (employ→employee).
6. **Adjective → adverb** — `-ly`, and `-ally` after `-ic`.
7. **-ful vs -less** — note that `-ful` = "full of" and `-less` = "without".

**Exercises:**

- **S1 — Match nouns to meanings** (`matching`): 10 items from PET suffixes ex. a (arrangement, darkness, endless, film director, footballer, hopeful, impressive, mathematics, organization, artist).
- **S2 — Form the noun** (`fill-blank`, with verb/adjective prompts): the 20 items from PET suffixes ex. b (amusement, digestion, discussion, enjoyment, government, happiness, impression, information, invitation, measurement, popularity, preparation, protection, punishment, responsibility, revision, sadness, statement, suggestion, television).
- **S3 — Complete the sentences** (`fill-blank`, with word bank): 8 items from PET suffixes ex. c.
- **S4 — Person who…** (`fill-blank`): 10 items from PET suffixes ex. d (singer, employer, farmer, dancer, director, artist, actor, manager, driver, trainer).
- **S5 — Choose -ful or -less** (`multiple-choice`): 5 items from PET suffixes ex. e (careless / hopeless / useless / painless / endless).
- **S6 — Skillswise suffix choice** (`multiple-choice`): 4 sentences from Skillswise Using suffixes worksheet (look-ing, young-est, thought-ful/care-less, look-ing/look-ed/recycl-ing).

## Module 33 — Word Formation Quiz

`examPractice`-style assessment using the existing Reading-Part-style framing isn't needed; instead we add an `exercises` array containing one final mixed quiz:

- **WF1 — Mixed Prefix & Suffix Quiz** (`multiple-choice`, ~12 items) drawn from across both modules so students get a single end-of-section assessment with score feedback (the existing `ExercisesView` already shows correct/incorrect feedback per item).

## Files touched

- **New asset:** `src/assets/b1-word-formation.jpg` (generated thumbnail in the same style as other B1 section images).
- **Edit:** `src/data/b1GrammarData.ts` — import `Type` icon + new image, add `prefixesTheory`, `prefixesExercises`, `suffixesTheory`, `suffixesExercises`, `wordFormationQuizExercises`, append the new section to `b1GrammarSections`.
- **No changes** to `B1Grammar.tsx`, `B1GrammarSection.tsx`, `B1GrammarTopic.tsx`, routes, or types — they already iterate `b1GrammarSections` and render `theory` / `exercises` generically.

## Out of scope

No changes to backend, auth, the Tense Master integration, or the standalone `/tense-master` route. No new exercise component types — everything reuses `multiple-choice`, `matching`, and `fill-blank` which already render correctly.
