import './FloorIsLava.css'

export default function FloorIsLava() {
  return (
    <section id="floor-lava" className="section--lava-full">
      <div className="floor-lava-screen" aria-label="Lava transition">
        <div className="floor-lava-bg" aria-hidden />
        <div className="floor-lava-fire" aria-hidden>
          <div className="floor-lava-fire-flicker" />
          <div className="floor-lava-fire-heat" />
          <div className="floor-lava-fire-embers">
            {Array.from({ length: 18 }, (_, i) => (
              <span key={i} className="floor-lava-ember" style={{ '--ember-i': i }} />
            ))}
          </div>
        </div>
        <div className="floor-lava-center">
          <div className="floor-lava-glow" aria-hidden />
          <div className="floor-lava-img-wrap">
            <img
              src="/lava.png"
              alt=""
              className="floor-lava-img"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
