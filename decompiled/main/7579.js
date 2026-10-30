var O = require("./9751.js");
var e = require("./727.js");
const ce = (0, require("./3888.js").d)(j => function () {
  j(this);
  this.name = "ObjectUnsubscribedError";
  this.message = "object unsubscribed";
});
var Ce = require("./8737.js");
var oe = require("./2806.js");
export let x = (() => {
  class j extends O.y {
    constructor() {
      super();
      this.closed = false;
      this.currentObservers = null;
      this.observers = [];
      this.isStopped = false;
      this.hasError = false;
      this.thrownError = null;
    }
    lift(U) {
      const G = new q(this, this);
      G.operator = U;
      return G;
    }
    _throwIfClosed() {
      if (this.closed) {
        throw new ce();
      }
    }
    next(U) {
      (0, oe.x)(() => {
        this._throwIfClosed();
        if (!this.isStopped) {
          this.currentObservers ||= Array.from(this.observers);
          for (const G of this.currentObservers) {
            G.next(U);
          }
        }
      });
    }
    error(U) {
      (0, oe.x)(() => {
        this._throwIfClosed();
        if (!this.isStopped) {
          this.hasError = this.isStopped = true;
          this.thrownError = U;
          const {
            observers: G
          } = this;
          while (G.length) {
            G.shift().error(U);
          }
        }
      });
    }
    complete() {
      (0, oe.x)(() => {
        this._throwIfClosed();
        if (!this.isStopped) {
          this.isStopped = true;
          const {
            observers: U
          } = this;
          while (U.length) {
            U.shift().complete();
          }
        }
      });
    }
    unsubscribe() {
      this.isStopped = this.closed = true;
      this.observers = this.currentObservers = null;
    }
    get observed() {
      return this.observers?.length > 0;
    }
    _trySubscribe(U) {
      this._throwIfClosed();
      return super._trySubscribe(U);
    }
    _subscribe(U) {
      this._throwIfClosed();
      this._checkFinalizedStatuses(U);
      return this._innerSubscribe(U);
    }
    _innerSubscribe(U) {
      const {
        hasError: G,
        isStopped: W,
        observers: $
      } = this;
      if (G || W) {
        return e.Lc;
      } else {
        this.currentObservers = null;
        $.push(U);
        return new e.w0(() => {
          this.currentObservers = null;
          (0, Ce.P)($, U);
        });
      }
    }
    _checkFinalizedStatuses(U) {
      const {
        hasError: G,
        thrownError: W,
        isStopped: $
      } = this;
      if (G) {
        U.error(W);
      } else if ($) {
        U.complete();
      }
    }
    asObservable() {
      const U = new O.y();
      U.source = this;
      return U;
    }
  }
  j.create = (ee, U) => new q(ee, U);
  return j;
})();
class q extends x {
  constructor(ee, U) {
    super();
    this.destination = ee;
    this.source = U;
  }
  next(ee) {
    var U;
    var G;
    if ((G = (U = this.destination) === null || U === undefined ? undefined : U.next) !== null && G !== undefined) {
      G.call(U, ee);
    }
  }
  error(ee) {
    var U;
    var G;
    if ((G = (U = this.destination) === null || U === undefined ? undefined : U.error) !== null && G !== undefined) {
      G.call(U, ee);
    }
  }
  complete() {
    var ee;
    var U;
    if ((U = (ee = this.destination) === null || ee === undefined ? undefined : ee.complete) !== null && U !== undefined) {
      U.call(ee);
    }
  }
  _subscribe(ee) {
    var U;
    return ((U = this.source) === null || U === undefined ? undefined : U.subscribe(ee)) ?? e.Lc;
  }
}