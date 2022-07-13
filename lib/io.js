export const io = (effect) => ({
  map: (fn) => io(() => fn(effect())),
  bind: (fn) => io(effect).map(fn).run(),
  matchWith: (fn) => fn(effect()),
  apply: (otherEffect) => otherEffect.map((fn) => fn(effect())),
  run: () => effect(),
});
