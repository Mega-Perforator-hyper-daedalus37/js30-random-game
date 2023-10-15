import { operations, settings, state } from "../../../variebles.js";
import { pieces } from "../../elements/pieces.js";
import { draw } from "../draw.js";
import { undraw } from "../undraw.js";

export const rotation = (gridSquares) => {
  const squares = gridSquares;
  undraw(squares);
  operations.currentRotation += 1;
  if (operations.currentRotation === pieces().length) {
    operations.currentRotation = 0;
  }
  state.currentPiece = pieces(settings.gridWidth)[operations.randomPiece()][
    operations.currentRotation
  ];
  draw(squares);
};
