import { useNavigate } from 'react-router-dom'
import RabbitIcon from '../components/RabbitIcon'
import BodyOutline from '../components/BodyOutline'
import { useCheckIn } from '../context/CheckInContext'

export default function BodyTap() {
  const navigate = useNavigate()
  const { region, update } = useCheckIn()

  function selectRegion(regionId) {
    update({ region: regionId, signalIds: [] })
  }

  return (
    <div className="screen">
      <div className="progress-dots">
        <div className="progress-dot active" />
        <div className="progress-dot" />
        <div className="progress-dot" />
        <div className="progress-dot" />
      </div>

      <div className="card hare-bubble">
        <div className="icon-wrap">
          <RabbitIcon size={26} />
        </div>
        <div className="speech">
          Quick check — where's something happening in your body right now?
          Tap wherever you notice it.
        </div>
      </div>

      <div className="card">
        <BodyOutline selectedRegion={region} onSelect={selectRegion} />

        <div className="region-fallback-row">
          <button
            type="button"
            className={'chip' + (region === 'wholebody' ? ' selected' : '')}
            onClick={() => selectRegion('wholebody')}
          >
            Whole body
          </button>
          <button
            type="button"
            className={'chip' + (region === 'unsure' ? ' selected' : '')}
            onClick={() => selectRegion('unsure')}
          >
            Not sure
          </button>
        </div>
      </div>

      <button
        className="btn btn-primary"
        disabled={!region}
        onClick={() => navigate('/checkin/sensations')}
      >
        Continue
      </button>
    </div>
  )
}
