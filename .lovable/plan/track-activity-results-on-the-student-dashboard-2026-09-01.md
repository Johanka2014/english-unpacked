# Track activity results on the student dashboard

Students' exercise results get saved automatically and shown on their dashboard. You can see every student's results from the admin area.

## What gets tracked

The shared exercise components used across the site record a result when a student checks their answers:

- Multiple choice quiz, fill in blanks, gap-fill (type-blanks), drag-fill gaps
- Matching, three-column matching, drag-and-drop matching and categorising
- Ordering, word order, ranking, listening completion

Each result stores: which lesson and activity, the score (e.g. 7 out of 10), the percentage, and when it was done. Only the student's **best** score per activity is kept — redoing an activity replaces the record if they beat it, otherwise the earlier best stands.

Flashcards and reading/info sections are not scored, so they are not tracked. The standalone embedded apps (Word Quest, Business Vocabulary, Phrasal Verbs) keep their own in-app progress and are out of scope for now.

## Student dashboard

A new "My progress" area on the dashboard showing:

- Totals: activities completed, overall accuracy, activities done this week
- A list of recent activities with lesson name, activity name, score and date
- A colour cue per row (green / amber / red) so strong and weak areas stand out

## Teacher view

On a student's page in the admin area, the same progress summary and activity list for that student, so you can see at a glance what they've practised and where they're scoring low. The main admin list gets an activities-completed count per student.

## Signing-in note

Results can only be saved for a signed-in student. When a visitor is not signed in, activities work exactly as they do today — nothing is recorded and nothing is shown.

## Technical detail

- New table `public.activity_results`: `student_id`, `activity_key` (stable slug, e.g. `recycling-4a`), `activity_title`, `lesson_slug`, `lesson_title`, `activity_type`, `score`, `total`, `percentage`, `completed_at`, plus timestamps. Unique on `(student_id, activity_key)` so best-score upsert works.
- Grants: `SELECT, INSERT, UPDATE` to `authenticated`, `ALL` to `service_role`, no `anon`. RLS: students read/write only their own rows; admins read all via `has_role(auth.uid(), 'admin')`.
- Best-score-only enforced in a `SECURITY DEFINER` RPC `record_activity_result(...)` doing an `INSERT ... ON CONFLICT (student_id, activity_key) DO UPDATE ... WHERE EXCLUDED.percentage > activity_results.percentage`, with `student_id` taken from `auth.uid()` inside the function (never from the client).
- New hook `src/hooks/useActivityTracking.ts` exposing `recordResult({ activityKey, title, type, score, total })`; a no-op when signed out and fire-and-forget so it never blocks the UI.
- Each shared exercise component gains optional `activityKey` / `activityTitle` props and calls the hook in its existing "check answers" handler. Components without an `activityKey` behave exactly as now, so lesson pages that haven't been wired up are unaffected.
- Renderers (`TechnicalRenderer`, `EngineeringSectionRenderer`, `TechTalkSectionRenderer`) pass a key derived from the lesson slug plus section id, so most lessons start reporting without per-lesson edits.
- Dashboard section as `src/components/progress/ProgressSummary.tsx`, reused on `Dashboard.tsx` and `StudentLessons.tsx` (the admin per-student page) with a `studentId` prop.
