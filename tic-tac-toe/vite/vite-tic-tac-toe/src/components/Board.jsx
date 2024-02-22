import React from "react";
import Cell from "./Cell";
import { useGamePlay } from "./Game.hooks";

function Board() {
  const { board, playGame } = useGamePlay();

  return (
    <div className="board">
      {board.map((cell, index) => (
        <Cell key={index} value={cell} onClick={() => playGame(index)} />
      ))}
    </div>
  );
}

export default Board;
