// Body signal checklist. Wording follows the descriptive-not-evaluative
// principle: concrete physical words ("tight", "heavy") rather than
// evaluative ("bad", "hurt") or global/emotion words ("anxious", "pain").
// `regions` tags which body-tap areas surface this signal as a chip.
//
// Entries below marked "NHS" are phrased directly from the Humber Sensory
// Processing Hub interoception page (connect.humber.nhs.uk); entries
// marked "Braman" are mapped from Lindsay Braman's Emotion Sensation
// Wheel — same two sources already cited for the emotion signatures.
export const SIGNALS = [
  { id: 'shaking', label: 'Hands shaking / trembling', short: 'shaky hands', regions: ['hands'] },
  { id: 'heartPounding', label: 'Heart pounding or racing', short: 'racing heart', regions: ['chest'] },
  { id: 'fastBreathing', label: 'Fast or heavy breathing', short: 'fast breathing', regions: ['chest'] },
  { id: 'butterflies', label: 'Stomach flip-flopping / butterflies', short: 'butterflies', regions: ['stomach'] },
  { id: 'sweating', label: 'Sweating', short: 'sweating', regions: ['hands', 'wholebody'] },
  { id: 'jawClenched', label: 'Jaw or fists clenched', short: 'clenched jaw', regions: ['jaw', 'hands'] },
  { id: 'faceHot', label: 'Face red or hot / blushing', short: 'hot face', regions: ['head'] },
  { id: 'tearingUp', label: 'Tearing up', short: 'tearing up', regions: ['head'] },
  { id: 'heavyChest', label: 'Heavy chest / lump in throat', short: 'heavy chest', regions: ['chest'] },
  { id: 'heavySlow', label: 'Body feels heavy, slow, low energy', short: 'heavy, slow body', regions: ['wholebody'] },
  { id: 'fidgety', label: 'Fidgety, restless body', short: 'restless body', regions: ['hands', 'legs'] },
  { id: 'frozen', label: 'Wide eyes / body frozen', short: 'wide eyes, frozen', regions: ['head', 'wholebody'] },
  { id: 'moveAway', label: 'Body wants to move away / avoid', short: 'wanting to move away', regions: ['legs', 'wholebody'] },
  { id: 'tenseMuscles', label: 'Muscles tense, shoulders tight', short: 'tight shoulders', regions: ['shoulders', 'wholebody'] },
  { id: 'lookingDown', label: 'Looking down, avoiding eye contact', short: 'avoiding eye contact', regions: ['head'] },
  { id: 'talkingFast', label: 'Talking fast, high energy', short: 'talking fast', regions: ['jaw', 'wholebody'] },
  { id: 'faceRelaxed', label: 'Face relaxed, smiling', short: 'relaxed face', regions: ['head'] },
  { id: 'calmLight', label: 'Body calm and light', short: 'calm, light body', regions: ['wholebody'] },
  { id: 'cloudyMind', label: 'Mind feels cloudy or unfocused', short: 'cloudy mind', regions: ['head'] },
  { id: 'droopyEyes', label: 'Droopy eyes, yawning', short: 'droopy eyes', regions: ['head'] },
  { id: 'shivering', label: 'Shivering, hugging self', short: 'shivering', regions: ['hands', 'wholebody'] },
  // NHS-sourced
  { id: 'dryMouth', label: 'Mouth feels dry', short: 'dry mouth', regions: ['throat', 'jaw'] },
  { id: 'tightChest', label: 'Chest feels tight', short: 'tight chest', regions: ['chest'] },
  { id: 'growlingStomach', label: 'Stomach growling or hungry', short: 'growling stomach', regions: ['stomach'] },
  { id: 'goosebumps', label: 'Goosebumps or skin prickling', short: 'goosebumps', regions: ['hands', 'wholebody'] },
  // Braman-sourced
  { id: 'numbness', label: 'Hands or body feel numb', short: 'numb', regions: ['hands', 'wholebody'] },
  { id: 'headache', label: 'Headache or pressure in head', short: 'headache', regions: ['head'] },
  { id: 'hollow', label: 'Empty or hollow feeling', short: 'hollow feeling', regions: ['stomach', 'chest', 'wholebody'] },
  { id: 'heartSlow', label: 'Heartbeat feels slow or faint', short: 'slow heartbeat', regions: ['chest'] },
]

export const SIGNAL_BY_ID = Object.fromEntries(SIGNALS.map((s) => [s.id, s]))

export function signalsForRegion(regionId) {
  if (regionId === 'unsure') return SIGNALS
  return SIGNALS.filter((s) => s.regions.includes(regionId))
}
