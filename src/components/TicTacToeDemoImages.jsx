import oandxImg from '../assets/oandx.png'
import demoboardImg from '../assets/demoboard.png'
import './TicTacToe.css'

export default function TicTacToeDemoImages() {
  return (
    <div className="ttt-demo-images" aria-label="Tic tac toe reference images">
      <img
        src={oandxImg}
        alt="X and O game pieces"
        className="ttt-demo-img"
        loading="lazy"
        decoding="async"
      />
      <img
        src={demoboardImg}
        alt="Demo tic tac toe board layout"
        className="ttt-demo-img ttt-demo-img--board"
        loading="lazy"
        decoding="async"
      />
    </div>
  )
}
