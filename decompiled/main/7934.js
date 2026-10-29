var e;
var O;
O = require("./7585.js");
require("./3057.js");
O.mode.ECB = ((e = O.lib.BlockCipherMode.extend()).Encryptor = e.extend({
  processBlock: function (de, ce) {
    this._cipher.encryptBlock(de, ce);
  }
}), e.Decryptor = e.extend({
  processBlock: function (de, ce) {
    this._cipher.decryptBlock(de, ce);
  }
}), e);
module.exports = O.mode.ECB;