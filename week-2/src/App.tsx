import { useState } from "react";
type SquareValue = "X" | "O" | "";
type Player = "X" | "O";

export default function Board() {

  const [squares, setSquares] = useState<SquareValue[]>(Array(9).fill(""));
  const [history, setHistory] = useState<SquareValue[][]>([Array(9).fill("")]);
  const [turn, setTurn] = useState<Player>("X");
  const [winner, setWinner] = useState<Player | null>(null);

  function handleClick(index: number) {
    if (winner) return;

    const nextSquares = squares.slice();
    const nextHistory = history.slice();
    const isEmpty = nextSquares[index] == "";
    if (isEmpty) {
      nextSquares[index] = turn;
      setSquares(nextSquares);
      nextHistory.push(nextSquares)
      setHistory([...history, nextSquares])
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

  function travelToMoveNumber(moveNumber: number) {
    const isNotLastMove = history.length - 1 !== moveNumber;
    if (winner && isNotLastMove) setWinner(null);
    const nextHistory = history.slice(0, moveNumber + 1);
    setHistory(nextHistory)
    const lastItemIndex = nextHistory.length - 1
    setSquares(nextHistory[lastItemIndex])
    const nextTurn: Player = moveNumber % 2 === 0 ? "X" : "O";
    setTurn(nextTurn);
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

  const historyTemplate = history.map((item, index) => {
    if (history.length < 2 || index == 0) return;

    return <button key={index} onClick={() => travelToMoveNumber(index)}>Go to move #{index}</button>
  })

  return <>
    <p>{winner ? `${winner} is winner` : `Turn: ${turn}`}</p>
    <div className="wrapper">
      <div className="board">
        {boardTemplate}
      </div>
      <div className="history">
        <button onClick={() => travelToMoveNumber(0)}>Go to game start</button>
        {historyTemplate}
      </div>
    </div>
  </>;
}

type SquareInputs = {
  value: string;
  onSquareClick: any;
};

function Square({ value, onSquareClick }: SquareInputs) {
  return <button className="square" onClick={onSquareClick}>{value}</button>;
}