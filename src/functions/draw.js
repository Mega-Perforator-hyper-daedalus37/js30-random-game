import { state } from "../variebles.js";

export const draw = (gridSquares) => {
  const squares = gridSquares;
  state.currentPiece.forEach((piece) => {
    squares[state.currentPosition + piece].classList.add("piece");
  });
};
