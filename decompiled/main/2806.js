var _O = require("./2416.js");
let e = null;
export function x(Ce) {
  if (_O.v.useDeprecatedSynchronousErrorHandling) {
    const oe = !e;
    if (oe) {
      e = {
        errorThrown: false,
        error: null
      };
    }
    Ce();
    if (oe) {
      const {
        errorThrown: _e,
        error: q
      } = e;
      e = null;
      if (_e) {
        throw q;
      }
    }
  } else {
    Ce();
  }
}
export function O(Ce) {
  if (_O.v.useDeprecatedSynchronousErrorHandling && e) {
    e.errorThrown = true;
    e.error = Ce;
  }
}