import { io } from "../io";

export * from "./content";
export * from "./events";
export * from "./style";

export const $ = (selector) => io(() => document.querySelector(selector));
export const element = (tag) => io(() => document.createElement(tag));
