var O = require("./8421.js");
var e = require("./9672.js");
var de = require("./4482.js");
var ce = require("./5403.js");
function Ce(De, Ie = 0) {
  return (0, de.e)((Je, K) => {
    Je.subscribe((0, ce.x)(K, ie => (0, e.f)(K, De, () => K.next(ie), Ie), () => (0, e.f)(K, De, () => K.complete(), Ie), ie => (0, e.f)(K, De, () => K.error(ie), Ie)));
  });
}
function oe(De, Ie = 0) {
  return (0, de.e)((Je, K) => {
    K.add(De.schedule(() => Je.subscribe(K), Ie));
  });
}
var j = require("./9751.js");
var U = require("./2202.js");
var G = require("./576.js");
function $(De, Ie) {
  if (!De) {
    throw new Error("Iterable cannot be null");
  }
  return new j.y(Je => {
    (0, e.f)(Je, Ie, () => {
      const K = De[Symbol.asyncIterator]();
      (0, e.f)(Je, Ie, () => {
        K.next().then(ie => {
          if (ie.done) {
            Je.complete();
          } else {
            Je.next(ie.value);
          }
        });
      }, 0, true);
    });
  });
}
var re = require("./3670.js");
var Me = require("./8239.js");
var ae = require("./1144.js");
var te = require("./6495.js");
var Y = require("./2206.js");
var ve = require("./4532.js");
var ge = require("./3260.js");
export function D(De, Ie) {
  if (Ie) {
    return function we(De, Ie) {
      if (De != null) {
        if ((0, re.c)(De)) {
          return function _e(De, Ie) {
            return (0, O.Xf)(De).pipe(oe(Ie), Ce(Ie));
          }(De, Ie);
        }
        if ((0, ae.z)(De)) {
          return function ee(De, Ie) {
            return new j.y(Je => {
              let K = 0;
              return Ie.schedule(function () {
                if (K === De.length) {
                  Je.complete();
                } else {
                  Je.next(De[K++]);
                  if (!Je.closed) {
                    this.schedule();
                  }
                }
              });
            });
          }(De, Ie);
        }
        if ((0, Me.t)(De)) {
          return function q(De, Ie) {
            return (0, O.Xf)(De).pipe(oe(Ie), Ce(Ie));
          }(De, Ie);
        }
        if ((0, Y.D)(De)) {
          return $(De, Ie);
        }
        if ((0, te.T)(De)) {
          return function W(De, Ie) {
            return new j.y(Je => {
              let K;
              (0, e.f)(Je, Ie, () => {
                K = De[U.h]();
                (0, e.f)(Je, Ie, () => {
                  let ie;
                  let xe;
                  try {
                    ({
                      value: ie,
                      done: xe
                    } = K.next());
                  } catch (le) {
                    Je.error(le);
                    return;
                  }
                  if (xe) {
                    Je.complete();
                  } else {
                    Je.next(ie);
                  }
                }, 0, true);
              });
              return () => (0, G.m)(K?.return) && K.return();
            });
          }(De, Ie);
        }
        if ((0, ge.L)(De)) {
          return function he(De, Ie) {
            return $((0, ge.Q)(De), Ie);
          }(De, Ie);
        }
      }
      throw (0, ve.z)(De);
    }(De, Ie);
  } else {
    return (0, O.Xf)(De);
  }
}