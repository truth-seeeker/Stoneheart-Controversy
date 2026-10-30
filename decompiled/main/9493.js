var O;
O = require("./7585.js");
(function (e) {
  var de = O;
  var ce = de.lib;
  var Ce = ce.WordArray;
  var oe = ce.Hasher;
  var _e = de.algo;
  var q = [];
  (function () {
    for (var $ = 0; $ < 64; $++) {
      q[$] = e.abs(e.sin($ + 1)) * 4294967296 | 0;
    }
  })();
  var j = _e.MD5 = oe.extend({
    _doReset: function () {
      this._hash = new Ce.init([1732584193, 4023233417, 2562383102, 271733878]);
    },
    _doProcessBlock: function ($, re) {
      for (var Me = 0; Me < 16; Me++) {
        var ae = re + Me;
        var te = $[ae];
        $[ae] = (te << 8 | te >>> 24) & 16711935 | (te << 24 | te >>> 8) & -16711936;
      }
      var Y = this._hash.words;
      var ve = $[re + 0];
      var ge = $[re + 1];
      var he = $[re + 2];
      var we = $[re + 3];
      var Ye = $[re + 4];
      var De = $[re + 5];
      var Ie = $[re + 6];
      var Je = $[re + 7];
      var K = $[re + 8];
      var ie = $[re + 9];
      var xe = $[re + 10];
      var le = $[re + 11];
      var We = $[re + 12];
      var Ze = $[re + 13];
      var ht = $[re + 14];
      var Ct = $[re + 15];
      var qe = Y[0];
      var Fe = Y[1];
      var $e = Y[2];
      var Ve = Y[3];
      qe = ee(qe, Fe, $e, Ve, ve, 7, q[0]);
      Ve = ee(Ve, qe, Fe, $e, ge, 12, q[1]);
      $e = ee($e, Ve, qe, Fe, he, 17, q[2]);
      Fe = ee(Fe, $e, Ve, qe, we, 22, q[3]);
      qe = ee(qe, Fe, $e, Ve, Ye, 7, q[4]);
      Ve = ee(Ve, qe, Fe, $e, De, 12, q[5]);
      $e = ee($e, Ve, qe, Fe, Ie, 17, q[6]);
      Fe = ee(Fe, $e, Ve, qe, Je, 22, q[7]);
      qe = ee(qe, Fe, $e, Ve, K, 7, q[8]);
      Ve = ee(Ve, qe, Fe, $e, ie, 12, q[9]);
      $e = ee($e, Ve, qe, Fe, xe, 17, q[10]);
      Fe = ee(Fe, $e, Ve, qe, le, 22, q[11]);
      qe = ee(qe, Fe, $e, Ve, We, 7, q[12]);
      Ve = ee(Ve, qe, Fe, $e, Ze, 12, q[13]);
      $e = ee($e, Ve, qe, Fe, ht, 17, q[14]);
      qe = U(qe, Fe = ee(Fe, $e, Ve, qe, Ct, 22, q[15]), $e, Ve, ge, 5, q[16]);
      Ve = U(Ve, qe, Fe, $e, Ie, 9, q[17]);
      $e = U($e, Ve, qe, Fe, le, 14, q[18]);
      Fe = U(Fe, $e, Ve, qe, ve, 20, q[19]);
      qe = U(qe, Fe, $e, Ve, De, 5, q[20]);
      Ve = U(Ve, qe, Fe, $e, xe, 9, q[21]);
      $e = U($e, Ve, qe, Fe, Ct, 14, q[22]);
      Fe = U(Fe, $e, Ve, qe, Ye, 20, q[23]);
      qe = U(qe, Fe, $e, Ve, ie, 5, q[24]);
      Ve = U(Ve, qe, Fe, $e, ht, 9, q[25]);
      $e = U($e, Ve, qe, Fe, we, 14, q[26]);
      Fe = U(Fe, $e, Ve, qe, K, 20, q[27]);
      qe = U(qe, Fe, $e, Ve, Ze, 5, q[28]);
      Ve = U(Ve, qe, Fe, $e, he, 9, q[29]);
      $e = U($e, Ve, qe, Fe, Je, 14, q[30]);
      qe = G(qe, Fe = U(Fe, $e, Ve, qe, We, 20, q[31]), $e, Ve, De, 4, q[32]);
      Ve = G(Ve, qe, Fe, $e, K, 11, q[33]);
      $e = G($e, Ve, qe, Fe, le, 16, q[34]);
      Fe = G(Fe, $e, Ve, qe, ht, 23, q[35]);
      qe = G(qe, Fe, $e, Ve, ge, 4, q[36]);
      Ve = G(Ve, qe, Fe, $e, Ye, 11, q[37]);
      $e = G($e, Ve, qe, Fe, Je, 16, q[38]);
      Fe = G(Fe, $e, Ve, qe, xe, 23, q[39]);
      qe = G(qe, Fe, $e, Ve, Ze, 4, q[40]);
      Ve = G(Ve, qe, Fe, $e, ve, 11, q[41]);
      $e = G($e, Ve, qe, Fe, we, 16, q[42]);
      Fe = G(Fe, $e, Ve, qe, Ie, 23, q[43]);
      qe = G(qe, Fe, $e, Ve, ie, 4, q[44]);
      Ve = G(Ve, qe, Fe, $e, We, 11, q[45]);
      $e = G($e, Ve, qe, Fe, Ct, 16, q[46]);
      qe = W(qe, Fe = G(Fe, $e, Ve, qe, he, 23, q[47]), $e, Ve, ve, 6, q[48]);
      Ve = W(Ve, qe, Fe, $e, Je, 10, q[49]);
      $e = W($e, Ve, qe, Fe, ht, 15, q[50]);
      Fe = W(Fe, $e, Ve, qe, De, 21, q[51]);
      qe = W(qe, Fe, $e, Ve, We, 6, q[52]);
      Ve = W(Ve, qe, Fe, $e, we, 10, q[53]);
      $e = W($e, Ve, qe, Fe, xe, 15, q[54]);
      Fe = W(Fe, $e, Ve, qe, ge, 21, q[55]);
      qe = W(qe, Fe, $e, Ve, K, 6, q[56]);
      Ve = W(Ve, qe, Fe, $e, Ct, 10, q[57]);
      $e = W($e, Ve, qe, Fe, Ie, 15, q[58]);
      Fe = W(Fe, $e, Ve, qe, Ze, 21, q[59]);
      qe = W(qe, Fe, $e, Ve, Ye, 6, q[60]);
      Ve = W(Ve, qe, Fe, $e, le, 10, q[61]);
      $e = W($e, Ve, qe, Fe, he, 15, q[62]);
      Fe = W(Fe, $e, Ve, qe, ie, 21, q[63]);
      Y[0] = Y[0] + qe | 0;
      Y[1] = Y[1] + Fe | 0;
      Y[2] = Y[2] + $e | 0;
      Y[3] = Y[3] + Ve | 0;
    },
    _doFinalize: function () {
      var $ = this._data;
      var re = $.words;
      var Me = this._nDataBytes * 8;
      var ae = $.sigBytes * 8;
      re[ae >>> 5] |= 128 << 24 - ae % 32;
      var te = e.floor(Me / 4294967296);
      var Y = Me;
      re[15 + (ae + 64 >>> 9 << 4)] = (te << 8 | te >>> 24) & 16711935 | (te << 24 | te >>> 8) & -16711936;
      re[14 + (ae + 64 >>> 9 << 4)] = (Y << 8 | Y >>> 24) & 16711935 | (Y << 24 | Y >>> 8) & -16711936;
      $.sigBytes = (re.length + 1) * 4;
      this._process();
      var ve = this._hash;
      var ge = ve.words;
      for (var he = 0; he < 4; he++) {
        var we = ge[he];
        ge[he] = (we << 8 | we >>> 24) & 16711935 | (we << 24 | we >>> 8) & -16711936;
      }
      return ve;
    },
    clone: function () {
      var $ = oe.clone.call(this);
      $._hash = this._hash.clone();
      return $;
    }
  });
  function ee($, re, Me, ae, te, Y, ve) {
    var ge = $ + (re & Me | ~re & ae) + te + ve;
    return (ge << Y | ge >>> 32 - Y) + re;
  }
  function U($, re, Me, ae, te, Y, ve) {
    var ge = $ + (re & ae | Me & ~ae) + te + ve;
    return (ge << Y | ge >>> 32 - Y) + re;
  }
  function G($, re, Me, ae, te, Y, ve) {
    var ge = $ + (re ^ Me ^ ae) + te + ve;
    return (ge << Y | ge >>> 32 - Y) + re;
  }
  function W($, re, Me, ae, te, Y, ve) {
    var ge = $ + (Me ^ (re | ~ae)) + te + ve;
    return (ge << Y | ge >>> 32 - Y) + re;
  }
  de.MD5 = oe._createHelper(j);
  de.HmacMD5 = oe._createHmacHelper(j);
})(Math);
module.exports = O.MD5;