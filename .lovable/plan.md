# Let teachers and students both edit a lesson

## What's happening

The lesson page has a single Save path used by everyone. That save routine only accepts the edit when the person saving is the student the lesson belongs to. So when you (as teacher/admin) open a lesson and click Save, the change is rejected — it looks like the lesson is locked as soon as the student has it. It isn't about who saved first; the teacher save has never been permitted through this path.

## The fix

Allow the save when the person is either the lesson's own student **or** an admin. Both can then edit notes and web links freely, at any time, in any order.

Behaviour after the change:
- Student: can edit their own lesson's notes and links (unchanged).
- Teacher/admin: can edit any lesson's notes and links.
- Neither can change the owner, title or date through this path — those stay admin-only via the admin screens.
- Last save wins (no locking). If you want an "edited by / at" note or conflict warning, that can be added as a follow-up.

## Technical detail

Update the `public.update_my_lesson` security-definer function so its `WHERE` clause is
`student_id = auth.uid() OR public.has_role(auth.uid(), 'admin')`, keeping the existing
web-links URL validation and the "not found or no permission" error for everyone else.
No changes needed in `src/pages/LessonDetail.tsx`; existing RLS policies stay as they are.
