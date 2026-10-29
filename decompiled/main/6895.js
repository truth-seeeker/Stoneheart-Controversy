var O = require("./4650.js");
let e = null;
export function q() {
  return e;
}
export function HT(T) {
  e ||= T;
}
export class w_ {}
export const K0 = new O.OlP("DocumentToken");
let _e = (() => {
  class T {
    historyGo(E) {
      throw new Error("Not implemented");
    }
  }
  T.ɵfac = function (E) {
    return new (E || T)();
  };
  T.ɵprov = O.Yz7({
    token: T,
    factory: function () {
      return function q() {
        return (0, O.LFG)(ee);
      }();
    },
    providedIn: "platform"
  });
  return T;
})();
export const V_ = new O.OlP("Location Initialized");
let ee = (() => {
  class T extends _e {
    constructor(E) {
      super();
      this._doc = E;
      this._location = window.location;
      this._history = window.history;
    }
    getBaseHrefFromDOM() {
      return q().getBaseHref(this._doc);
    }
    onPopState(E) {
      const F = q().getGlobalEventTarget(this._doc, "window");
      F.addEventListener("popstate", E, false);
      return () => F.removeEventListener("popstate", E);
    }
    onHashChange(E) {
      const F = q().getGlobalEventTarget(this._doc, "window");
      F.addEventListener("hashchange", E, false);
      return () => F.removeEventListener("hashchange", E);
    }
    get href() {
      return this._location.href;
    }
    get protocol() {
      return this._location.protocol;
    }
    get hostname() {
      return this._location.hostname;
    }
    get port() {
      return this._location.port;
    }
    get pathname() {
      return this._location.pathname;
    }
    get search() {
      return this._location.search;
    }
    get hash() {
      return this._location.hash;
    }
    set pathname(E) {
      this._location.pathname = E;
    }
    pushState(E, F, se) {
      if (U()) {
        this._history.pushState(E, F, se);
      } else {
        this._location.hash = se;
      }
    }
    replaceState(E, F, se) {
      if (U()) {
        this._history.replaceState(E, F, se);
      } else {
        this._location.hash = se;
      }
    }
    forward() {
      this._history.forward();
    }
    back() {
      this._history.back();
    }
    historyGo(E = 0) {
      this._history.go(E);
    }
    getState() {
      return this._history.state;
    }
  }
  T.ɵfac = function (E) {
    return new (E || T)(O.LFG(K0));
  };
  T.ɵprov = O.Yz7({
    token: T,
    factory: function () {
      return function G() {
        return new ee((0, O.LFG)(K0));
      }();
    },
    providedIn: "platform"
  });
  return T;
})();
function U() {
  return !!window.history.pushState;
}
function W(T, N) {
  if (T.length == 0) {
    return N;
  }
  if (N.length == 0) {
    return T;
  }
  let E = 0;
  if (T.endsWith("/")) {
    E++;
  }
  if (N.startsWith("/")) {
    E++;
  }
  if (E == 2) {
    return T + N.substring(1);
  } else if (E == 1) {
    return T + N;
  } else {
    return T + "/" + N;
  }
}
function $(T) {
  const N = T.match(/#|\?|$/);
  const E = N && N.index || T.length;
  return T.slice(0, E - (T[E - 1] === "/" ? 1 : 0)) + T.slice(E);
}
function re(T) {
  if (T && T[0] !== "?") {
    return "?" + T;
  } else {
    return T;
  }
}
export let S$ = (() => {
  class T {
    historyGo(E) {
      throw new Error("Not implemented");
    }
  }
  T.ɵfac = function (E) {
    return new (E || T)();
  };
  T.ɵprov = O.Yz7({
    token: T,
    factory: function () {
      return (0, O.f3M)(b0);
    },
    providedIn: "root"
  });
  return T;
})();
const ae = new O.OlP("appBaseHref");
export let b0 = (() => {
  class T extends S$ {
    constructor(E, F) {
      super();
      this._platformLocation = E;
      this._removeListenerFns = [];
      this._baseHref = F ?? this._platformLocation.getBaseHrefFromDOM() ?? (0, O.f3M)(K0).location?.origin ?? "";
    }
    ngOnDestroy() {
      while (this._removeListenerFns.length) {
        this._removeListenerFns.pop()();
      }
    }
    onPopState(E) {
      this._removeListenerFns.push(this._platformLocation.onPopState(E), this._platformLocation.onHashChange(E));
    }
    getBaseHref() {
      return this._baseHref;
    }
    prepareExternalUrl(E) {
      return W(this._baseHref, E);
    }
    path(E = false) {
      const F = this._platformLocation.pathname + re(this._platformLocation.search);
      const se = this._platformLocation.hash;
      if (se && E) {
        return `${F}${se}`;
      } else {
        return F;
      }
    }
    pushState(E, F, se, ze) {
      const Ge = this.prepareExternalUrl(se + re(ze));
      this._platformLocation.pushState(E, F, Ge);
    }
    replaceState(E, F, se, ze) {
      const Ge = this.prepareExternalUrl(se + re(ze));
      this._platformLocation.replaceState(E, F, Ge);
    }
    forward() {
      this._platformLocation.forward();
    }
    back() {
      this._platformLocation.back();
    }
    getState() {
      return this._platformLocation.getState();
    }
    historyGo(E = 0) {
      this._platformLocation.historyGo?.(E);
    }
  }
  T.ɵfac = function (E) {
    return new (E || T)(O.LFG(_e), O.LFG(ae, 8));
  };
  T.ɵprov = O.Yz7({
    token: T,
    factory: T.ɵfac,
    providedIn: "root"
  });
  return T;
})();
export let Do = (() => {
  class T extends S$ {
    constructor(E, F) {
      super();
      this._platformLocation = E;
      this._baseHref = "";
      this._removeListenerFns = [];
      if (F != null) {
        this._baseHref = F;
      }
    }
    ngOnDestroy() {
      while (this._removeListenerFns.length) {
        this._removeListenerFns.pop()();
      }
    }
    onPopState(E) {
      this._removeListenerFns.push(this._platformLocation.onPopState(E), this._platformLocation.onHashChange(E));
    }
    getBaseHref() {
      return this._baseHref;
    }
    path(E = false) {
      let F = this._platformLocation.hash;
      if (F == null) {
        F = "#";
      }
      if (F.length > 0) {
        return F.substring(1);
      } else {
        return F;
      }
    }
    prepareExternalUrl(E) {
      const F = W(this._baseHref, E);
      if (F.length > 0) {
        return "#" + F;
      } else {
        return F;
      }
    }
    pushState(E, F, se, ze) {
      let Ge = this.prepareExternalUrl(se + re(ze));
      if (Ge.length == 0) {
        Ge = this._platformLocation.pathname;
      }
      this._platformLocation.pushState(E, F, Ge);
    }
    replaceState(E, F, se, ze) {
      let Ge = this.prepareExternalUrl(se + re(ze));
      if (Ge.length == 0) {
        Ge = this._platformLocation.pathname;
      }
      this._platformLocation.replaceState(E, F, Ge);
    }
    forward() {
      this._platformLocation.forward();
    }
    back() {
      this._platformLocation.back();
    }
    getState() {
      return this._platformLocation.getState();
    }
    historyGo(E = 0) {
      this._platformLocation.historyGo?.(E);
    }
  }
  T.ɵfac = function (E) {
    return new (E || T)(O.LFG(_e), O.LFG(ae, 8));
  };
  T.ɵprov = O.Yz7({
    token: T,
    factory: T.ɵfac
  });
  return T;
})();
export let Ye = (() => {
  class T {
    constructor(E) {
      this._subject = new O.vpe();
      this._urlChangeListeners = [];
      this._urlChangeSubscription = null;
      this._locationStrategy = E;
      const F = this._locationStrategy.getBaseHref();
      this._basePath = function Ye(T) {
        if (new RegExp("^(https?:)?//").test(T)) {
          const [, E] = T.split(/\/\/[^\/]+/);
          return E;
        }
        return T;
      }($(we(F)));
      this._locationStrategy.onPopState(se => {
        this._subject.emit({
          url: this.path(true),
          pop: true,
          state: se.state,
          type: se.type
        });
      });
    }
    ngOnDestroy() {
      this._urlChangeSubscription?.unsubscribe();
      this._urlChangeListeners = [];
    }
    path(E = false) {
      return this.normalize(this._locationStrategy.path(E));
    }
    getState() {
      return this._locationStrategy.getState();
    }
    isCurrentPathEqualTo(E, F = "") {
      return this.path() == this.normalize(E + re(F));
    }
    normalize(E) {
      return T.stripTrailingSlash(function he(T, N) {
        if (T && new RegExp(`^${T}([/;?#]|$)`).test(N)) {
          return N.substring(T.length);
        } else {
          return N;
        }
      }(this._basePath, we(E)));
    }
    prepareExternalUrl(E) {
      if (E && E[0] !== "/") {
        E = "/" + E;
      }
      return this._locationStrategy.prepareExternalUrl(E);
    }
    go(E, F = "", se = null) {
      this._locationStrategy.pushState(se, "", E, F);
      this._notifyUrlChangeListeners(this.prepareExternalUrl(E + re(F)), se);
    }
    replaceState(E, F = "", se = null) {
      this._locationStrategy.replaceState(se, "", E, F);
      this._notifyUrlChangeListeners(this.prepareExternalUrl(E + re(F)), se);
    }
    forward() {
      this._locationStrategy.forward();
    }
    back() {
      this._locationStrategy.back();
    }
    historyGo(E = 0) {
      this._locationStrategy.historyGo?.(E);
    }
    onUrlChange(E) {
      this._urlChangeListeners.push(E);
      this._urlChangeSubscription ||= this.subscribe(F => {
        this._notifyUrlChangeListeners(F.url, F.state);
      });
      return () => {
        const F = this._urlChangeListeners.indexOf(E);
        this._urlChangeListeners.splice(F, 1);
        if (this._urlChangeListeners.length === 0) {
          this._urlChangeSubscription?.unsubscribe();
          this._urlChangeSubscription = null;
        }
      };
    }
    _notifyUrlChangeListeners(E = "", F) {
      this._urlChangeListeners.forEach(se => se(E, F));
    }
    subscribe(E, F, se) {
      return this._subject.subscribe({
        next: E,
        error: F,
        complete: se
      });
    }
  }
  T.normalizeQueryParams = re;
  T.joinWithSlash = W;
  T.stripTrailingSlash = $;
  T.ɵfac = function (E) {
    return new (E || T)(O.LFG(S$));
  };
  T.ɵprov = O.Yz7({
    token: T,
    factory: function () {
      return function ge() {
        return new Ye((0, O.LFG)(S$));
      }();
    },
    providedIn: "root"
  });
  return T;
})();
function we(T) {
  return T.replace(/\/index.html$/, "");
}
var Ie = (() => {
  (Ie = Ie || {})[Ie.Decimal = 0] = "Decimal";
  Ie[Ie.Percent = 1] = "Percent";
  Ie[Ie.Currency = 2] = "Currency";
  Ie[Ie.Scientific = 3] = "Scientific";
  return Ie;
})();
export var x = (() => {
  (x = x || {})[x.Format = 0] = "Format";
  x[x.Standalone = 1] = "Standalone";
  return x;
})();
export var Tn = (() => {
  (Tn = Tn || {})[Tn.Narrow = 0] = "Narrow";
  Tn[Tn.Abbreviated = 1] = "Abbreviated";
  Tn[Tn.Wide = 2] = "Wide";
  Tn[Tn.Short = 3] = "Short";
  return Tn;
})();
var xe = (() => {
  (xe = xe || {})[xe.Short = 0] = "Short";
  xe[xe.Medium = 1] = "Medium";
  xe[xe.Long = 2] = "Long";
  xe[xe.Full = 3] = "Full";
  return xe;
})();
var le = (() => {
  (le = le || {})[le.Decimal = 0] = "Decimal";
  le[le.Group = 1] = "Group";
  le[le.List = 2] = "List";
  le[le.PercentSign = 3] = "PercentSign";
  le[le.PlusSign = 4] = "PlusSign";
  le[le.MinusSign = 5] = "MinusSign";
  le[le.Exponential = 6] = "Exponential";
  le[le.SuperscriptingExponent = 7] = "SuperscriptingExponent";
  le[le.PerMille = 8] = "PerMille";
  le[le.Infinity = 9] = "Infinity";
  le[le.NaN = 10] = "NaN";
  le[le.TimeSeparator = 11] = "TimeSeparator";
  le[le.CurrencyDecimal = 12] = "CurrencyDecimal";
  le[le.CurrencyGroup = 13] = "CurrencyGroup";
  return le;
})();
export function ol(T, N, E) {
  const F = (0, O.cg1)(T);
  const ze = Rn([F[O.wAp.DayPeriodsFormat], F[O.wAp.DayPeriodsStandalone]], N);
  return Rn(ze, E);
}
export function Mn(T, N, E) {
  const F = (0, O.cg1)(T);
  const ze = Rn([F[O.wAp.DaysFormat], F[O.wAp.DaysStandalone]], N);
  return Rn(ze, E);
}
export function UT(T, N, E) {
  const F = (0, O.cg1)(T);
  const ze = Rn([F[O.wAp.MonthsFormat], F[O.wAp.MonthsStandalone]], N);
  return Rn(ze, E);
}
function rn(T, N) {
  return Rn((0, O.cg1)(T)[O.wAp.DateFormat], N);
}
function yn(T, N) {
  return Rn((0, O.cg1)(T)[O.wAp.TimeFormat], N);
}
function ri(T, N) {
  return Rn((0, O.cg1)(T)[O.wAp.DateTimeFormat], N);
}
function xt(T, N) {
  const E = (0, O.cg1)(T);
  const F = E[O.wAp.NumberSymbols][N];
  if (typeof F === "undefined") {
    if (N === le.CurrencyDecimal) {
      return E[O.wAp.NumberSymbols][le.Decimal];
    }
    if (N === le.CurrencyGroup) {
      return E[O.wAp.NumberSymbols][le.Group];
    }
  }
  return F;
}
function qo(T, N) {
  return (0, O.cg1)(T)[O.wAp.NumberFormats][N];
}
function e1(T) {
  if (!T[O.wAp.ExtraData]) {
    throw new Error(`Missing extra locale data for the locale "${T[O.wAp.LocaleId]}". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.`);
  }
}
function Rn(T, N) {
  for (let E = N; E > -1; E--) {
    if (typeof T[E] !== "undefined") {
      return T[E];
    }
  }
  throw new Error("Locale data API: locale data undefined");
}
function Qr(T) {
  const [N, E] = T.split(":");
  return {
    hours: +N,
    minutes: +E
  };
}
const t1 = /^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
const bi = {};
const ji = /((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;
var Be = (() => {
  (Be = Be || {})[Be.Short = 0] = "Short";
  Be[Be.ShortGMT = 1] = "ShortGMT";
  Be[Be.Long = 2] = "Long";
  Be[Be.Extended = 3] = "Extended";
  return Be;
})();
var Gt = (() => {
  (Gt = Gt || {})[Gt.FullYear = 0] = "FullYear";
  Gt[Gt.Month = 1] = "Month";
  Gt[Gt.Date = 2] = "Date";
  Gt[Gt.Hours = 3] = "Hours";
  Gt[Gt.Minutes = 4] = "Minutes";
  Gt[Gt.Seconds = 5] = "Seconds";
  Gt[Gt.FractionalSeconds = 6] = "FractionalSeconds";
  Gt[Gt.Day = 7] = "Day";
  return Gt;
})();
var an = (() => {
  (an = an || {})[an.DayPeriods = 0] = "DayPeriods";
  an[an.Days = 1] = "Days";
  an[an.Months = 2] = "Months";
  an[an.Eras = 3] = "Eras";
  return an;
})();
export function p6(T, N, E, F) {
  let se = function S1(T) {
    if (T1(T)) {
      return T;
    }
    if (typeof T == "number" && !isNaN(T)) {
      return new Date(T);
    }
    if (typeof T == "string") {
      T = T.trim();
      if (/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(T)) {
        const [se, ze = 1, Ge = 1] = T.split("-").map(bt => +bt);
        return tn(se, ze - 1, Ge);
      }
      const E = parseFloat(T);
      if (!isNaN(T - E)) {
        return new Date(E);
      }
      let F;
      if (F = T.match(t1)) {
        return function Hr(T) {
          const N = new Date(0);
          let E = 0;
          let F = 0;
          const se = T[8] ? N.setUTCFullYear : N.setFullYear;
          const ze = T[8] ? N.setUTCHours : N.setHours;
          if (T[9]) {
            E = Number(T[9] + T[10]);
            F = Number(T[9] + T[11]);
          }
          se.call(N, Number(T[1]), Number(T[2]) - 1, Number(T[3]));
          const Ge = Number(T[4] || 0) - E;
          const bt = Number(T[5] || 0) - F;
          const Ln = Number(T[6] || 0);
          const Vn = Math.floor(parseFloat("0." + (T[7] || 0)) * 1000);
          ze.call(N, Ge, bt, Ln, Vn);
          return N;
        }(F);
      }
    }
    const N = new Date(T);
    if (!T1(N)) {
      throw new Error(`Unable to convert "${T}" into a date`);
    }
    return N;
  }(T);
  N = xi(E, N) || N;
  let bt;
  let Ge = [];
  while (N) {
    bt = ji.exec(N);
    if (!bt) {
      Ge.push(N);
      break;
    }
    {
      Ge = Ge.concat(bt.slice(1));
      const Zn = Ge.pop();
      if (!Zn) {
        break;
      }
      N = Zn;
    }
  }
  let Ln = se.getTimezoneOffset();
  if (F) {
    Ln = U2(F, Ln);
    se = function Q1(T, N, E) {
      const F = E ? -1 : 1;
      const se = T.getTimezoneOffset();
      return function _r(T, N) {
        (T = new Date(T.getTime())).setMinutes(T.getMinutes() + N);
        return T;
      }(T, F * (U2(N, se) - se));
    }(se, F, true);
  }
  let Vn = "";
  Ge.forEach(Zn => {
    const xn = function u4(T) {
      if (B2[T]) {
        return B2[T];
      }
      let N;
      switch (T) {
        case "G":
        case "GG":
        case "GGG":
          N = Cn(an.Eras, Tn.Abbreviated);
          break;
        case "GGGG":
          N = Cn(an.Eras, Tn.Wide);
          break;
        case "GGGGG":
          N = Cn(an.Eras, Tn.Narrow);
          break;
        case "y":
          N = li(Gt.FullYear, 1, 0, false, true);
          break;
        case "yy":
          N = li(Gt.FullYear, 2, 0, true, true);
          break;
        case "yyy":
          N = li(Gt.FullYear, 3, 0, false, true);
          break;
        case "yyyy":
          N = li(Gt.FullYear, 4, 0, false, true);
          break;
        case "Y":
          N = Kr(1);
          break;
        case "YY":
          N = Kr(2, true);
          break;
        case "YYY":
          N = Kr(3);
          break;
        case "YYYY":
          N = Kr(4);
          break;
        case "M":
        case "L":
          N = li(Gt.Month, 1, 1);
          break;
        case "MM":
        case "LL":
          N = li(Gt.Month, 2, 1);
          break;
        case "MMM":
          N = Cn(an.Months, Tn.Abbreviated);
          break;
        case "MMMM":
          N = Cn(an.Months, Tn.Wide);
          break;
        case "MMMMM":
          N = Cn(an.Months, Tn.Narrow);
          break;
        case "LLL":
          N = Cn(an.Months, Tn.Abbreviated, x.Standalone);
          break;
        case "LLLL":
          N = Cn(an.Months, Tn.Wide, x.Standalone);
          break;
        case "LLLLL":
          N = Cn(an.Months, Tn.Narrow, x.Standalone);
          break;
        case "w":
          N = zr(1);
          break;
        case "ww":
          N = zr(2);
          break;
        case "W":
          N = zr(1, true);
          break;
        case "d":
          N = li(Gt.Date, 1);
          break;
        case "dd":
          N = li(Gt.Date, 2);
          break;
        case "c":
        case "cc":
          N = li(Gt.Day, 1);
          break;
        case "ccc":
          N = Cn(an.Days, Tn.Abbreviated, x.Standalone);
          break;
        case "cccc":
          N = Cn(an.Days, Tn.Wide, x.Standalone);
          break;
        case "ccccc":
          N = Cn(an.Days, Tn.Narrow, x.Standalone);
          break;
        case "cccccc":
          N = Cn(an.Days, Tn.Short, x.Standalone);
          break;
        case "E":
        case "EE":
        case "EEE":
          N = Cn(an.Days, Tn.Abbreviated);
          break;
        case "EEEE":
          N = Cn(an.Days, Tn.Wide);
          break;
        case "EEEEE":
          N = Cn(an.Days, Tn.Narrow);
          break;
        case "EEEEEE":
          N = Cn(an.Days, Tn.Short);
          break;
        case "a":
        case "aa":
        case "aaa":
          N = Cn(an.DayPeriods, Tn.Abbreviated);
          break;
        case "aaaa":
          N = Cn(an.DayPeriods, Tn.Wide);
          break;
        case "aaaaa":
          N = Cn(an.DayPeriods, Tn.Narrow);
          break;
        case "b":
        case "bb":
        case "bbb":
          N = Cn(an.DayPeriods, Tn.Abbreviated, x.Standalone, true);
          break;
        case "bbbb":
          N = Cn(an.DayPeriods, Tn.Wide, x.Standalone, true);
          break;
        case "bbbbb":
          N = Cn(an.DayPeriods, Tn.Narrow, x.Standalone, true);
          break;
        case "B":
        case "BB":
        case "BBB":
          N = Cn(an.DayPeriods, Tn.Abbreviated, x.Format, true);
          break;
        case "BBBB":
          N = Cn(an.DayPeriods, Tn.Wide, x.Format, true);
          break;
        case "BBBBB":
          N = Cn(an.DayPeriods, Tn.Narrow, x.Format, true);
          break;
        case "h":
          N = li(Gt.Hours, 1, -12);
          break;
        case "hh":
          N = li(Gt.Hours, 2, -12);
          break;
        case "H":
          N = li(Gt.Hours, 1);
          break;
        case "HH":
          N = li(Gt.Hours, 2);
          break;
        case "m":
          N = li(Gt.Minutes, 1);
          break;
        case "mm":
          N = li(Gt.Minutes, 2);
          break;
        case "s":
          N = li(Gt.Seconds, 1);
          break;
        case "ss":
          N = li(Gt.Seconds, 2);
          break;
        case "S":
          N = li(Gt.FractionalSeconds, 1);
          break;
        case "SS":
          N = li(Gt.FractionalSeconds, 2);
          break;
        case "SSS":
          N = li(Gt.FractionalSeconds, 3);
          break;
        case "Z":
        case "ZZ":
        case "ZZZ":
          N = Lr(Be.Short);
          break;
        case "ZZZZZ":
          N = Lr(Be.Extended);
          break;
        case "O":
        case "OO":
        case "OOO":
        case "z":
        case "zz":
        case "zzz":
          N = Lr(Be.ShortGMT);
          break;
        case "OOOO":
        case "ZZZZ":
        case "zzzz":
          N = Lr(Be.Long);
          break;
        default:
          return null;
      }
      B2[T] = N;
      return N;
    }(Zn);
    Vn += xn ? xn(se, E, Ln) : Zn === "''" ? "'" : Zn.replace(/(^'|'$)/g, "").replace(/''/g, "'");
  });
  return Vn;
}
function tn(T, N, E) {
  const F = new Date(0);
  F.setFullYear(T, N, E);
  F.setHours(0, 0, 0);
  return F;
}
function xi(T, N) {
  const E = function Ze(T) {
    return (0, O.cg1)(T)[O.wAp.LocaleId];
  }(T);
  bi[E] = bi[E] || {};
  if (bi[E][N]) {
    return bi[E][N];
  }
  let F = "";
  switch (N) {
    case "shortDate":
      F = rn(T, xe.Short);
      break;
    case "mediumDate":
      F = rn(T, xe.Medium);
      break;
    case "longDate":
      F = rn(T, xe.Long);
      break;
    case "fullDate":
      F = rn(T, xe.Full);
      break;
    case "shortTime":
      F = yn(T, xe.Short);
      break;
    case "mediumTime":
      F = yn(T, xe.Medium);
      break;
    case "longTime":
      F = yn(T, xe.Long);
      break;
    case "fullTime":
      F = yn(T, xe.Full);
      break;
    case "short":
      const se = xi(T, "shortTime");
      const ze = xi(T, "shortDate");
      F = J1(ri(T, xe.Short), [se, ze]);
      break;
    case "medium":
      const Ge = xi(T, "mediumTime");
      const bt = xi(T, "mediumDate");
      F = J1(ri(T, xe.Medium), [Ge, bt]);
      break;
    case "long":
      const Ln = xi(T, "longTime");
      const Vn = xi(T, "longDate");
      F = J1(ri(T, xe.Long), [Ln, Vn]);
      break;
    case "full":
      const Zn = xi(T, "fullTime");
      const xn = xi(T, "fullDate");
      F = J1(ri(T, xe.Full), [Zn, xn]);
  }
  if (F) {
    bi[E][N] = F;
  }
  return F;
}
function J1(T, N) {
  if (N) {
    T = T.replace(/\{([^}]+)}/g, function (E, F) {
      if (N != null && F in N) {
        return N[F];
      } else {
        return E;
      }
    });
  }
  return T;
}
function kt(T, N, E = "-", F, se) {
  let ze = "";
  if (T < 0 || se && T <= 0) {
    if (se) {
      T = 1 - T;
    } else {
      T = -T;
      ze = E;
    }
  }
  let Ge = String(T);
  while (Ge.length < N) {
    Ge = "0" + Ge;
  }
  if (F) {
    Ge = Ge.slice(Ge.length - N);
  }
  return ze + Ge;
}
function li(T, N, E = 0, F = false, se = false) {
  return function (ze, Ge) {
    let bt = function a2(T, N) {
      switch (T) {
        case Gt.FullYear:
          return N.getFullYear();
        case Gt.Month:
          return N.getMonth();
        case Gt.Date:
          return N.getDate();
        case Gt.Hours:
          return N.getHours();
        case Gt.Minutes:
          return N.getMinutes();
        case Gt.Seconds:
          return N.getSeconds();
        case Gt.FractionalSeconds:
          return N.getMilliseconds();
        case Gt.Day:
          return N.getDay();
        default:
          throw new Error(`Unknown DateType value "${T}".`);
      }
    }(T, ze);
    if (E > 0 || bt > -E) {
      bt += E;
    }
    if (T === Gt.Hours) {
      if (bt === 0 && E === -12) {
        bt = 12;
      }
    } else if (T === Gt.FractionalSeconds) {
      return function jo(T, N) {
        return kt(T, 3).substring(0, N);
      }(bt, N);
    }
    const Ln = xt(Ge, le.MinusSign);
    return kt(bt, N, Ln, F, se);
  };
}
function Cn(T, N, E = x.Format, F = false) {
  return function (se, ze) {
    return function Dr(T, N, E, F, se, ze) {
      switch (E) {
        case an.Months:
          return UT(N, se, F)[T.getMonth()];
        case an.Days:
          return Mn(N, se, F)[T.getDay()];
        case an.DayPeriods:
          const Ge = T.getHours();
          const bt = T.getMinutes();
          if (ze) {
            const Vn = function Go(T) {
              const N = (0, O.cg1)(T);
              e1(N);
              return (N[O.wAp.ExtraData][2] || []).map(F => typeof F == "string" ? Qr(F) : [Qr(F[0]), Qr(F[1])]);
            }(N);
            const Zn = function Jr(T, N, E) {
              const F = (0, O.cg1)(T);
              e1(F);
              const ze = Rn([F[O.wAp.ExtraData][0], F[O.wAp.ExtraData][1]], N) || [];
              return Rn(ze, E) || [];
            }(N, se, F);
            const xn = Vn.findIndex(Si => {
              if (Array.isArray(Si)) {
                const [$n, m1] = Si;
                const so = Ge >= $n.hours && bt >= $n.minutes;
                const _1 = Ge < m1.hours || Ge === m1.hours && bt < m1.minutes;
                if ($n.hours < m1.hours) {
                  if (so && _1) {
                    return true;
                  }
                } else if (so || _1) {
                  return true;
                }
              } else if (Si.hours === Ge && Si.minutes === bt) {
                return true;
              }
              return false;
            });
            if (xn !== -1) {
              return Zn[xn];
            }
          }
          return ol(N, se, F)[Ge < 12 ? 0 : 1];
        case an.Eras:
          return function Fe(T, N) {
            return Rn((0, O.cg1)(T)[O.wAp.Eras], N);
          }(N, F)[T.getFullYear() <= 0 ? 0 : 1];
        default:
          throw new Error(`unexpected translation type ${E}`);
      }
    }(se, ze, T, N, E, F);
  };
}
function Lr(T) {
  return function (N, E, F) {
    const se = F * -1;
    const ze = xt(E, le.MinusSign);
    const Ge = se > 0 ? Math.floor(se / 60) : Math.ceil(se / 60);
    switch (T) {
      case Be.Short:
        return (se >= 0 ? "+" : "") + kt(Ge, 2, ze) + kt(Math.abs(se % 60), 2, ze);
      case Be.ShortGMT:
        return "GMT" + (se >= 0 ? "+" : "") + kt(Ge, 1, ze);
      case Be.Long:
        return "GMT" + (se >= 0 ? "+" : "") + kt(Ge, 2, ze) + ":" + kt(Math.abs(se % 60), 2, ze);
      case Be.Extended:
        if (F === 0) {
          return "Z";
        } else {
          return (se >= 0 ? "+" : "") + kt(Ge, 2, ze) + ":" + kt(Math.abs(se % 60), 2, ze);
        }
      default:
        throw new Error(`Unknown zone width "${T}"`);
    }
  };
}
function Nr(T) {
  return tn(T.getFullYear(), T.getMonth(), T.getDate() + (4 - T.getDay()));
}
function zr(T, N = false) {
  return function (E, F) {
    let se;
    if (N) {
      const ze = new Date(E.getFullYear(), E.getMonth(), 1).getDay() - 1;
      const Ge = E.getDate();
      se = 1 + Math.floor((Ge + ze) / 7);
    } else {
      const ze = Nr(E);
      const Ge = function F2(T) {
        const N = tn(T, 0, 1).getDay();
        return tn(T, 0, 1 + (N <= 4 ? 4 : 11) - N);
      }(ze.getFullYear());
      const bt = ze.getTime() - Ge.getTime();
      se = 1 + Math.round(bt / 604800000);
    }
    return kt(se, T, xt(F, le.MinusSign));
  };
}
function Kr(T, N = false) {
  return function (E, F) {
    return kt(Nr(E).getFullYear(), T, xt(F, le.MinusSign), N);
  };
}
const B2 = {};
function U2(T, N) {
  T = T.replace(/:/g, "");
  const E = Date.parse("Jan 01, 1970 00:00:00 " + T) / 60000;
  if (isNaN(E)) {
    return N;
  } else {
    return E;
  }
}
function T1(T) {
  return T instanceof Date && !isNaN(T.valueOf());
}
const V1 = /^(\d+)?\.((\d+)(-(\d+))?)?$/;
function Yo(T, N, E, F, se, ze, Ge = false) {
  let bt = "";
  let Ln = false;
  if (isFinite(T)) {
    let Vn = function vr(T) {
      let F;
      let se;
      let ze;
      let Ge;
      let bt;
      let N = Math.abs(T) + "";
      let E = 0;
      if ((se = N.indexOf(".")) > -1) {
        N = N.replace(".", "");
      }
      if ((ze = N.search(/e/i)) > 0) {
        if (se < 0) {
          se = ze;
        }
        se += +N.slice(ze + 1);
        N = N.substring(0, ze);
      } else if (se < 0) {
        se = N.length;
      }
      ze = 0;
      for (; N.charAt(ze) === "0"; ze++);
      if (ze === (bt = N.length)) {
        F = [0];
        se = 1;
      } else {
        for (bt--; N.charAt(bt) === "0";) {
          bt--;
        }
        se -= ze;
        F = [];
        Ge = 0;
        for (; ze <= bt; ze++, Ge++) {
          F[Ge] = Number(N.charAt(ze));
        }
      }
      if (se > 22) {
        F = F.splice(0, 21);
        E = se - 1;
        se = 1;
      }
      return {
        digits: F,
        exponent: E,
        integerLen: se
      };
    }(T);
    if (Ge) {
      Vn = function Z2(T) {
        if (T.digits[0] === 0) {
          return T;
        }
        const N = T.digits.length - T.integerLen;
        if (T.exponent) {
          T.exponent += 2;
        } else {
          if (N === 0) {
            T.digits.push(0, 0);
          } else if (N === 1) {
            T.digits.push(0);
          }
          T.integerLen += 2;
        }
        return T;
      }(Vn);
    }
    let Zn = N.minInt;
    let xn = N.minFrac;
    let Si = N.maxFrac;
    if (ze) {
      const D1 = ze.match(V1);
      if (D1 === null) {
        throw new Error(`${ze} is not a valid digit info`);
      }
      const co = D1[1];
      const h2 = D1[3];
      const ea = D1[5];
      if (co != null) {
        Zn = c2(co);
      }
      if (h2 != null) {
        xn = c2(h2);
      }
      if (ea != null) {
        Si = c2(ea);
      } else if (h2 != null && xn > Si) {
        Si = xn;
      }
    }
    (function ct(T, N, E) {
      if (N > E) {
        throw new Error(`The minimum number of digits after fraction (${N}) is higher than the maximum (${E}).`);
      }
      let F = T.digits;
      let se = F.length - T.integerLen;
      const ze = Math.min(Math.max(N, se), E);
      let Ge = ze + T.integerLen;
      let bt = F[Ge];
      if (Ge > 0) {
        F.splice(Math.max(T.integerLen, Ge));
        for (let xn = Ge; xn < F.length; xn++) {
          F[xn] = 0;
        }
      } else {
        se = Math.max(0, se);
        T.integerLen = 1;
        F.length = Math.max(1, Ge = ze + 1);
        F[0] = 0;
        for (let xn = 1; xn < Ge; xn++) {
          F[xn] = 0;
        }
      }
      if (bt >= 5) {
        if (Ge - 1 < 0) {
          for (let xn = 0; xn > Ge; xn--) {
            F.unshift(0);
            T.integerLen++;
          }
          F.unshift(1);
          T.integerLen++;
        } else {
          F[Ge - 1]++;
        }
      }
      for (; se < Math.max(0, ze); se++) {
        F.push(0);
      }
      let Ln = ze !== 0;
      const Vn = N + T.integerLen;
      const Zn = F.reduceRight(function (xn, Si, $n, m1) {
        m1[$n] = (Si += xn) < 10 ? Si : Si - 10;
        if (Ln) {
          if (m1[$n] === 0 && $n >= Vn) {
            m1.pop();
          } else {
            Ln = false;
          }
        }
        if (Si >= 10) {
          return 1;
        } else {
          return 0;
        }
      }, 0);
      if (Zn) {
        F.unshift(Zn);
        T.integerLen++;
      }
    })(Vn, xn, Si);
    let $n = Vn.digits;
    let m1 = Vn.integerLen;
    const so = Vn.exponent;
    let _1 = [];
    for (Ln = $n.every(D1 => !D1); m1 < Zn; m1++) {
      $n.unshift(0);
    }
    for (; m1 < 0; m1++) {
      $n.unshift(0);
    }
    if (m1 > 0) {
      _1 = $n.splice(m1, $n.length);
    } else {
      _1 = $n;
      $n = [0];
    }
    const ao = [];
    for ($n.length >= N.lgSize && ao.unshift($n.splice(-N.lgSize, $n.length).join("")); $n.length > N.gSize;) {
      ao.unshift($n.splice(-N.gSize, $n.length).join(""));
    }
    if ($n.length) {
      ao.unshift($n.join(""));
    }
    bt = ao.join(xt(E, F));
    if (_1.length) {
      bt += xt(E, se) + _1.join("");
    }
    if (so) {
      bt += xt(E, le.Exponential) + "+" + so;
    }
  } else {
    bt = xt(E, le.Infinity);
  }
  bt = T < 0 && !Ln ? N.negPre + bt + N.negSuf : N.posPre + bt + N.posSuf;
  return bt;
}
export function uf(T, N, E) {
  return Yo(T, $o(qo(N, Ie.Decimal), xt(N, le.MinusSign)), N, le.Group, le.Decimal, E);
}
function $o(T, N = "-") {
  const E = {
    minInt: 1,
    minFrac: 0,
    maxFrac: 0,
    posPre: "",
    posSuf: "",
    negPre: "",
    negSuf: "",
    gSize: 0,
    lgSize: 0
  };
  const F = T.split(";");
  const se = F[0];
  const ze = F[1];
  const Ge = se.indexOf(".") !== -1 ? se.split(".") : [se.substring(0, se.lastIndexOf("0") + 1), se.substring(se.lastIndexOf("0") + 1)];
  const bt = Ge[0];
  const Ln = Ge[1] || "";
  E.posPre = bt.substring(0, bt.indexOf("#"));
  for (let Zn = 0; Zn < Ln.length; Zn++) {
    const xn = Ln.charAt(Zn);
    if (xn === "0") {
      E.minFrac = E.maxFrac = Zn + 1;
    } else if (xn === "#") {
      E.maxFrac = Zn + 1;
    } else {
      E.posSuf += xn;
    }
  }
  const Vn = bt.split(",");
  E.gSize = Vn[1] ? Vn[1].length : 0;
  E.lgSize = Vn[2] || Vn[1] ? (Vn[2] || Vn[1]).length : 0;
  if (ze) {
    const Zn = se.length - E.posPre.length - E.posSuf.length;
    const xn = ze.indexOf("#");
    E.negPre = ze.substring(0, xn).replace(/'/g, "");
    E.negSuf = ze.slice(xn + Zn).replace(/'/g, "");
  } else {
    E.negPre = N + E.posPre;
    E.negSuf = E.posSuf;
  }
  return E;
}
function c2(T) {
  const N = parseInt(T);
  if (isNaN(N)) {
    throw new Error("Invalid integer literal when parsing " + T);
  }
  return N;
}
export function qS(T, N, E) {
  return (0, O.dwT)(T, N, E);
}
export function Mx(T, N) {
  N = encodeURIComponent(N);
  for (const E of T.split(";")) {
    const F = E.indexOf("=");
    const [se, ze] = F == -1 ? [E, ""] : [E.slice(0, F), E.slice(F + 1)];
    if (se.trim() === N) {
      return decodeURIComponent(ze);
    }
  }
  return null;
}
const In = /\s+/;
const vt = [];
export let mk = (() => {
  class T {
    constructor(E, F, se, ze) {
      this._iterableDiffers = E;
      this._keyValueDiffers = F;
      this._ngEl = se;
      this._renderer = ze;
      this.initialClasses = vt;
      this.stateMap = new Map();
    }
    set klass(E) {
      this.initialClasses = E != null ? E.trim().split(In) : vt;
    }
    set ngClass(E) {
      this.rawClass = typeof E == "string" ? E.trim().split(In) : E;
    }
    ngDoCheck() {
      for (const F of this.initialClasses) {
        this._updateState(F, true);
      }
      const E = this.rawClass;
      if (Array.isArray(E) || E instanceof Set) {
        for (const F of E) {
          this._updateState(F, true);
        }
      } else if (E != null) {
        for (const F of Object.keys(E)) {
          this._updateState(F, Boolean(E[F]));
        }
      }
      this._applyStateDiff();
    }
    _updateState(E, F) {
      const se = this.stateMap.get(E);
      if (se !== undefined) {
        if (se.enabled !== F) {
          se.changed = true;
          se.enabled = F;
        }
        se.touched = true;
      } else {
        this.stateMap.set(E, {
          enabled: F,
          changed: true,
          touched: true
        });
      }
    }
    _applyStateDiff() {
      for (const E of this.stateMap) {
        const F = E[0];
        const se = E[1];
        if (se.changed) {
          this._toggleClass(F, se.enabled);
          se.changed = false;
        } else if (!se.touched) {
          if (se.enabled) {
            this._toggleClass(F, false);
          }
          this.stateMap.delete(F);
        }
        se.touched = false;
      }
    }
    _toggleClass(E, F) {
      if ((E = E.trim()).length > 0) {
        E.split(In).forEach(se => {
          if (F) {
            this._renderer.addClass(this._ngEl.nativeElement, se);
          } else {
            this._renderer.removeClass(this._ngEl.nativeElement, se);
          }
        });
      }
    }
  }
  T.ɵfac = function (E) {
    return new (E || T)(O.Y36(O.ZZ4), O.Y36(O.aQg), O.Y36(O.SBq), O.Y36(O.Qsj));
  };
  T.ɵdir = O.lG2({
    type: T,
    selectors: [["", "ngClass", ""]],
    inputs: {
      klass: ["class", "klass"],
      ngClass: "ngClass"
    },
    standalone: true
  });
  return T;
})();
class it {
  constructor(N, E, F, se) {
    this.$implicit = N;
    this.ngForOf = E;
    this.index = F;
    this.count = se;
  }
  get first() {
    return this.index === 0;
  }
  get last() {
    return this.index === this.count - 1;
  }
  get even() {
    return this.index % 2 == 0;
  }
  get odd() {
    return !this.even;
  }
}
export let ax = (() => {
  class T {
    set ngForOf(E) {
      this._ngForOf = E;
      this._ngForOfDirty = true;
    }
    set ngForTrackBy(E) {
      this._trackByFn = E;
    }
    get ngForTrackBy() {
      return this._trackByFn;
    }
    constructor(E, F, se) {
      this._viewContainer = E;
      this._template = F;
      this._differs = se;
      this._ngForOf = null;
      this._ngForOfDirty = true;
      this._differ = null;
    }
    set ngForTemplate(E) {
      if (E) {
        this._template = E;
      }
    }
    ngDoCheck() {
      if (this._ngForOfDirty) {
        this._ngForOfDirty = false;
        const E = this._ngForOf;
        if (!this._differ && E) {
          this._differ = this._differs.find(E).create(this.ngForTrackBy);
        }
      }
      if (this._differ) {
        const E = this._differ.diff(this._ngForOf);
        if (E) {
          this._applyChanges(E);
        }
      }
    }
    _applyChanges(E) {
      const F = this._viewContainer;
      E.forEachOperation((se, ze, Ge) => {
        if (se.previousIndex == null) {
          F.createEmbeddedView(this._template, new it(se.item, this._ngForOf, -1, -1), Ge === null ? undefined : Ge);
        } else if (Ge == null) {
          F.remove(ze === null ? undefined : ze);
        } else if (ze !== null) {
          const bt = F.get(ze);
          F.move(bt, Ge);
          bn(bt, se);
        }
      });
      for (let se = 0, ze = F.length; se < ze; se++) {
        const bt = F.get(se).context;
        bt.index = se;
        bt.count = ze;
        bt.ngForOf = this._ngForOf;
      }
      E.forEachIdentityChange(se => {
        bn(F.get(se.currentIndex), se);
      });
    }
    static ngTemplateContextGuard(E, F) {
      return true;
    }
  }
  T.ɵfac = function (E) {
    return new (E || T)(O.Y36(O.s_b), O.Y36(O.Rgc), O.Y36(O.ZZ4));
  };
  T.ɵdir = O.lG2({
    type: T,
    selectors: [["", "ngFor", "", "ngForOf", ""]],
    inputs: {
      ngForOf: "ngForOf",
      ngForTrackBy: "ngForTrackBy",
      ngForTemplate: "ngForTemplate"
    },
    standalone: true
  });
  return T;
})();
function bn(T, N) {
  T.context.$implicit = N.item;
}
export let O5 = (() => {
  class T {
    constructor(E, F) {
      this._viewContainer = E;
      this._context = new yt();
      this._thenTemplateRef = null;
      this._elseTemplateRef = null;
      this._thenViewRef = null;
      this._elseViewRef = null;
      this._thenTemplateRef = F;
    }
    set ngIf(E) {
      this._context.$implicit = this._context.ngIf = E;
      this._updateView();
    }
    set ngIfThen(E) {
      h1("ngIfThen", E);
      this._thenTemplateRef = E;
      this._thenViewRef = null;
      this._updateView();
    }
    set ngIfElse(E) {
      h1("ngIfElse", E);
      this._elseTemplateRef = E;
      this._elseViewRef = null;
      this._updateView();
    }
    _updateView() {
      if (this._context.$implicit) {
        if (!this._thenViewRef) {
          this._viewContainer.clear();
          this._elseViewRef = null;
          if (this._thenTemplateRef) {
            this._thenViewRef = this._viewContainer.createEmbeddedView(this._thenTemplateRef, this._context);
          }
        }
      } else if (!this._elseViewRef) {
        this._viewContainer.clear();
        this._thenViewRef = null;
        if (this._elseTemplateRef) {
          this._elseViewRef = this._viewContainer.createEmbeddedView(this._elseTemplateRef, this._context);
        }
      }
    }
    static ngTemplateContextGuard(E, F) {
      return true;
    }
  }
  T.ɵfac = function (E) {
    return new (E || T)(O.Y36(O.s_b), O.Y36(O.Rgc));
  };
  T.ɵdir = O.lG2({
    type: T,
    selectors: [["", "ngIf", ""]],
    inputs: {
      ngIf: "ngIf",
      ngIfThen: "ngIfThen",
      ngIfElse: "ngIfElse"
    },
    standalone: true
  });
  return T;
})();
class yt {
  constructor() {
    this.$implicit = null;
    this.ngIf = null;
  }
}
function h1(T, N) {
  if (N && !N.createEmbeddedView) {
    throw new Error(`${T} must be a TemplateRef, but received '${(0, O.AaK)(N)}'.`);
  }
}
export let PC = (() => {
  class T {
    constructor(E, F, se) {
      this._ngEl = E;
      this._differs = F;
      this._renderer = se;
      this._ngStyle = null;
      this._differ = null;
    }
    set ngStyle(E) {
      this._ngStyle = E;
      if (!this._differ && E) {
        this._differ = this._differs.find(E).create();
      }
    }
    ngDoCheck() {
      if (this._differ) {
        const E = this._differ.diff(this._ngStyle);
        if (E) {
          this._applyChanges(E);
        }
      }
    }
    _setStyle(E, F) {
      const [se, ze] = E.split(".");
      const Ge = se.indexOf("-") === -1 ? undefined : O.JOm.DashCase;
      if (F != null) {
        this._renderer.setStyle(this._ngEl.nativeElement, se, ze ? `${F}${ze}` : F, Ge);
      } else {
        this._renderer.removeStyle(this._ngEl.nativeElement, se, Ge);
      }
    }
    _applyChanges(E) {
      E.forEachRemovedItem(F => this._setStyle(F.key, null));
      E.forEachAddedItem(F => this._setStyle(F.key, F.currentValue));
      E.forEachChangedItem(F => this._setStyle(F.key, F.currentValue));
    }
  }
  T.ɵfac = function (E) {
    return new (E || T)(O.Y36(O.SBq), O.Y36(O.aQg), O.Y36(O.Qsj));
  };
  T.ɵdir = O.lG2({
    type: T,
    selectors: [["", "ngStyle", ""]],
    inputs: {
      ngStyle: "ngStyle"
    },
    standalone: true
  });
  return T;
})();
export let tP = (() => {
  class T {
    constructor(E) {
      this._viewContainerRef = E;
      this._viewRef = null;
      this.ngTemplateOutletContext = null;
      this.ngTemplateOutlet = null;
      this.ngTemplateOutletInjector = null;
    }
    ngOnChanges(E) {
      if (E.ngTemplateOutlet || E.ngTemplateOutletInjector) {
        const F = this._viewContainerRef;
        if (this._viewRef) {
          F.remove(F.indexOf(this._viewRef));
        }
        if (this.ngTemplateOutlet) {
          const {
            ngTemplateOutlet: se,
            ngTemplateOutletContext: ze,
            ngTemplateOutletInjector: Ge
          } = this;
          this._viewRef = F.createEmbeddedView(se, ze, Ge ? {
            injector: Ge
          } : undefined);
        } else {
          this._viewRef = null;
        }
      } else if (this._viewRef && E.ngTemplateOutletContext && this.ngTemplateOutletContext) {
        this._viewRef.context = this.ngTemplateOutletContext;
      }
    }
  }
  T.ɵfac = function (E) {
    return new (E || T)(O.Y36(O.s_b));
  };
  T.ɵdir = O.lG2({
    type: T,
    selectors: [["", "ngTemplateOutlet", ""]],
    inputs: {
      ngTemplateOutletContext: "ngTemplateOutletContext",
      ngTemplateOutlet: "ngTemplateOutlet",
      ngTemplateOutletInjector: "ngTemplateOutletInjector"
    },
    standalone: true,
    features: [O.TTD]
  });
  return T;
})();
function eo(T, N) {
  return new O.vHH(2100, false);
}
class Ir {
  createSubscription(N, E) {
    return N.subscribe({
      next: E,
      error: F => {
        throw F;
      }
    });
  }
  dispose(N) {
    N.unsubscribe();
  }
}
class to {
  createSubscription(N, E) {
    return N.then(E, F => {
      throw F;
    });
  }
  dispose(N) {}
}
const sn = new to();
const A1 = new Ir();
export let Ov = (() => {
  class T {
    constructor(E) {
      this._latestValue = null;
      this._subscription = null;
      this._obj = null;
      this._strategy = null;
      this._ref = E;
    }
    ngOnDestroy() {
      if (this._subscription) {
        this._dispose();
      }
      this._ref = null;
    }
    transform(E) {
      if (this._obj) {
        if (E !== this._obj) {
          this._dispose();
          return this.transform(E);
        } else {
          return this._latestValue;
        }
      } else {
        if (E) {
          this._subscribe(E);
        }
        return this._latestValue;
      }
    }
    _subscribe(E) {
      this._obj = E;
      this._strategy = this._selectStrategy(E);
      this._subscription = this._strategy.createSubscription(E, F => this._updateLatestValue(E, F));
    }
    _selectStrategy(E) {
      if ((0, O.QGY)(E)) {
        return sn;
      }
      if ((0, O.F4k)(E)) {
        return A1;
      }
      throw eo();
    }
    _dispose() {
      this._strategy.dispose(this._subscription);
      this._latestValue = null;
      this._subscription = null;
      this._obj = null;
    }
    _updateLatestValue(E, F) {
      if (E === this._obj) {
        this._latestValue = F;
        this._ref.markForCheck();
      }
    }
  }
  T.ɵfac = function (E) {
    return new (E || T)(O.Y36(O.sBO, 16));
  };
  T.ɵpipe = O.Yjl({
    name: "async",
    type: T,
    pure: false,
    standalone: true
  });
  return T;
})();
export let Nd = (() => {
  class T {
    constructor(E) {
      this.differs = E;
      this.keyValues = [];
      this.compareFn = p4;
    }
    transform(E, F = p4) {
      if (!E || !(E instanceof Map) && typeof E != "object") {
        return null;
      }
      this.differ ||= this.differs.find(E).create();
      const se = this.differ.diff(E);
      const ze = F !== this.compareFn;
      if (se) {
        this.keyValues = [];
        se.forEachItem(Ge => {
          this.keyValues.push(function Cr(T, N) {
            return {
              key: T,
              value: N
            };
          }(Ge.key, Ge.currentValue));
        });
      }
      if (se || ze) {
        this.keyValues.sort(F);
        this.compareFn = F;
      }
      return this.keyValues;
    }
  }
  T.ɵfac = function (E) {
    return new (E || T)(O.Y36(O.aQg, 16));
  };
  T.ɵpipe = O.Yjl({
    name: "keyvalue",
    type: T,
    pure: false,
    standalone: true
  });
  return T;
})();
function p4(T, N) {
  const E = T.key;
  const F = N.key;
  if (E === F) {
    return 0;
  }
  if (E === undefined) {
    return 1;
  }
  if (F === undefined) {
    return -1;
  }
  if (E === null) {
    return 1;
  }
  if (F === null) {
    return -1;
  }
  if (typeof E == "string" && typeof F == "string") {
    if (E < F) {
      return -1;
    } else {
      return 1;
    }
  }
  if (typeof E == "number" && typeof F == "number") {
    return E - F;
  }
  if (typeof E == "boolean" && typeof F == "boolean") {
    if (E < F) {
      return -1;
    } else {
      return 1;
    }
  }
  const se = String(E);
  const ze = String(F);
  if (se == ze) {
    return 0;
  } else if (se < ze) {
    return -1;
  } else {
    return 1;
  }
}
export let Zx = (() => {
  class T {
    constructor(E) {
      this._locale = E;
    }
    transform(E, F, se) {
      if (!function Jo(T) {
        return T != null && T !== "" && T == T;
      }(E)) {
        return null;
      }
      se = se || this._locale;
      try {
        return function Ua(T, N, E) {
          return Yo(T, $o(qo(N, Ie.Percent), xt(N, le.MinusSign)), N, le.Group, le.Decimal, E, true).replace(new RegExp("%", "g"), xt(N, le.PercentSign));
        }(function G2(T) {
          if (typeof T == "string" && !isNaN(Number(T) - parseFloat(T))) {
            return Number(T);
          }
          if (typeof T != "number") {
            throw new Error(`${T} is not a number`);
          }
          return T;
        }(E), se, F);
      } catch (ze) {
        throw eo();
      }
    }
  }
  T.ɵfac = function (E) {
    return new (E || T)(O.Y36(O.soG, 16));
  };
  T.ɵpipe = O.Yjl({
    name: "percent",
    type: T,
    pure: true,
    standalone: true
  });
  return T;
})();
export let ez = (() => {
  class T {}
  T.ɵfac = function (E) {
    return new (E || T)();
  };
  T.ɵmod = O.oAB({
    type: T
  });
  T.ɵinj = O.cJS({});
  return T;
})();
export const bD = "browser";
export function NF(T) {
  return T === bD;
}
export let EM = (() => {
  class T {}
  T.ɵprov = (0, O.Yz7)({
    token: T,
    providedIn: "root",
    factory: () => new er((0, O.LFG)(K0), window)
  });
  return T;
})();
class er {
  constructor(N, E) {
    this.document = N;
    this.window = E;
    this.offset = () => [0, 0];
  }
  setOffset(N) {
    this.offset = Array.isArray(N) ? () => N : N;
  }
  getScrollPosition() {
    if (this.supportsScrolling()) {
      return [this.window.pageXOffset, this.window.pageYOffset];
    } else {
      return [0, 0];
    }
  }
  scrollToPosition(N) {
    if (this.supportsScrolling()) {
      this.window.scrollTo(N[0], N[1]);
    }
  }
  scrollToAnchor(N) {
    if (!this.supportsScrolling()) {
      return;
    }
    const E = function vo(T, N) {
      const E = T.getElementById(N) || T.getElementsByName(N)[0];
      if (E) {
        return E;
      }
      if (typeof T.createTreeWalker == "function" && T.body && (T.body.createShadowRoot || T.body.attachShadow)) {
        const F = T.createTreeWalker(T.body, NodeFilter.SHOW_ELEMENT);
        let se = F.currentNode;
        while (se) {
          const ze = se.shadowRoot;
          if (ze) {
            const Ge = ze.getElementById(N) || ze.querySelector(`[name="${N}"]`);
            if (Ge) {
              return Ge;
            }
          }
          se = F.nextNode();
        }
      }
      return null;
    }(this.document, N);
    if (E) {
      this.scrollToElement(E);
      E.focus();
    }
  }
  setHistoryScrollRestoration(N) {
    if (this.supportScrollRestoration()) {
      const E = this.window.history;
      if (E && E.scrollRestoration) {
        E.scrollRestoration = N;
      }
    }
  }
  scrollToElement(N) {
    const E = N.getBoundingClientRect();
    const F = E.left + this.window.pageXOffset;
    const se = E.top + this.window.pageYOffset;
    const ze = this.offset();
    this.window.scrollTo(F - ze[0], se - ze[1]);
  }
  supportScrollRestoration() {
    try {
      if (!this.supportsScrolling()) {
        return false;
      }
      const N = Wc(this.window.history) || Wc(Object.getPrototypeOf(this.window.history));
      return !!N && (!!N.writable || !!N.set);
    } catch {
      return false;
    }
  }
  supportsScrolling() {
    try {
      return !!this.window && !!this.window.scrollTo && "pageXOffset" in this.window;
    } catch {
      return false;
    }
  }
}
function Wc(T) {
  return Object.getOwnPropertyDescriptor(T, "scrollRestoration");
}
export class JF {}