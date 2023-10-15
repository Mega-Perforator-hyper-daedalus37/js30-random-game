import { settings } from "../../variebles.js";
import { createElement } from "../create/createElement.js";

export const createGrid = () => {
  const grid = createElement({
    elementClass: ["grid"],
    parent: document.body,
  });

  const gridHeight = settings.gridHeight;
  const gridWidth = settings.gridWidth;
  const squareWH = settings.squareWH;

  grid.style.width = `${gridWidth * squareWH}px`;
  grid.style.height = `${gridHeight * squareWH}px`;

  for (let index = 0; index < gridHeight * gridWidth; index++) {
    grid.append(document.createElement("div"));
  }
  for (let index = 0; index < gridWidth; index++) {
    const element = document.createElement("div");
    element.classList.add("静的");
    grid.append(element);
  }
  return Array.from(grid.children);
};
