import { createContext, useCallback, useContext, useMemo, useState } from 'react'

const CheckInContext = createContext(null)

const initialState = {
  region: null,
  signalIds: [],
  matches: [], // [{ emotion, matched, count }]
  hareFeedback: null, // 'no' | 'maybe' | 'yes'
  windowPosition: null,
  regulationChoice: null,
  note: '',
}

export function CheckInProvider({ children }) {
  const [state, setState] = useState(initialState)

  const update = useCallback((patch) => {
    setState((prev) => ({ ...prev, ...patch }))
  }, [])

  const reset = useCallback(() => setState(initialState), [])

  const toggleSignal = useCallback((signalId) => {
    setState((prev) => {
      const has = prev.signalIds.includes(signalId)
      return {
        ...prev,
        signalIds: has ? prev.signalIds.filter((id) => id !== signalId) : [...prev.signalIds, signalId],
      }
    })
  }, [])

  const value = useMemo(
    () => ({ ...state, update, reset, toggleSignal }),
    [state, update, reset, toggleSignal]
  )

  return <CheckInContext.Provider value={value}>{children}</CheckInContext.Provider>
}

export function useCheckIn() {
  const ctx = useContext(CheckInContext)
  if (!ctx) throw new Error('useCheckIn must be used within CheckInProvider')
  return ctx
}
