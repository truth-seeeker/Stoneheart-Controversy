var e;
var de;
var ce;
var Ce;
var _e;
var q;
var O;
O = require("./7585.js");
ce = (de = (e = O).lib).WordArray;
_e = [];
q = e.algo.SHA1 = (Ce = de.Hasher).extend({
  _doReset: function () {
    this._hash = new ce.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
  },
  _doProcessBlock: function (j, ee) {
    var U = this._hash.words;
    var G = U[0];
    var W = U[1];
    var $ = U[2];
    var re = U[3];
    var Me = U[4];
    for (var ae = 0; ae < 80; ae++) {
      if (ae < 16) {
        _e[ae] = j[ee + ae] | 0;
      } else {
        var te = _e[ae - 3] ^ _e[ae - 8] ^ _e[ae - 14] ^ _e[ae - 16];
        _e[ae] = te << 1 | te >>> 31;
      }
      var Y = (G << 5 | G >>> 27) + Me + _e[ae];
      Y += ae < 20 ? 1518500249 + (W & $ | ~W & re) : ae < 40 ? 1859775393 + (W ^ $ ^ re) : ae < 60 ? (W & $ | W & re | $ & re) - 1894007588 : (W ^ $ ^ re) - 899497514;
      Me = re;
      re = $;
      $ = W << 30 | W >>> 2;
      W = G;
      G = Y;
    }
    U[0] = U[0] + G | 0;
    U[1] = U[1] + W | 0;
    U[2] = U[2] + $ | 0;
    U[3] = U[3] + re | 0;
    U[4] = U[4] + Me | 0;
  },
  _doFinalize: function () {
    var j = this._data;
    var ee = j.words;
    var U = this._nDataBytes * 8;
    var G = j.sigBytes * 8;
    ee[G >>> 5] |= 128 << 24 - G % 32;
    ee[14 + (G + 64 >>> 9 << 4)] = Math.floor(U / 4294967296);
    ee[15 + (G + 64 >>> 9 << 4)] = U;
    j.sigBytes = ee.length * 4;
    this._process();
    return this._hash;
  },
  clone: function () {
    var j = Ce.clone.call(this);
    j._hash = this._hash.clone();
    return j;
  }
});
e.SHA1 = Ce._createHelper(q);
e.HmacSHA1 = Ce._createHmacHelper(q);
module.exports = O.SHA1;