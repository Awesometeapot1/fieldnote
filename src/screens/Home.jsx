import { useNavigate } from 'react-router-dom'
import RabbitIcon from '../components/RabbitIcon'
import HareIcon from '../components/HareIcon'
import { useCheckIn } from '../context/CheckInContext'

export default function Home() {
  const navigate = useNavigate()
  const { reset } = useCheckIn()

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
        <h1>Want to check in with your body?</h1>
        <p className="muted">
          Start from what you notice physically. Rabbit will ask a few quick
          questions, then Hare will help make sense of it.
        </p>
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
        <p style={{ marginBottom: 0 }}>
          "How are you feeling?" can be a hard question to answer directly.
          This starts from something more concrete — what your body is
          actually doing right now — and works backwards to a probable
          emotion.
        </p>
      </div>
    </div>
  )
}
