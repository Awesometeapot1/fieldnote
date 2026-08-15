import { useNavigate } from 'react-router-dom'
import HareIcon from '../components/HareIcon'
import { useCheckIn } from '../context/CheckInContext'
import { REGULATION_OPTIONS } from '../data/emotions'

export default function HareSuggestion() {
  const navigate = useNavigate()
  const { matches, regulationChoice, update } = useCheckIn()
  const topMatch = matches?.[0]

  const suggested = topMatch?.emotion.regulation ?? []
  const suggestedIds = new Set(suggested.map((r) => r.id))
  const rest = REGULATION_OPTIONS.filter((opt) => !suggestedIds.has(opt.id))

  function choose(id) {
    update({ regulationChoice: id })
  }

  return (
    <div className="screen">
      <div className="card hare-bubble">
        <div className="icon-wrap">
          <HareIcon size={26} />
        </div>
        <div className="speech">What sounds least annoying right now?</div>
      </div>

      {suggested.length > 0 && (
        <div className="card">
          <div className="eyebrow">Might help with {topMatch.emotion.label.toLowerCase()}</div>
          <div className="stack">
            {suggested.map((opt) => (
              <button
                key={opt.id}
                type="button"
                className={'chip' + (regulationChoice === opt.id ? ' selected' : '')}
                style={{ justifyContent: 'flex-start', textAlign: 'left', height: 'auto', padding: '12px 16px' }}
                onClick={() => choose(opt.id)}
              >
                <span>
                  <strong style={{ display: 'block' }}>{opt.label}</strong>
                  <span className="muted">{opt.hint}</span>
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="card">
        <div className="eyebrow">Or something else</div>
        <div className="chip-grid">
          {rest.map((opt) => (
            <button
              key={opt.id}
              type="button"
              className={'chip' + (regulationChoice === opt.id ? ' selected' : '')}
              onClick={() => choose(opt.id)}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      <p className="muted" style={{ textAlign: 'center' }}>
        You can always change your mind.
      </p>

      <button className="btn btn-primary" onClick={() => navigate('/checkin/summary')}>
        Continue
      </button>
    </div>
  )
}
