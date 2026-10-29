var O;
O = require("./7585.js");
(function (e) {
  var de = O;
  var ce = de.lib;
  var Ce = ce.WordArray;
  var oe = ce.Hasher;
  var _e = de.algo;
  var q = Ce.create([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]);
  var j = Ce.create([5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]);
  var ee = Ce.create([11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6]);
  var U = Ce.create([8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]);
  var G = Ce.create([0, 1518500249, 1859775393, 2400959708, 2840853838]);
  var W = Ce.create([1352829926, 1548603684, 1836072691, 2053994217, 0]);
  var $ = _e.RIPEMD160 = oe.extend({
    _doReset: function () {
      this._hash = Ce.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
    },
    _doProcessBlock: function (ge, he) {
      for (var we = 0; we < 16; we++) {
        var Ye = he + we;
        var De = ge[Ye];
        ge[Ye] = (De << 8 | De >>> 24) & 16711935 | (De << 24 | De >>> 8) & -16711936;
      }
      var Ze;
      var ht;
      var Ct;
      var qe;
      var Fe;
      var $e;
      var Ve;
      var rn;
      var yn;
      var ri;
      var xt;
      var Ie = this._hash.words;
      var Je = G.words;
      var K = W.words;
      var ie = q.words;
      var xe = j.words;
      var le = ee.words;
      var We = U.words;
      $e = Ze = Ie[0];
      Ve = ht = Ie[1];
      rn = Ct = Ie[2];
      yn = qe = Ie[3];
      ri = Fe = Ie[4];
      we = 0;
      for (; we < 80; we += 1) {
        xt = Ze + ge[he + ie[we]] | 0;
        xt += we < 16 ? re(ht, Ct, qe) + Je[0] : we < 32 ? Me(ht, Ct, qe) + Je[1] : we < 48 ? ae(ht, Ct, qe) + Je[2] : we < 64 ? te(ht, Ct, qe) + Je[3] : Y(ht, Ct, qe) + Je[4];
        xt = (xt = ve(xt |= 0, le[we])) + Fe | 0;
        Ze = Fe;
        Fe = qe;
        qe = ve(Ct, 10);
        Ct = ht;
        ht = xt;
        xt = $e + ge[he + xe[we]] | 0;
        xt += we < 16 ? Y(Ve, rn, yn) + K[0] : we < 32 ? te(Ve, rn, yn) + K[1] : we < 48 ? ae(Ve, rn, yn) + K[2] : we < 64 ? Me(Ve, rn, yn) + K[3] : re(Ve, rn, yn) + K[4];
        xt = (xt = ve(xt |= 0, We[we])) + ri | 0;
        $e = ri;
        ri = yn;
        yn = ve(rn, 10);
        rn = Ve;
        Ve = xt;
      }
      xt = Ie[1] + Ct + yn | 0;
      Ie[1] = Ie[2] + qe + ri | 0;
      Ie[2] = Ie[3] + Fe + $e | 0;
      Ie[3] = Ie[4] + Ze + Ve | 0;
      Ie[4] = Ie[0] + ht + rn | 0;
      Ie[0] = xt;
    },
    _doFinalize: function () {
      var ge = this._data;
      var he = ge.words;
      var we = this._nDataBytes * 8;
      var Ye = ge.sigBytes * 8;
      he[Ye >>> 5] |= 128 << 24 - Ye % 32;
      he[14 + (Ye + 64 >>> 9 << 4)] = (we << 8 | we >>> 24) & 16711935 | (we << 24 | we >>> 8) & -16711936;
      ge.sigBytes = (he.length + 1) * 4;
      this._process();
      var De = this._hash;
      var Ie = De.words;
      for (var Je = 0; Je < 5; Je++) {
        var K = Ie[Je];
        Ie[Je] = (K << 8 | K >>> 24) & 16711935 | (K << 24 | K >>> 8) & -16711936;
      }
      return De;
    },
    clone: function () {
      var ge = oe.clone.call(this);
      ge._hash = this._hash.clone();
      return ge;
    }
  });
  function re(ge, he, we) {
    return ge ^ he ^ we;
  }
  function Me(ge, he, we) {
    return ge & he | ~ge & we;
  }
  function ae(ge, he, we) {
    return (ge | ~he) ^ we;
  }
  function te(ge, he, we) {
    return ge & we | he & ~we;
  }
  function Y(ge, he, we) {
    return ge ^ (he | ~we);
  }
  function ve(ge, he) {
    return ge << he | ge >>> 32 - he;
  }
  de.RIPEMD160 = oe._createHelper($);
  de.HmacRIPEMD160 = oe._createHmacHelper($);
})(Math);
module.exports = O.RIPEMD160;