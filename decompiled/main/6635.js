var e;
var de;
var O;
O = require("./7585.js");
require("./3057.js");
O.mode.CTR = (de = (e = O.lib.BlockCipherMode.extend()).Encryptor = e.extend({
  processBlock: function (ce, Ce) {
    var oe = this._cipher;
    var _e = oe.blockSize;
    var q = this._iv;
    var j = this._counter;
    if (q) {
      j = this._counter = q.slice(0);
      this._iv = undefined;
    }
    var ee = j.slice(0);
    oe.encryptBlock(ee, 0);
    j[_e - 1] = j[_e - 1] + 1 | 0;
    for (var U = 0; U < _e; U++) {
      ce[Ce + U] ^= ee[U];
    }
  }
}), e.Decryptor = de, e);
module.exports = O.mode.CTR;