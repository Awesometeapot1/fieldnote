export default function WindowBar({ position }) {
  return (
    <div>
      <div className="window-bar-track">
        <div className="window-bar-pointer" style={{ left: `${position}%` }} />
      </div>
      <div className="window-bar-labels">
        <span>Too low / Shut down</span>
        <span>In window</span>
        <span>Too high / Overwhelmed</span>
      </div>
    </div>
  )
}
