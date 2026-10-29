var O = require("./576.js");
export function A(ce) {
  return (0, O.m)(ce?.lift);
}
export function e(ce) {
  return Ce => {
    if (A(Ce)) {
      return Ce.lift(function (oe) {
        try {
          return ce(oe, this);
        } catch (_e) {
          this.error(_e);
        }
      });
    }
    throw new TypeError("Unable to lift unknown Observable type");
  };
}