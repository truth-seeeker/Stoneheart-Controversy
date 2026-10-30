var O;
O = require("./7585.js");
require("./401.js");
(function () {
  var e = O;
  var ce = e.lib.Hasher;
  var Ce = e.x64;
  var oe = Ce.Word;
  var _e = Ce.WordArray;
  var q = e.algo;
  function j() {
    return oe.create.apply(oe, arguments);
  }
  var ee = [j(1116352408, 3609767458), j(1899447441, 602891725), j(3049323471, 3964484399), j(3921009573, 2173295548), j(961987163, 4081628472), j(1508970993, 3053834265), j(2453635748, 2937671579), j(2870763221, 3664609560), j(3624381080, 2734883394), j(310598401, 1164996542), j(607225278, 1323610764), j(1426881987, 3590304994), j(1925078388, 4068182383), j(2162078206, 991336113), j(2614888103, 633803317), j(3248222580, 3479774868), j(3835390401, 2666613458), j(4022224774, 944711139), j(264347078, 2341262773), j(604807628, 2007800933), j(770255983, 1495990901), j(1249150122, 1856431235), j(1555081692, 3175218132), j(1996064986, 2198950837), j(2554220882, 3999719339), j(2821834349, 766784016), j(2952996808, 2566594879), j(3210313671, 3203337956), j(3336571891, 1034457026), j(3584528711, 2466948901), j(113926993, 3758326383), j(338241895, 168717936), j(666307205, 1188179964), j(773529912, 1546045734), j(1294757372, 1522805485), j(1396182291, 2643833823), j(1695183700, 2343527390), j(1986661051, 1014477480), j(2177026350, 1206759142), j(2456956037, 344077627), j(2730485921, 1290863460), j(2820302411, 3158454273), j(3259730800, 3505952657), j(3345764771, 106217008), j(3516065817, 3606008344), j(3600352804, 1432725776), j(4094571909, 1467031594), j(275423344, 851169720), j(430227734, 3100823752), j(506948616, 1363258195), j(659060556, 3750685593), j(883997877, 3785050280), j(958139571, 3318307427), j(1322822218, 3812723403), j(1537002063, 2003034995), j(1747873779, 3602036899), j(1955562222, 1575990012), j(2024104815, 1125592928), j(2227730452, 2716904306), j(2361852424, 442776044), j(2428436474, 593698344), j(2756734187, 3733110249), j(3204031479, 2999351573), j(3329325298, 3815920427), j(3391569614, 3928383900), j(3515267271, 566280711), j(3940187606, 3454069534), j(4118630271, 4000239992), j(116418474, 1914138554), j(174292421, 2731055270), j(289380356, 3203993006), j(460393269, 320620315), j(685471733, 587496836), j(852142971, 1086792851), j(1017036298, 365543100), j(1126000580, 2618297676), j(1288033470, 3409855158), j(1501505948, 4234509866), j(1607167915, 987167468), j(1816402316, 1246189591)];
  var U = [];
  (function () {
    for (var W = 0; W < 80; W++) {
      U[W] = j();
    }
  })();
  var G = q.SHA512 = ce.extend({
    _doReset: function () {
      this._hash = new _e.init([new oe.init(1779033703, 4089235720), new oe.init(3144134277, 2227873595), new oe.init(1013904242, 4271175723), new oe.init(2773480762, 1595750129), new oe.init(1359893119, 2917565137), new oe.init(2600822924, 725511199), new oe.init(528734635, 4215389547), new oe.init(1541459225, 327033209)]);
    },
    _doProcessBlock: function (W, $) {
      var re = this._hash.words;
      var Me = re[0];
      var ae = re[1];
      var te = re[2];
      var Y = re[3];
      var ve = re[4];
      var ge = re[5];
      var he = re[6];
      var we = re[7];
      var Ye = Me.high;
      var De = Me.low;
      var Ie = ae.high;
      var Je = ae.low;
      var K = te.high;
      var ie = te.low;
      var xe = Y.high;
      var le = Y.low;
      var We = ve.high;
      var Ze = ve.low;
      var ht = ge.high;
      var Ct = ge.low;
      var qe = he.high;
      var Fe = he.low;
      var $e = we.high;
      var Ve = we.low;
      var rn = Ye;
      var yn = De;
      var ri = Ie;
      var xt = Je;
      var qo = K;
      var Er = ie;
      var I1 = xe;
      var Wr = le;
      var dn = We;
      var gi = Ze;
      var e1 = ht;
      var Go = Ct;
      var Jr = qe;
      var w1 = Fe;
      var Rn = $e;
      var Qr = Ve;
      for (var Nt = 0; Nt < 80; Nt++) {
        var mi;
        var mr;
        var t1 = U[Nt];
        if (Nt < 16) {
          mr = t1.high = W[$ + Nt * 2] | 0;
          mi = t1.low = W[$ + Nt * 2 + 1] | 0;
        } else {
          var bi = U[Nt - 15];
          var ji = bi.high;
          var Be = bi.low;
          var an = (Be >>> 1 | ji << 31) ^ (Be >>> 8 | ji << 24) ^ (Be >>> 7 | ji << 25);
          var n1 = U[Nt - 2];
          var tn = n1.high;
          var xi = n1.low;
          var kt = (xi >>> 19 | tn << 13) ^ (xi << 3 | tn >>> 29) ^ (xi >>> 6 | tn << 26);
          var jo = U[Nt - 7];
          var Cn = U[Nt - 16];
          var Lr = Cn.low;
          t1.high = mr = (mr = (mr = ((ji >>> 1 | Be << 31) ^ (ji >>> 8 | Be << 24) ^ ji >>> 7) + jo.high + ((mi = an + jo.low) >>> 0 < an >>> 0 ? 1 : 0)) + ((tn >>> 19 | xi << 13) ^ (tn << 3 | xi >>> 29) ^ tn >>> 6) + ((mi += kt) >>> 0 < kt >>> 0 ? 1 : 0)) + Cn.high + ((mi += Lr) >>> 0 < Lr >>> 0 ? 1 : 0);
          t1.low = mi;
        }
        var S1;
        var Fn = dn & e1 ^ ~dn & Jr;
        var go = gi & Go ^ ~gi & w1;
        var F2 = rn & ri ^ rn & qo ^ ri & qo;
        var Kr = (yn >>> 28 | rn << 4) ^ (yn << 30 | rn >>> 2) ^ (yn << 25 | rn >>> 7);
        var U2 = ee[Nt];
        var Q1 = U2.low;
        var Hr = Rn + ((dn >>> 14 | gi << 18) ^ (dn >>> 18 | gi << 14) ^ (dn << 23 | gi >>> 9)) + ((S1 = Qr + ((gi >>> 14 | dn << 18) ^ (gi >>> 18 | dn << 14) ^ (gi << 23 | dn >>> 9))) >>> 0 < Qr >>> 0 ? 1 : 0);
        var T1 = Kr + (yn & xt ^ yn & Er ^ xt & Er);
        Rn = Jr;
        Qr = w1;
        Jr = e1;
        w1 = Go;
        e1 = dn;
        Go = gi;
        dn = I1 + (Hr = (Hr = (Hr = Hr + Fn + ((S1 += go) >>> 0 < go >>> 0 ? 1 : 0)) + U2.high + ((S1 += Q1) >>> 0 < Q1 >>> 0 ? 1 : 0)) + mr + ((S1 += mi) >>> 0 < mi >>> 0 ? 1 : 0)) + ((gi = Wr + S1 | 0) >>> 0 < Wr >>> 0 ? 1 : 0) | 0;
        I1 = qo;
        Wr = Er;
        qo = ri;
        Er = xt;
        ri = rn;
        xt = yn;
        rn = Hr + (((rn >>> 28 | yn << 4) ^ (rn << 30 | yn >>> 2) ^ (rn << 25 | yn >>> 7)) + F2 + (T1 >>> 0 < Kr >>> 0 ? 1 : 0)) + ((yn = S1 + T1 | 0) >>> 0 < S1 >>> 0 ? 1 : 0) | 0;
      }
      De = Me.low = De + yn;
      Me.high = Ye + rn + (De >>> 0 < yn >>> 0 ? 1 : 0);
      Je = ae.low = Je + xt;
      ae.high = Ie + ri + (Je >>> 0 < xt >>> 0 ? 1 : 0);
      ie = te.low = ie + Er;
      te.high = K + qo + (ie >>> 0 < Er >>> 0 ? 1 : 0);
      le = Y.low = le + Wr;
      Y.high = xe + I1 + (le >>> 0 < Wr >>> 0 ? 1 : 0);
      Ze = ve.low = Ze + gi;
      ve.high = We + dn + (Ze >>> 0 < gi >>> 0 ? 1 : 0);
      Ct = ge.low = Ct + Go;
      ge.high = ht + e1 + (Ct >>> 0 < Go >>> 0 ? 1 : 0);
      Fe = he.low = Fe + w1;
      he.high = qe + Jr + (Fe >>> 0 < w1 >>> 0 ? 1 : 0);
      Ve = we.low = Ve + Qr;
      we.high = $e + Rn + (Ve >>> 0 < Qr >>> 0 ? 1 : 0);
    },
    _doFinalize: function () {
      var W = this._data;
      var $ = W.words;
      var re = this._nDataBytes * 8;
      var Me = W.sigBytes * 8;
      $[Me >>> 5] |= 128 << 24 - Me % 32;
      $[30 + (Me + 128 >>> 10 << 5)] = Math.floor(re / 4294967296);
      $[31 + (Me + 128 >>> 10 << 5)] = re;
      W.sigBytes = $.length * 4;
      this._process();
      return this._hash.toX32();
    },
    clone: function () {
      var W = ce.clone.call(this);
      W._hash = this._hash.clone();
      return W;
    },
    blockSize: 32
  });
  e.SHA512 = ce._createHelper(G);
  e.HmacSHA512 = ce._createHmacHelper(G);
})();
module.exports = O.SHA512;