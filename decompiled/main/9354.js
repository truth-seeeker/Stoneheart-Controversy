var e;
var de;
var O;
O = require("./7585.js");
require("./3057.js");
O.mode.OFB = (de = (e = O.lib.BlockCipherMode.extend()).Encryptor = e.extend({
  processBlock: function (ce, Ce) {
    var oe = this._cipher;
    var _e = oe.blockSize;
    var q = this._iv;
    var j = this._keystream;
    if (q) {
      j = this._keystream = q.slice(0);
      this._iv = undefined;
    }
    oe.encryptBlock(j, 0);
    for (var ee = 0; ee < _e; ee++) {
      ce[Ce + ee] ^= j[ee];
    }
  }
}), e.Decryptor = de, e);
module.exports = O.mode.OFB;