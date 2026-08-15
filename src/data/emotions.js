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
]
