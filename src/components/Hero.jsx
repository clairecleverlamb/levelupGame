import { useRef, useEffect } from 'react'
import './Hero.css'

export default function Hero() {
  const videoRef = useRef(null)

  useEffect(() => {
    const el = videoRef.current
    if (!el) return
    const play = () => {
      el.play().catch(() => {})
    }
    play()
    el.addEventListener('loadeddata', play)
    return () => el.removeEventListener('loadeddata', play)
  }, [])

  return (
    <header className="hero">
      <div className="hero-video-wrap" aria-hidden>
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/levelupbg.mp4" type="video/mp4" />
          <source src="/levelupbg.mov" type="video/quicktime" />
        </video>
      </div>

      <div className="hero-vignette" aria-hidden />
      <div className="hero-scanlines" aria-hidden />

      <div className="hero-content">
        <div className="hero-meta-row">
          <span className="hero-year-chip">2026</span>
          <span className="hero-meta-sep" aria-hidden>
            —
          </span>
          <span className="hero-meta-text">ISMP SPRING CAMP</span>
        </div>

        <div className="hero-headline-frame">
          <span className="hero-bracket hero-bracket--tl" aria-hidden />
          <span className="hero-bracket hero-bracket--tr" aria-hidden />
          <span className="hero-bracket hero-bracket--bl" aria-hidden />
          <span className="hero-bracket hero-bracket--br" aria-hidden />

          <h1 className="hero-headline">
            <div className="hero-title-row">
              <span className="hero-title-text">
                <span className="hero-line hero-line--primary">Level up</span>
              </span>
            </div>
            <span className="hero-line hero-line--secondary">ICE BREAKER</span>
          </h1>
        </div>

        <a href="#game1-q" className="hero-scroll-hint">
          Scroll for games
        </a>
      </div>
    </header>
  )
}
