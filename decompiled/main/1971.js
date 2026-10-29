var O;
O = require("./7585.js");
require("./401.js");
(function (e) {
  var de = O;
  var ce = de.lib;
  var Ce = ce.WordArray;
  var oe = ce.Hasher;
  var q = de.x64.Word;
  var j = de.algo;
  var ee = [];
  var U = [];
  var G = [];
  (function () {
    var re = 1;
    var Me = 0;
    for (var ae = 0; ae < 24; ae++) {
      ee[re + Me * 5] = (ae + 1) * (ae + 2) / 2 % 64;
      var Y = (re * 2 + Me * 3) % 5;
      re = Me % 5;
      Me = Y;
    }
    for (re = 0; re < 5; re++) {
      for (Me = 0; Me < 5; Me++) {
        U[re + Me * 5] = Me + (re * 2 + Me * 3) % 5 * 5;
      }
    }
    var ve = 1;
    for (var ge = 0; ge < 24; ge++) {
      var he = 0;
      var we = 0;
      for (var Ye = 0; Ye < 7; Ye++) {
        if (ve & 1) {
          var De = (1 << Ye) - 1;
          if (De < 32) {
            we ^= 1 << De;
          } else {
            he ^= 1 << De - 32;
          }
        }
        if (ve & 128) {
          ve = ve << 1 ^ 113;
        } else {
          ve <<= 1;
        }
      }
      G[ge] = q.create(he, we);
    }
  })();
  var W = [];
  (function () {
    for (var re = 0; re < 25; re++) {
      W[re] = q.create();
    }
  })();
  var $ = j.SHA3 = oe.extend({
    cfg: oe.cfg.extend({
      outputLength: 512
    }),
    _doReset: function () {
      var re = this._state = [];
      for (var Me = 0; Me < 25; Me++) {
        re[Me] = new q.init();
      }
      this.blockSize = (1600 - this.cfg.outputLength * 2) / 32;
    },
    _doProcessBlock: function (re, Me) {
      var ae = this._state;
      for (var te = this.blockSize / 2, Y = 0; Y < te; Y++) {
        var ve = re[Me + Y * 2];
        var ge = re[Me + Y * 2 + 1];
        ve = (ve << 8 | ve >>> 24) & 16711935 | (ve << 24 | ve >>> 8) & -16711936;
        (he = ae[Y]).high ^= ge = (ge << 8 | ge >>> 24) & 16711935 | (ge << 24 | ge >>> 8) & -16711936;
        he.low ^= ve;
      }
      for (var we = 0; we < 24; we++) {
        for (var Ye = 0; Ye < 5; Ye++) {
          var De = 0;
          var Ie = 0;
          for (var Je = 0; Je < 5; Je++) {
            De ^= (he = ae[Ye + Je * 5]).high;
            Ie ^= he.low;
          }
          var K = W[Ye];
          K.high = De;
          K.low = Ie;
        }
        for (Ye = 0; Ye < 5; Ye++) {
          var ie = W[(Ye + 4) % 5];
          var xe = W[(Ye + 1) % 5];
          var le = xe.high;
          var We = xe.low;
          De = ie.high ^ (le << 1 | We >>> 31);
          Ie = ie.low ^ (We << 1 | le >>> 31);
          Je = 0;
          for (; Je < 5; Je++) {
            (he = ae[Ye + Je * 5]).high ^= De;
            he.low ^= Ie;
          }
        }
        for (var Ze = 1; Ze < 25; Ze++) {
          var ht = (he = ae[Ze]).high;
          var Ct = he.low;
          var qe = ee[Ze];
          if (qe < 32) {
            De = ht << qe | Ct >>> 32 - qe;
            Ie = Ct << qe | ht >>> 32 - qe;
          } else {
            De = Ct << qe - 32 | ht >>> 64 - qe;
            Ie = ht << qe - 32 | Ct >>> 64 - qe;
          }
          var Fe = W[U[Ze]];
          Fe.high = De;
          Fe.low = Ie;
        }
        var $e = W[0];
        var Ve = ae[0];
        $e.high = Ve.high;
        $e.low = Ve.low;
        Ye = 0;
        for (; Ye < 5; Ye++) {
          for (Je = 0; Je < 5; Je++) {
            var rn = W[Ze = Ye + Je * 5];
            var yn = W[(Ye + 1) % 5 + Je * 5];
            var ri = W[(Ye + 2) % 5 + Je * 5];
            (he = ae[Ze]).high = rn.high ^ ~yn.high & ri.high;
            he.low = rn.low ^ ~yn.low & ri.low;
          }
        }
        var he;
        var xt = G[we];
        (he = ae[0]).high ^= xt.high;
        he.low ^= xt.low;
      }
    },
    _doFinalize: function () {
      var re = this._data;
      var Me = re.words;
      var te = re.sigBytes * 8;
      var Y = this.blockSize * 32;
      Me[te >>> 5] |= 1 << 24 - te % 32;
      Me[(e.ceil((te + 1) / Y) * Y >>> 5) - 1] |= 128;
      re.sigBytes = Me.length * 4;
      this._process();
      var ve = this._state;
      var ge = this.cfg.outputLength / 8;
      for (var he = ge / 8, we = [], Ye = 0; Ye < he; Ye++) {
        var De = ve[Ye];
        var Ie = De.high;
        var Je = De.low;
        Ie = (Ie << 8 | Ie >>> 24) & 16711935 | (Ie << 24 | Ie >>> 8) & -16711936;
        we.push(Je = (Je << 8 | Je >>> 24) & 16711935 | (Je << 24 | Je >>> 8) & -16711936);
        we.push(Ie);
      }
      return new Ce.init(we, ge);
    },
    clone: function () {
      var re = oe.clone.call(this);
      var Me = re._state = this._state.slice(0);
      for (var ae = 0; ae < 25; ae++) {
        Me[ae] = Me[ae].clone();
      }
      return re;
    }
  });
  de.SHA3 = oe._createHelper($);
  de.HmacSHA3 = oe._createHmacHelper($);
})(Math);
module.exports = O.SHA3;