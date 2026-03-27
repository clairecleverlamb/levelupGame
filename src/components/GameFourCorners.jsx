import { useState, useEffect, useRef } from 'react'
import './GameFourCorners.css'

const TIMER_TOTAL_SECONDS = 120

function formatTime(sec) {
  const m = Math.floor(sec / 60)
  const s = sec % 60
  return `${m}:${s.toString().padStart(2, '0')}`
}


export function FourCornersQuestion() {
  return (
    <div className="section section--puzzles">
      <p className="section-label section-label--challenge">Challenge 1</p>
      <h2 className="section-title section-title--challenge">Fit Your Puzzles</h2>

      <div className="puzzle-reference-grid" aria-label="Puzzle reference">
        <div className="puzzle-reference-cell">
          <img src="/p1.png" alt="Puzzle reference 1" className="puzzle-reference-img" />
        </div>
        <div className="puzzle-reference-cell">
          <img src="/p2.png" alt="Puzzle reference 2" className="puzzle-reference-img" />
        </div>
        <div className="puzzle-reference-cell">
          <img src="/p3.png" alt="Puzzle reference 3" className="puzzle-reference-img" />
        </div>
        <div className="puzzle-reference-cell">
          <img src="/p4.png" alt="Puzzle reference 4" className="puzzle-reference-img" />
        </div>
      </div>
    </div>
  )
}

function playTimesUpSound() {
  const ctx = new (window.AudioContext || window.webkitAudioContext)()

  // Three ascending alert beeps
  const notes = [660, 880, 1100]
  notes.forEach((freq, i) => {
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.type = 'square'
    osc.frequency.value = freq
    gain.gain.setValueAtTime(0.2, ctx.currentTime + i * 0.25)
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + i * 0.25 + 0.2)
    osc.connect(gain)
    gain.connect(ctx.destination)
    osc.start(ctx.currentTime + i * 0.25)
    osc.stop(ctx.currentTime + i * 0.25 + 0.2)
  })

  // Final long buzzer
  const osc = ctx.createOscillator()
  const gain = ctx.createGain()
  osc.type = 'sawtooth'
  osc.frequency.value = 440
  gain.gain.setValueAtTime(0.25, ctx.currentTime + 0.8)
  gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 1.8)
  osc.connect(gain)
  gain.connect(ctx.destination)
  osc.start(ctx.currentTime + 0.8)
  osc.stop(ctx.currentTime + 1.8)

  setTimeout(() => ctx.close(), 2500)
}

export function FourCornersTimer() {
  const [seconds, setSeconds] = useState(TIMER_TOTAL_SECONDS)
  const [isRunning, setIsRunning] = useState(false)
  const intervalRef = useRef(null)

  useEffect(() => {
    if (!isRunning) return
    intervalRef.current = setInterval(() => {
      setSeconds((s) => {
        if (s <= 1) {
          setIsRunning(false)
          playTimesUpSound()
          return 0
        }
        return s - 1
      })
    }, 1000)
    return () => clearInterval(intervalRef.current)
  }, [isRunning])

  return (
    <div className="section">
      <div
        className={`timer-box ${seconds <= 30 ? 'timer-warning' : ''} ${isRunning ? 'timer-box--running' : ''}`}
      >
        <p className="section-label timer-box__eyebrow">
          Get to Know Each Other — Switch Timer
        </p>
        <div className="timer-hero">
          <div className="timer-display" role="timer" aria-live="polite">
            {formatTime(seconds)}
          </div>
        </div>
        <p className="timer-label">Time until switch to next group</p>
        <div className="timer-buttons">
          <button
            className="btn btn-primary"
            onClick={() => setIsRunning(true)}
            disabled={isRunning}
          >
            Start
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => setIsRunning(false)}
          >
            Pause
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => {
              setIsRunning(false)
              setSeconds(TIMER_TOTAL_SECONDS)
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}
