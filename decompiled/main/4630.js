var O;
O = require("./7585.js");
require("./3057.js");
O.pad.Iso10126 = {
  pad: function (e, de) {
    var ce = de * 4;
    var Ce = ce - e.sigBytes % ce;
    e.concat(O.lib.WordArray.random(Ce - 1)).concat(O.lib.WordArray.create([Ce << 24], 1));
  },
  unpad: function (e) {
    e.sigBytes -= e.words[e.sigBytes - 1 >>> 2] & 255;
  }
};
module.exports = O.pad.Iso10126;