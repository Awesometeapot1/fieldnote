// Window of tolerance: a gradient from shut-down/low-arousal, through the
// "in window" balanced band, to overwhelmed/high-arousal. Position is 0-100.
export const ZONES = [
  { id: 'low', label: 'Too low / Shut down', max: 33 },
  { id: 'window', label: 'In window / Balanced', max: 66 },
  { id: 'high', label: 'Too high / Overwhelmed', max: 100 },
]

export function zoneForPosition(position) {
  return ZONES.find((z) => position <= z.max) ?? ZONES[ZONES.length - 1]
}

export function edgeMessage(position, tone = 'playful') {
  if (tone === 'plain') {
    if (position >= 70) return "You're near the high edge of your window right now — a good time to pause."
    if (position <= 25) return "You're near the low edge of your window right now — low energy, not urgent."
    return "You're inside your window right now."
  }
  if (position >= 70) {
    return "You're pushing toward the edge of your window right now — that's usually a good time to pause."
  }
  if (position <= 25) {
    return "You're sitting low in your window right now — low energy, not a problem to solve."
  }
  return "You're inside your window right now — steady, not urgent."
}
