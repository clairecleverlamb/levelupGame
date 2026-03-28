import { useState, useCallback } from 'react'
import './TicTacToe.css'

const LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

function checkWinner(board) {
  for (const [a, b, c] of LINES) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a]
    }
  }
  if (board.every(Boolean)) return 'draw'
  return null
}

const emptyBoard = () => Array(9).fill(null)

export default function TicTacToe() {
  const [board, setBoard] = useState(emptyBoard)
  const [currentPlayer, setCurrentPlayer] = useState('X')
  const [winner, setWinner] = useState(null)

  const reset = useCallback(() => {
    setBoard(emptyBoard())
    setCurrentPlayer('X')
    setWinner(null)
  }, [])

  const play = useCallback(
    (index) => {
      if (winner || board[index]) return
      const next = [...board]
      next[index] = currentPlayer
      const result = checkWinner(next)
      setBoard(next)
      if (result) {
        setWinner(result)
      } else {
        setCurrentPlayer((p) => (p === 'X' ? 'O' : 'X'))
      }
    },
    [board, currentPlayer, winner],
  )

  const status =
    winner === 'draw'
      ? "It's a draw!"
      : winner
        ? `${winner} wins!`
        : `${currentPlayer}'s turn`

  return (
    <div className="ttt">
      <p className="ttt-kicker-label">Play</p>
      <h2 className="ttt-title">Tic Tac Toe</h2>
      <p className="ttt-status" role="status" aria-live="polite">
        {status}
      </p>

      <div className="ttt-board-wrap">
        <div className="ttt-board" role="group" aria-label="Tic tac toe board">
          {board.map((cell, i) => (
            <button
              key={i}
              type="button"
              className={`ttt-cell ${cell ? `ttt-cell--${cell.toLowerCase()}` : ''}`}
              onClick={() => play(i)}
              disabled={Boolean(cell) || Boolean(winner)}
              aria-label={
                cell
                  ? `${cell} in cell ${i + 1}`
                  : winner
                    ? `Empty cell ${i + 1}, game over`
                    : `Cell ${i + 1}, empty — ${currentPlayer} to play`
              }
            >
              {cell}
            </button>
          ))}
        </div>
      </div>

      <button type="button" className="ttt-reset" onClick={reset}>
        New game
      </button>
    </div>
  )
}
