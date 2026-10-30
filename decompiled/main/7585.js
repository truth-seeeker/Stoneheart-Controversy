var O;
O = O || function (e, de) {
  var ce;
  if (typeof window !== "undefined" && window.crypto) {
    ce = window.crypto;
  }
  if (typeof self !== "undefined" && self.crypto) {
    ce = self.crypto;
  }
  if (typeof globalThis !== "undefined" && globalThis.crypto) {
    ce = globalThis.crypto;
  }
  if (!ce && typeof window !== "undefined" && window.msCrypto) {
    ce = window.msCrypto;
  }
  if (!ce && typeof global !== "undefined" && global.crypto) {
    ce = global.crypto;
  }
  if (!ce) {
    try {
      ce = require("./2480.js");
    } catch {}
  }
  function Ce() {
    if (ce) {
      if (typeof ce.getRandomValues == "function") {
        try {
          return ce.getRandomValues(new Uint32Array(1))[0];
        } catch {}
      }
      if (typeof ce.randomBytes == "function") {
        try {
          return ce.randomBytes(4).readInt32LE();
        } catch {}
      }
    }
    throw new Error("Native crypto module could not be used to get secure random number.");
  }
  var oe = Object.create || function () {
    function te() {}
    return function (Y) {
      var ve;
      te.prototype = Y;
      ve = new te();
      te.prototype = null;
      return ve;
    };
  }();
  var _e = {};
  var q = _e.lib = {};
  var j = q.Base = {
    extend: function (te) {
      var Y = oe(this);
      if (te) {
        Y.mixIn(te);
      }
      if (!Y.hasOwnProperty("init") || this.init === Y.init) {
        Y.init = function () {
          Y.$super.init.apply(this, arguments);
        };
      }
      Y.init.prototype = Y;
      Y.$super = this;
      return Y;
    },
    create: function () {
      var te = this.extend();
      te.init.apply(te, arguments);
      return te;
    },
    init: function () {},
    mixIn: function (te) {
      for (var Y in te) {
        if (te.hasOwnProperty(Y)) {
          this[Y] = te[Y];
        }
      }
      if (te.hasOwnProperty("toString")) {
        this.toString = te.toString;
      }
    },
    clone: function () {
      return this.init.prototype.extend(this);
    }
  };
  var ee = q.WordArray = j.extend({
    init: function (te, Y) {
      te = this.words = te || [];
      this.sigBytes = Y ?? te.length * 4;
    },
    toString: function (te) {
      return (te || G).stringify(this);
    },
    concat: function (te) {
      var Y = this.words;
      var ve = te.words;
      var ge = this.sigBytes;
      var he = te.sigBytes;
      this.clamp();
      if (ge % 4) {
        for (var we = 0; we < he; we++) {
          Y[ge + we >>> 2] |= (ve[we >>> 2] >>> 24 - we % 4 * 8 & 255) << 24 - (ge + we) % 4 * 8;
        }
      } else {
        for (var De = 0; De < he; De += 4) {
          Y[ge + De >>> 2] = ve[De >>> 2];
        }
      }
      this.sigBytes += he;
      return this;
    },
    clamp: function () {
      var te = this.words;
      var Y = this.sigBytes;
      te[Y >>> 2] &= -1 << 32 - Y % 4 * 8;
      te.length = e.ceil(Y / 4);
    },
    clone: function () {
      var te = j.clone.call(this);
      te.words = this.words.slice(0);
      return te;
    },
    random: function (te) {
      var Y = [];
      for (var ve = 0; ve < te; ve += 4) {
        Y.push(Ce());
      }
      return new ee.init(Y, te);
    }
  });
  var U = _e.enc = {};
  var G = U.Hex = {
    stringify: function (te) {
      var Y = te.words;
      for (var ve = te.sigBytes, ge = [], he = 0; he < ve; he++) {
        var we = Y[he >>> 2] >>> 24 - he % 4 * 8 & 255;
        ge.push((we >>> 4).toString(16));
        ge.push((we & 15).toString(16));
      }
      return ge.join("");
    },
    parse: function (te) {
      for (var Y = te.length, ve = [], ge = 0; ge < Y; ge += 2) {
        ve[ge >>> 3] |= parseInt(te.substr(ge, 2), 16) << 24 - ge % 8 * 4;
      }
      return new ee.init(ve, Y / 2);
    }
  };
  var W = U.Latin1 = {
    stringify: function (te) {
      var Y = te.words;
      for (var ve = te.sigBytes, ge = [], he = 0; he < ve; he++) {
        ge.push(String.fromCharCode(Y[he >>> 2] >>> 24 - he % 4 * 8 & 255));
      }
      return ge.join("");
    },
    parse: function (te) {
      for (var Y = te.length, ve = [], ge = 0; ge < Y; ge++) {
        ve[ge >>> 2] |= (te.charCodeAt(ge) & 255) << 24 - ge % 4 * 8;
      }
      return new ee.init(ve, Y);
    }
  };
  var $ = U.Utf8 = {
    stringify: function (te) {
      try {
        return decodeURIComponent(escape(W.stringify(te)));
      } catch {
        throw new Error("Malformed UTF-8 data");
      }
    },
    parse: function (te) {
      return W.parse(unescape(encodeURIComponent(te)));
    }
  };
  var re = q.BufferedBlockAlgorithm = j.extend({
    reset: function () {
      this._data = new ee.init();
      this._nDataBytes = 0;
    },
    _append: function (te) {
      if (typeof te == "string") {
        te = $.parse(te);
      }
      this._data.concat(te);
      this._nDataBytes += te.sigBytes;
    },
    _process: function (te) {
      var Y;
      var ve = this._data;
      var ge = ve.words;
      var he = ve.sigBytes;
      var we = this.blockSize;
      var De = he / (we * 4);
      var Ie = (De = te ? e.ceil(De) : e.max((De | 0) - this._minBufferSize, 0)) * we;
      var Je = e.min(Ie * 4, he);
      if (Ie) {
        for (var K = 0; K < Ie; K += we) {
          this._doProcessBlock(ge, K);
        }
        Y = ge.splice(0, Ie);
        ve.sigBytes -= Je;
      }
      return new ee.init(Y, Je);
    },
    clone: function () {
      var te = j.clone.call(this);
      te._data = this._data.clone();
      return te;
    },
    _minBufferSize: 0
  });
  q.Hasher = re.extend({
    cfg: j.extend(),
    init: function (te) {
      this.cfg = this.cfg.extend(te);
      this.reset();
    },
    reset: function () {
      re.reset.call(this);
      this._doReset();
    },
    update: function (te) {
      this._append(te);
      this._process();
      return this;
    },
    finalize: function (te) {
      if (te) {
        this._append(te);
      }
      return this._doFinalize();
    },
    blockSize: 16,
    _createHelper: function (te) {
      return function (Y, ve) {
        return new te.init(ve).finalize(Y);
      };
    },
    _createHmacHelper: function (te) {
      return function (Y, ve) {
        return new ae.HMAC.init(te, ve).finalize(Y);
      };
    }
  });
  var ae = _e.algo = {};
  return _e;
}(Math);
module.exports = O;