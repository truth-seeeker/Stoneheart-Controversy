var O = require("./2416.js");
var e = require("./3410.js");
export function h(ce) {
  e.z.setTimeout(() => {
    const {
      onUnhandledError: Ce
    } = O.v;
    if (!Ce) {
      throw ce;
    }
    Ce(ce);
  });
}