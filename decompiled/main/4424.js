var O;
O = require("./7585.js");
require("./3057.js");
O.mode.CFB = function () {
  var e = O.lib.BlockCipherMode.extend();
  function de(ce, Ce, oe, _e) {
    var q;
    var j = this._iv;
    if (j) {
      q = j.slice(0);
      this._iv = undefined;
    } else {
      q = this._prevBlock;
    }
    _e.encryptBlock(q, 0);
    for (var ee = 0; ee < oe; ee++) {
      ce[Ce + ee] ^= q[ee];
    }
  }
  e.Encryptor = e.extend({
    processBlock: function (ce, Ce) {
      var oe = this._cipher;
      var _e = oe.blockSize;
      de.call(this, ce, Ce, _e, oe);
      this._prevBlock = ce.slice(Ce, Ce + _e);
    }
  });
  e.Decryptor = e.extend({
    processBlock: function (ce, Ce) {
      var oe = this._cipher;
      var _e = oe.blockSize;
      var q = ce.slice(Ce, Ce + _e);
      de.call(this, ce, Ce, _e, oe);
      this._prevBlock = q;
    }
  });
  return e;
}();
module.exports = O.mode.CFB;