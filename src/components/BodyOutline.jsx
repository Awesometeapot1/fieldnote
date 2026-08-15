import { REGIONS, TAP_POINTS, regionLabel } from '../data/regions'

// Flat line-art body outline, 2px stroke, with tappable region points.
export default function BodyOutline({ selectedRegion, onSelect }) {
  return (
    <div className="body-outline-wrap">
      <svg viewBox="0 0 100 216" className="body-outline" role="presentation" aria-hidden="true">
        {/* head */}
        <circle cx="50" cy="20" r="14" fill="none" stroke="#312F37" strokeWidth="2" />
        {/* neck — stretched to give the throat tap point room */}
        <path d="M50 34 L50 58" stroke="#312F37" strokeWidth="2" strokeLinecap="round" />
        {/* torso */}
        <path d="M30 60 L70 60 L64 128 L36 128 Z" fill="none" stroke="#312F37" strokeWidth="2" strokeLinejoin="round" />
        {/* arms */}
        <path d="M31 62 C16 70, 13 84, 17 92" fill="none" stroke="#312F37" strokeWidth="2" strokeLinecap="round" />
        <path d="M69 62 C84 70, 87 84, 83 92" fill="none" stroke="#312F37" strokeWidth="2" strokeLinecap="round" />
        {/* legs */}
        <path d="M38 128 L41 198" fill="none" stroke="#312F37" strokeWidth="2" strokeLinecap="round" />
        <path d="M62 128 L59 198" fill="none" stroke="#312F37" strokeWidth="2" strokeLinecap="round" />
      </svg>

      <div className="tap-points">
        {TAP_POINTS.map((pt, i) => {
          const isSelected = selectedRegion === pt.regionId
          return (
            <button
              key={`${pt.regionId}-${i}`}
              type="button"
              className={'tap-point' + (isSelected ? ' selected' : '')}
              style={{ left: `${pt.x}%`, top: `${(pt.y / 200) * 100}%` }}
              onClick={() => onSelect(pt.regionId)}
              aria-pressed={isSelected}
            >
              <span className="sr-only">{regionLabel(pt.regionId)}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export { REGIONS }
