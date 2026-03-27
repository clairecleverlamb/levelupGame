import { useEffect, useRef } from 'react'
import confetti from 'canvas-confetti'
import './Thanks.css'

export default function Thanks() {
  const sectionRef = useRef(null)
  const firedRef = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !firedRef.current) {
          firedRef.current = true
          const end = Date.now() + 3000
          const colors = ['#a3e635', '#22d3ee', '#f472b6', '#facc15', '#fff']
          const frame = () => {
            confetti({
              particleCount: 4,
              angle: 60,
              spread: 55,
              origin: { x: 0 },
              colors,
            })
            confetti({
              particleCount: 4,
              angle: 120,
              spread: 55,
              origin: { x: 1 },
              colors,
            })
            if (Date.now() < end) requestAnimationFrame(frame)
          }
          frame()
        }
      },
      { threshold: 0.5 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="section thanks-section" ref={sectionRef}>
      <div className="thanks-spotlight">
        <p className="thanks-badge">Level Up 2026</p>
        <h2 className="thanks-title">Thanks for playing!</h2>
        <p className="thanks-text">You leveled up today — see you at the next round!</p>
      </div>
    </div>
  )
}
