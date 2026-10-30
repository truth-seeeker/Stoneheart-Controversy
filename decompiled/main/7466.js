var O;
O = require("./7585.js");
require("./8319.js");
require("./9493.js");
require("./7865.js");
require("./3057.js");
(function () {
  var e = O;
  var ce = e.lib.BlockCipher;
  var Ce = e.algo;
  var oe = [];
  var _e = [];
  var q = [];
  var j = [];
  var ee = [];
  var U = [];
  var G = [];
  var W = [];
  var $ = [];
  var re = [];
  (function () {
    var te = [];
    for (var Y = 0; Y < 256; Y++) {
      te[Y] = Y < 128 ? Y << 1 : Y << 1 ^ 283;
    }
    var ve = 0;
    var ge = 0;
    for (Y = 0; Y < 256; Y++) {
      var he = ge ^ ge << 1 ^ ge << 2 ^ ge << 3 ^ ge << 4;
      oe[ve] = he = he >>> 8 ^ he & 255 ^ 99;
      _e[he] = ve;
      var Ie;
      var we = te[ve];
      var Ye = te[we];
      var De = te[Ye];
      q[ve] = (Ie = te[he] * 257 ^ he * 16843008) << 24 | Ie >>> 8;
      j[ve] = Ie << 16 | Ie >>> 16;
      ee[ve] = Ie << 8 | Ie >>> 24;
      U[ve] = Ie;
      G[he] = (Ie = De * 16843009 ^ Ye * 65537 ^ we * 257 ^ ve * 16843008) << 24 | Ie >>> 8;
      W[he] = Ie << 16 | Ie >>> 16;
      $[he] = Ie << 8 | Ie >>> 24;
      re[he] = Ie;
      if (ve) {
        ve = we ^ te[te[te[De ^ we]]];
        ge ^= te[te[ge]];
      } else {
        ve = ge = 1;
      }
    }
  })();
  var Me = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
  var ae = Ce.AES = ce.extend({
    _doReset: function () {
      if (!this._nRounds || this._keyPriorReset !== this._key) {
        var Y = this._keyPriorReset = this._key;
        var ve = Y.words;
        var ge = Y.sigBytes / 4;
        for (var we = ((this._nRounds = ge + 6) + 1) * 4, Ye = this._keySchedule = [], De = 0; De < we; De++) {
          if (De < ge) {
            Ye[De] = ve[De];
          } else {
            te = Ye[De - 1];
            if (De % ge) {
              if (ge > 6 && De % ge == 4) {
                te = oe[te >>> 24] << 24 | oe[te >>> 16 & 255] << 16 | oe[te >>> 8 & 255] << 8 | oe[te & 255];
              }
            } else {
              te = oe[(te = te << 8 | te >>> 24) >>> 24] << 24 | oe[te >>> 16 & 255] << 16 | oe[te >>> 8 & 255] << 8 | oe[te & 255];
              te ^= Me[De / ge | 0] << 24;
            }
            Ye[De] = Ye[De - ge] ^ te;
          }
        }
        var Ie = this._invKeySchedule = [];
        for (var Je = 0; Je < we; Je++) {
          De = we - Je;
          if (Je % 4) {
            var te = Ye[De];
          } else {
            te = Ye[De - 4];
          }
          Ie[Je] = Je < 4 || De <= 4 ? te : G[oe[te >>> 24]] ^ W[oe[te >>> 16 & 255]] ^ $[oe[te >>> 8 & 255]] ^ re[oe[te & 255]];
        }
      }
    },
    encryptBlock: function (te, Y) {
      this._doCryptBlock(te, Y, this._keySchedule, q, j, ee, U, oe);
    },
    decryptBlock: function (te, Y) {
      var ve = te[Y + 1];
      te[Y + 1] = te[Y + 3];
      te[Y + 3] = ve;
      this._doCryptBlock(te, Y, this._invKeySchedule, G, W, $, re, _e);
      ve = te[Y + 1];
      te[Y + 1] = te[Y + 3];
      te[Y + 3] = ve;
    },
    _doCryptBlock: function (te, Y, ve, ge, he, we, Ye, De) {
      for (var Ie = this._nRounds, Je = te[Y] ^ ve[0], K = te[Y + 1] ^ ve[1], ie = te[Y + 2] ^ ve[2], xe = te[Y + 3] ^ ve[3], le = 4, We = 1; We < Ie; We++) {
        var Ze = ge[Je >>> 24] ^ he[K >>> 16 & 255] ^ we[ie >>> 8 & 255] ^ Ye[xe & 255] ^ ve[le++];
        var ht = ge[K >>> 24] ^ he[ie >>> 16 & 255] ^ we[xe >>> 8 & 255] ^ Ye[Je & 255] ^ ve[le++];
        var Ct = ge[ie >>> 24] ^ he[xe >>> 16 & 255] ^ we[Je >>> 8 & 255] ^ Ye[K & 255] ^ ve[le++];
        var qe = ge[xe >>> 24] ^ he[Je >>> 16 & 255] ^ we[K >>> 8 & 255] ^ Ye[ie & 255] ^ ve[le++];
        Je = Ze;
        K = ht;
        ie = Ct;
        xe = qe;
      }
      Ze = (De[Je >>> 24] << 24 | De[K >>> 16 & 255] << 16 | De[ie >>> 8 & 255] << 8 | De[xe & 255]) ^ ve[le++];
      ht = (De[K >>> 24] << 24 | De[ie >>> 16 & 255] << 16 | De[xe >>> 8 & 255] << 8 | De[Je & 255]) ^ ve[le++];
      Ct = (De[ie >>> 24] << 24 | De[xe >>> 16 & 255] << 16 | De[Je >>> 8 & 255] << 8 | De[K & 255]) ^ ve[le++];
      qe = (De[xe >>> 24] << 24 | De[Je >>> 16 & 255] << 16 | De[K >>> 8 & 255] << 8 | De[ie & 255]) ^ ve[le++];
      te[Y] = Ze;
      te[Y + 1] = ht;
      te[Y + 2] = Ct;
      te[Y + 3] = qe;
    },
    keySize: 8
  });
  e.AES = ce._createHelper(ae);
})();
module.exports = O.AES;