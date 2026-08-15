import { NavLink } from 'react-router-dom'

const TABS = [
  { to: '/', label: 'Home', icon: HomeIcon, end: true },
  { to: '/checkin', label: 'Check-in', icon: CheckInIcon },
  { to: '/history', label: 'History', icon: HistoryIcon },
  { to: '/library', label: 'Library', icon: LibraryIcon },
]

export default function NavBar() {
  return (
    <nav className="nav-bar" aria-label="Main">
      {TABS.map(({ to, label, icon: Icon, end }) => (
        <NavLink
          key={to}
          to={to}
          end={end}
          className={({ isActive }) => 'nav-item' + (isActive ? ' active' : '')}
        >
          <Icon />
          <span>{label}</span>
        </NavLink>
      ))}
    </nav>
  )
}

const strokeProps = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

function HomeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" {...strokeProps}>
      <path d="M4 11.5 12 4l8 7.5" />
      <path d="M6 10v9h12v-9" />
    </svg>
  )
}

function CheckInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" {...strokeProps}>
      <circle cx="12" cy="8" r="3.2" />
      <path d="M5.5 20c1-3.6 3.8-5.5 6.5-5.5s5.5 1.9 6.5 5.5" />
    </svg>
  )
}

function HistoryIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" {...strokeProps}>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4l3 2" />
    </svg>
  )
}

function LibraryIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" {...strokeProps}>
      <path d="M5 4.5h6a2 2 0 0 1 2 2V20a2 2 0 0 0-2-1.5H5z" />
      <path d="M19 4.5h-6a2 2 0 0 0-2 2V20a2 2 0 0 1 2-1.5h6z" />
    </svg>
  )
}
