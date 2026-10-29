var O;
O = require("./7585.js");
require("./3057.js");
O.pad.ZeroPadding = {
  pad: function (e, de) {
    var ce = de * 4;
    e.clamp();
    e.sigBytes += ce - (e.sigBytes % ce || ce);
  },
  unpad: function (e) {
    var de = e.words;
    var ce = e.sigBytes - 1;
    for (ce = e.sigBytes - 1; ce >= 0; ce--) {
      if (de[ce >>> 2] >>> 24 - ce % 4 * 8 & 255) {
        e.sigBytes = ce + 1;
        break;
      }
    }
  }
};
module.exports = O.pad.ZeroPadding;