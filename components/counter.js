import { onClick, element, setInnerHTML, style } from "../lib/dom";

export const Counter = (count = 0) => {
  const increment = onClick((event) => {
    event.target.innerHTML = +event.target.innerHTML + 1;
  });

  return element("button")
    .apply(setInnerHTML(count))
    .apply(style({ maxWidth: "15em" }))
    .apply(increment);
};
