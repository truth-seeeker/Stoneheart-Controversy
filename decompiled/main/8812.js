var e;
var de;
var ce;
var Ce;
var oe;
var q;
var j;
var O;
O = require("./7585.js");
require("./5162.js");
require("./3764.js");
Ce = (de = (e = O).lib).WordArray;
q = (oe = e.algo).HMAC;
j = oe.PBKDF2 = (ce = de.Base).extend({
  cfg: ce.extend({
    keySize: 4,
    hasher: oe.SHA1,
    iterations: 1
  }),
  init: function (ee) {
    this.cfg = this.cfg.extend(ee);
  },
  compute: function (ee, U) {
    var G = this.cfg;
    var W = q.create(G.hasher, ee);
    var $ = Ce.create();
    var re = Ce.create([1]);
    for (var Me = $.words, ae = re.words, te = G.keySize, Y = G.iterations; Me.length < te;) {
      var ve = W.update(U).finalize(re);
      W.reset();
      var ge = ve.words;
      var he = ge.length;
      var we = ve;
      for (var Ye = 1; Ye < Y; Ye++) {
        we = W.finalize(we);
        W.reset();
        var De = we.words;
        for (var Ie = 0; Ie < he; Ie++) {
          ge[Ie] ^= De[Ie];
        }
      }
      $.concat(ve);
      ae[0]++;
    }
    $.sigBytes = te * 4;
    return $;
  }
});
e.PBKDF2 = function (ee, U, G) {
  return j.create(G).compute(ee, U);
};
module.exports = O.PBKDF2;