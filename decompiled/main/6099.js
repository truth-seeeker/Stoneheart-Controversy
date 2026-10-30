var O = require("./4004.js");
var e = require("./8421.js");
var de = require("./4482.js");
var ce = require("./2733.js");
var Ce = require("./576.js");
export function z(_e, q, j = Infinity) {
  if ((0, Ce.m)(q)) {
    return z((ee, U) => (0, O.U)((G, W) => q(ee, G, U, W))((0, e.Xf)(_e(ee, U))), j);
  } else {
    if (typeof q == "number") {
      j = q;
    }
    return (0, de.e)((ee, U) => (0, ce.p)(ee, U, _e, j));
  }
}