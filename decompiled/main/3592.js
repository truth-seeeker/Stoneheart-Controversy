var O;
O = require("./7585.js");
require("./3057.js");
O.mode.CTRGladman = function () {
  var e = O.lib.BlockCipherMode.extend();
  function de(oe) {
    if ((oe >> 24 & 255) == 255) {
      var _e = oe >> 16 & 255;
      var q = oe >> 8 & 255;
      var j = oe & 255;
      if (_e === 255) {
        _e = 0;
        if (q === 255) {
          q = 0;
          if (j === 255) {
            j = 0;
          } else {
            ++j;
          }
        } else {
          ++q;
        }
      } else {
        ++_e;
      }
      oe = 0;
      oe += _e << 16;
      oe += q << 8;
      oe += j;
    } else {
      oe += 16777216;
    }
    return oe;
  }
  var Ce = e.Encryptor = e.extend({
    processBlock: function (oe, _e) {
      var q = this._cipher;
      var j = q.blockSize;
      var ee = this._iv;
      var U = this._counter;
      if (ee) {
        U = this._counter = ee.slice(0);
        this._iv = undefined;
      }
      (function ce(oe) {
        if ((oe[0] = de(oe[0])) === 0) {
          oe[1] = de(oe[1]);
        }
        return oe;
      })(U);
      var G = U.slice(0);
      q.encryptBlock(G, 0);
      for (var W = 0; W < j; W++) {
        oe[_e + W] ^= G[W];
      }
    }
  });
  e.Decryptor = Ce;
  return e;
}();
module.exports = O.mode.CTRGladman;