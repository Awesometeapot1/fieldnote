// Flat line-art mascot, 2px stroke, rounded joins, minimal fill. Hare:
// slower, warmer, holds the memory across check-ins. Accented in Soft Lilac.
export default function HareIcon({ size = 32, className }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      role="img"
      aria-label="Hare"
    >
      {/* ears, relaxed / gently folded */}
      <path d="M15 16 C11 11, 10 4, 13 1.5 C16 4.5, 17 11, 17.5 17" stroke="#B9ACD3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24 16 C27 10, 27 4, 25 1.5 C22 4, 21 11, 21 17" stroke="#B9ACD3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* head */}
      <circle cx="20" cy="25" r="9.5" stroke="#312F37" strokeWidth="2" />
      {/* eyes, soft/closed-ish for warmth */}
      <path d="M16 24.5 Q17.2 23.3 18.4 24.5" stroke="#312F37" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M21.6 24.5 Q22.8 23.3 24 24.5" stroke="#312F37" strokeWidth="1.4" strokeLinecap="round" />
      {/* nose/smile */}
      <path d="M18 28.2 Q20 29.6 22 28.2" stroke="#312F37" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}
