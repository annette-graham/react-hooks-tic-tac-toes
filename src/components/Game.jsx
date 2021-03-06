import React, { useState } from 'react'
import Board from './Board'
import { calculateWinner } from '../helpers'


const styles = {
  width: '200px',
  margin: '20px auto',
}

const Game = () => {

  const [history, setHistory] = useState([Array(9).fill(null)])
  const [stepNumber, setStepNumber] = useState(0)
  const [xIsNext, setXIsNext] = useState(true)

  const winner = calculateWinner(history[stepNumber])

  const handleClick = i => {
    const timeInHistory = history.slice(0, stepNumber + 1)
    const current = timeInHistory[stepNumber]
    const squares = [...current]

     // If user click an occupied square or if game is won, return
     if (winner || squares[i] ) return

     // Put an X or an O in the clicked square
     squares[i] = xIsNext ? 'X' : 'O'
     
     setHistory([...timeInHistory, squares])
     setStepNumber(timeInHistory.length)
     setXIsNext(!xIsNext)
  }

  const jumpTo = step => {
    setStepNumber(step)
    setXIsNext(step % 2 === 0)
  }

  const renderMoves = () => (
      history.map((_steps, move) => {
        const destination = move ? `Go to move ${move}` : "Go to start"      
        return <li key={move}>
          <button onClick={() => jumpTo(move)}>{destination}</button>
        </li> 
    })
  )

  return (
    <>
      <Board
        onClick={handleClick}
        squares={history[stepNumber]}
      />
      <div style={styles}>
        <p>
          { winner ? `${winner} wins lol` : `Next Player:  ${xIsNext ? 'X' : 'O'}`}
        </p>
        {renderMoves()}
      </div>
    </>
  )
}

export default Game