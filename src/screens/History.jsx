import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import HareIcon from '../components/HareIcon'
import { loadHistory } from '../lib/storage'
import { EMOTION_BY_ID } from '../data/emotions'
import { SIGNAL_BY_ID } from '../data/signals'
import { regionLabel } from '../data/regions'

const PAGE_SIZE = 6

export default function History() {
  const navigate = useNavigate()
  const history = useMemo(() => loadHistory(), [])
  const [visible, setVisible] = useState(PAGE_SIZE)

  return (
    <div className="screen">
      <h1>Hare remembers</h1>
      <p className="muted">Your check-in history, kept only on this device.</p>

      {history.length === 0 ? (
        <div className="card" style={{ textAlign: 'center' }}>
          <HareIcon size={40} />
          <p style={{ marginTop: 12, marginBottom: 16 }}>
            Nothing logged yet. Once you've done a few check-ins, patterns
            will start showing up here.
          </p>
          <button className="btn btn-primary" onClick={() => navigate('/checkin')}>
            Start a check-in
          </button>
        </div>
      ) : (
        <>
          <div className="stack">
            {history.slice(0, visible).map((entry) => (
              <HistoryCard key={entry.id} entry={entry} />
            ))}
          </div>
          {visible < history.length && (
            <button className="btn btn-secondary" style={{ marginTop: 16 }} onClick={() => setVisible((v) => v + PAGE_SIZE)}>
              See more history
            </button>
          )}
        </>
      )}
    </div>
  )
}

function HistoryCard({ entry }) {
  const emotion = entry.topEmotionId ? EMOTION_BY_ID[entry.topEmotionId] : null
  const date = new Date(entry.date)
  const dateLabel = date.toLocaleDateString(undefined, { month: 'short', day: 'numeric' })
  const timeLabel = date.toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit' })

  return (
    <div className="card history-entry">
      <div className="history-entry-header">
        <span className="eyebrow">{dateLabel} · {timeLabel}</span>
        {emotion && <span className="tag lilac">{emotion.label}</span>}
      </div>
      <p className="muted" style={{ marginBottom: 4 }}>{regionLabel(entry.region)}</p>
      <div className="tag-row">
        {(entry.signalIds ?? []).map((id) => (
          <span key={id} className="tag sage">
            {SIGNAL_BY_ID[id]?.short ?? id}
          </span>
        ))}
      </div>
      {entry.note && <p style={{ marginTop: 8, marginBottom: 0 }}>{entry.note}</p>}
    </div>
  )
}
