var O;
O = require("./7585.js");
(function () {
  var ce = O.lib.WordArray;
  var Ce = O.enc;
  function _e(q) {
    return q << 8 & -16711936 | q >>> 8 & 16711935;
  }
  Ce.Utf16 = Ce.Utf16BE = {
    stringify: function (q) {
      var j = q.words;
      for (var ee = q.sigBytes, U = [], G = 0; G < ee; G += 2) {
        U.push(String.fromCharCode(j[G >>> 2] >>> 16 - G % 4 * 8 & 65535));
      }
      return U.join("");
    },
    parse: function (q) {
      for (var j = q.length, ee = [], U = 0; U < j; U++) {
        ee[U >>> 1] |= q.charCodeAt(U) << 16 - U % 2 * 16;
      }
      return ce.create(ee, j * 2);
    }
  };
  Ce.Utf16LE = {
    stringify: function (q) {
      var j = q.words;
      for (var ee = q.sigBytes, U = [], G = 0; G < ee; G += 2) {
        var W = _e(j[G >>> 2] >>> 16 - G % 4 * 8 & 65535);
        U.push(String.fromCharCode(W));
      }
      return U.join("");
    },
    parse: function (q) {
      for (var j = q.length, ee = [], U = 0; U < j; U++) {
        ee[U >>> 1] |= _e(q.charCodeAt(U) << 16 - U % 2 * 16);
      }
      return ce.create(ee, j * 2);
    }
  };
})();
module.exports = O.enc.Utf16;