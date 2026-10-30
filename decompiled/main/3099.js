var O = require("./8421.js");
var e = require("./7579.js");
var de = require("./930.js");
var ce = require("./4482.js");
export function B(_e = {}) {
  const {
    connector: q = () => new e.x(),
    resetOnError: j = true,
    resetOnComplete: ee = true,
    resetOnRefCountZero: U = true
  } = _e;
  return G => {
    let W;
    let $;
    let re;
    let Me = 0;
    let ae = false;
    let te = false;
    const Y = () => {
      $?.unsubscribe();
      $ = undefined;
    };
    const ve = () => {
      Y();
      W = re = undefined;
      ae = te = false;
    };
    const ge = () => {
      const he = W;
      ve();
      he?.unsubscribe();
    };
    return (0, ce.e)((he, we) => {
      Me++;
      if (!te && !ae) {
        Y();
      }
      const Ye = re = re ?? q();
      we.add(() => {
        Me--;
        if (Me === 0 && !te && !ae) {
          $ = oe(ge, U);
        }
      });
      Ye.subscribe(we);
      if (!W && Me > 0) {
        W = new de.Hp({
          next: De => Ye.next(De),
          error: De => {
            te = true;
            Y();
            $ = oe(ve, j, De);
            Ye.error(De);
          },
          complete: () => {
            ae = true;
            Y();
            $ = oe(ve, ee);
            Ye.complete();
          }
        });
        (0, O.Xf)(he).subscribe(W);
      }
    })(G);
  };
}
function oe(_e, q, ...j) {
  if (q === true) {
    _e();
    return;
  }
  if (q === false) {
    return;
  }
  const ee = new de.Hp({
    next: () => {
      ee.unsubscribe();
      _e();
    }
  });
  return (0, O.Xf)(q(...j)).subscribe(ee);
}