var O = require("./930.js");
var e = require("./727.js");
var de = require("./8822.js");
var ce = require("./9635.js");
var Ce = require("./2416.js");
var oe = require("./576.js");
var _e = require("./2806.js");
export let y = (() => {
  class G {
    constructor($) {
      if ($) {
        this._subscribe = $;
      }
    }
    lift($) {
      const re = new G();
      re.source = this;
      re.operator = $;
      return re;
    }
    subscribe($, re, Me) {
      const ae = function U(G) {
        return G && G instanceof O.Lv || function ee(G) {
          return G && (0, oe.m)(G.next) && (0, oe.m)(G.error) && (0, oe.m)(G.complete);
        }(G) && (0, e.Nn)(G);
      }($) ? $ : new O.Hp($, re, Me);
      (0, _e.x)(() => {
        const {
          operator: te,
          source: Y
        } = this;
        ae.add(te ? te.call(ae, Y) : Y ? this._subscribe(ae) : this._trySubscribe(ae));
      });
      return ae;
    }
    _trySubscribe($) {
      try {
        return this._subscribe($);
      } catch (re) {
        $.error(re);
      }
    }
    forEach($, re) {
      return new (re = j(re))((Me, ae) => {
        const te = new O.Hp({
          next: Y => {
            try {
              $(Y);
            } catch (ve) {
              ae(ve);
              te.unsubscribe();
            }
          },
          error: ae,
          complete: Me
        });
        this.subscribe(te);
      });
    }
    _subscribe($) {
      var re;
      if ((re = this.source) === null || re === undefined) {
        return undefined;
      } else {
        return re.subscribe($);
      }
    }
    [de.L]() {
      return this;
    }
    pipe(...$) {
      return (0, ce.U)($)(this);
    }
    toPromise($) {
      return new ($ = j($))((re, Me) => {
        let ae;
        this.subscribe(te => ae = te, te => Me(te), () => re(ae));
      });
    }
  }
  G.create = W => new G(W);
  return G;
})();
function j(G) {
  return G ?? Ce.v.Promise ?? Promise;
}