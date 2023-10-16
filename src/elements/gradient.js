import { createElement } from "../create/createElement.js";
import { settings } from "../variebles.js";

export const gradient = () => {
  const gradient = createElement({
    elementClass: ["gradient"],
    parent: document.body.children[2],
  });
  console.log(document.body.children[2]);
  gradient.style.width = `${settings.gridWidth * settings.squareWH}px`;
  gradient.style.height = `${settings.gridHeight * settings.squareWH}px`;

  return gradient;
};
