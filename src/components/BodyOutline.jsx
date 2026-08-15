import { REGIONS, TAP_POINTS, regionLabel } from '../data/regions'

// Flat line-art body outline, 2px stroke, with tappable region points.
export default function BodyOutline({ selectedRegion, onSelect }) {
  return (
    <div className="body-outline-wrap">
      <svg viewBox="0 0 100 200" className="body-outline" role="presentation" aria-hidden="true">
        {/* head */}
        <circle cx="50" cy="20" r="14" fill="none" stroke="#312F37" strokeWidth="2" />
        {/* neck */}
        <path d="M50 34 L50 44" stroke="#312F37" strokeWidth="2" strokeLinecap="round" />
        {/* torso */}
        <path d="M30 52 L70 52 L64 118 L36 118 Z" fill="none" stroke="#312F37" strokeWidth="2" strokeLinejoin="round" />
        {/* arms */}
        <path d="M31 54 C16 62, 13 76, 17 86" fill="none" stroke="#312F37" strokeWidth="2" strokeLinecap="round" />
        <path d="M69 54 C84 62, 87 76, 83 86" fill="none" stroke="#312F37" strokeWidth="2" strokeLinecap="round" />
        {/* legs */}
        <path d="M38 118 L41 190" fill="none" stroke="#312F37" strokeWidth="2" strokeLinecap="round" />
        <path d="M62 118 L59 190" fill="none" stroke="#312F37" strokeWidth="2" strokeLinecap="round" />
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
