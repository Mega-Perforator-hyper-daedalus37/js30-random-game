import { pieces } from "./src/elements/pieces.js";

export const settings = {
  gridHeight: 20,
  gridWidth: 10,
  squareWH: 20,
};
export let operations = {
  randomPiece: () => {
    return Math.floor(Math.random() * pieces().length);
  },
  currentRotation: 0,
};
export let state = {
  currentPosition: Math.floor(settings.gridWidth / 2) - 1,
  fallSpeed: 400,
  currentPiece: pieces(settings.gridWidth)[operations.randomPiece()][
    operations.currentRotation
  ],
};
