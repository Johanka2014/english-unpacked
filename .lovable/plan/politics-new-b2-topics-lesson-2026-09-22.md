# Politics — new B2 Topics lesson

## Goal
Create a politically neutral, classroom-ready B2 Politics lesson under **Practice → Topics**, matching the existing Weddings, Insurance, and Recycling lessons in layout, colours, navigation, and interactive exercise styles.

The lesson will synthesize the six uploaded resources into original, concise activities rather than reproducing entire worksheets. Older examples will be updated or clearly framed so the material feels relevant in 2026.

## Lesson structure

### 1. Warm-up
- Discussion prompts on political participation, trust, voting, and how government decisions affect everyday life.
- Political-systems sorting activity: democracy, republic, monarchy, dictatorship, coalition government.
- Ranking task where students prioritise policy areas such as healthcare, education, housing, security, climate, and the economy.

### 2. Vocabulary
- Interactive flashcards covering political institutions, elections, people, and key actions.
- Matching and gap-fill practice using terms from the uploaded Politics and Vocabulary in Use resources: constituency, candidate, manifesto, polling station, turnout, majority, opposition, cabinet, referendum, coalition, incumbent, front-runner, and related terms.
- Election collocations and phrasal verbs: call/hold/contest/rig/boycott an election, stand down, get in, vote through, vote down.
- Word-family practice: politics/political/politician, elect/election/elected, govern/government, oppose/opposition, resign/resignation.
- A careful political-spectrum note explaining that labels vary across countries and contexts, avoiding a simplistic “one correct spectrum”.

### 3. Reading
- An editorial-style article based on the “super election year” resource, reframed retrospectively around global participation, AI-generated misinformation, fact-checking, and free and fair elections.
- True/false/not-given, vocabulary-in-context, and phrase-matching activities with instant checking.
- A second newspaper-style explainer on how election day works, drawing on the UK election resource while separating UK-specific vocabulary from internationally useful language.
- Short “news in brief” items inspired by the life-skills resource, rewritten with fictional or non-time-sensitive situations for headline matching, reference words, and reading comprehension.

### 4. Language & media literacy
- Second conditional practice leading from controlled sentence completion into policy proposals: “If we were elected, we would…”.
- A source-evaluation activity on headlines, manipulated media, opinion versus fact, and verification steps.
- A neutral mini case study where students identify loaded language and rewrite a partisan headline more objectively.

### 5. Tasks
- Election-night speaking roleplay with candidate, campaign manager, journalist, undecided voter, and fact-checker roles.
- Interactive party-manifesto builder based on the uploaded template, covering tax, spending, education, health, jobs, law, and one student-chosen policy.
- Debate prompts and a final writing task: a balanced opinion essay on whether voting should be compulsory, with checklist, word counter, automatic local saving, clear button, and optional model answer.

## Presentation
- Add a **Politics** tile to the Topics list and a protected `/topics/politics` lesson page.
- Use the established five-tab Topics layout, navy/royal-blue/orange design tokens, Merriweather headings, white background, responsive cards, and mobile-friendly controls.
- Create a neutral editorial hero image showing democratic participation at a polling place, with no real party branding, politician likenesses, flags, or campaign slogans.
- Present longer readings in the existing news-article treatment with headline, standfirst, source line, dividers, and readable responsive columns.

## Technical details
- Add a dedicated Politics lesson data file using the existing activity types and answer-checking components.
- Reuse `TechnicalRenderer`, `Flashcards`, and `RankingActivity`; add only small Politics-specific UI where the manifesto builder or media-literacy task needs it.
- Record scored activities through the existing progress-tracking hook so results appear on the student dashboard.
- Add the lazy-loaded lesson route and Topics tile without changing unrelated sections.
- Set lesson-specific page title and description through the existing SEO component.

## Validation
- Check every answer key against the visible source text and ensure each gap appears in the correct sentence position.
- Verify flashcards, matching, gap-fills, rankings, conditional practice, manifesto fields, writing persistence, scoring, and tab navigation.
- Test desktop and mobile layouts, especially long vocabulary terms, article columns, role cards, and manifesto inputs.
- Confirm the Topics tile opens the lesson directly and the Back to Topics control returns to the correct tab.
