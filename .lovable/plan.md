## Problem
The `Navigation` component is `fixed top-0` (~73px tall), but the main content has no offset. Pages whose hero uses `min-h-screen flex items-center` (Index, ExamPreparation, BusinessEnglish, etc.) hide the issue because the centered content sits well below the nav. Short heroes that only use `py-16/20/24` (e.g. **BusinessBenchmark**, BBUpperIntermediate, HREnglish, EngineeringEnglish, PresentationSkills, BusinessTravel, Conversation, EverydayConversations, the two exam-practice wrappers) get their top edge — including the H1 — clipped under the fixed nav.

## Fix
Add a single global offset for the fixed nav rather than patching every page.

1. **`src/components/Navigation.tsx`** — add a stable height class (e.g. `h-[73px]`) so the offset matches.
2. **`src/App.tsx`** — wrap `<Routes>` in a `<div className="pt-[73px]">` (applied to every page). For pages that already use `min-h-screen` heroes with `backgroundAttachment: fixed`, this just pushes the hero down by the nav height — visually identical to today since the nav already overlapped a transparent strip. Verify Index/ExamPreparation still look right.
3. **Alternative if global padding causes visual regressions on the full-bleed homepage hero:** instead of editing `App.tsx`, add `pt-20` (or `pt-[73px]`) only to the short hero `<section>` elements on the affected pages listed above. This is more surgical but touches ~10 files.

Recommended: go with the global offset in `App.tsx` + verify the homepage and ExamPreparation hero still render correctly; fall back to per-page padding only if a regression appears.

## Verification
- Navigate to `/business-benchmark` — full "Business Benchmark" H1 + subtitle visible, no clipping under nav.
- Spot-check `/` (homepage hero), `/exam-preparation`, `/business-english` — hero text still centered, no double gap.
- Spot-check `/hr-english`, `/engineering-english`, `/presentations`, `/business-travel` — top of hero visible.