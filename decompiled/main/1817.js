var O;
O = require("./7585.js");
(function (e) {
  var de = O;
  var ce = de.lib;
  var Ce = ce.WordArray;
  var oe = ce.Hasher;
  var _e = de.algo;
  var q = [];
  var j = [];
  (function () {
    function G(Me) {
      for (var ae = e.sqrt(Me), te = 2; te <= ae; te++) {
        if (!(Me % te)) {
          return false;
        }
      }
      return true;
    }
    function W(Me) {
      return (Me - (Me | 0)) * 4294967296 | 0;
    }
    var $ = 2;
    for (var re = 0; re < 64;) {
      if (G($)) {
        if (re < 8) {
          q[re] = W(e.pow($, 0.5));
        }
        j[re] = W(e.pow($, 1 / 3));
        re++;
      }
      $++;
    }
  })();
  var ee = [];
  var U = _e.SHA256 = oe.extend({
    _doReset: function () {
      this._hash = new Ce.init(q.slice(0));
    },
    _doProcessBlock: function (G, W) {
      var $ = this._hash.words;
      var re = $[0];
      var Me = $[1];
      var ae = $[2];
      var te = $[3];
      var Y = $[4];
      var ve = $[5];
      var ge = $[6];
      var he = $[7];
      for (var we = 0; we < 64; we++) {
        if (we < 16) {
          ee[we] = G[W + we] | 0;
        } else {
          var Ye = ee[we - 15];
          var Ie = ee[we - 2];
          ee[we] = ((Ye << 25 | Ye >>> 7) ^ (Ye << 14 | Ye >>> 18) ^ Ye >>> 3) + ee[we - 7] + ((Ie << 15 | Ie >>> 17) ^ (Ie << 13 | Ie >>> 19) ^ Ie >>> 10) + ee[we - 16];
        }
        var ie = re & Me ^ re & ae ^ Me & ae;
        var We = he + ((Y << 26 | Y >>> 6) ^ (Y << 21 | Y >>> 11) ^ (Y << 7 | Y >>> 25)) + (Y & ve ^ ~Y & ge) + j[we] + ee[we];
        he = ge;
        ge = ve;
        ve = Y;
        Y = te + We | 0;
        te = ae;
        ae = Me;
        Me = re;
        re = We + (((re << 30 | re >>> 2) ^ (re << 19 | re >>> 13) ^ (re << 10 | re >>> 22)) + ie) | 0;
      }
      $[0] = $[0] + re | 0;
      $[1] = $[1] + Me | 0;
      $[2] = $[2] + ae | 0;
      $[3] = $[3] + te | 0;
      $[4] = $[4] + Y | 0;
      $[5] = $[5] + ve | 0;
      $[6] = $[6] + ge | 0;
      $[7] = $[7] + he | 0;
    },
    _doFinalize: function () {
      var G = this._data;
      var W = G.words;
      var $ = this._nDataBytes * 8;
      var re = G.sigBytes * 8;
      W[re >>> 5] |= 128 << 24 - re % 32;
      W[14 + (re + 64 >>> 9 << 4)] = e.floor($ / 4294967296);
      W[15 + (re + 64 >>> 9 << 4)] = $;
      G.sigBytes = W.length * 4;
      this._process();
      return this._hash;
    },
    clone: function () {
      var G = oe.clone.call(this);
      G._hash = this._hash.clone();
      return G;
    }
  });
  de.SHA256 = oe._createHelper(U);
  de.HmacSHA256 = oe._createHmacHelper(U);
})(Math);
module.exports = O.SHA256;