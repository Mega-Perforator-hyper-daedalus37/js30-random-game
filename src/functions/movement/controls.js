import { moveDown } from "../moveDown.js";
import { moveLeft } from "./moveLeft.js";
import { moveRight } from "./moveRight.js";
import { rotation } from "./rotation.js";

export const controls = (gridSquares) => {
  const keysControls = (event) => {
    if (event.keyCode === 37) {
      moveLeft(gridSquares);
    }
    if (event.keyCode === 38) {
      rotation(gridSquares);
    }
    if (event.keyCode === 39) {
      moveRight(gridSquares);
    }
    if (event.keyCode === 40) {
      moveDown(gridSquares);
    }
    console.log(event);
  };
  addEventListener("keydown", keysControls);
};
