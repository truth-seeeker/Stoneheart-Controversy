var O;
O = require("./7585.js");
require("./8319.js");
require("./9493.js");
require("./7865.js");
require("./3057.js");
(function () {
  var e = O;
  var ce = e.lib.StreamCipher;
  var Ce = e.algo;
  var oe = Ce.RC4 = ce.extend({
    _doReset: function () {
      var j = this._key;
      var ee = j.words;
      var U = j.sigBytes;
      var G = this._S = [];
      for (var W = 0; W < 256; W++) {
        G[W] = W;
      }
      W = 0;
      var $ = 0;
      for (; W < 256; W++) {
        var re = W % U;
        var ae = G[W];
        G[W] = G[$ = ($ + G[W] + (ee[re >>> 2] >>> 24 - re % 4 * 8 & 255)) % 256];
        G[$] = ae;
      }
      this._i = this._j = 0;
    },
    _doProcessBlock: function (j, ee) {
      j[ee] ^= _e.call(this);
    },
    keySize: 8,
    ivSize: 0
  });
  function _e() {
    var j = this._S;
    var ee = this._i;
    var U = this._j;
    var G = 0;
    for (var W = 0; W < 4; W++) {
      var $ = j[ee = (ee + 1) % 256];
      j[ee] = j[U = (U + j[ee]) % 256];
      j[U] = $;
      G |= j[(j[ee] + j[U]) % 256] << 24 - W * 8;
    }
    this._i = ee;
    this._j = U;
    return G;
  }
  e.RC4 = ce._createHelper(oe);
  var q = Ce.RC4Drop = oe.extend({
    cfg: oe.cfg.extend({
      drop: 192
    }),
    _doReset: function () {
      oe._doReset.call(this);
      for (var j = this.cfg.drop; j > 0; j--) {
        _e.call(this);
      }
    }
  });
  e.RC4Drop = ce._createHelper(q);
})();
module.exports = O.RC4;