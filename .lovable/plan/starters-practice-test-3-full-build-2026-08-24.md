# Starters Practice — Test 3 (full build)

Test 3 gets built end to end in exactly the same style, layout and interaction patterns as Tests 1 and 2: three tabs (Listening · Reading & Writing · Speaking), coloured collapsible part cards, emojis, Fredoka headings and audio players.

## What the student will get

**Listening (Tracks 13–16)**
- Part 1 — Listen and draw lines: match names (Alex, Ben, Mark, Sam, May, Jill, Ann) to people in the park scene.
- Part 2 — Listen and write: 5 name/number answers about Nick, his sister, the eggs and Grandpa (kitchen/baking scene, with the two worked examples: 7, Anna).
- Part 3 — Listen and tick: 5 three-option picture questions (Bill's house, how Sue gets to school, what Ben can see, Ann's eye colour, Mark's sport), plus the "What's Lucy eating?" example image at the top.
- Part 4 — Listen and colour: the bedroom/toys scene, with the answer key and a Wordwall link.

**Reading & Writing**
- Part 1 — Tick or cross: page / radio / baths / trains / beach, with the two worked examples (face ✓, flat ✗) shown as emoji tiles and the picture strip beside them.
- Part 2 — Yes/no about the shop scene: 5 statements (man on phone, shop door, bread and fruit, girl's hair, the young boy).
- Part 3 — Unscramble letters into words: desk, ruler, rubber, computer, cupboard.
- Part 4 — "A doll" gap-fill with the picture word box: mouth, ball, legs, bedroom, children.
- Part 5 — One-word answers about the car / park / eagle pictures (people in car, what Mum is doing, what the boy is looking at, what the bird has got, who is pointing).

**Speaking (Tracks 17 and 18)**
- Hallway scene picture plus the 8 object cards (bus, board game, coconut, sofa, glasses, pencil, photo, onion).
- Guided practice steps from the examiner script, with both the "without answers" and "with answers" recordings so students try first, then compare.

## Technical notes

- Crop the artwork from the SB PDF pages (scene pictures, Part 3 option images, Part 1/5 picture strips, word box, speaking scene and object cards) and upload via the asset CLI using `test3-*` / `t3-*` naming, mirroring Test 2.
- Upload the four listening MP3s and the two speaking MP3s the same way Test 2's audio is served.
- Add `src/data/startersTest3Data.ts` following the existing `startersTest2Data.ts` shape and interfaces — no component changes expected, since the part components already take their data as a prop.
- Register `test-3` in the `TESTS` map in `src/pages/StartersTest.tsx`.
- Flip Test 3 to available in `src/pages/StartersPractice.tsx` and drop its "Coming soon" state.
- Answer keys pulled from the Teacher's Book PDF; Wordwall links for Part 4 colouring and Speaking left as fallbacks until you supply Test 3 URLs.
