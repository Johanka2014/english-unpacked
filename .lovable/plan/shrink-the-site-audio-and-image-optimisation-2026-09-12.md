# Shrink the site: audio and image optimisation

The live deployment is ~180 MB per publish (126 MB of audio files + 51 MB of images), and every publish stores a full copy — that's how deployment storage reached 10 GB. The site itself is fine; it's the media files.

## Approach

Audio moves out of the deployment into the project's built-in cloud storage (not Google Drive — its links aren't designed to serve files inside an app and can be throttled or break). Images are compressed in place so nothing else changes.

## Step 1 — Compress the audio

Re-encode all 34 MP3s under `public/audio/` to speech quality (mono, 64 kbps, 44.1 kHz). These are all voice recordings, so the quality loss is imperceptible. Expected result: ~126 MB → ~13 MB.

## Step 2 — Upload the audio to cloud storage

Create a public storage bucket and upload all 34 MP3s, keeping the same folder layout (`starters/`, `bb-upper/`, `hr/`, etc.). Each file gets a permanent public URL.

## Step 3 — Repoint the audio references

37 references to `/audio/...` across ~18 files (Starters tests data, Business Benchmark Upper data, and the `Listening*` components) get rewritten to the new storage URLs. After that, delete `public/audio/` from the project so deployments no longer carry it.

## Step 4 — Handle the five broken audio links found during investigation

These pages reference audio files that don't exist anywhere in the project (the players are silently broken today):

- HR Unit 5 — tracks 9, 10
- HR Unit 6 — tracks 17, 18
- Business Benchmark Upper, Unit 5 listening

They'll be repointed to the new storage URLs anyway, so the moment you supply those recordings they work. I'll list them for you to send me if you have the files.

## Step 5 — Compress the images

All 245 images in `src/assets/` (51 MB), same file names so no code changes:

- Resize anything wider than 1600 px down to 1600 px (plenty for screens)
- Re-encode JPEGs at quality 82; optimise PNGs
- Opaque PNGs over 300 KB are converted to JPEG (a handful of import paths updated to match)
- Expected result: ~51 MB → roughly 6–8 MB, no visible difference on screen

## Verification

- Production build passes
- Playwright check on a Starters test, a Business Benchmark listening page and an HR page: audio element loads from the storage URL and plays, images render
- Confirm the built output no longer contains `public/audio` and report the before/after sizes

## Result

Each future deployment drops from ~180 MB to roughly 25–30 MB (the app code plus compressed images), so storage grows ~6x slower. Note for Vercel: old deployments stay stored until their retention expires — deleting old deployments in the Vercel dashboard frees the existing 10 GB immediately.

## Not in scope

Google Drive is not used (links break/throttle); the already-externalised CDN assets are left as they are.
