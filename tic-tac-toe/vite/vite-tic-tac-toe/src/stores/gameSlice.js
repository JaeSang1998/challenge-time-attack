import { createSlice } from "@reduxjs/toolkit";

const WINNING_LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const gameSlice = createSlice({
  name: "game",
  initialState: {
    board: Array(9).fill(null),
    currentPlayer: "X",
    winner: null,
    histories: [],
  },
  reducers: {
    play: (state, action) => {
      const { index } = action.payload;
      if (!state.board[index] && !state.winner) {
        state.board[index] = state.currentPlayer;
        state.currentPlayer = state.currentPlayer === "X" ? "O" : "X";
        state.histories.push(state.board);
        state.winner = calculateWinner(state.board);
      }
    },
    reset: (state) => {
      state.board = Array(9).fill(null);
      state.currentPlayer = "X";
      state.winner = null;
      state.histories = [];
    },
  },
});

export const { play, reset } = gameSlice.actions;

export default gameSlice.reducer;

function calculateWinner(board) {
  const winningLine = WINNING_LINES.find((line) => {
    const [a, b, c] = line;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
    return null;
  });

  return winningLine ? board[winningLine[0]] : null;
}
