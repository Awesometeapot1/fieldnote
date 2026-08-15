import { useEffect, useState } from 'react'
import HareIcon from './HareIcon'
import { useSettings } from '../context/SettingsContext'
import { loadHistory } from '../lib/storage'
import { checkOutsideWindowPattern, loadDismissedAt, setDismissedNow, shouldShowNudge } from '../lib/wellbeing'

// findahelpline.com routes by country rather than assuming one — the app
// has no location data and shouldn't guess.
const HELPLINE_URL = 'https://findahelpline.com'

export default function WellbeingNudge() {
  const { wellbeingNudgesEnabled } = useSettings()
  const [visible, setVisible] = useState(false)
  const [pattern, setPattern] = useState(null)

  useEffect(() => {
    if (!wellbeingNudgesEnabled) {
      setVisible(false)
      return
    }
    const found = checkOutsideWindowPattern(loadHistory())
    setPattern(found)
    setVisible(shouldShowNudge(found, loadDismissedAt()))
  }, [wellbeingNudgesEnabled])

  if (!visible || !pattern) return null

  function handleDismiss() {
    setDismissedNow()
    setVisible(false)
  }

  return (
    <div className="card hare-bubble wellbeing-nudge">
      <div className="icon-wrap">
        <HareIcon size={26} />
      </div>
      <div style={{ flex: 1 }}>
        <div className="eyebrow">Hare's noticed something</div>
        <div className="speech">
          {pattern.count} of your check-ins in the last {pattern.windowDays} days landed
          outside your window of tolerance. That's a pattern worth taking seriously, not
          just a rough day — here's somewhere to find support if you want it.
        </div>
        <p className="muted" style={{ margin: '10px 0 0' }}>
          This isn't a diagnosis, just a count of what you've logged — {pattern.threshold}+
          outside-window check-ins in {pattern.windowDays} days is what triggers it. Turn it
          off anytime in Settings.
        </p>
        <div className="stack" style={{ marginTop: 12 }}>
          <a
            className="btn btn-secondary"
            href={HELPLINE_URL}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: 'none' }}
          >
            Find a helpline for your country
          </a>
          <button type="button" className="btn btn-ghost" onClick={handleDismiss}>
            Not right now
          </button>
        </div>
      </div>
    </div>
  )
}
