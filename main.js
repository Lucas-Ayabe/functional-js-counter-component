import { $, append } from "./lib/dom";
import { Counter } from "./components/counter";

const appDoesntExistsHandler = () => ({
  append: () => console.error("app doesn't exist."),
});

$("#app")
  .map((appOrNone) => {
    return appOrNone.matchWith({
      none: appDoesntExistsHandler,
      just: (app) => app,
    });
  })
  .apply(Counter(0).bind(append))
  .run();
