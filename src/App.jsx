import { HashRouter, Routes, Route, NavLink } from 'react-router-dom'
import NavBar from './components/NavBar'
import { CheckInProvider } from './context/CheckInContext'
import { SettingsProvider } from './context/SettingsContext'
import Home from './screens/Home'
import BodyTap from './screens/BodyTap'
import SensationChips from './screens/SensationChips'
import HareRead from './screens/HareRead'
import WindowOfTolerance from './screens/WindowOfTolerance'
import HareSuggestion from './screens/HareSuggestion'
import Summary from './screens/Summary'
import History from './screens/History'
import Library from './screens/Library'
import Settings from './screens/Settings'

function App() {
  return (
    <HashRouter>
      <SettingsProvider>
        <CheckInProvider>
          <div className="app-shell">
            <TopBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/checkin" element={<BodyTap />} />
              <Route path="/checkin/sensations" element={<SensationChips />} />
              <Route path="/checkin/read" element={<HareRead />} />
              <Route path="/checkin/window" element={<WindowOfTolerance />} />
              <Route path="/checkin/suggestion" element={<HareSuggestion />} />
              <Route path="/checkin/summary" element={<Summary />} />
              <Route path="/history" element={<History />} />
              <Route path="/library" element={<Library />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
            <NavBar />
          </div>
        </CheckInProvider>
      </SettingsProvider>
    </HashRouter>
  )
}

function TopBar() {
  return (
    <div className="top-bar">
      <NavLink to="/" className="top-bar-brand" end>
        Fieldnote
      </NavLink>
      <NavLink
        to="/settings"
        className={({ isActive }) => 'top-bar-settings' + (isActive ? ' active' : '')}
        aria-label="Settings"
      >
        <SettingsIcon />
      </NavLink>
    </div>
  )
}

function SettingsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3.2" />
      <path d="M19.4 13a7.6 7.6 0 0 0 0-2l1.9-1.5-2-3.4-2.3.6a7.5 7.5 0 0 0-1.7-1L15 3.5h-4l-.3 2.2a7.5 7.5 0 0 0-1.7 1l-2.3-.6-2 3.4L6.6 11a7.6 7.6 0 0 0 0 2l-1.9 1.5 2 3.4 2.3-.6a7.5 7.5 0 0 0 1.7 1l.3 2.2h4l.3-2.2a7.5 7.5 0 0 0 1.7-1l2.3.6 2-3.4z" />
    </svg>
  )
}

export default App
