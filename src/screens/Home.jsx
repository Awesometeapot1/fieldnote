import { useNavigate } from 'react-router-dom'
import RabbitIcon from '../components/RabbitIcon'
import HareIcon from '../components/HareIcon'
import { useCheckIn } from '../context/CheckInContext'
import { useSettings } from '../context/SettingsContext'

export default function Home() {
  const navigate = useNavigate()
  const { reset } = useCheckIn()
  const { t } = useSettings()

  function startCheckIn() {
    reset()
    navigate('/checkin')
  }

  return (
    <div className="screen">
      <div className="card" style={{ textAlign: 'center', padding: '32px 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginBottom: 16 }}>
          <RabbitIcon size={56} />
          <HareIcon size={56} />
        </div>
        <h1>{t('homeHeading')}</h1>
        <p className="muted">{t('homeSub')}</p>
        <div className="stack" style={{ marginTop: 20 }}>
          <button className="btn btn-primary" onClick={startCheckIn}>
            Start check-in
          </button>
          <button className="btn btn-secondary" onClick={() => navigate('/history')}>
            Hare remembers
          </button>
        </div>
      </div>

      <div className="card">
        <div className="eyebrow">Why body-first</div>
        <p style={{ marginBottom: 0 }}>{t('homeWhy')}</p>
      </div>
    </div>
  )
}
