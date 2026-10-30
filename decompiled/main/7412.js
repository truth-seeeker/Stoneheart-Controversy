var O;
O = require("./7585.js");
(function () {
  if (typeof ArrayBuffer == "function") {
    var ce = O.lib.WordArray;
    var Ce = ce.init;
    var oe = ce.init = function (_e) {
      if (_e instanceof ArrayBuffer) {
        _e = new Uint8Array(_e);
      }
      if (_e instanceof Int8Array || typeof Uint8ClampedArray !== "undefined" && _e instanceof Uint8ClampedArray || _e instanceof Int16Array || _e instanceof Uint16Array || _e instanceof Int32Array || _e instanceof Uint32Array || _e instanceof Float32Array || _e instanceof Float64Array) {
        _e = new Uint8Array(_e.buffer, _e.byteOffset, _e.byteLength);
      }
      if (_e instanceof Uint8Array) {
        for (var q = _e.byteLength, j = [], ee = 0; ee < q; ee++) {
          j[ee >>> 2] |= _e[ee] << 24 - ee % 4 * 8;
        }
        Ce.call(this, j, q);
      } else {
        Ce.apply(this, arguments);
      }
    };
    oe.prototype = ce;
  }
})();
module.exports = O.lib.WordArray;