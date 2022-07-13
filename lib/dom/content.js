import { io } from "../io";
import { set } from "../lens";

export const setInnerHTML = set("innerHTML");

export const append = (...nodes) => {
  return io(() => (el) => {
    el.append(...nodes);
    return el;
  });
};
