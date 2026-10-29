var O = require("./4671.js");
export function z(...ce) {
  return U(ce);
}
export function U(ce) {
  if (ce.length === 0) {
    return O.y;
  } else if (ce.length === 1) {
    return ce[0];
  } else {
    return function (oe) {
      return ce.reduce((_e, q) => q(_e), oe);
    };
  }
}