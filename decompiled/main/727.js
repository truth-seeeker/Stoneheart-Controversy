var O = require("./576.js");
const de = (0, require("./3888.js").d)(j => function (U) {
  j(this);
  this.message = U ? `${U.length} errors occurred during unsubscription:\n${U.map((G, W) => `${W + 1}) ${G.toString()}`).join("\n  ")}` : "";
  this.name = "UnsubscriptionError";
  this.errors = U;
});
var ce = require("./8737.js");
export class w0 {
  constructor(ee) {
    this.initialTeardown = ee;
    this.closed = false;
    this._parentage = null;
    this._finalizers = null;
  }
  unsubscribe() {
    let ee;
    if (!this.closed) {
      this.closed = true;
      const {
        _parentage: U
      } = this;
      if (U) {
        this._parentage = null;
        if (Array.isArray(U)) {
          for (const $ of U) {
            $.remove(this);
          }
        } else {
          U.remove(this);
        }
      }
      const {
        initialTeardown: G
      } = this;
      if ((0, O.m)(G)) {
        try {
          G();
        } catch ($) {
          ee = $ instanceof de ? $.errors : [$];
        }
      }
      const {
        _finalizers: W
      } = this;
      if (W) {
        this._finalizers = null;
        for (const $ of W) {
          try {
            q($);
          } catch (re) {
            ee = ee ?? [];
            if (re instanceof de) {
              ee = [...ee, ...re.errors];
            } else {
              ee.push(re);
            }
          }
        }
      }
      if (ee) {
        throw new de(ee);
      }
    }
  }
  add(ee) {
    if (ee && ee !== this) {
      if (this.closed) {
        q(ee);
      } else {
        if (ee instanceof w0) {
          if (ee.closed || ee._hasParent(this)) {
            return;
          }
          ee._addParent(this);
        }
        (this._finalizers = this._finalizers ?? []).push(ee);
      }
    }
  }
  _hasParent(ee) {
    const {
      _parentage: U
    } = this;
    return U === ee || Array.isArray(U) && U.includes(ee);
  }
  _addParent(ee) {
    const {
      _parentage: U
    } = this;
    this._parentage = Array.isArray(U) ? (U.push(ee), U) : U ? [U, ee] : ee;
  }
  _removeParent(ee) {
    const {
      _parentage: U
    } = this;
    if (U === ee) {
      this._parentage = null;
    } else if (Array.isArray(U)) {
      (0, ce.P)(U, ee);
    }
  }
  remove(ee) {
    const {
      _finalizers: U
    } = this;
    if (U) {
      (0, ce.P)(U, ee);
    }
    if (ee instanceof w0) {
      ee._removeParent(this);
    }
  }
}
w0.EMPTY = (() => {
  const j = new w0();
  j.closed = true;
  return j;
})();
export const Lc = w0.EMPTY;
export function Nn(j) {
  return j instanceof w0 || j && "closed" in j && (0, O.m)(j.remove) && (0, O.m)(j.add) && (0, O.m)(j.unsubscribe);
}
function q(j) {
  if ((0, O.m)(j)) {
    j();
  } else {
    j.unsubscribe();
  }
}