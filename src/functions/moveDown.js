import { settings, state } from "../../variebles.js";
import { draw } from "./draw.js";
import { staticPieces } from "./staticPieces.js";
import { undraw } from "./undraw.js";

export const moveDown = (grid) => {
  undraw(grid);
  state.currentPosition += settings.gridWidth;
  draw(grid);
  staticPieces(grid);
};
