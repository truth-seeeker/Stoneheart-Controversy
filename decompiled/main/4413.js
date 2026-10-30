var O;
O = require("./7585.js");
require("./3057.js");
O.pad.AnsiX923 = {
  pad: function (e, de) {
    var ce = e.sigBytes;
    var Ce = de * 4;
    var oe = Ce - ce % Ce;
    var _e = ce + oe - 1;
    e.clamp();
    e.words[_e >>> 2] |= oe << 24 - _e % 4 * 8;
    e.sigBytes += oe;
  },
  unpad: function (e) {
    e.sigBytes -= e.words[e.sigBytes - 1 >>> 2] & 255;
  }
};
module.exports = O.pad.Ansix923;