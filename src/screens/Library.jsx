import { useState } from 'react'
import { EMOTIONS } from '../data/emotions'
import { SIGNALS, SIGNAL_BY_ID } from '../data/signals'

export default function Library() {
  const [mode, setMode] = useState('bySignal')

  return (
    <div className="screen">
      <h1>Library</h1>
      <p className="muted">
        The same sensation-to-emotion table the check-in uses, laid out to
        browse. Look something up without doing a full check-in.
      </p>

      <div className="chip-grid" style={{ marginBottom: 16 }}>
        <button
          type="button"
          className={'chip' + (mode === 'bySignal' ? ' selected' : '')}
          onClick={() => setMode('bySignal')}
        >
          Browse by sensation
        </button>
        <button
          type="button"
          className={'chip' + (mode === 'byEmotion' ? ' selected' : '')}
          onClick={() => setMode('byEmotion')}
        >
          Browse by emotion
        </button>
      </div>

      <div className="card">
        {mode === 'bySignal' ? <BySignal /> : <ByEmotion />}
      </div>
    </div>
  )
}

function BySignal() {
  return (
    <div>
      {SIGNALS.map((signal) => {
        const emotions = EMOTIONS.filter((e) => e.signature.includes(signal.id))
        return (
          <details key={signal.id} className="library-entry">
            <summary>{signal.label}</summary>
            <div className="tag-row" style={{ marginTop: 10 }}>
              {emotions.length ? (
                emotions.map((e) => (
                  <span key={e.id} className="tag lilac">
                    {e.label}
                  </span>
                ))
              ) : (
                <span className="muted">Not part of a signature yet</span>
              )}
            </div>
          </details>
        )
      })}
    </div>
  )
}

function ByEmotion() {
  return (
    <div>
      {EMOTIONS.map((emotion) => (
        <details key={emotion.id} className="library-entry">
          <summary>{emotion.label}</summary>
          <div style={{ marginTop: 10 }}>
            <div className="eyebrow">Usually shows up as</div>
            <div className="tag-row" style={{ marginBottom: 12 }}>
              {emotion.signature.map((id) => (
                <span key={id} className="tag sage">
                  {SIGNAL_BY_ID[id].short}
                </span>
              ))}
            </div>
            <div className="eyebrow">Might help</div>
            <div className="stack">
              {emotion.regulation.map((r) => (
                <div key={r.id}>
                  <strong>{r.label}</strong>
                  <p className="muted" style={{ marginBottom: 0 }}>{r.hint}</p>
                </div>
              ))}
            </div>
          </div>
        </details>
      ))}
    </div>
  )
}
