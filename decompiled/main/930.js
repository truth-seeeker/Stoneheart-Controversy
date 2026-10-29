var O = require("./576.js");
var e = require("./727.js");
var de = require("./2416.js");
var ce = require("./7849.js");
var Ce = require("./5032.js");
const oe = j("C", undefined, undefined);
function j(ge, he, we) {
  return {
    kind: ge,
    value: he,
    error: we
  };
}
var ee = require("./3410.js");
var U = require("./2806.js");
export class Lv extends e.w0 {
  constructor(he) {
    super();
    this.isStopped = false;
    if (he) {
      this.destination = he;
      if ((0, e.Nn)(he)) {
        he.add(this);
      }
    } else {
      this.destination = ve;
    }
  }
  static create(he, we, Ye) {
    return new Hp(he, we, Ye);
  }
  next(he) {
    if (this.isStopped) {
      Y(function q(ge) {
        return j("N", ge, undefined);
      }(he), this);
    } else {
      this._next(he);
    }
  }
  error(he) {
    if (this.isStopped) {
      Y(function _e(ge) {
        return j("E", undefined, ge);
      }(he), this);
    } else {
      this.isStopped = true;
      this._error(he);
    }
  }
  complete() {
    if (this.isStopped) {
      Y(oe, this);
    } else {
      this.isStopped = true;
      this._complete();
    }
  }
  unsubscribe() {
    if (!this.closed) {
      this.isStopped = true;
      super.unsubscribe();
      this.destination = null;
    }
  }
  _next(he) {
    this.destination.next(he);
  }
  _error(he) {
    try {
      this.destination.error(he);
    } finally {
      this.unsubscribe();
    }
  }
  _complete() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  }
}
const W = Function.prototype.bind;
function $(ge, he) {
  return W.call(ge, he);
}
class re {
  constructor(he) {
    this.partialObserver = he;
  }
  next(he) {
    const {
      partialObserver: we
    } = this;
    if (we.next) {
      try {
        we.next(he);
      } catch (Ye) {
        ae(Ye);
      }
    }
  }
  error(he) {
    const {
      partialObserver: we
    } = this;
    if (we.error) {
      try {
        we.error(he);
      } catch (Ye) {
        ae(Ye);
      }
    } else {
      ae(he);
    }
  }
  complete() {
    const {
      partialObserver: he
    } = this;
    if (he.complete) {
      try {
        he.complete();
      } catch (we) {
        ae(we);
      }
    }
  }
}
export class Hp extends Lv {
  constructor(he, we, Ye) {
    let De;
    super();
    if ((0, O.m)(he) || !he) {
      De = {
        next: he ?? undefined,
        error: we ?? undefined,
        complete: Ye ?? undefined
      };
    } else {
      let Ie;
      if (this && de.v.useDeprecatedNextContext) {
        Ie = Object.create(he);
        Ie.unsubscribe = () => this.unsubscribe();
        De = {
          next: he.next && $(he.next, Ie),
          error: he.error && $(he.error, Ie),
          complete: he.complete && $(he.complete, Ie)
        };
      } else {
        De = he;
      }
    }
    this.destination = new re(De);
  }
}
function ae(ge) {
  if (de.v.useDeprecatedSynchronousErrorHandling) {
    (0, U.O)(ge);
  } else {
    (0, ce.h)(ge);
  }
}
function Y(ge, he) {
  const {
    onStoppedNotification: we
  } = de.v;
  if (we) {
    ee.z.setTimeout(() => we(ge, he));
  }
}
const ve = {
  closed: true,
  next: Ce.Z,
  error: function te(ge) {
    throw ge;
  },
  complete: Ce.Z
};