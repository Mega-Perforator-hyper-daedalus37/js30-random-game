import { createElement } from "../create/createElement.js";
import { state } from "../variebles.js";

export const createScore = () => {
  // let score = "";
  const score = createElement({
    tag: "h2",
    elementClass: "score",
    parent: document.body,
    text: `${state.score}`,
  });

  return score;
};
