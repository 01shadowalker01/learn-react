import { useState } from "react";

export default function Board() {
  const [squares, setSquares] = useState<("X" | "O" | '')[]>(Array(9).fill(''));

  function handleClick(index: number) {
    const nextSquares = squares.slice();
    nextSquares[index] = "X";
    setSquares(nextSquares);
  }

  let counter = 0;
  const template = [0, 1, 2].map((rowIndex) => {
    return <div className="board-row" key={'row-' + rowIndex}>
      {
        squares.slice(rowIndex * 3, (rowIndex + 1) * 3).map((square) => {
          const index = counter
          counter++
          return <Square value={square} key={counter} onSquareClick={() => handleClick(index)} />
        })
      }
    </div>
  })

  return <>{template}</>;
}

function Square({ value, onSquareClick }: { value: string, onSquareClick: any }) {
  return <button className="square" onClick={onSquareClick}>{value}</button>;
}