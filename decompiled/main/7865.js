var e;
var de;
var ce;
var Ce;
var oe;
var q;
var O;
O = require("./7585.js");
require("./5162.js");
require("./3764.js");
Ce = (de = (e = O).lib).WordArray;
q = (oe = e.algo).EvpKDF = (ce = de.Base).extend({
  cfg: ce.extend({
    keySize: 4,
    hasher: oe.MD5,
    iterations: 1
  }),
  init: function (j) {
    this.cfg = this.cfg.extend(j);
  },
  compute: function (j, ee) {
    var U;
    var G = this.cfg;
    var W = G.hasher.create();
    var $ = Ce.create();
    for (var re = $.words, Me = G.keySize, ae = G.iterations; re.length < Me;) {
      if (U) {
        W.update(U);
      }
      U = W.update(j).finalize(ee);
      W.reset();
      for (var te = 1; te < ae; te++) {
        U = W.finalize(U);
        W.reset();
      }
      $.concat(U);
    }
    $.sigBytes = Me * 4;
    return $;
  }
});
e.EvpKDF = function (j, ee, U) {
  return q.create(U).compute(j, ee);
};
module.exports = O.EvpKDF;