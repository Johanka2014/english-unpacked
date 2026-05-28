## Goal
Bring the 3 activities from the `modal-mastery-hub` project (Modal Verbs Reference, Practice Quiz, Billie Eilish listening) into **B1 Grammar → Future & Modals** as a new tile, restyled to match the existing B1 Grammar lesson format (sequential `service-card` blocks, Merriweather headings, project semantic tokens — no tabs, no foreign gradients).

## Files to change

### 1. `src/data/b1GrammarData.ts`
- Extend `B1GrammarModule` interface with `modalMasteryLesson?: true` (same pattern as the existing `holidayLesson` and `cambridgeLesson` flags).
- In the `future-modals` section's `modules` array, append a new module:
  - `id: 'modal-verbs-master'`, `number: 16`
  - `title: 'Modal Verbs Master'`
  - `subtitle: 'reference, practice quiz and song listening for all 8 modal verbs'`
  - `modalMasteryLesson: true`

### 2. `src/components/b1-grammar/ModalVerbsMasterLesson.tsx` (new)
Single component, self-contained data (copied from `modal-mastery-hub/src/data/modalVerbs.ts`). Three stacked sections, each wrapped in `<Card className="service-card">`:

**Section A — Modal Verbs Reference**
- Intro paragraph.
- 4-column responsive grid of 8 clickable modal-verb tiles (Can, Could, May, Might, Must, Should, Will, Would). Selected tile uses `ring-2 ring-primary` + primary-tinted background (no cross-project gradients).
- Below the grid, a detail panel showing the selected verb's meaning, usage, and italic example in a `bg-muted/30 border border-border rounded-lg` box.

**Section B — Practice Quiz (8 multiple choice)**
- All 8 questions listed sequentially (no Next button paging — matches the existing multi-question patterns in B1 Grammar).
- Each question: prompt, 4 option buttons. After "Check Answers" pressed: correct options get `border-green-500 bg-green-50`, wrong selected option gets `border-red-500 bg-red-50`, and the explanation appears below.
- Final score display + Reset button.

**Section C — Listening: Billie Eilish "everything i wanted"**
- YouTube iframe (`https://www.youtube.com/embed/qCTMq7xvdXU`) in a responsive `aspect-video` container.
- Lyrics rendered line by line. Lines containing `___` split on the placeholder and render inline `<Input>` for each blank.
- "Check Answers" button. Per-blank inline check/X icons; below the lyrics, a per-blank breakdown with the user's answer, correct answer, and explanation. Overall score line.

All UI uses shadcn `Card`, `Button`, `Input`, plus `lucide-react` icons already used in the project (`CheckCircle2`, `XCircle`, `Music`, `Play`). No new dependencies.

### 3. `src/pages/B1GrammarTopic.tsx`
- Add `import ModalVerbsMasterLesson from '@/components/b1-grammar/ModalVerbsMasterLesson';`
- Add a conditional render right next to the existing `holidayLesson` / `cambridgeLesson` branches: if the matched module has `modalMasteryLesson`, render `<ModalVerbsMasterLesson />` inside the standard page chrome (Navigation, hero/title, back link, Footer).

## Content brought over (verbatim from modal-mastery-hub)
- 8 modal verbs with meaning/usage/example/level.
- 8 multiple-choice quiz questions with explanations.
- Billie Eilish "everything i wanted" lyrics with `might` and `could` blanks and explanations (YouTube id `qCTMq7xvdXU`).

## Not included
- The original project's hero image, gradient hero, and Tabs layout (replaced by the site's standard topic page + sequential cards).
- No new image assets (the section tile uses the existing `futureModalsImg`).
- No changes to existing `modals-1`, `modals-2`, `modals-3` placeholder modules.

## Verification
- Navigate to `/b1-grammar` → Future & Modals → the new "Modal Verbs Master" tile appears (number 16) → page renders all 3 sections, quiz scoring works, YouTube embed loads, listening blanks score correctly.
