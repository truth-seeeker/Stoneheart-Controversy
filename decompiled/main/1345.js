var Ce = typeof Float32Array == "function";
function oe($, re) {
  return 1 - re * 3 + $ * 3;
}
function _e($, re) {
  return re * 3 - $ * 6;
}
function q($) {
  return $ * 3;
}
function j($, re, Me) {
  return ((oe(re, Me) * $ + _e(re, Me)) * $ + q(re)) * $;
}
function ee($, re, Me) {
  return oe(re, Me) * 3 * $ * $ + _e(re, Me) * 2 * $ + q(re);
}
function W($) {
  return $;
}
module.exports = function (re, Me, ae, te) {
  if (!(re >= 0) || !(re <= 1) || !(ae >= 0) || !(ae <= 1)) {
    throw new Error("bezier x values must be in [0, 1] range");
  }
  if (re === Me && ae === te) {
    return W;
  }
  var Y = Ce ? new Float32Array(11) : new Array(11);
  for (var ve = 0; ve < 11; ++ve) {
    Y[ve] = j(ve * 0.1, re, ae);
  }
  return function (we) {
    if (we === 0) {
      return 0;
    } else if (we === 1) {
      return 1;
    } else {
      return j(function ge(he) {
        var we = 0;
        for (var Ye = 1; Ye !== 10 && Y[Ye] <= he; ++Ye) {
          we += 0.1;
        }
        --Ye;
        var Je = we + (he - Y[Ye]) / (Y[Ye + 1] - Y[Ye]) * 0.1;
        var K = ee(Je, re, ae);
        if (K >= 0.001) {
          return function G($, re, Me, ae) {
            for (var te = 0; te < 4; ++te) {
              var Y = ee(re, Me, ae);
              if (Y === 0) {
                return re;
              }
              re -= (j(re, Me, ae) - $) / Y;
            }
            return re;
          }(he, Je, re, ae);
        } else if (K === 0) {
          return Je;
        } else {
          return function U($, re, Me, ae, te) {
            var Y;
            var ve;
            var ge = 0;
            do {
              if ((Y = j(ve = re + (Me - re) / 2, ae, te) - $) > 0) {
                Me = ve;
              } else {
                re = ve;
              }
            } while (Math.abs(Y) > 1e-7 && ++ge < 10);
            return ve;
          }(he, we, we + 0.1, re, ae);
        }
      }(we), Me, te);
    }
  };
};