import { useState } from 'react'
import './WinnerAnnouncement.css'

export default function WinnerAnnouncement({ onAnnounce }) {
  const [input, setInput] = useState('')

  const handleClick = () => {
    onAnnounce(input.trim())
  }

  return (
    <div className="section winner-section">
      <div className="winner-spotlight">
        <p className="section-label section-label--challenge winner-kicker">Celebration</p>
        <h2 className="winner-title">Announce Winners</h2>
        <p className="winner-sub">Name the crew who took it home — then make it official.</p>
        <div className="winner-input-group">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Winning team or table name…"
            onKeyDown={(e) => e.key === 'Enter' && handleClick()}
            aria-label="Winning team name"
          />
          <button type="button" className="btn-announce" onClick={handleClick}>
            Announce winner
          </button>
        </div>
      </div>
    </div>
  )
}
