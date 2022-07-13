import { io } from "../io";

export const style = (styles) => {
  return io(() => (el) => {
    Object.entries(styles).forEach(([prop, value]) => {
      el.style[prop] = value;
    });

    return el;
  });
};
