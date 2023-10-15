import { operations, state } from "./variebles.js";
import { createGrid } from "./elements/grid.js";
import { draw } from "./functions/draw.js";
import { moveDown } from "./functions/moveDown.js";
import { controls } from "./functions/movement/controls.js";
const main = () => {
  const grid = createGrid();
  operations.generateRandomPiece();
  draw(grid);
  setInterval(() => {
    moveDown(grid);
  }, state.fallSpeed);
  controls(grid);
  alert("Will be done in a few days. Wait a bit please");
};
main();
