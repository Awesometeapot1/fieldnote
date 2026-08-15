import { useNavigate } from 'react-router-dom'
import HareIcon from '../components/HareIcon'
import { useCheckIn } from '../context/CheckInContext'
import { SIGNAL_BY_ID } from '../data/signals'
import { REGULATION_OPTIONS } from '../data/emotions'
import { regionLabel } from '../data/regions'
import { addHistoryEntry } from '../lib/storage'

export default function Summary() {
  const navigate = useNavigate()
  const { region, signalIds, matches, hareFeedback, regulationChoice, note, update, reset } = useCheckIn()
  const topMatch = matches?.[0]
  const chosenRegulation = REGULATION_OPTIONS.find((r) => r.id === regulationChoice)

  function handleDone() {
    addHistoryEntry({
      region,
      signalIds,
      topEmotionId: topMatch?.emotion.id ?? null,
      matchedEmotionIds: matches?.map((m) => m.emotion.id) ?? [],
      hareFeedback,
      regulationChoice,
      note,
    })
    reset()
    navigate('/history')
  }

  return (
    <div className="screen">
      <div className="card hare-bubble">
        <div className="icon-wrap">
          <HareIcon size={26} />
        </div>
        <div className="speech">Here's what we noticed, for the record.</div>
      </div>

      <div className="card stack">
        <div>
          <div className="eyebrow">Where</div>
          <p style={{ marginBottom: 0 }}>{regionLabel(region)}</p>
        </div>
        <div>
          <div className="eyebrow">What you noticed</div>
          <div className="tag-row">
            {signalIds.length ? (
              signalIds.map((id) => (
                <span key={id} className="tag sage">
                  {SIGNAL_BY_ID[id].short}
                </span>
              ))
            ) : (
              <span className="muted">Nothing specific noted</span>
            )}
          </div>
        </div>
        <div>
          <div className="eyebrow">What Hare thinks it means</div>
          <p style={{ marginBottom: 0 }}>
            {topMatch ? topMatch.emotion.label : 'Not enough signal to guess'}
            {hareFeedback ? ` — you said "${hareFeedback}"` : ''}
          </p>
        </div>
        {chosenRegulation && (
          <div>
            <div className="eyebrow">What you're trying</div>
            <p style={{ marginBottom: 0 }}>{chosenRegulation.label}</p>
          </div>
        )}
      </div>

      <div className="card">
        <label htmlFor="note" className="eyebrow" style={{ display: 'block' }}>
          Optional note
        </label>
        <textarea
          id="note"
          rows={3}
          placeholder="Anything else worth remembering about this one..."
          value={note}
          onChange={(e) => update({ note: e.target.value })}
        />
      </div>

      <button className="btn btn-primary" onClick={handleDone}>
        Done
      </button>
    </div>
  )
}
