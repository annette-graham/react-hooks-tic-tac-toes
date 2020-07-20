import React from 'react'
import Square from './Square.jsx'

const style = {
  border: '5px solid darkblue',
  borderRadius:'10px',
  width: '250px',
  height: '250px',
  margin: '0 auto',
  display: 'grid',
  gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
}

const Board = ({ onClick, squares }) => (
  <div style={style}>
    {squares.map((square, i) => (
      <Square
        key={i}
        onClick={() => onClick(i)}
        value={square}
      />
    ))}
  </div>
)

export default Board