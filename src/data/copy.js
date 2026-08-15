// Tone toggle copy: "playful" keeps Rabbit & Hare's character voice (the
// default), "plain" says the same thing more directly for anyone who finds
// the personality framing distracting rather than helpful. Only the
// hand-written voice lines need two versions — sensation/emotion labels and
// regulation hints stay as-is in both tones.
export const COPY = {
  homeHeading: {
    playful: 'Want to check in with your body?',
    plain: 'Start a check-in',
  },
  homeSub: {
    playful:
      "Start from what you notice physically. Rabbit will ask a few quick questions, then Hare will help make sense of it.",
    plain:
      'Answer a few questions about physical sensations. The pattern gets matched to a likely emotion.',
  },
  homeWhy: {
    playful:
      '"How are you feeling?" can be a hard question to answer directly. This starts from something more concrete — what your body is actually doing right now — and works backwards to a probable emotion.',
    plain:
      'Naming an emotion directly can be difficult. This tool starts from physical sensations and works backwards to a probable emotion instead.',
  },
  bodyTapPrompt: {
    playful:
      "Quick check — where's something happening in your body right now? Tap wherever you notice it.",
    plain: 'Where do you notice something in your body right now? Tap the area.',
  },
  chipsPromptPrefix: {
    playful: 'Around your',
    plain: 'Near your',
  },
  chipsPromptSuffix: {
    playful: '— what do you notice? No wrong answers, just tell me what you notice. Pick as many as apply.',
    plain: '— select what you notice. Choose as many as apply.',
  },
  chipsGhost: {
    playful: "I don't know — that's okay too",
    plain: 'Not sure — skip this',
  },
  hareReadNoMatch: {
    playful:
      "Not much to go on this time — that's fine too. Sometimes just noticing nothing clearly is the useful part.",
    plain: 'No clear pattern matched this time. That still counts as useful information.',
  },
  hareReadFeedbackPrompt: {
    playful: "I could be wrong — tell me if this doesn't feel right.",
    plain: "This is a suggestion, not a diagnosis. Say if it's off.",
  },
  suggestionPrompt: {
    playful: 'What sounds least annoying right now?',
    plain: 'Choose one thing to try.',
  },
  suggestionFooter: {
    playful: 'You can always change your mind.',
    plain: 'You can change your choice at any time.',
  },
  summaryIntro: {
    playful: "Here's what we noticed, for the record.",
    plain: 'Summary of this check-in.',
  },
  historySub: {
    playful: 'Your check-in history, kept only on this device.',
    plain: 'Past check-ins, stored locally on this device.',
  },
  historyEmpty: {
    playful:
      "Nothing logged yet. Once you've done a few check-ins, patterns will start showing up here.",
    plain: 'No check-ins yet. Patterns will appear after a few entries.',
  },
  librarySub: {
    playful:
      'The same sensation-to-emotion table the check-in uses, laid out to browse. Look something up without doing a full check-in.',
    plain: 'Browsable reference of the sensation-to-emotion table used in check-ins.',
  },
}
