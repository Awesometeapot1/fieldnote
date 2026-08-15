import HareIcon from './HareIcon'
import { EMOTION_BY_ID } from '../data/emotions'
import { SIGNAL_BY_ID } from '../data/signals'
import { useSettings } from '../context/SettingsContext'

export default function PatternCallout({ pattern }) {
  const { shortLabel } = useSettings()
  if (!pattern) return null
  const emotion = EMOTION_BY_ID[pattern.emotionId]
  const signal = SIGNAL_BY_ID[pattern.signalId]
  if (!emotion || !signal) return null

  const signalText = shortLabel(pattern.signalId)
  const text = pattern.differsFromCurrent
    ? `Last ${pattern.count} times you noticed ${signalText}, it turned out to be ${emotion.label.toLowerCase()}, not what I guessed this time. Worth trusting the pattern over my first read.`
    : `Last ${pattern.count} times you noticed ${signalText}, it turned out to be ${emotion.label.toLowerCase()} for you too.`

  return (
    <div className="card hare-bubble">
      <div className="icon-wrap">
        <HareIcon size={26} />
      </div>
      <div>
        <div className="eyebrow">Hare remembers</div>
        <div className="speech">{text}</div>
      </div>
    </div>
  )
}
