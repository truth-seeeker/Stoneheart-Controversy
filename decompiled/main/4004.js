var O = require("./4482.js");
var e = require("./5403.js");
export function U(ce, Ce) {
  return (0, O.e)((oe, _e) => {
    let q = 0;
    oe.subscribe((0, e.x)(_e, j => {
      _e.next(ce.call(Ce, j, q++));
    }));
  });
}