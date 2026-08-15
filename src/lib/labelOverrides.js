const LABELS_KEY = 'fieldnote_signal_labels_v1'

// User-editable overrides for the short chip label of each signal. Some
// people describe body signals very differently — letting people rename
// prompts is an accessibility win, not just a nicety (see hackathon-plan.md
// stretch section). Keyed by signal id, only stores entries that differ
// from the default.
export function loadLabelOverrides() {
  try {
    const raw = localStorage.getItem(LABELS_KEY)
    const parsed = raw ? JSON.parse(raw) : {}
    return parsed && typeof parsed === 'object' ? parsed : {}
  } catch {
    return {}
  }
}

export function saveLabelOverrides(overrides) {
  try {
    localStorage.setItem(LABELS_KEY, JSON.stringify(overrides))
  } catch {
    // localStorage unavailable — overrides just won't persist this session.
  }
}
