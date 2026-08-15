import { EMOTIONS } from '../data/emotions'
import { SIGNAL_BY_ID } from '../data/signals'

// Overlap-count matching: rank emotions by how many of their signature
// signals were checked off. Transparent and editable on purpose — see
// "Why a lookup table, not AI" in the project notes.
export function matchEmotions(selectedSignalIds, { max = 3 } = {}) {
  const selected = new Set(selectedSignalIds)
  const scored = EMOTIONS.map((emotion) => {
    const matched = emotion.signature.filter((id) => selected.has(id))
    return { emotion, matched, count: matched.length }
  })
    .filter((s) => s.count > 0)
    .sort((a, b) => b.count - a.count || EMOTIONS.indexOf(a.emotion) - EMOTIONS.indexOf(b.emotion))

  return scored.slice(0, max)
}

// Plain-language explanation, e.g. "tight jaw + fast breathing + restless
// body often shows up as anxious for you."
export function explainMatch(match) {
  const shortLabels = match.matched.slice(0, 3).map((id) => SIGNAL_BY_ID[id].short)
  const joined = shortLabels.join(' + ')
  return `${joined} often shows up as ${match.emotion.label.toLowerCase()} for you.`
}
