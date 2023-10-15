import { pieces } from "./elements/pieces.js";
import { getRandomNumber } from "./utils/getRandomNumber.js";

export const settings = {
  gridHeight: 20,
  gridWidth: 10,
  squareWH: 20,
};
export let operations = {
  currentRotation: 0,
  currentPiece: 0,
  generateRandomPiece() {
    this.currentPiece = getRandomNumber(
      0,
      pieces(settings.gridWidth).length - 1
    );
    this.currentRotation = 0;
    state.setCurrentPiece();
  },
  rotate() {
    this.currentRotation =
      this.currentRotation === 3 ? 0 : ++this.currentRotation;
    state.setCurrentPiece();
  },
};
export let state = {
  setCurrentPiece() {
    this.currentPiece = pieces(settings.gridWidth)[operations.currentPiece][
      operations.currentRotation
    ];
  },
  currentPosition: Math.floor(settings.gridWidth / 2) - 1,
  fallSpeed: 400,
};
