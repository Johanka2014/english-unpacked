# Starters Practice — Test 2 (full build)

The new PDF completes the set: Listening Parts 1–4, Reading & Writing Parts 1–5, and the Speaking scene picture plus object cards. Test 2 can now be built end to end in exactly the same style, layout and interaction patterns as Test 1.

## What the student will get

Three tabs (Listening · Reading & Writing · Speaking), same coloured collapsible part cards, emojis, Fredoka headings and audio players as Test 1.

**Listening (audio Tracks 07–10)**
- Part 1 — Listen and draw lines: match names (Sue, Anna, Lucy, Bill, Dan, Tom, Kim) to people in the classroom scene.
- Part 2 — Listen and write: 5 name/number answers (7, Grace, 6, Ben, 19).
- Part 3 — Listen and tick: 5 three-option picture questions (B, A, C, C, B).
- Part 4 — Listen and colour: the lorry-colouring scene with the answer key (blue, orange, purple, yellow, pink).

**Reading & Writing**
- Part 1 — Tick or cross: shirt/dolls/bus/eggs/foot with two worked examples.
- Part 2 — Yes/no about the beach scene: 5 statements (no, yes, yes, no, no).
- Part 3 — Unscramble letters into words: lime, onion, juice, orange, pineapple.
- Part 4 — "Trees" gap-fill with a picture word box: green, garden, house, spiders, girls.
- Part 5 — One-word answers about the grocery-shop scenes: woman, man, banana, black, apple.

**Speaking (Tracks 11 and 12)**
- Farm scene picture and the 8 object cards (motorbike, shell, mango, guitar, socks, TV, car, doll).
- Guided practice steps drawn from the examiner script, with both the "no answers" and "with answers" recordings so students can try first and then compare.

## Technical notes

- Crop the required artwork from the PDF pages (scene pictures, question images, object cards) and upload it via the asset CLI, mirroring the `src/assets/starters/test1-*` naming with `test2-*`.
- Upload the six MP3s the same way the Test 1 audio is served, and rotate the speaking scene page (it is printed sideways) before upload.
- Add `src/data/startersTest2Data.ts` following the existing `startersTestData.ts` interfaces; extend where Test 2 needs it (a second speaking audio track).
- Generalise the existing `src/components/starters/*` part components to take their data as a prop instead of importing Test 1 directly, and make `src/pages/StartersTest.tsx` select the dataset from the `:testId` route param, keeping Test 1 behaviour identical.
- Flip Test 2 to available in `src/pages/StartersPractice.tsx` and remove its "Coming soon" state.
