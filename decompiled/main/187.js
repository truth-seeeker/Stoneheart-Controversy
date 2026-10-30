var O;
O = require("./7585.js");
require("./3057.js");
O.pad.Iso97971 = {
  pad: function (e, de) {
    e.concat(O.lib.WordArray.create([2147483648], 1));
    O.pad.ZeroPadding.pad(e, de);
  },
  unpad: function (e) {
    O.pad.ZeroPadding.unpad(e);
    e.sigBytes--;
  }
};
module.exports = O.pad.Iso97971;