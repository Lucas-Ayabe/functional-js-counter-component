import { io } from "./io";

export const $ = (selector) => io(() => document.querySelector(selector));
export const element = (tag) => io(() => document.createElement(tag));

export const set = (prop) => (value) => {
  return io(() => (obj) => {
    obj[prop] = value;
    return obj;
  });
};
export const setInnerHTML = set("innerHTML");

export const style = (styles) => {
  return io(() => (el) => {
    Object.entries(styles).forEach(([prop, value]) => {
      el.style[prop] = value;
    });

    return el;
  });
};

export const eventListener = (name) => (listener) => {
  return io(() => (el) => {
    el.addEventListener(name, listener);
    return el;
  });
};
export const onClick = eventListener("click");

export const append = (...nodes) => {
  return io(() => (el) => {
    el.append(...nodes);
    return el;
  });
};
