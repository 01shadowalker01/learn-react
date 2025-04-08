import { useState } from "react";
import { Player, SquareValue } from "./game.models";

export default function Game() {
    const [history, setHistory] = useState<SquareValue[][]>([Array(9).fill("")]);
    const [turn, setTurn] = useState<Player>("X");
    const [winner, setWinner] = useState<Player | null>(null);

    function handlePlayerMove(squares: SquareValue[]) {
        setHistory([...history, squares])
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

    const historyTemplate = history.map((item, index) => {
        if (history.length < 2 || index == 0) return;

        return <button key={index} onClick={() => travelToMoveNumber(index)}>Go to move #{index}</button>
    })

    return <>
        <p>{winner ? `${winner} is winner` : `Turn: ${turn}`}</p>
        <div className="wrapper">
            <div className="history">
                <button onClick={() => travelToMoveNumber(0)}>Go to game start</button>
                {historyTemplate}
            </div>
        </div>
    </>
}