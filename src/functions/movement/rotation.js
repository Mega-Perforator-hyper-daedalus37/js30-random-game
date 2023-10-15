import { operations, settings, state } from "../../variebles.js";
import { pieces } from "../../elements/pieces.js";
import { draw } from "../draw.js";
import { undraw } from "../undraw.js";

export const rotation = (gridSquares) => {
  const squares = gridSquares;
  undraw(squares);
  operations.rotate();
  console.log(operations.currentRotation);
  draw(squares);
};
