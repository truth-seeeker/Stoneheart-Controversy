var e;
var ce;
var Ce;
var oe;
var _e;
var O;
O = require("./7585.js");
require("./1817.js");
ce = (e = O).lib.WordArray;
_e = (Ce = e.algo).SHA224 = (oe = Ce.SHA256).extend({
  _doReset: function () {
    this._hash = new ce.init([3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]);
  },
  _doFinalize: function () {
    var q = oe._doFinalize.call(this);
    q.sigBytes -= 4;
    return q;
  }
});
e.SHA224 = oe._createHelper(_e);
e.HmacSHA224 = oe._createHmacHelper(_e);
module.exports = O.SHA224;