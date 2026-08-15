import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { loadLabelOverrides, saveLabelOverrides } from '../lib/labelOverrides'
import { SIGNAL_BY_ID } from '../data/signals'
import { COPY } from '../data/copy'

const DYSLEXIA_KEY = 'fieldnote_dyslexia_v1'
const TONE_KEY = 'fieldnote_tone_v1' // 'playful' | 'plain'

const SettingsContext = createContext(null)

export function SettingsProvider({ children }) {
  const [dyslexiaMode, setDyslexiaMode] = useState(() => {
    try {
      return localStorage.getItem(DYSLEXIA_KEY) === '1'
    } catch {
      return false
    }
  })
  const [tone, setToneState] = useState(() => {
    try {
      return localStorage.getItem(TONE_KEY) === 'plain' ? 'plain' : 'playful'
    } catch {
      return 'playful'
    }
  })
  const [labelOverrides, setLabelOverrides] = useState(() => loadLabelOverrides())

  useEffect(() => {
    document.body.classList.toggle('dyslexia-mode', dyslexiaMode)
    try {
      localStorage.setItem(DYSLEXIA_KEY, dyslexiaMode ? '1' : '0')
    } catch {
      // ignore
    }
  }, [dyslexiaMode])

  const setTone = useCallback((next) => {
    setToneState(next)
    try {
      localStorage.setItem(TONE_KEY, next)
    } catch {
      // ignore
    }
  }, [])

  const setLabel = useCallback((signalId, value) => {
    setLabelOverrides((prev) => {
      const next = { ...prev }
      if (value && value.trim() && value.trim() !== SIGNAL_BY_ID[signalId]?.short) {
        next[signalId] = value.trim()
      } else {
        delete next[signalId]
      }
      saveLabelOverrides(next)
      return next
    })
  }, [])

  const resetLabel = useCallback((signalId) => setLabel(signalId, ''), [setLabel])

  const resetAllLabels = useCallback(() => {
    setLabelOverrides({})
    saveLabelOverrides({})
  }, [])

  const shortLabel = useCallback(
    (signalId) => labelOverrides[signalId] ?? SIGNAL_BY_ID[signalId]?.short ?? signalId,
    [labelOverrides]
  )

  const t = useCallback((key) => COPY[key]?.[tone] ?? COPY[key]?.playful ?? key, [tone])

  const value = useMemo(
    () => ({
      dyslexiaMode,
      setDyslexiaMode,
      tone,
      setTone,
      labelOverrides,
      setLabel,
      resetLabel,
      resetAllLabels,
      shortLabel,
      t,
    }),
    [dyslexiaMode, tone, labelOverrides, setTone, setLabel, resetLabel, resetAllLabels, shortLabel, t]
  )

  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>
}

export function useSettings() {
  const ctx = useContext(SettingsContext)
  if (!ctx) throw new Error('useSettings must be used within SettingsProvider')
  return ctx
}
