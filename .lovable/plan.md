

## Plan: Add alternating light-blue-to-white gradient backgrounds

### What changes
Add subtle alternating background gradients across three BB Upper Intermediate pages to give visual interest. Every other content section will have a soft light blue that fades to white.

### Files to modify

**1. `src/pages/BBUpperIntermediate.tsx`** (Hub page — unit grid)
- Change the `<main>` wrapper from plain `bg-background` to include a subtle gradient: `bg-gradient-to-b from-blue-50/60 to-white` on the main content area.

**2. `src/pages/BBUpperModule.tsx`** (Module page — skill tiles)
- Add the same light blue gradient to the main content section, alternating with the existing `bg-primary/10` header band which already provides contrast.

**3. `src/pages/BBUpperSkill.tsx`** (Skill page — exercise content)
- Add the gradient background to the main content area where exercises are rendered.

### Technical approach
- Use Tailwind's `bg-gradient-to-b from-blue-50/60 via-blue-50/30 to-white` for a gentle fade from light blue at the top to white at the bottom of each content section.
- The hero/header sections already have their own distinct backgrounds (image overlay or `bg-primary/10`), so the gradient only applies to the `<main>` content areas.
- On the hub page, the outer `div` keeps `bg-background` but the `<main>` element gets the gradient, creating a natural alternation: hero (dark) → content (light blue fade) → footer.
- Dark mode compatibility: use `dark:from-blue-950/20 dark:to-background` so it remains subtle.

