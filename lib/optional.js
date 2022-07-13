export const Optional = {
  ofNullable: (value) => {
    const isNone = value === undefined || value === null;
    return isNone ? Optional.None() : Optional.Just(value);
  },
  None: () => ({
    map: () => Optional.None(),
    bind: () => Optional.None(),
    matchWith: ({ none }) => none(),
  }),
  Just: (value) => ({
    map: (fn) => Optional.Just(fn(value)),
    bind: (fn) => fn(value),
    matchWith: ({ just }) => just(value),
  }),
};
