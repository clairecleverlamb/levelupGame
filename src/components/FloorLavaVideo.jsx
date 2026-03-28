import { useRef, useEffect, useState } from 'react'
import './FloorLavaVideo.css'

export default function FloorLavaVideo() {
  const ref = useRef(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (playing) {
      const p = el.play()
      if (p !== undefined) p.catch(() => setPlaying(false))
    } else {
      el.pause()
    }
  }, [playing])

  return (
    <section
      id="floor-lava-video"
      className="section--floor-video-full"
      aria-label="Floor is lava video"
    >
      <div className="floor-video-screen">
        <div className="floor-video-rot-wrap" aria-hidden />
        <div className="floor-video-rot-inner">
          <video
            ref={ref}
            className="floor-mp4"
            src="/floor.mp4"
            muted
            loop
            playsInline
            preload="auto"
          />
          <div className="floor-video-controls">
            <button
              type="button"
              className="floor-video-toggle"
              onClick={() => setPlaying((v) => !v)}
              aria-pressed={playing}
              aria-label={playing ? 'End video' : 'Start video'}
            >
              {playing ? 'End' : 'Start'}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
