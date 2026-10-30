export function mG(K, ie, xe, le) {
  return new (xe ||= Promise)(function (Ze, ht) {
    function Ct($e) {
      try {
        Fe(le.next($e));
      } catch (Ve) {
        ht(Ve);
      }
    }
    function qe($e) {
      try {
        Fe(le.throw($e));
      } catch (Ve) {
        ht(Ve);
      }
    }
    function Fe($e) {
      if ($e.done) {
        Ze($e.value);
      } else {
        (function We(Ze) {
          if (Ze instanceof xe) {
            return Ze;
          } else {
            return new xe(function (ht) {
              ht(Ze);
            });
          }
        })($e.value).then(Ct, qe);
      }
    }
    Fe((le = le.apply(K, ie || [])).next());
  });
}
export function qq(K) {
  if (this instanceof qq) {
    this.v = K;
    return this;
  } else {
    return new qq(K);
  }
}
export function FC(K, ie, xe) {
  if (!Symbol.asyncIterator) {
    throw new TypeError("Symbol.asyncIterator is not defined.");
  }
  var We;
  var le = xe.apply(K, ie || []);
  var Ze = [];
  We = {};
  ht("next");
  ht("throw");
  ht("return");
  We[Symbol.asyncIterator] = function () {
    return this;
  };
  return We;
  function ht(rn) {
    if (le[rn]) {
      We[rn] = function (yn) {
        return new Promise(function (ri, xt) {
          if (!(Ze.push([rn, yn, ri, xt]) > 1)) {
            Ct(rn, yn);
          }
        });
      };
    }
  }
  function Ct(rn, yn) {
    try {
      (function qe(rn) {
        if (rn.value instanceof qq) {
          Promise.resolve(rn.value.v).then(Fe, $e);
        } else {
          Ve(Ze[0][2], rn);
        }
      })(le[rn](yn));
    } catch (ri) {
      Ve(Ze[0][3], ri);
    }
  }
  function Fe(rn) {
    Ct("next", rn);
  }
  function $e(rn) {
    Ct("throw", rn);
  }
  function Ve(rn, yn) {
    rn(yn);
    Ze.shift();
    if (Ze.length) {
      Ct(Ze[0][0], Ze[0][1]);
    }
  }
}
export function KL(K) {
  if (!Symbol.asyncIterator) {
    throw new TypeError("Symbol.asyncIterator is not defined.");
  }
  var xe;
  var ie = K[Symbol.asyncIterator];
  if (ie) {
    return ie.call(K);
  } else {
    K = function G(K) {
      var ie = typeof Symbol == "function" && Symbol.iterator;
      var xe = ie && K[ie];
      var le = 0;
      if (xe) {
        return xe.call(K);
      }
      if (K && typeof K.length == "number") {
        return {
          next: function () {
            if (K && le >= K.length) {
              K = undefined;
            }
            return {
              value: K && K[le++],
              done: !K
            };
          }
        };
      }
      throw new TypeError(ie ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }(K);
    xe = {};
    le("next");
    le("throw");
    le("return");
    xe[Symbol.asyncIterator] = function () {
      return this;
    };
    return xe;
  }
  function le(Ze) {
    xe[Ze] = K[Ze] && function (ht) {
      return new Promise(function (Ct, qe) {
        (function We(Ze, ht, Ct, qe) {
          Promise.resolve(qe).then(function (Fe) {
            Ze({
              value: Fe,
              done: Ct
            });
          }, ht);
        })(Ct, qe, (ht = K[Ze](ht)).done, ht.value);
      });
    };
  }
}