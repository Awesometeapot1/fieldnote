import { HashRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import { CheckInProvider } from './context/CheckInContext'
import Home from './screens/Home'
import BodyTap from './screens/BodyTap'
import SensationChips from './screens/SensationChips'
import HareRead from './screens/HareRead'
import WindowOfTolerance from './screens/WindowOfTolerance'
import HareSuggestion from './screens/HareSuggestion'
import Summary from './screens/Summary'
import History from './screens/History'
import Library from './screens/Library'

function App() {
  return (
    <HashRouter>
      <CheckInProvider>
        <div className="app-shell">
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
          </Routes>
          <NavBar />
        </div>
      </CheckInProvider>
    </HashRouter>
  )
}

export default App
