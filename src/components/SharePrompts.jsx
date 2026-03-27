import './SharePrompts.css'

const questions = [
  { num: 1, text: 'What’s one thing you want to leave this camp better at than when you came in?', color: '#22d3ee' },
  { num: 2, text: 'Are you an overpacker (just in case) or an underpacker (we’ll figure it out) when it comes to packing for camping or a trip?', color: '#facc15' },
  { num: 3, text: 'What’s one “challenge” in your life that actually helped you grow the most?', color: '#4ade80' },
]

export default function SharePrompts() {
  return (
    <div className="section share-section">
      <h2 className="share-heading">Share with Your Group!</h2>
      <div className="share-top-badge">Name / Campus / Major</div>
      <div className="share-questions">
        {questions.map((q) => (
          <div className="share-q-card" key={q.num} style={{ '--q-color': q.color }}>
            <span className="share-q-num">{q.num}</span>
            <p className="share-q-text">{q.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
