// Flat line-art mascot, 2px stroke, rounded joins, minimal fill — matches
// the field-guide illustration style. Rabbit: quick, present-tense, asks
// the body-scan questions. Accented in Sage Grey.
export default function RabbitIcon({ size = 32, className }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      role="img"
      aria-label="Rabbit"
    >
      {/* ears, alert / upright */}
      <path d="M14 15 C12 8, 13 3, 16 2 C18 6, 18 12, 17 16" stroke="#A8B5A1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M23 15 C24 8, 22 3, 19 2 C18 6, 19 12, 21 16" stroke="#A8B5A1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* head */}
      <circle cx="20" cy="24" r="9" stroke="#312F37" strokeWidth="2" />
      {/* eyes */}
      <circle cx="17" cy="23" r="1.1" fill="#312F37" />
      <circle cx="23" cy="23" r="1.1" fill="#312F37" />
      {/* nose/whisker hint */}
      <path d="M18.5 27 Q20 28.4 21.5 27" stroke="#312F37" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}
