import { useState } from 'react'
import { useSettings } from '../context/SettingsContext'
import { SIGNALS } from '../data/signals'
import { loadHistory, clearHistory } from '../lib/storage'

export default function Settings() {
  const { dyslexiaMode, setDyslexiaMode, tone, setTone } = useSettings()

  return (
    <div className="screen">
      <h1>Settings</h1>

      <div className="card">
        <div className="eyebrow">Reading</div>
        <ToggleRow
          label="Dyslexia-friendly font"
          hint="Swaps body and header text to OpenDyslexic."
          checked={dyslexiaMode}
          onChange={setDyslexiaMode}
        />
      </div>

      <div className="card">
        <div className="eyebrow">Tone</div>
        <p className="muted" style={{ marginBottom: 12 }}>
          How Rabbit and Hare talk to you.
        </p>
        <div className="chip-grid">
          <button
            type="button"
            className={'chip' + (tone === 'playful' ? ' selected' : '')}
            onClick={() => setTone('playful')}
          >
            Playful
          </button>
          <button
            type="button"
            className={'chip' + (tone === 'plain' ? ' selected' : '')}
            onClick={() => setTone('plain')}
          >
            Plain
          </button>
        </div>
      </div>

      <VocabularySection />
      <DataSection />
    </div>
  )
}

function ToggleRow({ label, hint, checked, onChange }) {
  return (
    <label className="toggle-row">
      <span>
        <strong style={{ display: 'block' }}>{label}</strong>
        {hint && <span className="muted">{hint}</span>}
      </span>
      <span className={'switch' + (checked ? ' on' : '')} role="switch" aria-checked={checked}>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="sr-only"
        />
        <span className="switch-knob" />
      </span>
    </label>
  )
}

function VocabularySection() {
  const { labelOverrides, setLabel, resetAllLabels } = useSettings()
  const hasOverrides = Object.keys(labelOverrides).length > 0

  return (
    <div className="card">
      <div className="eyebrow">Sensation wording</div>
      <p className="muted" style={{ marginBottom: 12 }}>
        Rename any chip label to words that fit how you'd actually describe it.
        Leave blank to use the default.
      </p>
      <div className="stack">
        {SIGNALS.map((signal) => (
          <div key={signal.id} className="label-editor-row">
            <span className="muted label-editor-default">{signal.short}</span>
            <input
              type="text"
              placeholder={signal.short}
              value={labelOverrides[signal.id] ?? ''}
              onChange={(e) => setLabel(signal.id, e.target.value)}
            />
          </div>
        ))}
      </div>
      {hasOverrides && (
        <button type="button" className="btn btn-ghost" style={{ marginTop: 12 }} onClick={resetAllLabels}>
          Reset all wording to default
        </button>
      )}
    </div>
  )
}

function DataSection() {
  const [status, setStatus] = useState('')

  function exportHistory() {
    const history = loadHistory()
    const blob = new Blob([JSON.stringify(history, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `fieldnote-history-${new Date().toISOString().slice(0, 10)}.json`
    document.body.appendChild(a)
    a.click()
    a.remove()
    URL.revokeObjectURL(url)
    setStatus(`Exported ${history.length} check-in${history.length === 1 ? '' : 's'}.`)
  }

  function handleClear() {
    if (!window.confirm('Delete all check-in history on this device? This can\'t be undone.')) return
    clearHistory()
    setStatus('History cleared.')
  }

  return (
    <div className="card">
      <div className="eyebrow">Your data</div>
      <p className="muted" style={{ marginBottom: 12 }}>
        Everything stays on this device — export a backup or copy, or clear it out.
      </p>
      <div className="stack">
        <button type="button" className="btn btn-secondary" onClick={exportHistory}>
          Export history as JSON
        </button>
        <button type="button" className="btn btn-ghost" onClick={handleClear}>
          Clear all history
        </button>
      </div>
      {status && <p className="muted" style={{ marginTop: 10, marginBottom: 0 }}>{status}</p>}
    </div>
  )
}
