import { useState } from "react";
import { Player, SquareInputs, SquareValue } from "./game.models";

type BoardInput = {
  onPlayerMove: (squares: SquareValue[]) => void;
};

export default function Board({ onPlayerMove }: BoardInput) {
  const [squares, setSquares] = useState<SquareValue[]>(Array(9).fill(""));

  function handleClick(index: number) {
    if (winner) return;

    const nextSquares = squares.slice();
    const isEmpty = nextSquares[index] == "";
    if (isEmpty) {
      nextSquares[index] = turn;
      setSquares(nextSquares);
      onPlayerMove(nextSquares)
      switchTurn();
    }

    const tempWinner = decideWinner(nextSquares)
    if (tempWinner) setWinner(tempWinner)
  }

  function switchTurn() {
    const nextTurn: Player = turn === "X" ? "O" : "X";
    setTurn(nextTurn);
  }

  function decideWinner(s: SquareValue[]): Player | null {
    for (let i = 0; i < 3; i++) {
      const rowWinner = checkForWinner(s[i], s[i + 1], s[i + 2])
      if (rowWinner) return rowWinner;

      const colWinner = checkForWinner(s[i], s[i + 3], s[i + 6])
      if (colWinner) return colWinner;
    }

    const diagonalWinner1 = checkForWinner(s[0], s[4], s[8])
    if (diagonalWinner1) return diagonalWinner1;

    const diagonalWinner2 = checkForWinner(s[2], s[4], s[6])
    if (diagonalWinner2) return diagonalWinner2;

    return null;
  }

  function checkForWinner(s1: SquareValue, s2: SquareValue, s3: SquareValue): Player | null {
    if (s1 === "X" || s1 === "O") {
      if (s1 === s2 && s2 === s3) return s1;
    }

    return null;
  }

  let counter = 0;
  const boardTemplate = [0, 1, 2].map((rowIndex) => {
    return <div className="board-row" key={'row-' + rowIndex}>
      {
        squares.slice(rowIndex * 3, (rowIndex + 1) * 3).map((square) => {
          const index = counter;
          counter++;
          return <Square value={square} key={counter} onSquareClick={() => handleClick(index)} />
        })
      }
    </div>
  })

  return <div className="board">
    {boardTemplate}
  </div>;
}


function Square({ value, onSquareClick }: SquareInputs) {
  return <button className="square" onClick={onSquareClick}>{value}</button>;
}