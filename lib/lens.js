import { io } from "./io";

export const set = (prop) => (value) => {
  return io(() => (obj) => {
    obj[prop] = value;
    return obj;
  });
};
