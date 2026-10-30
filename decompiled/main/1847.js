var O;
var Ce;
var _e;
O = require("./7585.js");
require("./3057.js");
Ce = O.lib.CipherParams;
_e = O.enc.Hex;
O.format.Hex = {
  stringify: function (ee) {
    return ee.ciphertext.toString(_e);
  },
  parse: function (ee) {
    var U = _e.parse(ee);
    return Ce.create({
      ciphertext: U
    });
  }
};
module.exports = O.format.Hex;