import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import HareIcon from '../components/HareIcon'
import WindowBar from '../components/WindowBar'
import { useCheckIn } from '../context/CheckInContext'
import { SIGNAL_BY_ID } from '../data/signals'
import { edgeMessage } from '../lib/windowOfTolerance'

export default function WindowOfTolerance() {
  const navigate = useNavigate()
  const { matches, signalIds, update } = useCheckIn()

  const topMatch = matches?.[0]
  const position = topMatch ? topMatch.emotion.windowPosition : 50

  useEffect(() => {
    update({ windowPosition: position })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [position])

  return (
    <div className="screen">
      <div className="progress-dots">
        <div className="progress-dot active" />
        <div className="progress-dot active" />
        <div className="progress-dot active" />
        <div className="progress-dot active" />
      </div>

      <div className="card hare-bubble">
        <div className="icon-wrap">
          <HareIcon size={26} />
        </div>
        <div className="speech">{edgeMessage(position)}</div>
      </div>

      <div className="card">
        <div className="eyebrow">Where you're at</div>
        <WindowBar position={position} />
      </div>

      {signalIds?.length > 0 && (
        <div className="card">
          <div className="eyebrow">Signs I'm noticing</div>
          <div className="tag-row">
            {signalIds.map((id) => (
              <span key={id} className="tag sage">
                {SIGNAL_BY_ID[id].short}
              </span>
            ))}
          </div>
        </div>
      )}

      <button className="btn btn-primary" onClick={() => navigate('/checkin/suggestion')}>
        Continue
      </button>
    </div>
  )
}
