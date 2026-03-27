import { useState, useEffect } from 'react'

/* L → E → V → E → L, then U → P */
const LINE1 = 'LEVEL'
const LINE2 = 'UP'
const CHAR_MS = 165
const PAUSE_MS = 480

export default function HeroTypewriterTitle() {
  const [n1, setN1] = useState(0)
  const [n2, setN2] = useState(0)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mq.matches) {
      setN1(LINE1.length)
      setN2(LINE2.length)
      return
    }

    const timers = []
    for (let i = 1; i <= LINE1.length; i++) {
      timers.push(window.setTimeout(() => setN1(i), CHAR_MS * i))
    }
    const line2Start = CHAR_MS * LINE1.length + PAUSE_MS
    for (let j = 1; j <= LINE2.length; j++) {
      timers.push(window.setTimeout(() => setN2(j), line2Start + CHAR_MS * j))
    }
    return () => timers.forEach((id) => window.clearTimeout(id))
  }, [])

  return (
    <span className="hero-title-text hero-title-text--stack" aria-hidden="true">
      <span className="hero-line hero-line--primary">
        {LINE1.slice(0, n1)}
        {n1 < LINE1.length && <span className="hero-type-cursor" aria-hidden />}
      </span>
      <span className="hero-line hero-line--primary">
        {LINE2.slice(0, n2)}
        {n1 >= LINE1.length && n2 < LINE2.length && (
          <span className="hero-type-cursor" aria-hidden />
        )}
      </span>
    </span>
  )
}
