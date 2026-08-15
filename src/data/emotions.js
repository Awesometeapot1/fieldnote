// Sensation -> emotion signature table. Cross-referenced from emotion/body
// signal education charts, not a clinical instrument: it's an explainable,
// editable lookup, not a black-box guess. `windowPosition` is 0-100 for
// placing the emotion on the window-of-tolerance gradient (see
// lib/windowOfTolerance.js for the zone bands).
export const EMOTIONS = [
  {
    id: 'afraid',
    label: 'Afraid',
    signature: ['shaking', 'heartPounding', 'fastBreathing', 'frozen', 'tenseMuscles'],
    windowPosition: 82,
    regulation: [
      { id: 'sitComfortably', label: 'Sit somewhere you can see the exits', hint: 'Orienting to the room can take the edge off a startle response.' },
      { id: 'water', label: 'Cold water on your hands or wrists', hint: 'A quick sensory reset.' },
    ],
  },
  {
    id: 'anxious',
    label: 'Anxious / Nervous',
    signature: ['fidgety', 'butterflies', 'jawClenched', 'fastBreathing'],
    windowPosition: 75,
    regulation: [
      { id: 'breathing', label: 'One slow breath out, longer than the in-breath', hint: 'Long exhale nudges the nervous system down a notch.' },
      { id: 'walk', label: 'Short walk, no destination', hint: 'Movement gives restless energy somewhere to go.' },
    ],
  },
  {
    id: 'angry',
    label: 'Angry',
    signature: ['faceHot', 'jawClenched', 'heartPounding', 'tenseMuscles'],
    windowPosition: 85,
    regulation: [
      { id: 'stepOutside', label: 'Step outside, even just a doorway', hint: 'A change of space interrupts the buildup.' },
      { id: 'headphones', label: 'Headphones, something loud or low', hint: 'Redirects the energy without needing to talk yet.' },
    ],
  },
  {
    id: 'sad',
    label: 'Sad',
    signature: ['heavyChest', 'tearingUp', 'heavySlow', 'lookingDown'],
    windowPosition: 28,
    regulation: [
      { id: 'sitComfortably', label: 'Sit somewhere soft, no pressure to talk', hint: 'Let it be there for a minute before doing anything about it.' },
      { id: 'water', label: 'Glass of water', hint: 'Small, doable, non-demanding.' },
    ],
  },
  {
    id: 'embarrassed',
    label: 'Embarrassed',
    signature: ['faceHot', 'lookingDown', 'fidgety', 'butterflies'],
    windowPosition: 58,
    regulation: [
      { id: 'stepOutside', label: 'A minute away from the room', hint: 'Gives the flush time to pass without an audience.' },
      { id: 'breathing', label: 'Slow breath, shoulders down', hint: 'Interrupts the urge to overexplain.' },
    ],
  },
  {
    id: 'happy',
    label: 'Happy',
    signature: ['calmLight', 'faceRelaxed'],
    windowPosition: 52,
    regulation: [
      { id: 'nothing', label: 'Nothing right now', hint: 'Nothing to regulate here — just noting it.' },
    ],
  },
  {
    id: 'tired',
    label: 'Tired',
    signature: ['heavySlow', 'droopyEyes', 'cloudyMind'],
    windowPosition: 15,
    regulation: [
      { id: 'sitComfortably', label: 'Sit or lie down for a few minutes', hint: 'Low-energy states usually need rest, not a fix.' },
      { id: 'water', label: 'Water and a snack', hint: 'Worth ruling out before anything else.' },
    ],
  },
  {
    id: 'overwhelmed',
    label: 'Overwhelmed',
    signature: ['tenseMuscles', 'moveAway', 'cloudyMind', 'fastBreathing'],
    windowPosition: 92,
    regulation: [
      { id: 'stepOutside', label: 'Step outside for two minutes', hint: 'Less input, even briefly, helps here.' },
      { id: 'headphones', label: 'Headphones or somewhere quieter', hint: 'Cuts down the sensory load fast.' },
    ],
  },

  // Stretch set — signatures cross-referenced against Lindsay Braman's
  // Emotion Sensation Wheel (lindsaybraman.com), a clinician-made body-
  // sensation reference, same tier of source as the general vocabulary
  // charts already noted in the project sourcing (inspiration for wording,
  // not a peer-reviewed claim). Mapped onto the existing 21-signal
  // vocabulary rather than inventing new signal types.
  {
    id: 'shocked',
    label: 'Shocked',
    signature: ['frozen', 'heartPounding', 'fastBreathing', 'sweating'],
    windowPosition: 88,
    regulation: [
      { id: 'sitComfortably', label: 'Sit down, name a few things you can see', hint: 'Orienting to the room helps the nervous system catch up after a jolt.' },
      { id: 'water', label: 'Cold water on your hands or wrists', hint: 'Same quick reset that works for a startle response.' },
    ],
  },
  {
    id: 'confused',
    label: 'Confused',
    signature: ['cloudyMind', 'frozen', 'fidgety'],
    windowPosition: 45,
    regulation: [
      { id: 'sitComfortably', label: 'Pause instead of pushing through', hint: "Confusion usually clears with a beat, not more effort." },
      { id: 'walk', label: 'Step away and come back to it', hint: 'Distance often makes the confusing thing clearer.' },
    ],
  },
  {
    id: 'excited',
    label: 'Excited',
    // Overlaps heavily with Anxious/Afraid on purpose — the physiological
    // signature of high arousal is genuinely ambiguous between "excited"
    // and "anxious" (classic misattribution-of-arousal finding in affect
    // research); the app surfacing both as candidates here is accurate,
    // not a matching bug.
    signature: ['heartPounding', 'fastBreathing', 'talkingFast', 'fidgety'],
    windowPosition: 70,
    regulation: [
      { id: 'walk', label: 'Let some of that energy move', hint: "Doesn't have to go anywhere — moving helps it land somewhere." },
      { id: 'nothing', label: 'Nothing right now', hint: 'Excitement usually just needs noticing, not regulating.' },
    ],
  },
  {
    id: 'disgust',
    label: 'Disgust',
    signature: ['moveAway', 'butterflies', 'heavyChest', 'shaking'],
    windowPosition: 62,
    regulation: [
      { id: 'stepOutside', label: 'Get some distance from it', hint: 'Physical distance mirrors what disgust is already telling you to do.' },
      { id: 'water', label: 'Rinse your hands or splash water on your face', hint: 'A concrete physical reset for a very physical reaction.' },
    ],
  },
  {
    id: 'shame',
    label: 'Shame',
    signature: ['lookingDown', 'moveAway', 'heavySlow'],
    windowPosition: 32,
    regulation: [
      { id: 'sitComfortably', label: 'Somewhere soft, no pressure to explain', hint: 'Shame tends to shrink with unhurried company — even just your own.' },
      { id: 'water', label: 'A glass of water, then decide what next', hint: 'Small and doable, before anything bigger.' },
    ],
  },
  {
    id: 'cold',
    label: 'Cold',
    // Not from the sensation wheel — a physical-state entry alongside
    // Tired, per the Humber NHS interoception page already cited (which
    // lists recognising hunger/thirst/tiredness as commonly-confused
    // physical states, not just emotions).
    signature: ['shivering', 'heavySlow'],
    windowPosition: 22,
    regulation: [
      { id: 'warmUp', label: 'Something warm — a blanket, a hot drink', hint: "Worth ruling out before assuming it's something else." },
      { id: 'sitComfortably', label: 'Sit somewhere warmer', hint: 'Simple, and easy to actually do.' },
    ],
  },
]

export const EMOTION_BY_ID = Object.fromEntries(EMOTIONS.map((e) => [e.id, e]))

export const REGULATION_OPTIONS = [
  { id: 'stepOutside', label: 'Step outside' },
  { id: 'water', label: 'Water' },
  { id: 'breathing', label: 'One slow breath' },
  { id: 'walk', label: 'Short walk' },
  { id: 'headphones', label: 'Headphones' },
  { id: 'sitComfortably', label: 'Sit somewhere comfortable' },
  { id: 'nothing', label: 'Nothing right now' },
  { id: 'warmUp', label: 'Warm up' },
]
