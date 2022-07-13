import { $, append } from "./lib/dom";
import { Counter } from "./components/counter";

$("#app").apply(Counter(0).bind(append)).run();
