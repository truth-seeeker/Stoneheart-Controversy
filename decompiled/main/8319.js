var O;
var ce;
O = require("./7585.js");
ce = O.lib.WordArray;
O.enc.Base64 = {
  stringify: function (q) {
    var j = q.words;
    var ee = q.sigBytes;
    var U = this._map;
    q.clamp();
    var G = [];
    for (var W = 0; W < ee; W += 3) {
      var ae = (j[W >>> 2] >>> 24 - W % 4 * 8 & 255) << 16 | (j[W + 1 >>> 2] >>> 24 - (W + 1) % 4 * 8 & 255) << 8 | j[W + 2 >>> 2] >>> 24 - (W + 2) % 4 * 8 & 255;
      for (var te = 0; te < 4 && W + te * 0.75 < ee; te++) {
        G.push(U.charAt(ae >>> (3 - te) * 6 & 63));
      }
    }
    var Y = U.charAt(64);
    if (Y) {
      while (G.length % 4) {
        G.push(Y);
      }
    }
    return G.join("");
  },
  parse: function (q) {
    var j = q.length;
    var ee = this._map;
    var U = this._reverseMap;
    if (!U) {
      U = this._reverseMap = [];
      for (var G = 0; G < ee.length; G++) {
        U[ee.charCodeAt(G)] = G;
      }
    }
    var W = ee.charAt(64);
    if (W) {
      var $ = q.indexOf(W);
      if ($ !== -1) {
        j = $;
      }
    }
    return function _e(q, j, ee) {
      var U = [];
      var G = 0;
      for (var W = 0; W < j; W++) {
        if (W % 4) {
          var $ = ee[q.charCodeAt(W - 1)] << W % 4 * 2;
          var re = ee[q.charCodeAt(W)] >>> 6 - W % 4 * 2;
          U[G >>> 2] |= ($ | re) << 24 - G % 4 * 8;
          G++;
        }
      }
      return ce.create(U, G);
    }(q, j, U);
  },
  _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
};
module.exports = O.enc.Base64;