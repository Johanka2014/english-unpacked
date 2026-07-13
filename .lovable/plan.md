# Exercise 1: Two-column layout with ambition image

In `src/components/bb-upper/ReadingUnit2.tsx`, update the Exercise 1 card ("Complete the Questions") to a two-column grid on `md+` screens:

- **Left column:** existing instructions + `gapQuestions` list + Check Answers button (unchanged logic).
- **Right column:** a photorealistic image of an office worker at their desk, gazing upward as if daydreaming about future ambitions, with a soft `rounded-xl` frame, subtle shadow, and small italic caption ("Ambitions for the future"). Stacks below the questions on mobile.

## Assets

- Generate `src/assets/office-worker-ambitions.jpg` via `imagegen` (fast tier). Prompt: photorealistic mid-shot of a professional at a modern office desk, chin resting on hand, looking upward through a bright window with a soft thought-bubble of aspirations (career growth, travel), natural warm light, shallow depth of field, cinematic.
- Import into `ReadingUnit2.tsx` as `officeWorkerImg`.

## Technical notes

- Wrap the current inner content of the Exercise 1 `Card` in `<div className="grid md:grid-cols-2 gap-6 items-start">`.
- No changes to state, answer checking, or other exercises.
