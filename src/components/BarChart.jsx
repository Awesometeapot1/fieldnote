// Single-series horizontal bar chart: magnitude comparison across
// categories, one hue, value at the tip. No legend — one color needs none.
export default function BarChart({ data, colorVar = '--soft-lilac' }) {
  const max = Math.max(...data.map((d) => d.count), 1)

  return (
    <div className="bar-chart" role="list">
      {data.map((d) => (
        <div key={d.id} className="bar-chart-row" role="listitem">
          <div className="bar-chart-label">{d.label}</div>
          <div className="bar-chart-track">
            <div
              className="bar-chart-fill"
              style={{ width: `${Math.max((d.count / max) * 100, 6)}%`, background: `var(${colorVar})` }}
            />
          </div>
          <div className="bar-chart-value">{d.count}</div>
        </div>
      ))}
    </div>
  )
}
