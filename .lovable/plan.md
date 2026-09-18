# Add illustrated two-column layouts to Unit 102 theory

Enhance sections A–D of Unit 102 “So and such” with four lesson-specific images, using the same responsive image-and-explanation format already used in other Murphy units.

## Changes

- **Section A:** explanation on the left; image on the right showing two couples meeting in a street, smiling and shaking hands.
- **Section B:** image on the left showing a couple relaxing on a beach, looking out to sea and drinking cocktails; explanation on the right.
- **Section C:** explanation on the left; image on the right showing a woman snuggled in an armchair reading a book.
- **Section D:** image on the left showing a detached house that is visibly over 100 years old; explanation on the right.
- Keep each section stacked vertically on small screens and switch to two columns on wider screens.
- Preserve the existing Unit 102 wording, tabs, exercises, colours, and card styling.

## Technical details

- Generate four cohesive, natural editorial-style images suited to an English-learning textbook.
- Add the images to the project assets and assign each one through the existing theory `image`, `imageAlt`, and `imagePosition` fields.
- Reuse the current Murphy theory renderer; no new layout component or backend work is needed.
- Verify all four images load, alternate left/right correctly, and remain clear on desktop and mobile.
