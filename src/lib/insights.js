// Aggregates check-in history into ranked counts for the Trends view.
// Plain magnitude comparisons — no inference, just counting what's already
// in the log, same "transparent, not a black box" principle as the matching
// table itself.
export function tallyBy(history, key) {
  const tally = {}
  for (const entry of history) {
    const value = entry[key]
    if (!value) continue
    tally[value] = (tally[value] || 0) + 1
  }
  return tally
}

export function rankTally(tally, labelFor) {
  return Object.entries(tally)
    .map(([id, count]) => ({ id, label: labelFor(id), count }))
    .sort((a, b) => b.count - a.count)
}
