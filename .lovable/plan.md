# Get Ready for Movers

## What you’ll get
- A new **Get Ready for Movers** tile under **Practice → Young Learners**, alongside the existing Starters activities.
- A course overview with the introduction, 12 named units and three revision sections, preserving your uploaded outline. The introduction and Unit 1 will open directly to their activities; the remaining sections will be greyed out and marked **Coming soon**.
- English Unpacked’s navigation, white backgrounds, navy/royal-blue/orange accents and Fredoka headings, with clear layouts and large, child-friendly controls.

## Convert the supplied activities
**Introduction — Where do you live?**
- Numbers 10–100 and the six number-writing questions.
- Daisy’s address and the six-floor matching activity.

**Unit 1 — At the park**
- Ten missing-letter action words.
- Four opposites and four comparative sentences.
- Preserve the listening activity’s place in the lesson.

Replace the standalone HTML/JavaScript interactions with native website activities. Keep your supplied answers, add consistent **Check answers**, correct/incorrect feedback, scores and retry/reset controls. Make floor matching work through tap/click selection as well as desktop dragging, without changing its six matches. Align the comparative wording so it consistently refers to a young boy and an older woman.

## Pictures and audio: add later
As requested, proceed without waiting for more uploads.
- Do not display the prototype’s placeholder pictures or broken audio players.
- Clearly mark image-dependent tasks as awaiting their source pictures; do not present unsupported visual/listening questions as complete.
- Keep the two listening tasks pending until **Movers - 2.mp3**, **Movers - 9.mp3** and their matching pictures are supplied.
- Check whether the introduction’s linked classroom picture is available; if usable, preserve it through the website’s asset storage. Otherwise leave that picture pending too.
- No new illustrations or additional curriculum will be invented in this conversion.

## Technical approach
- Add protected, lazy-loaded course and lesson pages at `/movers-practice` and `/movers-practice/:unitId`, following the existing course navigation patterns.
- Store the outline and supplied activities in typed Movers data, with small reusable exercise components and the website’s existing buttons and form controls.
- Reuse existing activity-result tracking for scored tasks and the Practice tile’s recently-opened behaviour. No database changes are planned.
- Preserve top-of-page navigation, include back-to-course/back-to-Young-Learners links, and set page-specific titles and descriptions.

## Checks
- Verify the signed-in journey from Young Learners to the course, introduction and Unit 1.
- Test right/wrong answers, scores, retries and floor matching; confirm scored results save and read back.
- Check narrow and wide layouts for readable text, usable controls and no horizontal overflow.
- Confirm unavailable sections and missing media are clearly distinguished from ready activities, with no broken players or images.

**Scope:** convert the introduction and Unit 1 supplied in your file, plus the course outline—not flesh out Units 2–12 or the revision sections yet.