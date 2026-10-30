var O;
var oe;
O = require("./7585.js");
oe = O.enc.Utf8;
module.exports = void (O.algo.HMAC = O.lib.Base.extend({
  init: function (j, ee) {
    j = this._hasher = new j.init();
    if (typeof ee == "string") {
      ee = oe.parse(ee);
    }
    var U = j.blockSize;
    var G = U * 4;
    if (ee.sigBytes > G) {
      ee = j.finalize(ee);
    }
    ee.clamp();
    var W = this._oKey = ee.clone();
    var $ = this._iKey = ee.clone();
    var re = W.words;
    var Me = $.words;
    for (var ae = 0; ae < U; ae++) {
      re[ae] ^= 1549556828;
      Me[ae] ^= 909522486;
    }
    W.sigBytes = $.sigBytes = G;
    this.reset();
  },
  reset: function () {
    var j = this._hasher;
    j.reset();
    j.update(this._iKey);
  },
  update: function (j) {
    this._hasher.update(j);
    return this;
  },
  finalize: function (j) {
    var ee = this._hasher;
    var U = ee.finalize(j);
    ee.reset();
    return ee.finalize(this._oKey.clone().concat(U));
  }
}));