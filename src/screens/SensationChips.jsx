import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import RabbitIcon from '../components/RabbitIcon'
import { useCheckIn } from '../context/CheckInContext'
import { signalsForRegion } from '../data/signals'
import { regionLabel } from '../data/regions'
import { matchEmotions } from '../lib/matching'

export default function SensationChips() {
  const navigate = useNavigate()
  const { region, signalIds, toggleSignal, update } = useCheckIn()

  useEffect(() => {
    if (!region) navigate('/checkin', { replace: true })
  }, [region, navigate])

  if (!region) return null

  const options = signalsForRegion(region)

  function handleContinue() {
    const matches = matchEmotions(signalIds)
    update({ matches })
    navigate('/checkin/read')
  }

  return (
    <div className="screen">
      <div className="progress-dots">
        <div className="progress-dot active" />
        <div className="progress-dot active" />
        <div className="progress-dot" />
        <div className="progress-dot" />
      </div>

      <div className="card hare-bubble">
        <div className="icon-wrap">
          <RabbitIcon size={26} />
        </div>
        <div className="speech">
          Around your {regionLabel(region).toLowerCase()} — what do you
          notice? No wrong answers, just tell me what you notice. Pick as
          many as apply.
        </div>
      </div>

      <div className="card">
        <div className="chip-grid">
          {options.map((signal) => (
            <button
              key={signal.id}
              type="button"
              className={'chip' + (signalIds.includes(signal.id) ? ' selected' : '')}
              onClick={() => toggleSignal(signal.id)}
              aria-pressed={signalIds.includes(signal.id)}
            >
              {signal.short}
            </button>
          ))}
        </div>
      </div>

      <div className="stack">
        <button className="btn btn-primary" onClick={handleContinue}>
          Continue
        </button>
        <button className="btn btn-ghost" onClick={handleContinue}>
          I don't know — that's okay too
        </button>
      </div>
    </div>
  )
}
