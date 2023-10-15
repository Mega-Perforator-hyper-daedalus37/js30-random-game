import { settings, state } from "../variebles.js";

export const rowDetection = (gridSquares) => {
  let squares = gridSquares;
  for (
    let rowIndex = 0;
    rowIndex < squares.length - 1;
    rowIndex += settings.gridWidth
  ) {
    const row = [];
    for (let index = 0; index < settings.gridWidth; index++) {
      row.push(rowIndex + index);
    }
    if (row.every((square) => squares[square].classList.contains("静的"))) {
      row.forEach((square) => {
        squares[square].classList.remove("静的");
        squares[square].classList.remove("piece");
        // squares[square].remove();
      });
      console.log(squares);
      squares = Array.from({ length: settings.gridWidth }, () => {
        return document.createElement("div");
      }).concat(
        squares
          .slice(0, rowIndex)
          .concat(squares.slice(rowIndex + settings.gridWidth))
      );
      console.log(squares);
    }
  }
};
