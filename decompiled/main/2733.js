var O = require("./8421.js");
var e = require("./9672.js");
var de = require("./5403.js");
export function p(Ce, oe, _e, q, j, ee, U, G) {
  const W = [];
  let $ = 0;
  let re = 0;
  let Me = false;
  const ae = () => {
    if (Me && !W.length && !$) {
      oe.complete();
    }
  };
  const te = ve => $ < q ? Y(ve) : W.push(ve);
  const Y = ve => {
    if (ee) {
      oe.next(ve);
    }
    $++;
    let ge = false;
    (0, O.Xf)(_e(ve, re++)).subscribe((0, de.x)(oe, he => {
      j?.(he);
      if (ee) {
        te(he);
      } else {
        oe.next(he);
      }
    }, () => {
      ge = true;
    }, undefined, () => {
      if (ge) {
        try {
          for ($--; W.length && $ < q;) {
            const he = W.shift();
            if (U) {
              (0, e.f)(oe, U, () => Y(he));
            } else {
              Y(he);
            }
          }
          ae();
        } catch (he) {
          oe.error(he);
        }
      }
    }));
  };
  Ce.subscribe((0, de.x)(oe, te, () => {
    Me = true;
    ae();
  }));
  return () => {
    G?.();
  };
}