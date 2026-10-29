var O = require("./576.js");
var e = require("./3532.js");
function de(_e) {
  return _e[_e.length - 1];
}
export function jO(_e) {
  if ((0, O.m)(de(_e))) {
    return _e.pop();
  } else {
    return undefined;
  }
}
export function yG(_e) {
  if ((0, e.K)(de(_e))) {
    return _e.pop();
  } else {
    return undefined;
  }
}
export function _6(_e, q) {
  if (typeof de(_e) == "number") {
    return _e.pop();
  } else {
    return q;
  }
}