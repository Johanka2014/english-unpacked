# English File Intermediate · 1A Vocabulary — upgrades

Six changes to the Vocabulary tab of File 1, lesson 1A.

## 1. "Check your list" — writable answers
Add a text box under each of the four category prompts (Fruit, Vegetables, Protein, Store cupboard) so students type their remembered items before revealing the answers. Answers stay hidden behind the existing "Show answers" button, and typed text autosaves to the browser so it survives a refresh.

## 2. Flashcards for the Vocabulary Bank
Replace the two flat word lists (Fish, seafood and meat; Fruit and vegetables) with flashcard decks using the existing flashcard component — front: the word, back: a short definition plus an example phrase. Flip, next/prev, shuffle and reset all work as on the Sport lesson.

## 3. Audio for the listening activities
The Vocabulary tab's "Listening 1.5 — food phrases" and the Listening & Speaking tab's "Listening 1.7" have no audio files in the project — there are no English File audio assets uploaded. Please upload the MP3s for 1.5 and 1.7 (and any others for 1A) and I will wire them into an inline player above each exercise. Until then the exercises stay text-only.

## 4. Transcript behind a collapsible button
Add a collapsible "Show transcript" panel (accordion) under each listening exercise. I can add the panel now, but I need the transcript text — either from the Teacher's Book transcript pages (a link/photo works) or I can leave the panel empty until the audio arrives. Tell me which you prefer.

## 5. Phrasal verbs — flashcards first, then editable sentences
Add a small flashcard deck (eat out, cut down on, cut out — with meaning and an example sentence) immediately before the gap-fill, so the meaning is introduced before use. Turn the three gap-fill sentences into typed-answer inputs with instant right/wrong feedback instead of a reveal-only list.

## 6. Activation tile — two columns with an image
Convert the "Activation · Talk to a partner" block into a two-column layout: discussion questions on the left, a generated image of students talking around a table in a library on the right. Single column on mobile.

## Technical notes
- New activity types added to the shared `Activity` union in `src/data/engineeringData.ts`: `flashcards`, `notes`, `two-col`, plus optional `audioSrc` / `transcript` fields on existing types.
- `TechnicalRenderer` gains cases for the new types: `Flashcards` (existing component), a new `NotesBoxes` component (textarea + localStorage autosave, same pattern as the writing boxes in Unit 13), and a two-column wrapper.
- Listening activities render an inline `<audio>` player when `audioSrc` is present and a shadcn `Accordion` transcript when `transcript` is present.
- Phrasal-verb gap-fill switches from `fill-blanks` to the existing `type-blanks` renderer.
- Image generated to `src/assets/ef-library-discussion.jpg`.
