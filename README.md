# Fieldnote

A body-scan check-in tool that helps figure out *what you're feeling* by
starting from physical sensations instead of asking "how do you feel?"
directly.

Most mood trackers assume you already know your emotion and just want you
to log it. Fieldnote works backwards — from body signals to a probable
emotion — for people who find that question genuinely hard to answer,
including a lot of neurodivergent adults with reduced interoceptive
awareness (see *Sources* below).

## How it works

1. **Body tap** — tap where you notice something on a simple body outline
   (with "whole body" and "not sure" fallbacks).
2. **Sensation chips** — pick from concrete, descriptive sensation words
   scoped to that area ("tight jaw", "racing heart"), not evaluative or
   emotion words. No wrong answers, "I don't know" is a real option.
3. **Hare's read** — the app matches your selected sensations against a
   transparent, editable signature table and suggests 1–3 candidate
   emotions with a plain-language explanation. You can push back ("no /
   maybe / yes") — it's designed to be correctable, not authoritative.
4. **Window of tolerance** — places the guess on a low-arousal ↔
   high-arousal gradient, which is more actionable than a bare label.
5. **Regulation suggestion** — one small, doable action per emotion, not a
   generic "just breathe."
6. **Summary + history** — every check-in is saved locally. After enough
   repeat data, the app surfaces patterns ("last 3 times your shoulders
   were tight, it turned out to be overwhelm, not anger").
7. **Library** — the sensation ↔ emotion table itself, browsable as a
   reference outside of a full check-in.

## Why a lookup table, not AI

Emotion inference from limited signals shouldn't be a black box for a
wellness tool. A transparent, editable rule table lets you see *why* an
emotion was suggested and correct it if it's wrong — more trustworthy than
an opaque model, and honest about what this project actually does.

## Personalization

- **Sensation wording** is editable per-signal in Settings — rename any
  chip to words that match how you'd actually describe it.
- **Tone** toggles between Rabbit & Hare's character voice and a more
  direct, plain-language mode.
- **Dyslexia-friendly font** toggle (OpenDyslexic) is available in
  Settings.
- **Export** your check-in history as JSON, or copy a single check-in
  summary to the clipboard.

All data — history, wording overrides, settings — is stored in this
browser's `localStorage` only. Nothing leaves the device; there's no
backend and no account.

## Design system

| Name | Hex | Use |
|---|---|---|
| Moth Lavender | `#D6D0E3` | Primary accent |
| Grey Mist | `#EEEAF2` | Background |
| Deep Grey | `#312F37` | Text |
| Soft Lilac | `#B9ACD3` | Hare's accent |
| Sage Grey | `#A8B5A1` | Rabbit's accent / secondary |
| Cloud White | `#FFFFFF` | Cards / surfaces |

Headers in Fraunces (Semibold), body in Inter. Flat 2px line-art icons and
illustrations throughout — field-guide, not cartoon.

## Sensation → emotion signature table

Cross-referenced from emotion/body-signal education charts into a shared
vocabulary of 21 body signals, covering 14 emotions (8 core + 6 stretch:
Shocked, Confused, Excited, Disgust, Shame, Cold). Each emotion has a
"signature" (the subset of signals it commonly shows up as); matching is a
simple overlap count — you check off what you're noticing, the app ranks
emotions by how many signature signals matched. See `src/data/signals.js`
and `src/data/emotions.js`.

Anxious and Excited deliberately share most of their signature (racing
heart, fast breathing, restless body) — that's not a matching bug, it
mirrors a well-documented finding that high physiological arousal is
genuinely ambiguous between the two states, differentiated by context and
appraisal rather than the body signals alone (the classic
misattribution-of-arousal line of affect research). Cold is included
alongside Tired as a physical-state entry, not an emotion, per the Humber
NHS framing below (recognising hunger/tiredness as commonly-confused
physical states is itself an interoception skill).

## Sources

- Williams et al. 2022, *Characterizing Interoceptive Differences in
  Autism: A Systematic Review and Meta-analysis of Case-control Studies*,
  *Journal of Autism and Developmental Disorders* — the specific, defensible
  finding is an accuracy/confidence mismatch on cardiac interoception in
  autistic participants (consistent with Garfinkel et al. 2016), not a
  blanket "autism = worse interoception" claim.
- Perth Alexithymia Questionnaire (David Preece, Curtin University) — a
  legitimate, cited clinical measure of difficulty identifying/describing
  emotions.
- Goodall & Brownlow, *Interoception and Regulation: Teaching Skills of
  Body Awareness and Supporting Connection with Others* (Jessica Kingsley
  Publishers) — frames interoception as underpinning both physical
  milestones and emotional self-regulation.
- Neurodivergent Insights, "Improving Interoception in Autism" (Dr. Megan
  Anna Neff) — cites Garfinkel et al. 2016 (accuracy/sensibility paradox)
  and Mahler et al. 2022 (practicing linking body signals to emotions
  improved emotional regulation in autistic children); introduces the
  "Interoception Pyramid" this app's mechanic follows.
- Lindsay Braman, Emotion Sensation Wheel (lindsaybraman.com) — a
  clinician-made body-sensation reference used for the 6 stretch emotions'
  signatures (Shocked, Confused, Excited, Disgust, Shame); same tier as the
  general vocabulary charts below — inspiration for wording, not a
  peer-reviewed claim.
- Humber Sensory Processing Hub (Humber Teaching NHS Foundation Trust) — an
  NHS clinical service page confirming the tight-chest + racing-heart +
  tense-muscles → anxiety signal combination this app is built around.

## Tech stack

- **Frontend:** React 19 + Vite, plain CSS
- **Routing:** React Router (hash-based, so it works on static hosting
  with no server config)
- **State:** React state + `localStorage` — no backend, no auth, no
  database
- **Lint:** oxlint

## Development

```bash
npm install
npm run dev       # local dev server
npm run build     # production build to dist/
npm run preview   # preview the production build
npm run lint      # oxlint
```
