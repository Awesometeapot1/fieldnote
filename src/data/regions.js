export const REGIONS = [
  { id: 'head', label: 'Head / face' },
  { id: 'jaw', label: 'Jaw' },
  { id: 'shoulders', label: 'Shoulders' },
  { id: 'chest', label: 'Chest' },
  { id: 'stomach', label: 'Stomach' },
  { id: 'hands', label: 'Arms / hands' },
  { id: 'legs', label: 'Legs' },
]

// Tap points overlaid on the body outline illustration. Coordinates are in
// the outline's own viewBox space (0-100 wide, 0-200 tall). Some regions
// (hands, legs) get two symmetric points.
export const TAP_POINTS = [
  { regionId: 'head', x: 50, y: 20 },
  { regionId: 'jaw', x: 50, y: 36 },
  { regionId: 'shoulders', x: 50, y: 52 },
  { regionId: 'chest', x: 50, y: 72 },
  { regionId: 'stomach', x: 50, y: 96 },
  { regionId: 'hands', x: 17, y: 86 },
  { regionId: 'hands', x: 83, y: 86 },
  { regionId: 'legs', x: 41, y: 165 },
  { regionId: 'legs', x: 59, y: 165 },
]

export const FALLBACK_REGIONS = [
  { id: 'wholebody', label: 'Whole body' },
  { id: 'unsure', label: 'Not sure' },
]

export const ALL_REGIONS = [...REGIONS, ...FALLBACK_REGIONS]

export function regionLabel(id) {
  return ALL_REGIONS.find((r) => r.id === id)?.label ?? id
}
