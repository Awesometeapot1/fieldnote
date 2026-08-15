export const REGIONS = [
  { id: 'head', label: 'Head / face' },
  { id: 'jaw', label: 'Jaw' },
  { id: 'throat', label: 'Throat / mouth' },
  { id: 'shoulders', label: 'Shoulders' },
  { id: 'chest', label: 'Chest' },
  { id: 'stomach', label: 'Stomach' },
  { id: 'hands', label: 'Arms / hands' },
  { id: 'legs', label: 'Legs' },
]

// Tap points overlaid on the body outline illustration. Coordinates are in
// the outline's own viewBox space (0-100 wide, 0-216 tall). Some regions
// (hands, legs) get two symmetric points. Neck region is deliberately
// stretched (head 20 -> jaw 35 -> throat 48 -> shoulders 60) to give the
// throat point room to sit clearly separate from its neighbors at the
// 26px tap-point size — see index.css .tap-point.
export const TAP_POINTS = [
  { regionId: 'head', x: 50, y: 20 },
  { regionId: 'jaw', x: 50, y: 35 },
  { regionId: 'throat', x: 50, y: 48 },
  { regionId: 'shoulders', x: 50, y: 60 },
  { regionId: 'chest', x: 50, y: 85 },
  { regionId: 'stomach', x: 50, y: 112 },
  { regionId: 'hands', x: 17, y: 92 },
  { regionId: 'hands', x: 83, y: 92 },
  { regionId: 'legs', x: 41, y: 198 },
  { regionId: 'legs', x: 59, y: 198 },
]

export const FALLBACK_REGIONS = [
  { id: 'wholebody', label: 'Whole body' },
  { id: 'unsure', label: 'Not sure' },
]

export const ALL_REGIONS = [...REGIONS, ...FALLBACK_REGIONS]

export function regionLabel(id) {
  return ALL_REGIONS.find((r) => r.id === id)?.label ?? id
}
