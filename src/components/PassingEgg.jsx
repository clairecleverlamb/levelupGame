import './PassingEgg.css'

export default function PassingEgg() {
  return (
    <section id="egg-pass" className="section--egg-full">
      <div className="egg-screen egg-screen--lead">
        <h2 className="egg-pass-title">{"Don't let the egg drop"}</h2>
        <div className="egg-drop-wrap">
          <img
            src="/egg-drop.png"
            alt="Egg yolk splat graphic"
            className="egg-drop-img"
            decoding="async"
          />
        </div>
        <img
          src="/passingegg.png"
          alt="Two people carefully passing an egg from spoon to spoon at an outdoor event"
          className="egg-pass-img"
          decoding="async"
        />
      </div>
    </section>
  )
}
