import { operations, settings, state } from "../variebles.js";
import { draw } from "./draw.js";
import { rowDetection } from "./rowDetection.js";

export const staticPieces = (gridSquares) => {
  const squares = gridSquares;
  if (
    state.currentPiece.some(
      (square) =>
        squares[
          state.currentPosition + square + settings.gridWidth
        ].classList.contains("静的") ||
        squares[
          state.currentPosition + square + settings.gridWidth
        ].classList.contains("bottom")
    )
  ) {
    state.currentPiece.forEach((square) =>
      squares[state.currentPosition + square].classList.add("静的")
    );
    state.currentPosition = Math.floor(settings.gridWidth / 2) - 1;
    operations.generateRandomPiece();
    draw(squares);
    rowDetection(squares);
  }
};
