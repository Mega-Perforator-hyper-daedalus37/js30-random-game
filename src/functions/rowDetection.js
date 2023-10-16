import { settings, state } from "../variebles.js";

export const rowDetection = (gridSquares) => {
  for (
    let rowIndex = 0;
    rowIndex < gridSquares.length - 1;
    rowIndex += settings.gridWidth
  ) {
    const row = [];
    for (let index = 0; index < settings.gridWidth; index++) {
      row.push(rowIndex + index);
    }
    if (row.every((square) => gridSquares[square].classList.contains("静的"))) {
      row.forEach((square) => {
        gridSquares[square].classList.remove("静的");
        gridSquares[square].classList.remove("piece");
        gridSquares[square].remove();
        // console.log(gridSquares[square].parentElement.parentElement);
        // gridSquares[square].parentElement.prepend(
        //   document.createElement("div")
        // );
      });
      // let newSquares = Array.from({ length: settings.gridWidth }, () => {});
      // gridSquares.unshift(...newSquares);
      gridSquares = Array.from({ length: settings.gridWidth }, () => {
        let element = document.createElement("div");
        console.log(gridSquares[0].parentElement);
        gridSquares[0].parentElement.prepend(element);
        // document.body.children[0].prepend(element);
        console.log(gridSquares.length);
        return element;
        // return document.createElement("div");
      }).concat(
        gridSquares
          .slice(0, rowIndex)
          .concat(gridSquares.slice(rowIndex + settings.gridWidth))
      );
      state.currentPosition = Math.floor(settings.gridWidth / 2) - 1;
    }
  }
};
