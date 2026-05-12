## Goal

Turn the existing placeholder `social-issues` topic in `src/data/maturitaTopics.ts` into a fully fleshed-out topic that mirrors the depth and structure of British Literature, Environment, Medical Care, Unemployment and Hemingway. Content sourced from the two attached references (the V-level Part 3 PDF on Problems of Today, and the Conversation Questions DOCX on Poverty / Food Programs / Welfare / Homeless) plus the two URLs (statnimaturita-anglictina – Global Issues, anglictina-maturita – Social Problems).

## Sub-topics covered (Learn accordion)

The content will span the full "social issues" umbrella as treated by Czech maturita:

1. What are social issues? (definition, scope, why they matter)
2. Poverty & hunger (causes, the poverty line, global vs. CR)
3. Homelessness (causes, life on the street, shelters, CR examples)
4. Unemployment as a social issue (brief – cross-link to the dedicated topic)
5. Drug abuse & alcoholism (legal vs. illegal drugs, addiction, prevention)
6. Crime & criminality (types of crime, juvenile crime, punishment)
7. Bullying & cyberbullying (school, workplace, online)
8. Racism, xenophobia & discrimination (CR Roma situation, migration)
9. Domestic violence & gender inequality
10. Human-rights violations (with reference to Amnesty International, UN)
11. Natural disasters & humanitarian crises (floods, earthquakes, refugees)
12. Charity, NGOs & how individuals can help (Red Cross, Caritas, People in Need / Člověk v tísni, Greenpeace, Amnesty)

## Practice tab

15 question/answer pairs covering: definition of social issues, poverty in CR vs. world, homelessness, drug prevention, crime trends, bullying at school, racism in CR, role of NGOs, what an individual can do, government responsibilities, comparing CR with other countries, opinions on welfare, etc. Drawn from the DOCX question bank and both URLs, rewritten as model B2-level answers in the same voice as existing topics.

## Part 2 (Describe & compare images)

Two paired images on a social-issues theme (e.g. a homeless person on a city street vs. a charity volunteer / soup kitchen). Includes prompt points (People, Place, Atmosphere, Activity, Cause, Solution), follow-up questions, comparison questions, and a discussion question ("Whose responsibility is it to help people in need – the state, charities or individuals?").

## Part 3 (Exam – Problems of Today)

Built from the V-level PDF. Six images (3A–3F) with labels:
- 3A Poverty / hunger
- 3B Pollution / environment
- 3C Natural disasters
- 3D Human-rights violations
- 3E Homelessness
- 3F Drug abuse / crime

Task description, six prompt points (Affected regions, Causes, Solutions, Specific examples, Role of organisations, Other) and ~12 follow-up questions taken straight from the PDF interlocutor sheet.

## Part 4 (Interactive conversation)

Scenario from the PDF Task Two: a foreign friend wants to know what the most serious problems are in the Czech Republic. Examiner starter line, prompt points (unemployment, homelessness, environment, public transport, racial prejudice, NGOs), four illustrative images (4A–4D – e.g. CR street scene, Czech recycling bins, Roma community, public transport), and 3 conversation tips.

## Images to generate

Generated with `imagegen` (fast tier, photographic style consistent with existing topic art) and saved to `src/assets/`:

- `maturita-social-thumbnail.jpg` – topic card thumbnail
- `maturita-social-3a.jpg` … `3f.jpg` – Part 3 images
- `maturita-social-part2-a.jpg`, `maturita-social-part2-b.jpg` – Part 2 pair
- `maturita-social-4a.jpg` … `4d.jpg` – Part 4 images

All images will be tasteful, non-graphic, and consistent with the existing site tone.

## Files to change

- `src/data/maturitaTopics.ts` – add image imports, replace the existing one-line `social-issues` placeholder (around line 886) with a full topic object: `available: true`, `thumbnail`, `learn`, `practice`, `part2`, `exam`, `part4`. No interface changes needed.
- `src/assets/` – new generated images listed above.

No changes to `MaturitaSpeaking.tsx`, `MaturitaSpeakingTopic.tsx`, `Part2Tab.tsx`, `Part4Tab.tsx` – they already render any topic that has these fields.

## Out of scope

- No new tabs, no design changes, no routing changes.
- The other placeholder topics (Mass Media, etc.) stay as they are.
