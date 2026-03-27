import './GameBiathlon.css'

export function BiathlonIntro() {
  return (
    <div className="section biathlon-section">
      <p className="section-label section-label--challenge">Challenge 3</p>
      <h2 className="section-title section-title--freeze">Freeze Frame</h2>
      <img
        src="/freezeframe.png"
        alt="Six people in playful freeze-frame poses in a park with props: rubber chicken, pineapple, unicorn, candelabra, lampshade, and juggling oranges"
        className="freeze-frame-hero-img"
        decoding="async"
      />
    </div>
  )
}

export function BiathlonClean() {
  return (
    <div className="section biathlon-section clean-section">
      <div className="clean-stack">
        <span className="clean-word clean-sm">clean</span>
        <span className="clean-word clean-md">clean</span>
        <span className="clean-word clean-lg">CLEAN!</span>
      </div>
    </div>
  )
}

export function BiathlonActsVersion() {
  return (
    <div className="section biathlon-section">
      <div className="biathlon-step">
        <div className="step-badge">Our Acts Version</div>
        <img
          src="/churchversion.png"
          alt="Church cleaning version — swiffer skiing and paper ball toss"
          className="biathlon-img"
        />
      </div>
    </div>
  )
}

export function BiathlonIllustration() {
  return (
    <div className="section biathlon-section">
      <img
        src="/illu.png"
        alt="Game setup illustration"
        className="biathlon-illu"
      />
    </div>
  )
}

export function BiathlonRules() {
  return (
    <div className="section biathlon-section">
      <h3 className="rules-heading">Rules</h3>
      <div className="biathlon-rules">
        <div className="rule-item">
          <span className="rule-number">1</span>
          <p>Each team sends out <strong>6 people</strong> (4 students + 2 mentors)</p>
        </div>
        <div className="rule-item">
          <span className="rule-number">2</span>
          <p><strong>5 people relay</strong> with only the swiffer stick. Hand off to the next player.</p>
        </div>
        <div className="rule-item">
          <span className="rule-number">3</span>
          <p>Last person puts on the <strong>dry swiffer sheet</strong> to clean the wax on the track.</p>
        </div>
        <div className="rule-item">
          <span className="rule-number">4</span>
          <p><strong>Skiing relay</strong> + throw the paper ball into the box. First team to cross the finish line wins!</p>
        </div>
      </div>
    </div>
  )
}
