import { state } from "../../variebles.js";

export const undraw = (gridSquares) => {
  const squares = gridSquares;
  state.currentPiece.forEach((piece) => {
    squares[state.currentPosition + piece].classList.remove("piece");
  });
};
