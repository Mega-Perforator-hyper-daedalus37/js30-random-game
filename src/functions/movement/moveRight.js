import { settings, state } from "../../../variebles.js";
import { draw } from "../draw.js";
import { undraw } from "../undraw.js";

export const moveRight = (gridSquares) => {
  const squares = gridSquares;
  undraw(squares);
  if (
    !state.currentPiece.some(
      (square) =>
        (state.currentPosition + square) % settings.gridWidth ===
        settings.gridWidth - 1
    )
  ) {
    console.log("yep");
    state.currentPosition += 1;
  }
  if (
    state.currentPiece.some((square) =>
      squares[state.currentPosition + square].classList.contains("静的")
    )
  ) {
    state.currentPosition -= 1;
  }
  draw(squares);
};
