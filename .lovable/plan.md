

# English for Kids - New Section

## Overview

Add a new "English for Kids" section to the website with a child-friendly font, a colourful navigation item, a dedicated page with hero section, Cambridge Starters/Movers/Flyers information, and three horizontal tiles for Speaking, Reading, and Listening.

---

## Part 1: Add a Child-Friendly Font

Add the Google Font **"Fredoka"** (a rounded, playful font ideal for children's content) to the existing font loading in `index.html` and register it in `tailwind.config.ts` as `font-fredoka`.

---

## Part 2: Update Navigation

Add a new nav item "English for Kids" to `Navigation.tsx` with special styling:
- A colourful background pill/badge (e.g., a warm yellow/orange gradient: `bg-gradient-to-r from-yellow-400 to-orange-400`) with rounded corners and white text
- Use the `font-fredoka` font for this specific nav item to make it visually distinct
- The same treatment applies in both desktop and mobile navigation
- Links to `/english-for-kids`

---

## Part 3: Create the English for Kids Page

Create `src/pages/EnglishForKids.tsx` following the same layout pattern as `BusinessEnglish.tsx` and `ExamPreparation.tsx`:

### Hero Section
- Same full-screen hero with the existing `hero-background.webp` image
- Title "English for Kids" using `font-fredoka` instead of `font-merriweather`
- Subtitle about making learning English fun and exciting for young learners
- "Book a Free Consultation" CTA button

### Cambridge Young Learners Section
- Two-column layout (image left, text right) matching the site's pattern
- Image from `https://johanka2014.github.io/get_ready_for_starters/cambridge_levels_kids.jpg`
- Heading: "Cambridge Starters, Movers & Flyers"
- Description text about preparing children for Cambridge Young Learners exams across all three levels
- CTA button to book a consultation

### Three Horizontal Tiles
Following the same card pattern as `ServicesSection.tsx` (three `service-card` tiles in a grid):

1. **Speaking** - Icon + title + description about building confidence in spoken English through games, role-plays, and interactive activities
2. **Reading** - Icon + title + description about developing reading skills with age-appropriate stories and exercises
3. **Listening** - Icon + title + description about improving listening comprehension through songs, stories, and audio activities

Each tile uses the existing `Card`/`service-card` styling with `brand-royal` icons.

### Call to Action Section
- Same dark hero-background CTA section used on other pages
- "Ready to Start Your Child's English Journey?" heading
- Book consultation button

---

## Part 4: Routing

- Add lazy import in `App.tsx`: `const EnglishForKids = lazy(() => import("./pages/EnglishForKids"));`
- Add public route: `<Route path="/english-for-kids" element={<EnglishForKids />} />`

---

## Files to Create/Edit

| File | Action |
|---|---|
| `index.html` | Add Fredoka font to the Google Fonts preload URL |
| `tailwind.config.ts` | Register `font-fredoka` in fontFamily |
| `src/components/Navigation.tsx` | Add "English for Kids" nav item with colourful badge styling |
| `src/pages/EnglishForKids.tsx` | New page with hero, Cambridge section, three tiles, CTA |
| `src/App.tsx` | Add lazy import and route for `/english-for-kids` |

---

## Design Details

- The "English for Kids" nav item will stand out with a colourful gradient background (`from-yellow-400 to-orange-400`), rounded-full padding, white bold text, and `font-fredoka`
- On the Kids page itself, headings use `font-fredoka` instead of `font-merriweather` to maintain the playful feel
- All other styling (cards, buttons, colours, layout) follows the existing site design system
- The Cambridge levels image is loaded from the external URL, not downloaded as a local asset

