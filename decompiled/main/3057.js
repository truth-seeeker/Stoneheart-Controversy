var de;
var ce;
var Ce;
var oe;
var _e;
var q;
var ee;
var G;
var W;
var re;
var Me;
var ae;
var Y;
var ge;
var we;
var Ye;
var Ie;
var Je;
var O;
O = require("./7585.js");
require("./7865.js");
module.exports = void (O.lib.Cipher || (de = O, ce = de.lib, Ce = ce.Base, oe = ce.WordArray, _e = ce.BufferedBlockAlgorithm, q = de.enc, ee = q.Base64, G = de.algo.EvpKDF, W = ce.Cipher = _e.extend({
  cfg: Ce.extend(),
  createEncryptor: function (K, ie) {
    return this.create(this._ENC_XFORM_MODE, K, ie);
  },
  createDecryptor: function (K, ie) {
    return this.create(this._DEC_XFORM_MODE, K, ie);
  },
  init: function (K, ie, xe) {
    this.cfg = this.cfg.extend(xe);
    this._xformMode = K;
    this._key = ie;
    this.reset();
  },
  reset: function () {
    _e.reset.call(this);
    this._doReset();
  },
  process: function (K) {
    this._append(K);
    return this._process();
  },
  finalize: function (K) {
    if (K) {
      this._append(K);
    }
    return this._doFinalize();
  },
  keySize: 4,
  ivSize: 4,
  _ENC_XFORM_MODE: 1,
  _DEC_XFORM_MODE: 2,
  _createHelper: function () {
    function K(ie) {
      if (typeof ie == "string") {
        return Je;
      } else {
        return Ye;
      }
    }
    return function (ie) {
      return {
        encrypt: function (xe, le, We) {
          return K(le).encrypt(ie, xe, le, We);
        },
        decrypt: function (xe, le, We) {
          return K(le).decrypt(ie, xe, le, We);
        }
      };
    };
  }()
}), ce.StreamCipher = W.extend({
  _doFinalize: function () {
    return this._process(true);
  },
  blockSize: 1
}), re = de.mode = {}, Me = ce.BlockCipherMode = Ce.extend({
  createEncryptor: function (K, ie) {
    return this.Encryptor.create(K, ie);
  },
  createDecryptor: function (K, ie) {
    return this.Decryptor.create(K, ie);
  },
  init: function (K, ie) {
    this._cipher = K;
    this._iv = ie;
  }
}), ae = re.CBC = function () {
  var K = Me.extend();
  function ie(xe, le, We) {
    var Ze;
    var ht = this._iv;
    if (ht) {
      Ze = ht;
      this._iv = undefined;
    } else {
      Ze = this._prevBlock;
    }
    for (var Ct = 0; Ct < We; Ct++) {
      xe[le + Ct] ^= Ze[Ct];
    }
  }
  K.Encryptor = K.extend({
    processBlock: function (xe, le) {
      var We = this._cipher;
      var Ze = We.blockSize;
      ie.call(this, xe, le, Ze);
      We.encryptBlock(xe, le);
      this._prevBlock = xe.slice(le, le + Ze);
    }
  });
  K.Decryptor = K.extend({
    processBlock: function (xe, le) {
      var We = this._cipher;
      var Ze = We.blockSize;
      var ht = xe.slice(le, le + Ze);
      We.decryptBlock(xe, le);
      ie.call(this, xe, le, Ze);
      this._prevBlock = ht;
    }
  });
  return K;
}(), Y = (de.pad = {}).Pkcs7 = {
  pad: function (K, ie) {
    var xe = ie * 4;
    for (var le = xe - K.sigBytes % xe, We = le << 24 | le << 16 | le << 8 | le, Ze = [], ht = 0; ht < le; ht += 4) {
      Ze.push(We);
    }
    var Ct = oe.create(Ze, le);
    K.concat(Ct);
  },
  unpad: function (K) {
    K.sigBytes -= K.words[K.sigBytes - 1 >>> 2] & 255;
  }
}, ce.BlockCipher = W.extend({
  cfg: W.cfg.extend({
    mode: ae,
    padding: Y
  }),
  reset: function () {
    var K;
    W.reset.call(this);
    var ie = this.cfg;
    var xe = ie.iv;
    var le = ie.mode;
    if (this._xformMode == this._ENC_XFORM_MODE) {
      K = le.createEncryptor;
    } else {
      K = le.createDecryptor;
      this._minBufferSize = 1;
    }
    if (this._mode && this._mode.__creator == K) {
      this._mode.init(this, xe && xe.words);
    } else {
      this._mode = K.call(le, this, xe && xe.words);
      this._mode.__creator = K;
    }
  },
  _doProcessBlock: function (K, ie) {
    this._mode.processBlock(K, ie);
  },
  _doFinalize: function () {
    var K;
    var ie = this.cfg.padding;
    if (this._xformMode == this._ENC_XFORM_MODE) {
      ie.pad(this._data, this.blockSize);
      K = this._process(true);
    } else {
      K = this._process(true);
      ie.unpad(K);
    }
    return K;
  },
  blockSize: 4
}), ge = ce.CipherParams = Ce.extend({
  init: function (K) {
    this.mixIn(K);
  },
  toString: function (K) {
    return (K || this.formatter).stringify(this);
  }
}), we = (de.format = {}).OpenSSL = {
  stringify: function (K) {
    var xe = K.ciphertext;
    var le = K.salt;
    return (le ? oe.create([1398893684, 1701076831]).concat(le).concat(xe) : xe).toString(ee);
  },
  parse: function (K) {
    var ie;
    var xe = ee.parse(K);
    var le = xe.words;
    if (le[0] == 1398893684 && le[1] == 1701076831) {
      ie = oe.create(le.slice(2, 4));
      le.splice(0, 4);
      xe.sigBytes -= 16;
    }
    return ge.create({
      ciphertext: xe,
      salt: ie
    });
  }
}, Ye = ce.SerializableCipher = Ce.extend({
  cfg: Ce.extend({
    format: we
  }),
  encrypt: function (K, ie, xe, le) {
    le = this.cfg.extend(le);
    var We = K.createEncryptor(xe, le);
    var Ze = We.finalize(ie);
    var ht = We.cfg;
    return ge.create({
      ciphertext: Ze,
      key: xe,
      iv: ht.iv,
      algorithm: K,
      mode: ht.mode,
      padding: ht.padding,
      blockSize: K.blockSize,
      formatter: le.format
    });
  },
  decrypt: function (K, ie, xe, le) {
    le = this.cfg.extend(le);
    ie = this._parse(ie, le.format);
    return K.createDecryptor(xe, le).finalize(ie.ciphertext);
  },
  _parse: function (K, ie) {
    if (typeof K == "string") {
      return ie.parse(K, this);
    } else {
      return K;
    }
  }
}), Ie = (de.kdf = {}).OpenSSL = {
  execute: function (K, ie, xe, le) {
    le ||= oe.random(8);
    var We = G.create({
      keySize: ie + xe
    }).compute(K, le);
    var Ze = oe.create(We.words.slice(ie), xe * 4);
    We.sigBytes = ie * 4;
    return ge.create({
      key: We,
      iv: Ze,
      salt: le
    });
  }
}, Je = ce.PasswordBasedCipher = Ye.extend({
  cfg: Ye.cfg.extend({
    kdf: Ie
  }),
  encrypt: function (K, ie, xe, le) {
    var We = (le = this.cfg.extend(le)).kdf.execute(xe, K.keySize, K.ivSize);
    le.iv = We.iv;
    var Ze = Ye.encrypt.call(this, K, ie, We.key, le);
    Ze.mixIn(We);
    return Ze;
  },
  decrypt: function (K, ie, xe, le) {
    le = this.cfg.extend(le);
    ie = this._parse(ie, le.format);
    var We = le.kdf.execute(xe, K.keySize, K.ivSize, ie.salt);
    le.iv = We.iv;
    return Ye.decrypt.call(this, K, ie, We.key, le);
  }
})));