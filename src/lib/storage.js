const HISTORY_KEY = 'fieldnote_history_v1'

export function loadHistory() {
  try {
    const raw = localStorage.getItem(HISTORY_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export function saveHistory(history) {
  try {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history))
  } catch {
    // localStorage unavailable (private browsing, quota, etc.) — fail quietly,
    // the check-in flow still works for the current session.
  }
}

export function addHistoryEntry(entry) {
  const history = loadHistory()
  const withId = { id: crypto.randomUUID(), date: new Date().toISOString(), ...entry }
  const next = [withId, ...history]
  saveHistory(next)
  return withId
}

export function clearHistory() {
  saveHistory([])
}

// Looks for a recurring signal -> emotion pattern: a signal that's shown up
// in at least 3 past check-ins, consistently paired with one emotion. This
// is what powers the "last 3 times your shoulders were tight, it turned out
// to be overwhelm" callout.
export function findPattern(currentSignalIds, currentTopEmotionId, history) {
  for (const signalId of currentSignalIds) {
    const entries = history.filter((e) => e.signalIds?.includes(signalId))
    if (entries.length < 3) continue

    const tally = {}
    for (const e of entries) {
      if (!e.topEmotionId) continue
      tally[e.topEmotionId] = (tally[e.topEmotionId] || 0) + 1
    }
    const ranked = Object.entries(tally).sort((a, b) => b[1] - a[1])
    if (!ranked.length) continue
    const [dominantEmotion, dominantCount] = ranked[0]
    if (dominantCount >= 3) {
      return {
        signalId,
        emotionId: dominantEmotion,
        count: dominantCount,
        differsFromCurrent: currentTopEmotionId && dominantEmotion !== currentTopEmotionId,
      }
    }
  }
  return null
}
