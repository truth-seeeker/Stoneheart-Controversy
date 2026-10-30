var O = require("./655.js");
var e = require("./1144.js");
var de = require("./8239.js");
var ce = require("./9751.js");
var Ce = require("./3670.js");
var oe = require("./2206.js");
var _e = require("./4532.js");
var q = require("./6495.js");
var j = require("./3260.js");
var ee = require("./576.js");
var U = require("./7849.js");
var G = require("./8822.js");
export function Xf(ge) {
  if (ge instanceof ce.y) {
    return ge;
  }
  if (ge != null) {
    if ((0, Ce.c)(ge)) {
      return function $(ge) {
        return new ce.y(he => {
          const we = ge[G.L]();
          if ((0, ee.m)(we.subscribe)) {
            return we.subscribe(he);
          }
          throw new TypeError("Provided object does not correctly implement Symbol.observable");
        });
      }(ge);
    }
    if ((0, e.z)(ge)) {
      return function re(ge) {
        return new ce.y(he => {
          for (let we = 0; we < ge.length && !he.closed; we++) {
            he.next(ge[we]);
          }
          he.complete();
        });
      }(ge);
    }
    if ((0, de.t)(ge)) {
      return function Me(ge) {
        return new ce.y(he => {
          ge.then(we => {
            if (!he.closed) {
              he.next(we);
              he.complete();
            }
          }, we => he.error(we)).then(null, U.h);
        });
      }(ge);
    }
    if ((0, oe.D)(ge)) {
      return te(ge);
    }
    if ((0, q.T)(ge)) {
      return function ae(ge) {
        return new ce.y(he => {
          for (const we of ge) {
            he.next(we);
            if (he.closed) {
              return;
            }
          }
          he.complete();
        });
      }(ge);
    }
    if ((0, j.L)(ge)) {
      return function Y(ge) {
        return te((0, j.Q)(ge));
      }(ge);
    }
  }
  throw (0, _e.z)(ge);
}
function te(ge) {
  return new ce.y(he => {
    (function ve(ge, he) {
      var we;
      var Ye;
      var De;
      var Ie;
      return (0, O.mG)(this, undefined, undefined, function* () {
        try {
          for (we = (0, O.KL)(ge); !(Ye = yield we.next()).done;) {
            he.next(Ye.value);
            if (he.closed) {
              return;
            }
          }
        } catch (Je) {
          De = {
            error: Je
          };
        } finally {
          try {
            if (Ye && !Ye.done && (Ie = we.return)) {
              yield Ie.call(we);
            }
          } finally {
            if (De) {
              throw De.error;
            }
          }
        }
        he.complete();
      });
    })(ge, he).catch(we => he.error(we));
  });
}