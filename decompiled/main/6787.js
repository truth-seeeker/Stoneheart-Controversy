var e;
var de;
var ce;
var Ce;
var oe;
var _e;
var q;
var O;
O = require("./7585.js");
require("./401.js");
require("./3351.js");
ce = (de = (e = O).x64).Word;
Ce = de.WordArray;
q = (oe = e.algo).SHA384 = (_e = oe.SHA512).extend({
  _doReset: function () {
    this._hash = new Ce.init([new ce.init(3418070365, 3238371032), new ce.init(1654270250, 914150663), new ce.init(2438529370, 812702999), new ce.init(355462360, 4144912697), new ce.init(1731405415, 4290775857), new ce.init(2394180231, 1750603025), new ce.init(3675008525, 1694076839), new ce.init(1203062813, 3204075428)]);
  },
  _doFinalize: function () {
    var j = _e._doFinalize.call(this);
    j.sigBytes -= 16;
    return j;
  }
});
e.SHA384 = _e._createHelper(q);
e.HmacSHA384 = _e._createHmacHelper(q);
module.exports = O.SHA384;