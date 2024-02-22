import { useSelector, useDispatch } from "react-redux";
import { reset, play } from "../stores/gameSlice";

export const useGamePlay = () => {
  const { winner, currentPlayer, histories, board } = useSelector(
    (state) => state.game
  );

  const dispatch = useDispatch();
  const playGame = (index) => {
    dispatch(play({ index }));
  };
  const resetGame = () => dispatch(reset());

  return { winner, currentPlayer, histories, board, playGame, resetGame };
};
