import { operations, settings, state } from "../../variebles.js";
import { pieces } from "../elements/pieces.js";
import { draw } from "./draw.js";

export const staticPieces = (gridSquares) => {
  const squares = gridSquares;
  if (
    state.currentPiece.some((square) =>
      squares[
        state.currentPosition + square + settings.gridWidth
      ].classList.contains("静的")
    )
  ) {
    state.currentPiece.forEach((square) =>
      squares[state.currentPosition + square].classList.add("静的")
    );
    state.currentPosition = Math.floor(settings.gridWidth / 2) - 1;
    state.currentPiece = pieces(settings.gridWidth)[operations.randomPiece()][
      operations.currentRotation
    ];
    draw(squares);
  }
};
