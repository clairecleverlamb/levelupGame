import './NavDots.css'

const sections = [
  { id: 'game1-q', href: '#game1-q' },
  { id: 'game1-share', href: '#game1-share' },
  { id: 'game1-timer', href: '#game1-timer' },
  { id: 'game2-intro', href: '#game2-intro' },
  { id: 'olympics', href: '#olympics' },
  { id: 'egg-pass', href: '#egg-pass' },
  { id: 'floor-lava', href: '#floor-lava' },
  { id: 'floor-lava-video', href: '#floor-lava-video' },
  { id: 'game3-intro', href: '#game3-intro' },
  { id: 'tic-tac-toe', href: '#tic-tac-toe' },
  { id: 'winners', href: '#winners' },
  { id: 'thanks', href: '#thanks' },
]

export default function NavDots({ activeSection }) {
  return (
    <nav className="nav-dots">
      {sections.map(({ id, href }) => (
        <a
          key={id}
          href={href}
          className={`nav-dot ${activeSection === id ? 'active' : ''}`}
          aria-label={`Go to ${id}`}
        />
      ))}
    </nav>
  )
}
