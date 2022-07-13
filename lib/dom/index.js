import { io } from "../io";
import { Optional } from "../optional";

export * from "./content";
export * from "./events";
export * from "./style";

export const $ = (selector) => {
  return io(() => Optional.ofNullable(document.querySelector(selector)));
};

export const element = (tag) => io(() => document.createElement(tag));
