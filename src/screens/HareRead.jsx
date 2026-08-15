import { useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import HareIcon from '../components/HareIcon'
import PatternCallout from '../components/PatternCallout'
import { useCheckIn } from '../context/CheckInContext'
import { explainMatch } from '../lib/matching'
import { loadHistory, findPattern } from '../lib/storage'

const FEEDBACK_OPTIONS = [
  { id: 'no', label: 'No' },
  { id: 'maybe', label: 'Maybe' },
  { id: 'yes', label: 'Yes' },
]

export default function HareRead() {
  const navigate = useNavigate()
  const { matches, hareFeedback, update, signalIds } = useCheckIn()

  useEffect(() => {
    if (!matches) navigate('/checkin', { replace: true })
  }, [matches, navigate])

  const topMatch = matches?.[0]

  const pattern = useMemo(() => {
    if (!signalIds?.length) return null
    const history = loadHistory()
    return findPattern(signalIds, topMatch?.emotion?.id ?? null, history)
  }, [signalIds, topMatch])

  function handleContinue() {
    navigate('/checkin/window')
  }

  return (
    <div className="screen">
      <div className="progress-dots">
        <div className="progress-dot active" />
        <div className="progress-dot active" />
        <div className="progress-dot active" />
        <div className="progress-dot" />
      </div>

      <div className="card hare-bubble">
        <div className="icon-wrap">
          <HareIcon size={26} />
        </div>
        <div>
          <div className="eyebrow">Hare's read</div>
          {topMatch ? (
            <div className="speech" style={{ textTransform: 'capitalize' }}>
              {explainMatch(topMatch).charAt(0).toUpperCase() + explainMatch(topMatch).slice(1)}
            </div>
          ) : (
            <div className="speech">
              Not much to go on this time — that's fine too. Sometimes just
              noticing nothing clearly is the useful part.
            </div>
          )}
        </div>
      </div>

      {matches?.length > 1 && (
        <div className="card">
          <div className="eyebrow">Could also be</div>
          <div className="tag-row">
            {matches.slice(1).map((m) => (
              <span key={m.emotion.id} className="tag lilac">
                {m.emotion.label}
              </span>
            ))}
          </div>
        </div>
      )}

      {topMatch && (
        <div className="card">
          <p className="muted" style={{ marginBottom: 12 }}>
            I could be wrong — tell me if this doesn't feel right.
          </p>
          <div className="chip-grid">
            {FEEDBACK_OPTIONS.map((opt) => (
              <button
                key={opt.id}
                type="button"
                className={'chip' + (hareFeedback === opt.id ? ' selected' : '')}
                onClick={() => update({ hareFeedback: opt.id })}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      )}

      <PatternCallout pattern={pattern} />

      <button className="btn btn-primary" onClick={handleContinue}>
        Continue
      </button>
    </div>
  )
}
