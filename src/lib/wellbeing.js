import { EMOTION_BY_ID } from '../data/emotions'
import { zoneForPosition } from './windowOfTolerance'

// Deliberately simple and stated in plain numbers, not inferred: counts
// check-ins from the last WINDOW_DAYS whose matched emotion landed outside
// the window of tolerance in either direction (too high OR too low), using
// the same zone bands as the window-of-tolerance screen. This is NOT a
// crisis or self-harm risk detector — body-sensation self-report has no
// reliable signal for that, and pretending otherwise would be dishonest.
// It's a frequency count offered as a gentle, dismissible nudge toward
// outside support, same "transparent lookup, not a black box" principle
// as the rest of the app. See README "Noticing patterns responsibly".
const WINDOW_DAYS = 7
const THRESHOLD = 3

export function checkOutsideWindowPattern(history) {
  const cutoff = Date.now() - WINDOW_DAYS * 24 * 60 * 60 * 1000
  const qualifying = history
    .filter((entry) => new Date(entry.date).getTime() >= cutoff)
    .filter((entry) => {
      const emotion = entry.topEmotionId ? EMOTION_BY_ID[entry.topEmotionId] : null
      if (!emotion) return false
      const zone = zoneForPosition(emotion.windowPosition)
      return zone.id === 'high' || zone.id === 'low'
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date))

  if (qualifying.length < THRESHOLD) return null

  return {
    count: qualifying.length,
    windowDays: WINDOW_DAYS,
    threshold: THRESHOLD,
    mostRecentDate: qualifying[0].date,
  }
}

const DISMISS_KEY = 'fieldnote_wellbeing_dismissed_v1'

export function loadDismissedAt() {
  try {
    const raw = localStorage.getItem(DISMISS_KEY)
    return raw ? Number(raw) : 0
  } catch {
    return 0
  }
}

export function setDismissedNow() {
  try {
    localStorage.setItem(DISMISS_KEY, String(Date.now()))
  } catch {
    // ignore
  }
}

// Re-show only once a NEW qualifying check-in lands after the last
// dismissal — so dismissing doesn't silence an ongoing, worsening pattern,
// but also doesn't nag on every app open once acknowledged.
export function shouldShowNudge(pattern, dismissedAt) {
  if (!pattern) return false
  return new Date(pattern.mostRecentDate).getTime() > dismissedAt
}
