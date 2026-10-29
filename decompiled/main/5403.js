var O = require("./930.js");
export function x(ce, Ce, oe, _e, q) {
  return new de(ce, Ce, oe, _e, q);
}
class de extends O.Lv {
  constructor(Ce, oe, _e, q, j, ee) {
    super(Ce);
    this.onFinalize = j;
    this.shouldUnsubscribe = ee;
    this._next = oe ? function (U) {
      try {
        oe(U);
      } catch (G) {
        Ce.error(G);
      }
    } : super._next;
    this._error = q ? function (U) {
      try {
        q(U);
      } catch (G) {
        Ce.error(G);
      } finally {
        this.unsubscribe();
      }
    } : super._error;
    this._complete = _e ? function () {
      try {
        _e();
      } catch (U) {
        Ce.error(U);
      } finally {
        this.unsubscribe();
      }
    } : super._complete;
  }
  unsubscribe() {
    var Ce;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      const {
        closed: oe
      } = this;
      super.unsubscribe();
      if (!oe) {
        if ((Ce = this.onFinalize) !== null && Ce !== undefined) {
          Ce.call(this);
        }
      }
    }
  }
}