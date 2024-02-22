import React from "react";

import Board from "./Board";
import { useGamePlay } from "./Game.hooks";

function Game() {
  const { winner, currentPlayer, histories, resetGame } = useGamePlay();

  return (
    <>
      <div>
        <h1>Tic Tac Toe</h1>
        <Board />
        {winner ? <div className="winner">Winner: {winner}</div> : null}
        <div>Next Player: {currentPlayer}</div>
        <button onClick={resetGame}>Reset Game</button>
      </div>
      <div>
        {histories.map((history) => (
          <div>{JSON.stringify(history)}</div>
        ))}
      </div>
    </>
  );
}

export default Game;
