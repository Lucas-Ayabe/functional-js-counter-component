import { onClick, element, setInnerHTML, style } from "../lib/dom";

const counterStyle = style({
  maxWidth: "15em",
  margin: "2em",
});

const increment = onClick((event) => {
  event.target.innerHTML = +event.target.innerHTML + 1;
});

export const Counter = (count = 0) => {
  return element("button")
    .apply(setInnerHTML(count))
    .apply(counterStyle)
    .apply(increment);
};
