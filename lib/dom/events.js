import { io } from "../io";

export const eventListener = (name) => (listener) => {
  return io(() => (el) => {
    el.addEventListener(name, listener);
    return el;
  });
};

export const onClick = eventListener("click");
