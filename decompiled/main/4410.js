var O;
var ce;
O = require("./7585.js");
ce = O.lib.WordArray;
O.enc.Base64url = {
  stringify: function (q, j = true) {
    var ee = q.words;
    var U = q.sigBytes;
    var G = j ? this._safe_map : this._map;
    q.clamp();
    var W = [];
    for (var $ = 0; $ < U; $ += 3) {
      var te = (ee[$ >>> 2] >>> 24 - $ % 4 * 8 & 255) << 16 | (ee[$ + 1 >>> 2] >>> 24 - ($ + 1) % 4 * 8 & 255) << 8 | ee[$ + 2 >>> 2] >>> 24 - ($ + 2) % 4 * 8 & 255;
      for (var Y = 0; Y < 4 && $ + Y * 0.75 < U; Y++) {
        W.push(G.charAt(te >>> (3 - Y) * 6 & 63));
      }
    }
    var ve = G.charAt(64);
    if (ve) {
      while (W.length % 4) {
        W.push(ve);
      }
    }
    return W.join("");
  },
  parse: function (q, j = true) {
    var ee = q.length;
    var U = j ? this._safe_map : this._map;
    var G = this._reverseMap;
    if (!G) {
      G = this._reverseMap = [];
      for (var W = 0; W < U.length; W++) {
        G[U.charCodeAt(W)] = W;
      }
    }
    var $ = U.charAt(64);
    if ($) {
      var re = q.indexOf($);
      if (re !== -1) {
        ee = re;
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
    }(q, ee, G);
  },
  _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  _safe_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
};
module.exports = O.enc.Base64url;