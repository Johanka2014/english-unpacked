## Goal

Add a new Maturita Speaking topic **"Unemployment"** that appears as a tile immediately after **Medical Care** on `/maturita-speaking`, and is fully fleshed-out at `/maturita-speaking/unemployment` with Learn, Practice, Part 2 and Part 3 — matching the existing structure used by Medical Care and Hemingway.

## Where the change lands

All content for a topic is driven by a single object in `src/data/maturitaTopics.ts`. The pages (`MaturitaSpeaking.tsx`, `MaturitaSpeakingTopic.tsx`, `Part2Tab.tsx`) already render whatever is supplied — no page or component changes are needed. The new topic just has to follow the existing `MaturitaTopic` shape.

I will insert the new topic object **directly after the Medical Care block** (currently ends around line 497) and before `ernest-hemingway`, so the tile order on the listing page becomes: … → Medical Care → **Unemployment** → Hemingway → …

## Content sources I will use

1. **Manuvia article** (Czech labour market, December 2025, unemployment 4.8%) — for current statistics, regional differences and seasonal trends. I'll fetch this with `code--fetch_website` and pull concrete numbers/quotes into the Learn accordion and Practice answers.
2. **Google Drive worksheet** (Czech secondary-school handout) — I'll attempt to retrieve it via the Google Drive connector (`standard_connectors--connect` → `google_drive`). If it requires per-user OAuth and the connector cannot read it, I'll proceed without it; the Manuvia article + standard Czech maturita unemployment vocabulary is enough. I'll mention this honestly in the build summary if it happens.
3. **Two Part 2 images** — downloaded with `curl` and saved to `src/assets/`:
   - `maturita-unemployment-part2-a.jpg` — regional unemployment-rate chart from `https://geo-unce.natur.cuni.cz/en/unemployment-in-czech/`
   - `maturita-unemployment-part2-b.jpg` — Czech Republic demographic pyramid 2022 from `https://www.iz.sk/en/projects/eu-regions/CZ0`
   I'll fetch each page, locate the actual image URL, download it, and verify the file is a real image (>5 KB, valid JPEG/PNG) before importing it.
4. **Six Part 3 images** — relevant unemployment-themed photos. I'll generate them with the AI image tool (consistent with how other topics use illustrative photos) covering: job centre / labour office, CV and job interview, unemployment queue / waiting room, redundancy / closing factory, retraining / adult education, and online job hunting. Saved as `maturita-unemployment-3a.jpg` … `3f.jpg` in `src/assets/`.
5. **Tile thumbnail** — a single hero image `topic-unemployment.jpg` (job-centre / job-search themed) for the listing card.

## Topic content outline

**Tile**
- `id: "unemployment"`, `title: "Unemployment"`, `available: true`
- `description: "Causes of unemployment, the labour market in the Czech Republic and Europe, job hunting, social support, and the future of work"`

**Learn (10 accordion items)** — Czech focus with European comparison
1. What is unemployment? (definitions: unemployment rate, registered vs. ILO, frictional / structural / cyclical / seasonal)
2. The Czech labour market today (current rate ~4.8% Dec 2025 from Manuvia, vacancies, long-term trend of one of the lowest rates in the EU)
3. Regional differences in the Czech Republic (Prague & Plzeň low; Ústecký, Moravskoslezský, Karlovarský higher — using the cuni.cz map)
4. Causes of unemployment (automation, outsourcing, recession, mismatched skills, seasonal work, company restructuring)
5. Effects of unemployment (financial hardship, loss of self-esteem, mental health, social exclusion, impact on the state budget)
6. The Czech Labour Office (Úřad práce) – registration, job-seeker status, retraining courses
7. Unemployment benefits in the Czech Republic (eligibility, 65/50/45 % of previous net wage, support period by age)
8. Job hunting (CV, motivation letter, job portals like Jobs.cz / Práce.cz, interviews, networking, LinkedIn)
9. Unemployment in Europe (broad picture: low in Czechia, Germany, Poland; higher in Spain, Greece; youth unemployment as a particular issue)
10. The future of work (AI & automation, remote work, gig economy, lifelong learning, demographic ageing — links into the demographic-pyramid image used in Part 2)

**Practice (12–15 Q&A)** — sample questions an examiner may ask, each with a model answer drawing on the Learn content. Examples:
- What does "unemployment rate" mean?
- Why does the Czech Republic have one of the lowest unemployment rates in the EU?
- Which Czech regions have the highest unemployment and why?
- What support can an unemployed person get from the Labour Office?
- What documents do you need when applying for a job?
- How do you prepare for a job interview?
- What is youth unemployment and why is it a problem in some EU countries?
- How is automation changing the job market?
- What are the social and psychological effects of long-term unemployment?
- How does the ageing population affect the labour market?
- (plus ~4 more covering CVs, retraining, gig economy, remote work)

**Part 2**
- `task1` — single-image description, prompts: People, Place, Activity, Numbers/Data, Mood, Other.
  - Picture A: regional unemployment chart (Czech Republic)
  - Picture B: Czech Republic demographic pyramid 2022
  - 4 follow-up questions per existing pattern (what data is shown, which regions stand out, what does the shape of the pyramid tell us, how do these two relate to the labour market).
- `task2` — comparison: same prompts; questions like "Which picture is more useful for understanding the Czech labour market?", "How do regional disparities and demographic trends interact?", "Which trend will have a bigger impact on unemployment in the next 20 years?"
- `task3` (Topic Discussion question): *"How serious is unemployment in the Czech Republic compared with the rest of Europe, and what should the government and individuals do about it?"*

**Part 3 (Topic Presentation & Follow-Up)**
- `taskDescription`: "Give a short presentation about unemployment in the Czech Republic and Europe. Use pictures 3A–3F to illustrate the main aspects of the topic and answer the examiner's follow-up questions."
- `promptPoints`: Causes of unemployment / The Czech labour market and regional differences / Job hunting and the role of the Labour Office / Unemployment benefits and social support / Effects on individuals and society / The future of work
- 6 images (3A–3F) as described above with short descriptions
- 10–12 follow-up questions covering causes, regional differences, job-hunting steps, benefits, automation, youth unemployment, demographic ageing, government measures, personal opinion, future predictions.

## Technical details

```text
src/data/maturitaTopics.ts
├── add 9 image imports (thumbnail + part2-a + part2-b + 3a–3f)
└── insert new topic object after the medical-care block (≈ line 497),
    before the ernest-hemingway block

src/assets/  (new files)
├── topic-unemployment.jpg
├── maturita-unemployment-part2-a.jpg     (downloaded from geo-unce.natur.cuni.cz)
├── maturita-unemployment-part2-b.jpg     (downloaded from iz.sk)
└── maturita-unemployment-3a.jpg … 3f.jpg (generated)
```

Build steps in order:
1. `code--fetch_website` Manuvia article → extract stats and quotes.
2. Try Google Drive connector for the worksheet; if blocked, continue.
3. Fetch the cuni.cz and iz.sk pages, identify the chart and pyramid image URLs, `curl` them into `src/assets/`, verify they are valid images.
4. Generate the 6 Part 3 illustrative images + 1 tile thumbnail.
5. Edit `src/data/maturitaTopics.ts`: add imports and the new topic object in the correct position.
6. Spot-check `/maturita-speaking` (new tile appears after Medical Care) and `/maturita-speaking/unemployment` (all 4 tabs render correctly, both Part 2 images load, all 6 Part 3 images load).

## Out of scope

- No changes to the listing page, tab components, or routing — the existing code already handles any topic that follows the `MaturitaTopic` shape.
- No changes to other topics.
