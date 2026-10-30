var ce;
var Ce;
var oe;
var _e;
var O;
O = require("./7585.js");
Ce = (ce = O.lib).Base;
oe = ce.WordArray;
(_e = O.x64 = {}).Word = Ce.extend({
  init: function (ee, U) {
    this.high = ee;
    this.low = U;
  }
});
_e.WordArray = Ce.extend({
  init: function (ee, U) {
    ee = this.words = ee || [];
    this.sigBytes = U ?? ee.length * 8;
  },
  toX32: function () {
    var ee = this.words;
    for (var U = ee.length, G = [], W = 0; W < U; W++) {
      var $ = ee[W];
      G.push($.high);
      G.push($.low);
    }
    return oe.create(G, this.sigBytes);
  },
  clone: function () {
    var ee = Ce.clone.call(this);
    var U = ee.words = this.words.slice(0);
    for (var G = U.length, W = 0; W < G; W++) {
      U[W] = U[W].clone();
    }
    return ee;
  }
});
module.exports = O;