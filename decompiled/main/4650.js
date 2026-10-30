var O = require("./7579.js");
var e = require("./727.js");
var de = require("./9751.js");
var ce = require("./6451.js");
var Ce = require("./3099.js");
function oe(a) {
  for (let l in a) {
    if (a[l] === oe) {
      return l;
    }
  }
  throw Error("Could not find renamed property on target object.");
}
function _e(a, l) {
  for (const d in l) {
    if (l.hasOwnProperty(d) && !a.hasOwnProperty(d)) {
      a[d] = l[d];
    }
  }
}
export function AaK(a) {
  if (typeof a == "string") {
    return a;
  }
  if (Array.isArray(a)) {
    return "[" + a.map(AaK).join(", ") + "]";
  }
  if (a == null) {
    return "" + a;
  }
  if (a.overriddenName) {
    return `${a.overriddenName}`;
  }
  if (a.name) {
    return `${a.name}`;
  }
  const l = a.toString();
  if (l == null) {
    return "" + l;
  }
  const d = l.indexOf("\n");
  if (d === -1) {
    return l;
  } else {
    return l.substring(0, d);
  }
}
function j(a, l) {
  if (a == null || a === "") {
    if (l === null) {
      return "";
    } else {
      return l;
    }
  } else if (l == null || l === "") {
    return a;
  } else {
    return a + " " + l;
  }
}
const ee = oe({
  __forward_ref__: oe
});
export function Gpc(a) {
  a.__forward_ref__ = Gpc;
  a.toString = function () {
    return AaK(this());
  };
  return a;
}
function G(a) {
  if (W(a)) {
    return a();
  } else {
    return a;
  }
}
function W(a) {
  return typeof a == "function" && a.hasOwnProperty(ee) && a.__forward_ref__ === Gpc;
}
function $(a) {
  return a && !!a.ɵproviders;
}
export const JZr = "https://g.co/ng/security#xss";
export class vHH extends Error {
  constructor(l, d) {
    super(function te(a, l) {
      return `NG0${Math.abs(a)}${l ? ": " + l.trim() : ""}`;
    }(l, d));
    this.code = l;
  }
}
function Y(a) {
  if (typeof a == "string") {
    return a;
  } else if (a == null) {
    return "";
  } else {
    return String(a);
  }
}
function Ye(a, l) {
  throw new vHH(-201, false);
}
function Ve(a, l, d, g) {
  throw new Error(`ASSERTION ERROR: ${a}${g == null ? "" : ` [Expected=> ${d} ${g} ${l} <=Actual]`}`);
}
export function Yz7(a) {
  return {
    token: a.token,
    providedIn: a.providedIn || null,
    factory: a.factory,
    value: undefined
  };
}
export function cJS(a) {
  return {
    providers: a.providers || [],
    imports: a.imports || []
  };
}
function I1(a) {
  return dn(a, Jr) || dn(a, Rn);
}
export function Z0I(a) {
  return I1(a) !== null;
}
function dn(a, l) {
  if (a.hasOwnProperty(l)) {
    return a[l];
  } else {
    return null;
  }
}
function Go(a) {
  if (a && (a.hasOwnProperty(w1) || a.hasOwnProperty(Qr))) {
    return a[w1];
  } else {
    return null;
  }
}
const Jr = oe({
  ɵprov: oe
});
const w1 = oe({
  ɵinj: oe
});
const Rn = oe({
  ngInjectableDef: oe
});
const Qr = oe({
  ngInjectorDef: oe
});
export var XFs = (() => {
  (XFs = XFs || {})[XFs.Default = 0] = "Default";
  XFs[XFs.Host = 1] = "Host";
  XFs[XFs.Self = 2] = "Self";
  XFs[XFs.SkipSelf = 4] = "SkipSelf";
  XFs[XFs.Optional = 8] = "Optional";
  return XFs;
})();
let mi;
function t1(a) {
  const l = mi;
  mi = a;
  return l;
}
function bi(a, l, d) {
  const g = I1(a);
  if (g && g.providedIn == "root") {
    if (g.value === undefined) {
      return g.value = g.factory();
    } else {
      return g.value;
    }
  } else if (d & XFs.Optional) {
    return null;
  } else if (l !== undefined) {
    return l;
  } else {
    Ye(AaK(a));
    return;
  }
}
export const dqk = (() => typeof globalThis !== "undefined" && globalThis || typeof global !== "undefined" && global || typeof window !== "undefined" && window || typeof self !== "undefined" && typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope && self)();
const tn = {};
const xi = "__NG_DI_FLAG__";
const J1 = "ngTempTokenPath";
const jo = /\n/gm;
const a2 = "__source";
let Cn;
function Dr(a) {
  const l = Cn;
  Cn = a;
  return l;
}
function Lr(a, l = XFs.Default) {
  if (Cn === undefined) {
    throw new vHH(-203, false);
  }
  if (Cn === null) {
    return bi(a, undefined, l);
  } else {
    return Cn.get(a, l & XFs.Optional ? null : undefined, l);
  }
}
export function LFG(a, l = XFs.Default) {
  return (function mr() {
    return mi;
  }() || Lr)(G(a), l);
}
export function f3M(a, l = XFs.Default) {
  return LFG(a, Nr(l));
}
function Nr(a) {
  if (typeof a === "undefined" || typeof a == "number") {
    return a;
  } else {
    return (a.optional && 8) | 0 | (a.host && 1) | (a.self && 2) | (a.skipSelf && 4);
  }
}
function zr(a) {
  const l = [];
  for (let d = 0; d < a.length; d++) {
    const g = G(a[d]);
    if (Array.isArray(g)) {
      if (g.length === 0) {
        throw new vHH(900, false);
      }
      let m;
      let C = XFs.Default;
      for (let y = 0; y < g.length; y++) {
        const w = g[y];
        const P = B2(w);
        if (typeof P == "number") {
          if (P === -1) {
            m = w.token;
          } else {
            C |= P;
          }
        } else {
          m = w;
        }
      }
      l.push(LFG(m, C));
    } else {
      l.push(LFG(g));
    }
  }
  return l;
}
function Kr(a, l) {
  a[xi] = l;
  a.prototype[xi] = l;
  return a;
}
function B2(a) {
  return a[xi];
}
function _r(a) {
  return {
    toString: a
  }.toString();
}
var Q1 = (() => {
  (Q1 = Q1 || {})[Q1.OnPush = 0] = "OnPush";
  Q1[Q1.Default = 1] = "Default";
  return Q1;
})();
export var ifc = (() => {
  (a = ifc ||= {})[a.Emulated = 0] = "Emulated";
  a[a.None = 2] = "None";
  a[a.ShadowDom = 3] = "ShadowDom";
  return ifc;
  var a;
})();
const V1 = {};
const jt = [];
const r1 = oe({
  ɵcmp: oe
});
const mt = oe({
  ɵdir: oe
});
const ut = oe({
  ɵpipe: oe
});
const Wn = oe({
  ɵmod: oe
});
const k1 = oe({
  ɵfac: oe
});
const An = oe({
  __NG_ELEMENT_ID__: oe
});
let oi = 0;
export function Xpm(a) {
  return _r(() => {
    const d = a.standalone === true;
    const g = {};
    const m = {
      type: a.type,
      providersResolver: null,
      decls: a.decls,
      vars: a.vars,
      factory: null,
      template: a.template || null,
      consts: a.consts || null,
      ngContentSelectors: a.ngContentSelectors,
      hostBindings: a.hostBindings || null,
      hostVars: a.hostVars || 0,
      hostAttrs: a.hostAttrs || null,
      contentQueries: a.contentQueries || null,
      declaredInputs: g,
      inputs: null,
      outputs: null,
      exportAs: a.exportAs || null,
      onPush: a.changeDetection === Q1.OnPush,
      directiveDefs: null,
      pipeDefs: null,
      standalone: d,
      dependencies: d && a.dependencies || null,
      getStandaloneInjector: null,
      selectors: a.selectors || jt,
      viewQuery: a.viewQuery || null,
      features: a.features || null,
      data: a.data || {},
      encapsulation: a.encapsulation || ifc.Emulated,
      id: "c" + oi++,
      styles: a.styles || jt,
      _: null,
      setInput: null,
      schemas: a.schemas || null,
      tView: null,
      findHostDirectiveDefs: null,
      hostDirectives: null
    };
    const C = a.dependencies;
    const y = a.features;
    m.inputs = vr(a.inputs, g);
    m.outputs = vr(a.outputs);
    if (y) {
      y.forEach(w => w(m));
    }
    m.directiveDefs = C ? () => (typeof C == "function" ? C() : C).map(Ua).filter(Ms) : null;
    m.pipeDefs = C ? () => (typeof C == "function" ? C() : C).map(di).filter(Ms) : null;
    return m;
  });
}
export function B6R(a, l, d) {
  const g = a.ɵcmp;
  g.directiveDefs = () => (typeof l == "function" ? l() : l).map(Ua);
  g.pipeDefs = () => (typeof d == "function" ? d() : d).map(di);
}
function Ua(a) {
  return En(a) || ui(a);
}
function Ms(a) {
  return a !== null;
}
export function oAB(a) {
  return _r(() => ({
    type: a.type,
    bootstrap: a.bootstrap || jt,
    declarations: a.declarations || jt,
    imports: a.imports || jt,
    exports: a.exports || jt,
    transitiveCompileScopes: null,
    schemas: a.schemas || null,
    id: a.id || null
  }));
}
export function kYT(a, l) {
  return _r(() => {
    const d = Ai(a, true);
    d.declarations = l.declarations || jt;
    d.imports = l.imports || jt;
    d.exports = l.exports || jt;
  });
}
function vr(a, l) {
  if (a == null) {
    return V1;
  }
  const d = {};
  for (const g in a) {
    if (a.hasOwnProperty(g)) {
      let m = a[g];
      let C = m;
      if (Array.isArray(m)) {
        C = m[1];
        m = m[0];
      }
      d[m] = g;
      if (l) {
        l[m] = C;
      }
    }
  }
  return d;
}
export const lG2 = Xpm;
export function Yjl(a) {
  return {
    type: a.type,
    name: a.name,
    factory: null,
    pure: a.pure !== false,
    standalone: a.standalone === true,
    onDestroy: a.type.prototype.ngOnDestroy || null
  };
}
function En(a) {
  return a[r1] || null;
}
function ui(a) {
  return a[mt] || null;
}
function di(a) {
  return a[ut] || null;
}
export function $WT(a) {
  const l = En(a) || ui(a) || di(a);
  return l !== null && l.standalone;
}
function Ai(a, l) {
  const d = a[Wn] || null;
  if (!d && l === true) {
    throw new Error(`Type ${AaK(a)} does not have '\u0275mod' property.`);
  }
  return d;
}
function R1(a) {
  return Array.isArray(a) && typeof a[1] == "object";
}
function X1(a) {
  return Array.isArray(a) && a[1] === true;
}
function Oe(a) {
  return (a.flags & 4) != 0;
}
function ne(a) {
  return a.componentOffset > -1;
}
function on(a) {
  return (a.flags & 1) == 1;
}
function P1(a) {
  return a.template !== null;
}
function v0(a) {
  return (a[2] & 256) != 0;
}
function F1(a, l) {
  if (a.hasOwnProperty(k1)) {
    return a[k1];
  } else {
    return null;
  }
}
class _n {
  constructor(l, d, g) {
    this.previousValue = l;
    this.currentValue = d;
    this.firstChange = g;
  }
  isFirstChange() {
    return this.firstChange;
  }
}
export function TTD() {
  return m4;
}
function m4(a) {
  if (a.type.prototype.ngOnChanges) {
    a.setInput = Wc;
  }
  return er;
}
function er() {
  const a = Y2(this);
  const l = a?.current;
  if (l) {
    const d = a.previous;
    if (d === V1) {
      a.previous = l;
    } else {
      for (let g in l) {
        d[g] = l[g];
      }
    }
    a.current = null;
    this.ngOnChanges(l);
  }
}
function Wc(a, l, d, g) {
  const m = this.declaredInputs[d];
  const C = Y2(a) || function _4(a, l) {
    return a[vo] = l;
  }(a, {
    previous: V1,
    current: null
  });
  const y = C.current ||= {};
  const w = C.previous;
  const P = w[m];
  y[m] = new _n(P && P.currentValue, l, w === V1);
  a[g] = l;
}
TTD.ngInherit = true;
const vo = "__ngSimpleChanges__";
function Y2(a) {
  return a[vo] || null;
}
function zi(a) {
  while (Array.isArray(a)) {
    a = a[0];
  }
  return a;
}
function E1(a, l) {
  return zi(l[a]);
}
function Fi(a, l) {
  return zi(l[a.index]);
}
function Za(a, l) {
  return a.data[l];
}
function B1(a, l) {
  return a[l];
}
function ei(a, l) {
  const d = l[a];
  if (R1(d)) {
    return d;
  } else {
    return d[0];
  }
}
function J2(a) {
  return (a[2] & 64) == 64;
}
function Ts(a, l) {
  if (l == null) {
    return null;
  } else {
    return a[l];
  }
}
function b4(a) {
  a[18] = 0;
}
function Q2(a, l) {
  a[5] += l;
  let d = a;
  let g = a[3];
  while (g !== null && (l === 1 && d[5] === 1 || l === -1 && d[5] === 0)) {
    g[5] += l;
    d = g;
    g = g[3];
  }
}
const Jt = {
  lFrame: Yn(null),
  bindingsEnabled: true
};
function qa() {
  return Jt.bindingsEnabled;
}
function Ue() {
  return Jt.lFrame.lView;
}
function nn() {
  return Jt.lFrame.tView;
}
export function CHM(a) {
  Jt.lFrame.contextLView = a;
  return a[8];
}
export function KtG(a) {
  Jt.lFrame.contextLView = null;
  return a;
}
function s1() {
  let a = ks();
  while (a !== null && a.type === 64) {
    a = a.parent;
  }
  return a;
}
function ks() {
  return Jt.lFrame.currentTNode;
}
function t3() {
  const a = Jt.lFrame;
  const l = a.currentTNode;
  if (a.isParent) {
    return l;
  } else {
    return l.parent;
  }
}
function Co(a, l) {
  const d = Jt.lFrame;
  d.currentTNode = a;
  d.isParent = l;
}
function M4() {
  return Jt.lFrame.isParent;
}
function U1() {
  Jt.lFrame.isParent = false;
}
function ai() {
  const a = Jt.lFrame;
  let l = a.bindingRootIndex;
  if (l === -1) {
    l = a.bindingRootIndex = a.tView.bindingStartIndex;
  }
  return l;
}
function g1() {
  return Jt.lFrame.bindingIndex;
}
function Z1() {
  return Jt.lFrame.bindingIndex++;
}
function a1(a) {
  const l = Jt.lFrame;
  const d = l.bindingIndex;
  l.bindingIndex = l.bindingIndex + a;
  return d;
}
function Ga(a) {
  Jt.lFrame.inI18n = a;
}
function Os(a, l) {
  const d = Jt.lFrame;
  d.bindingIndex = d.bindingRootIndex = a;
  i3(l);
}
function i3(a) {
  Jt.lFrame.currentDirectiveIndex = a;
}
function w0() {
  return Jt.lFrame.currentQueryIndex;
}
function w4(a) {
  Jt.lFrame.currentQueryIndex = a;
}
function S4(a) {
  const l = a[1];
  if (l.type === 2) {
    return l.declTNode;
  } else if (l.type === 1) {
    return a[6];
  } else {
    return null;
  }
}
function r3(a, l, d) {
  if (d & XFs.SkipSelf) {
    let m = l;
    let C = a;
    while (!(m = m.parent, m !== null || d & XFs.Host || (m = S4(C), m === null || (C = C[15], m.type & 10))));
    if (m === null) {
      return false;
    }
    l = m;
    a = C;
  }
  const g = Jt.lFrame = fn();
  g.currentTNode = l;
  g.lView = a;
  return true;
}
function T4(a) {
  const l = fn();
  const d = a[1];
  Jt.lFrame = l;
  l.currentTNode = d.firstChild;
  l.lView = a;
  l.tView = d;
  l.contextLView = a;
  l.bindingIndex = d.bindingStartIndex;
  l.inI18n = false;
}
function fn() {
  const a = Jt.lFrame;
  const l = a === null ? null : a.child;
  if (l === null) {
    return Yn(a);
  } else {
    return l;
  }
}
function Yn(a) {
  const l = {
    currentTNode: null,
    isParent: true,
    lView: null,
    tView: null,
    selectedIndex: -1,
    contextLView: null,
    elementDepthCount: 0,
    currentNamespace: null,
    currentDirectiveIndex: -1,
    bindingRootIndex: -1,
    bindingIndex: -1,
    currentQueryIndex: 0,
    parent: a,
    child: null,
    inI18n: false
  };
  if (a !== null) {
    a.child = l;
  }
  return l;
}
function Sn() {
  const a = Jt.lFrame;
  Jt.lFrame = a.parent;
  a.currentTNode = null;
  a.lView = null;
  return a;
}
const S0 = Sn;
function X2() {
  const a = Sn();
  a.isParent = true;
  a.tView = null;
  a.selectedIndex = -1;
  a.contextLView = null;
  a.elementDepthCount = 0;
  a.currentDirectiveIndex = -1;
  a.currentNamespace = null;
  a.bindingRootIndex = -1;
  a.bindingIndex = -1;
  a.currentQueryIndex = 0;
}
function Bi() {
  return Jt.lFrame.selectedIndex;
}
function ro(a) {
  Jt.lFrame.selectedIndex = a;
}
function wi() {
  const a = Jt.lFrame;
  return Za(a.tView, a.selectedIndex);
}
export function O4$() {
  Jt.lFrame.currentNamespace = "svg";
}
export function kcU() {
  (function o3() {
    Jt.lFrame.currentNamespace = null;
  })();
}
function Ko(a, l) {
  for (let d = l.directiveStart, g = l.directiveEnd; d < g; d++) {
    const C = a.data[d].type.prototype;
    const {
      ngAfterContentInit: y,
      ngAfterContentChecked: w,
      ngAfterViewInit: P,
      ngAfterViewChecked: L,
      ngOnDestroy: B
    } = C;
    if (y) {
      (a.contentHooks ||= []).push(-d, y);
    }
    if (w) {
      (a.contentHooks ||= []).push(d, w);
      (a.contentCheckHooks ||= []).push(d, w);
    }
    if (P) {
      (a.viewHooks ||= []).push(-d, P);
    }
    if (L) {
      (a.viewHooks ||= []).push(d, L);
      (a.viewCheckHooks ||= []).push(d, L);
    }
    if (B != null) {
      (a.destroyHooks ||= []).push(d, B);
    }
  }
}
function T(a, l, d) {
  F(a, l, 3, d);
}
function N(a, l, d, g) {
  if ((a[2] & 3) === d) {
    F(a, l, d, g);
  }
}
function E(a, l) {
  let d = a[2];
  if ((d & 3) === l) {
    d &= 2047;
    d += 1;
    a[2] = d;
  }
}
function F(a, l, d, g) {
  const C = g ?? -1;
  const y = l.length - 1;
  let w = 0;
  for (let P = g !== undefined ? a[18] & 65535 : 0; P < y; P++) {
    if (typeof l[P + 1] == "number") {
      w = l[P];
      if (g != null && w >= g) {
        break;
      }
    } else {
      if (l[P] < 0) {
        a[18] += 65536;
      }
      if (w < C || C == -1) {
        se(a, d, l, P);
        a[18] = (a[18] & -65536) + P + 2;
      }
      P++;
    }
  }
}
function se(a, l, d, g) {
  const m = d[g] < 0;
  const C = d[g + 1];
  const w = a[m ? -d[g] : d[g]];
  if (m) {
    if (a[2] >> 11 < a[18] >> 16 && (a[2] & 3) === l) {
      a[2] += 2048;
      try {
        C.call(w);
      } finally {}
    }
  } else {
    try {
      C.call(w);
    } finally {}
  }
}
class Ge {
  constructor(l, d, g) {
    this.factory = l;
    this.resolving = false;
    this.canSeeViewProviders = d;
    this.injectImpl = g;
  }
}
function so(a, l, d) {
  let g = 0;
  while (g < d.length) {
    const m = d[g];
    if (typeof m == "number") {
      if (m !== 0) {
        break;
      }
      g++;
      const C = d[g++];
      const y = d[g++];
      const w = d[g++];
      a.setAttribute(l, y, w, C);
    } else {
      const C = m;
      const y = d[++g];
      if (ao(C)) {
        a.setProperty(l, C, y);
      } else {
        a.setAttribute(l, C, y);
      }
      g++;
    }
  }
  return g;
}
function _1(a) {
  return a === 3 || a === 4 || a === 6;
}
function ao(a) {
  return a.charCodeAt(0) === 64;
}
function D1(a, l) {
  if (l !== null && l.length !== 0) {
    if (a === null || a.length === 0) {
      a = l.slice();
    } else {
      let d = -1;
      for (let g = 0; g < l.length; g++) {
        const m = l[g];
        if (typeof m == "number") {
          d = m;
        } else if (d !== 0) {
          co(a, d, m, null, d === -1 || d === 2 ? l[++g] : null);
        }
      }
    }
  }
  return a;
}
function co(a, l, d, g, m) {
  let C = 0;
  let y = a.length;
  if (l === -1) {
    y = -1;
  } else {
    while (C < a.length) {
      const w = a[C++];
      if (typeof w == "number") {
        if (w === l) {
          y = -1;
          break;
        }
        if (w > l) {
          y = C - 1;
          break;
        }
      }
    }
  }
  while (C < a.length) {
    const w = a[C];
    if (typeof w == "number") {
      break;
    }
    if (w === d) {
      if (g === null) {
        if (m !== null) {
          a[C + 1] = m;
        }
        return;
      }
      if (g === a[C + 1]) {
        a[C + 2] = m;
        return;
      }
    }
    C++;
    if (g !== null) {
      C++;
    }
    if (m !== null) {
      C++;
    }
  }
  if (y !== -1) {
    a.splice(y, 0, l);
    C = y + 1;
  }
  a.splice(C++, 0, d);
  if (g !== null) {
    a.splice(C++, 0, g);
  }
  if (m !== null) {
    a.splice(C++, 0, m);
  }
}
function h2(a) {
  return a !== -1;
}
function ea(a) {
  return a & 32767;
}
function As(a, l) {
  let d = function s3(a) {
    return a >> 16;
  }(a);
  let g = l;
  while (d > 0) {
    g = g[15];
    d--;
  }
  return g;
}
let rr = true;
function f2(a) {
  const l = rr;
  rr = a;
  return l;
}
let w7 = 0;
const Ps = {};
function Es(a, l) {
  const d = Ya(a, l);
  if (d !== -1) {
    return d;
  }
  const g = l[1];
  if (g.firstCreatePass) {
    a.injectorIndex = l.length;
    ja(g.data, a);
    ja(l, null);
    ja(g.blueprint, null);
  }
  const m = br(a, l);
  const C = a.injectorIndex;
  if (h2(m)) {
    const y = ea(m);
    const w = As(m, l);
    const P = w[1].data;
    for (let L = 0; L < 8; L++) {
      l[C + L] = w[y + L] | P[y + L];
    }
  }
  l[C + 8] = m;
  return C;
}
function ja(a, l) {
  a.push(0, 0, 0, 0, 0, 0, 0, 0, l);
}
function Ya(a, l) {
  if (a.injectorIndex === -1 || a.parent && a.parent.injectorIndex === a.injectorIndex || l[a.injectorIndex + 8] === null) {
    return -1;
  } else {
    return a.injectorIndex;
  }
}
function br(a, l) {
  if (a.parent && a.parent.injectorIndex !== -1) {
    return a.parent.injectorIndex;
  }
  let d = 0;
  let g = null;
  let m = l;
  while (m !== null) {
    g = l8(m);
    if (g === null) {
      return -1;
    }
    d++;
    m = m[15];
    if (g.injectorIndex !== -1) {
      return g.injectorIndex | d << 16;
    }
  }
  return -1;
}
function $a(a, l, d) {
  (function eg(a, l, d) {
    let g;
    if (typeof d == "string") {
      g = d.charCodeAt(0) || 0;
    } else if (d.hasOwnProperty(An)) {
      g = d[An];
    }
    if (g == null) {
      g = d[An] = w7++;
    }
    const m = g & 255;
    l.data[a + (m >> 5)] |= 1 << m;
  })(a, l, d);
}
function or(a, l, d) {
  if (d & XFs.Optional || a !== undefined) {
    return a;
  }
  Ye();
}
function A0(a, l, d, g) {
  if (d & XFs.Optional && g === undefined) {
    g = null;
  }
  if (!(d & (XFs.Self | XFs.Host))) {
    const m = a[9];
    const C = t1(undefined);
    try {
      if (m) {
        return m.get(l, g, d & XFs.Optional);
      } else {
        return bi(l, g, d & XFs.Optional);
      }
    } finally {
      t1(C);
    }
  }
  return or(g, 0, d);
}
function Ti(a, l, d, g = XFs.Default, m) {
  if (a !== null) {
    if (l[2] & 1024) {
      const y = function C1(a, l, d, g, m) {
        let C = a;
        let y = l;
        while (C !== null && y !== null && y[2] & 1024 && !(y[2] & 256)) {
          const w = a8(C, y, d, g | XFs.Self, Ps);
          if (w !== Ps) {
            return w;
          }
          let P = C.parent;
          if (!P) {
            const L = y[21];
            if (L) {
              const B = L.get(d, Ps, g);
              if (B !== Ps) {
                return B;
              }
            }
            P = l8(y);
            y = y[15];
          }
          C = P;
        }
        return m;
      }(a, l, d, g, Ps);
      if (y !== Ps) {
        return y;
      }
    }
    const C = a8(a, l, d, g, Ps);
    if (C !== Ps) {
      return C;
    }
  }
  return A0(l, d, g, m);
}
function a8(a, l, d, g, m) {
  const C = function c8(a) {
    if (typeof a == "string") {
      return a.charCodeAt(0) || 0;
    }
    const l = a.hasOwnProperty(An) ? a[An] : undefined;
    if (typeof l == "number") {
      if (l >= 0) {
        return l & 255;
      } else {
        return S7;
      }
    } else {
      return l;
    }
  }(d);
  if (typeof C == "function") {
    if (!r3(l, a, g)) {
      if (g & XFs.Host) {
        return or(m, 0, g);
      } else {
        return A0(l, d, g, m);
      }
    }
    try {
      const y = C(g);
      if (y != null || g & XFs.Optional) {
        return y;
      }
      Ye();
    } finally {
      S0();
    }
  } else if (typeof C == "number") {
    let y = null;
    let w = Ya(a, l);
    let P = -1;
    let L = g & XFs.Host ? l[16][6] : null;
    for ((w === -1 || g & XFs.SkipSelf) && (P = w === -1 ? br(a, l) : l[w + 8], P !== -1 && m2(g, false) ? (y = l[1], w = ea(P), l = As(P, l)) : w = -1); w !== -1;) {
      const B = l[1];
      if (P0(C, w, B.data)) {
        const X = ta(w, l, d, y, g, L);
        if (X !== Ps) {
          return X;
        }
      }
      P = l[w + 8];
      if (P !== -1 && m2(g, l[1].data[w + 8] === L) && P0(C, w, l)) {
        y = B;
        w = ea(P);
        l = As(P, l);
      } else {
        w = -1;
      }
    }
  }
  return m;
}
function ta(a, l, d, g, m, C) {
  const y = l[1];
  const w = y.data[a + 8];
  const B = g2(w, y, d, g == null ? ne(w) && rr : g != y && (w.type & 3) != 0, m & XFs.Host && C === w);
  if (B !== null) {
    return xo(l, y, B, w);
  } else {
    return Ps;
  }
}
function g2(a, l, d, g, m) {
  const C = a.providerIndexes;
  const y = l.data;
  const w = C & 1048575;
  const P = a.directiveStart;
  const B = C >> 20;
  const me = m ? w + B : a.directiveEnd;
  for (let Pe = g ? w : w + B; Pe < me; Pe++) {
    const je = y[Pe];
    if (Pe < P && d === je || Pe >= P && je.type === d) {
      return Pe;
    }
  }
  if (m) {
    const Pe = y[P];
    if (Pe && P1(Pe) && Pe.type === d) {
      return P;
    }
  }
  return null;
}
function xo(a, l, d, g) {
  let m = a[d];
  const C = l.data;
  if (function bt(a) {
    return a instanceof Ge;
  }(m)) {
    const y = m;
    if (y.resolving) {
      (function ge(a, l) {
        const d = l ? `. Dependency path: ${l.join(" > ")} > ${a}` : "";
        throw new vHH(-200, `Circular dependency in DI detected for ${a}${d}`);
      })(function ve(a) {
        if (typeof a == "function") {
          return a.name || a.toString();
        } else if (typeof a == "object" && a != null && typeof a.type == "function") {
          return a.type.name || a.type.toString();
        } else {
          return Y(a);
        }
      }(C[d]));
    }
    const w = f2(y.canSeeViewProviders);
    y.resolving = true;
    const P = y.injectImpl ? t1(y.injectImpl) : null;
    r3(a, g, XFs.Default);
    try {
      m = a[d] = y.factory(undefined, C, a, g);
      if (l.firstCreatePass && d >= g.directiveStart) {
        (function oo(a, l, d) {
          const {
            ngOnChanges: g,
            ngOnInit: m,
            ngDoCheck: C
          } = l.type.prototype;
          if (g) {
            const y = m4(l);
            (d.preOrderHooks ||= []).push(a, y);
            (d.preOrderCheckHooks ||= []).push(a, y);
          }
          if (m) {
            (d.preOrderHooks ||= []).push(0 - a, m);
          }
          if (C) {
            (d.preOrderHooks ||= []).push(a, C);
            (d.preOrderCheckHooks ||= []).push(a, C);
          }
        })(d, C[d], l);
      }
    } finally {
      if (P !== null) {
        t1(P);
      }
      f2(w);
      y.resolving = false;
      S0();
    }
  }
  return m;
}
function P0(a, l, d) {
  return !!(d[l + (a >> 5)] & 1 << a);
}
function m2(a, l) {
  return !(a & XFs.Self) && (!(a & XFs.Host) || !l);
}
class Xo {
  constructor(l, d) {
    this._tNode = l;
    this._lView = d;
  }
  get(l, d, g) {
    return Ti(this._tNode, this._lView, l, Nr(g), d);
  }
}
function S7() {
  return new Xo(s1(), Ue());
}
export function n5z(a) {
  return _r(() => {
    const l = a.prototype.constructor;
    const d = l[k1] || v1(l);
    const g = Object.prototype;
    let m = Object.getPrototypeOf(a.prototype).constructor;
    while (m && m !== g) {
      const C = m[k1] || v1(m);
      if (C && C !== d) {
        return C;
      }
      m = Object.getPrototypeOf(m);
    }
    return C => new C();
  });
}
function v1(a) {
  if (W(a)) {
    return () => {
      const l = v1(G(a));
      return l && l();
    };
  } else {
    return F1(a);
  }
}
function l8(a) {
  const l = a[1];
  const d = l.type;
  if (d === 2) {
    return l.declTNode;
  } else if (d === 1) {
    return a[6];
  } else {
    return null;
  }
}
export function $8M(a) {
  return function O0(a, l) {
    if (l === "class") {
      return a.classes;
    }
    if (l === "style") {
      return a.styles;
    }
    const d = a.attrs;
    if (d) {
      const g = d.length;
      let m = 0;
      while (m < g) {
        const C = d[m];
        if (_1(C)) {
          break;
        }
        if (C === 0) {
          m += 2;
        } else if (typeof C == "number") {
          for (m++; m < g && typeof d[m] == "string";) {
            m++;
          }
        } else {
          if (C === l) {
            return d[m + 1];
          }
          m += 2;
        }
      }
    }
    return null;
  }(s1(), a);
}
const na = "__parameters__";
function _2(a, l, d) {
  return _r(() => {
    const g = function E0(a) {
      return function (...d) {
        if (a) {
          const g = a(...d);
          for (const m in g) {
            this[m] = g[m];
          }
        }
      };
    }(l);
    function m(...C) {
      if (this instanceof m) {
        g.apply(this, C);
        return this;
      }
      const y = new m(...C);
      w.annotation = y;
      return w;
      function w(P, L, B) {
        const X = P.hasOwnProperty(na) ? P[na] : Object.defineProperty(P, na, {
          value: []
        })[na];
        while (X.length <= B) {
          X.push(null);
        }
        (X[B] = X[B] || []).push(y);
        return P;
      }
    }
    if (d) {
      m.prototype = Object.create(d.prototype);
    }
    m.prototype.ngMetadataName = a;
    m.annotationCls = m;
    return m;
  });
}
export class OlP {
  constructor(l, d) {
    this._desc = l;
    this.ngMetadataName = "InjectionToken";
    this.ɵprov = undefined;
    if (typeof d == "number") {
      this.__NG_ELEMENT_ID__ = d;
    } else if (d !== undefined) {
      this.ɵprov = Yz7({
        token: this,
        providedIn: d.providedIn || "root",
        factory: d.factory
      });
    }
  }
  get multi() {
    return this;
  }
  toString() {
    return `InjectionToken ${this._desc}`;
  }
}
function yr(a, l) {
  a.forEach(d => Array.isArray(d) ? yr(d, l) : l(d));
}
function z0(a, l, d) {
  if (l >= a.length) {
    a.push(d);
  } else {
    a.splice(l, 0, d);
  }
}
function Qa(a, l) {
  if (l >= a.length - 1) {
    return a.pop();
  } else {
    return a.splice(l, 1)[0];
  }
}
function u3(a, l) {
  const d = [];
  for (let g = 0; g < a; g++) {
    d.push(l);
  }
  return d;
}
function q1(a, l, d) {
  let g = Mr(a, l);
  if (g >= 0) {
    a[g | 1] = d;
  } else {
    g = ~g;
    (function u8(a, l, d, g) {
      let m = a.length;
      if (m == l) {
        a.push(d, g);
      } else if (m === 1) {
        a.push(g, a[0]);
        a[0] = d;
      } else {
        m--;
        a.push(a[m - 1], a[m]);
        while (m > l) {
          a[m] = a[m - 2];
          m--;
        }
        a[l] = d;
        a[l + 1] = g;
      }
    })(a, g, l, d);
  }
  return g;
}
function ra(a, l) {
  const d = Mr(a, l);
  if (d >= 0) {
    return a[d | 1];
  }
}
function Mr(a, l) {
  return function Xa(a, l, d) {
    let g = 0;
    let m = a.length >> d;
    while (m !== g) {
      const C = g + (m - g >> 1);
      const y = a[C << d];
      if (l === y) {
        return C << d;
      }
      if (y > l) {
        m = C;
      } else {
        g = C + 1;
      }
    }
    return ~(m << d);
  }(a, l, 1);
}
export const FiY = Kr(_2("Optional"), 8);
export const tp0 = Kr(_2("SkipSelf"), 4);
export var JOm = (() => {
  (JOm = JOm || {})[JOm.Important = 1] = "Important";
  JOm[JOm.DashCase = 2] = "DashCase";
  return JOm;
})();
const G0 = /^>|^->|<!--|-->|--!>|<!-$/g;
const v8 = /(<|>)/;
const L1 = new Map();
let m3 = 0;
const Ns = "__ngContext__";
function l1(a, l) {
  if (R1(l)) {
    a[Ns] = l[20];
    (function ki(a) {
      L1.set(a[20], a);
    })(l);
  } else {
    a[Ns] = l;
  }
}
let oc;
function x3(a, l) {
  return oc(a, l);
}
function zs(a) {
  const l = a[3];
  if (X1(l)) {
    return l[3];
  } else {
    return l;
  }
}
function y3(a) {
  return x8(a[13]);
}
function $0(a) {
  return x8(a[4]);
}
function x8(a) {
  while (a !== null && !X1(a)) {
    a = a[4];
  }
  return a;
}
function ua(a, l, d, g, m) {
  if (g != null) {
    let C;
    let y = false;
    if (X1(g)) {
      C = g;
    } else if (R1(g)) {
      y = true;
      g = g[0];
    }
    const w = zi(g);
    if (a === 0 && d !== null) {
      if (m == null) {
        w8(l, d, w);
      } else {
        Fr(l, d, w, m || null, true);
      }
    } else if (a === 1 && d !== null) {
      Fr(l, d, w, m || null, true);
    } else if (a === 2) {
      Hi(l, w, y);
    } else if (a === 3) {
      l.destroyNode(w);
    }
    if (C != null) {
      (function Y4(a, l, d, g, m) {
        const C = d[7];
        if (C !== zi(d)) {
          ua(l, a, g, C, m);
        }
        for (let w = 10; w < d.length; w++) {
          const P = d[w];
          Ar(P[1], P, a, l, g, C);
        }
      })(l, a, C, d, m);
    }
  }
}
function W0(a, l) {
  return a.createText(l);
}
function J0(a, l, d) {
  a.setValue(l, d);
}
function ar(a, l) {
  return a.createComment(function C8(a) {
    return a.replace(G0, l => l.replace(v8, "​$1​"));
  }(l));
}
function st(a, l, d) {
  return a.createElement(l, d);
}
function Q0(a, l) {
  const d = a[9];
  const g = d.indexOf(l);
  const m = l[3];
  if (l[2] & 512) {
    l[2] &= -513;
    Q2(m, -1);
  }
  d.splice(g, 1);
}
function K0(a, l) {
  if (a.length <= 10) {
    return;
  }
  const d = 10 + l;
  const g = a[d];
  if (g) {
    const m = g[17];
    if (m !== null && m !== a) {
      Q0(m, g);
    }
    if (l > 0) {
      a[d - 1][4] = g[4];
    }
    const C = Qa(a, 10 + l);
    (function da(a, l) {
      Ar(a, l, l[11], 2, null, null);
      l[0] = null;
      l[6] = null;
    })(g[1], g);
    const y = C[19];
    if (y !== null) {
      y.detachView(C[1]);
    }
    g[3] = null;
    g[4] = null;
    g[2] &= -65;
  }
  return g;
}
function Ei(a, l) {
  if (!(l[2] & 128)) {
    const d = l[11];
    if (d.destroyNode) {
      Ar(a, l, d, 3, null, null);
    }
    (function U4(a) {
      let l = a[13];
      if (!l) {
        return X0(a[1], a);
      }
      while (l) {
        let d = null;
        if (R1(l)) {
          d = l[13];
        } else {
          const g = l[10];
          if (g) {
            d = g;
          }
        }
        if (!d) {
          while (l && !l[4] && l !== a) {
            if (R1(l)) {
              X0(l[1], l);
            }
            l = l[3];
          }
          if (l === null) {
            l = a;
          }
          if (R1(l)) {
            X0(l[1], l);
          }
          d = l && l[4];
        }
        l = d;
      }
    })(l);
  }
}
function X0(a, l) {
  if (!(l[2] & 128)) {
    l[2] &= -65;
    l[2] |= 128;
    (function u1(a, l) {
      let d;
      if (a != null && (d = a.destroyHooks) != null) {
        for (let g = 0; g < d.length; g += 2) {
          const m = l[d[g]];
          if (!(m instanceof Ge)) {
            const C = d[g + 1];
            if (Array.isArray(C)) {
              for (let y = 0; y < C.length; y += 2) {
                const w = m[C[y]];
                const P = C[y + 1];
                try {
                  P.call(w);
                } finally {}
              }
            } else {
              try {
                C.call(m);
              } finally {}
            }
          }
        }
      }
    })(a, l);
    (function e6(a, l) {
      const d = a.cleanup;
      const g = l[7];
      let m = -1;
      if (d !== null) {
        for (let C = 0; C < d.length - 1; C += 2) {
          if (typeof d[C] == "string") {
            const y = d[C + 3];
            if (y >= 0) {
              g[m = y]();
            } else {
              g[m = -y].unsubscribe();
            }
            C += 2;
          } else {
            const y = g[m = d[C + 1]];
            d[C].call(y);
          }
        }
      }
      if (g !== null) {
        for (let C = m + 1; C < g.length; C++) {
          (0, g[C])();
        }
        l[7] = null;
      }
    })(a, l);
    if (l[1].type === 1) {
      l[11].destroy();
    }
    const d = l[17];
    if (d !== null && X1(l[3])) {
      if (d !== l[3]) {
        Q0(d, l);
      }
      const g = l[19];
      if (g !== null) {
        g.detachView(a);
      }
    }
    (function Rr(a) {
      L1.delete(a[20]);
    })(l);
  }
}
function M8(a, l, d) {
  return Pn(a, l.parent, d);
}
function Pn(a, l, d) {
  let g = l;
  while (g !== null && g.type & 40) {
    g = (l = g).parent;
  }
  if (g === null) {
    return d[0];
  }
  {
    const {
      componentOffset: m
    } = g;
    if (m > -1) {
      const {
        encapsulation: C
      } = a.data[g.directiveStart + m];
      if (C === ifc.None || C === ifc.Emulated) {
        return null;
      }
    }
    return Fi(g, d);
  }
}
function Fr(a, l, d, g, m) {
  a.insertBefore(l, d, g, m);
}
function w8(a, l, d) {
  a.appendChild(l, d);
}
function G1(a, l, d, g, m) {
  if (g !== null) {
    Fr(a, l, d, g, m);
  } else {
    w8(a, l, d);
  }
}
function Z4(a, l) {
  return a.parentNode(l);
}
function T8(a, l, d) {
  return Hs(a, l, d);
}
function q4(a, l, d) {
  if (a.type & 40) {
    return Fi(a, d);
  } else {
    return null;
  }
}
let es;
let W4;
let J4;
let uc;
let Hs = q4;
function ac(a, l) {
  Hs = a;
  es = l;
}
function Yt(a, l, d, g) {
  const m = M8(a, g, l);
  const C = l[11];
  const w = T8(g.parent || l[6], g, l);
  if (m != null) {
    if (Array.isArray(d)) {
      for (let P = 0; P < d.length; P++) {
        G1(C, m, d[P], w, false);
      }
    } else {
      G1(C, m, d, w, false);
    }
  }
  if (es !== undefined) {
    es(C, g, l, d, m);
  }
}
function cc(a, l) {
  if (l !== null) {
    const d = l.type;
    if (d & 3) {
      return Fi(l, a);
    }
    if (d & 4) {
      return G4(-1, a[l.index]);
    }
    if (d & 8) {
      const g = l.child;
      if (g !== null) {
        return cc(a, g);
      }
      {
        const m = a[l.index];
        if (X1(m)) {
          return G4(-1, m);
        } else {
          return zi(m);
        }
      }
    }
    if (d & 32) {
      return x3(l, a)() || zi(a[l.index]);
    }
    {
      const g = pa(a, l);
      if (g !== null) {
        if (Array.isArray(g)) {
          return g[0];
        } else {
          return cc(zs(a[16]), g);
        }
      } else {
        return cc(a, l.next);
      }
    }
  }
  return null;
}
function pa(a, l) {
  if (l !== null) {
    return a[16][6].projection[l.projection];
  } else {
    return null;
  }
}
function G4(a, l) {
  const d = 10 + a + 1;
  if (d < l.length) {
    const g = l[d];
    const m = g[1].firstChild;
    if (m !== null) {
      return cc(g, m);
    }
  }
  return l[7];
}
function Hi(a, l, d) {
  const g = Z4(a, l);
  if (g) {
    (function sg(a, l, d, g) {
      a.removeChild(l, d, g);
    })(a, g, l, d);
  }
}
function S3(a, l, d, g, m, C, y) {
  while (d != null) {
    const w = g[d.index];
    const P = d.type;
    if (y && l === 0) {
      if (w) {
        l1(zi(w), g);
      }
      d.flags |= 2;
    }
    if ((d.flags & 32) != 32) {
      if (P & 8) {
        S3(a, l, d.child, g, m, C, false);
        ua(l, a, m, w, C);
      } else if (P & 32) {
        const L = x3(d, g);
        let B;
        while (B = L()) {
          ua(l, a, m, B, C);
        }
        ua(l, a, m, w, C);
      } else if (P & 16) {
        n6(a, l, g, d, m, C);
      } else {
        ua(l, a, m, w, C);
      }
    }
    d = y ? d.projectionNext : d.next;
  }
}
function Ar(a, l, d, g, m, C) {
  S3(d, g, a.firstChild, l, m, C, false);
}
function n6(a, l, d, g, m, C) {
  const y = d[16];
  const P = y[6].projection[g.projection];
  if (Array.isArray(P)) {
    for (let L = 0; L < P.length; L++) {
      ua(l, a, m, P[L], C);
    }
  } else {
    S3(a, l, P, y[3], m, C, true);
  }
}
function M2(a, l, d) {
  if (d === "") {
    a.removeAttribute(l, "class");
  } else {
    a.setAttribute(l, "class", d);
  }
}
function $4(a, l, d) {
  const {
    mergedAttrs: g,
    classes: m,
    styles: C
  } = d;
  if (g !== null) {
    so(a, l, g);
  }
  if (m !== null) {
    M2(a, l, m);
  }
  if (C !== null) {
    (function r6(a, l, d) {
      a.setAttribute(l, "style", d);
    })(a, l, C);
  }
}
function cr(a) {
  return function ts() {
    if (W4 === undefined && (W4 = null, dqk.trustedTypes)) {
      try {
        W4 = dqk.trustedTypes.createPolicy("angular", {
          createHTML: a => a,
          createScript: a => a,
          createScriptURL: a => a
        });
      } catch {}
    }
    return W4;
  }()?.createHTML(a) || a;
}
export function RDi(a) {
  J4 = a;
}
function o6() {
  if (J4 !== undefined) {
    return J4;
  } else if (typeof document !== "undefined") {
    return document;
  } else {
    return undefined;
  }
}
function T3() {
  if (uc === undefined && (uc = null, dqk.trustedTypes)) {
    try {
      uc = dqk.trustedTypes.createPolicy("angular#unsafe-bypass", {
        createHTML: a => a,
        createScript: a => a,
        createScriptURL: a => a
      });
    } catch {}
  }
  return uc;
}
function k3(a) {
  return T3()?.createHTML(a) || a;
}
function s6(a) {
  return T3()?.createScriptURL(a) || a;
}
class Br {
  constructor(l) {
    this.changingThisBreaksApplicationSecurity = l;
  }
  toString() {
    return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${JZr})`;
  }
}
class k8 extends Br {
  getTypeName() {
    return "HTML";
  }
}
class a6 extends Br {
  getTypeName() {
    return "Style";
  }
}
class pc extends Br {
  getTypeName() {
    return "Script";
  }
}
class c6 extends Br {
  getTypeName() {
    return "URL";
  }
}
class is extends Br {
  getTypeName() {
    return "ResourceURL";
  }
}
export function z3N(a) {
  if (a instanceof Br) {
    return a.changingThisBreaksApplicationSecurity;
  } else {
    return a;
  }
}
export function qzn(a, l) {
  const d = function Rs(a) {
    return a instanceof Br && a.getTypeName() || null;
  }(a);
  if (d != null && d !== l) {
    if (d === "ResourceURL" && l === "URL") {
      return true;
    }
    throw new Error(`Required a safe ${l}, got a ${d} (see ${JZr})`);
  }
  return d === l;
}
export function JVY(a) {
  return new k8(a);
}
export function L6k(a) {
  return new a6(a);
}
export function eBb(a) {
  return new pc(a);
}
export function LAX(a) {
  return new c6(a);
}
export function pB0(a) {
  return new is(a);
}
function l6(a) {
  const l = new O3(a);
  if (function A3() {
    try {
      return !!new window.DOMParser().parseFromString(cr(""), "text/html");
    } catch {
      return false;
    }
  }()) {
    return new os(l);
  } else {
    return l;
  }
}
class os {
  constructor(l) {
    this.inertDocumentHelper = l;
  }
  getInertBodyElement(l) {
    l = "<body><remove></remove>" + l;
    try {
      const d = new window.DOMParser().parseFromString(cr(l), "text/html").body;
      if (d === null) {
        return this.inertDocumentHelper.getInertBodyElement(l);
      } else {
        d.removeChild(d.firstChild);
        return d;
      }
    } catch {
      return null;
    }
  }
}
class O3 {
  constructor(l) {
    this.defaultDoc = l;
    this.inertDocument = this.defaultDoc.implementation.createHTMLDocument("sanitization-inert");
    if (this.inertDocument.body == null) {
      const d = this.inertDocument.createElement("html");
      this.inertDocument.appendChild(d);
      const g = this.inertDocument.createElement("body");
      d.appendChild(g);
    }
  }
  getInertBodyElement(l) {
    const d = this.inertDocument.createElement("template");
    if ("content" in d) {
      d.innerHTML = cr(l);
      return d;
    }
    const g = this.inertDocument.createElement("body");
    g.innerHTML = cr(l);
    if (this.defaultDoc.documentMode) {
      this.stripCustomNsAttrs(g);
    }
    return g;
  }
  stripCustomNsAttrs(l) {
    const d = l.attributes;
    for (let m = d.length - 1; m > 0; m--) {
      const y = d.item(m).name;
      if (y === "xmlns:ns1" || y.indexOf("ns1:") === 0) {
        l.removeAttribute(y);
      }
    }
    let g = l.firstChild;
    while (g) {
      if (g.nodeType === Node.ELEMENT_NODE) {
        this.stripCustomNsAttrs(g);
      }
      g = g.nextSibling;
    }
  }
}
const T2 = /^(?:(?:https?|mailto|data|ftp|tel|file|sms):|[^&:/?#]*(?:[/?#]|$))/gi;
export function mCW(a) {
  if ((a = String(a)).match(T2)) {
    return a;
  } else {
    return "unsafe:" + a;
  }
}
function ss(a) {
  const l = {};
  for (const d of a.split(",")) {
    l[d] = true;
  }
  return l;
}
function qt(...a) {
  const l = {};
  for (const d of a) {
    for (const g in d) {
      if (d.hasOwnProperty(g)) {
        l[g] = true;
      }
    }
  }
  return l;
}
const hc = ss("area,br,col,hr,img,wbr");
const P3 = ss("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr");
const So = ss("rp,rt");
const u6 = qt(hc, qt(P3, ss("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")), qt(So, ss("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")), qt(So, P3));
const Q4 = ss("background,cite,href,itemtype,longdesc,poster,src,xlink:href");
const as = qt(Q4, ss("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"), ss("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"));
const k2 = ss("script,style,template");
class P8 {
  constructor() {
    this.sanitizedSomething = false;
    this.buf = [];
  }
  sanitizeChildren(l) {
    let d = l.firstChild;
    let g = true;
    while (d) {
      if (d.nodeType === Node.ELEMENT_NODE) {
        g = this.startElement(d);
      } else if (d.nodeType === Node.TEXT_NODE) {
        this.chars(d.nodeValue);
      } else {
        this.sanitizedSomething = true;
      }
      if (g && d.firstChild) {
        d = d.firstChild;
      } else {
        while (d) {
          if (d.nodeType === Node.ELEMENT_NODE) {
            this.endElement(d);
          }
          let m = this.checkClobberedElement(d, d.nextSibling);
          if (m) {
            d = m;
            break;
          }
          d = this.checkClobberedElement(d, d.parentNode);
        }
      }
    }
    return this.buf.join("");
  }
  startElement(l) {
    const d = l.nodeName.toLowerCase();
    if (!u6.hasOwnProperty(d)) {
      this.sanitizedSomething = true;
      return !k2.hasOwnProperty(d);
    }
    this.buf.push("<");
    this.buf.push(d);
    const g = l.attributes;
    for (let m = 0; m < g.length; m++) {
      const C = g.item(m);
      const y = C.name;
      const w = y.toLowerCase();
      if (!as.hasOwnProperty(w)) {
        this.sanitizedSomething = true;
        continue;
      }
      let P = C.value;
      if (Q4[w]) {
        P = mCW(P);
      }
      this.buf.push(" ", y, "=\"", p6(P), "\"");
    }
    this.buf.push(">");
    return true;
  }
  endElement(l) {
    const d = l.nodeName.toLowerCase();
    if (u6.hasOwnProperty(d) && !hc.hasOwnProperty(d)) {
      this.buf.push("</");
      this.buf.push(d);
      this.buf.push(">");
    }
  }
  chars(l) {
    this.buf.push(p6(l));
  }
  checkClobberedElement(l, d) {
    if (d && (l.compareDocumentPosition(d) & Node.DOCUMENT_POSITION_CONTAINED_BY) === Node.DOCUMENT_POSITION_CONTAINED_BY) {
      throw new Error(`Failed to sanitize html because the element is clobbered: ${l.outerHTML}`);
    }
    return d;
  }
}
const I7 = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
const E8 = /([^\#-~ |!])/g;
function p6(a) {
  return a.replace(/&/g, "&amp;").replace(I7, function (l) {
    return "&#" + ((l.charCodeAt(0) - 55296) * 1024 + (l.charCodeAt(1) - 56320) + 65536) + ";";
  }).replace(E8, function (l) {
    return "&#" + l.charCodeAt(0) + ";";
  }).replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
let fa;
export function EiD(a, l) {
  let d = null;
  try {
    fa = fa || l6(a);
    let g = l ? String(l) : "";
    d = fa.getInertBodyElement(g);
    let m = 5;
    let C = g;
    do {
      if (m === 0) {
        throw new Error("Failed to sanitize html because the input is unstable");
      }
      m--;
      g = C;
      C = d.innerHTML;
      d = fa.getInertBodyElement(g);
    } while (g !== C);
    return cr(new P8().sanitizeChildren(ga(d) || d));
  } finally {
    if (d) {
      const g = ga(d) || d;
      while (g.firstChild) {
        g.removeChild(g.firstChild);
      }
    }
  }
}
function ga(a) {
  if ("content" in a && function $i(a) {
    return a.nodeType === Node.ELEMENT_NODE && a.nodeName === "TEMPLATE";
  }(a)) {
    return a.content;
  } else {
    return null;
  }
}
export var q3G = (() => {
  (q3G = q3G || {})[q3G.NONE = 0] = "NONE";
  q3G[q3G.HTML = 1] = "HTML";
  q3G[q3G.STYLE = 2] = "STYLE";
  q3G[q3G.SCRIPT = 3] = "SCRIPT";
  q3G[q3G.URL = 4] = "URL";
  q3G[q3G.RESOURCE_URL = 5] = "RESOURCE_URL";
  return q3G;
})();
export function oJD(a) {
  const l = j1();
  if (l) {
    return k3(l.sanitize(q3G.HTML, a) || "");
  } else if (qzn(a, "HTML")) {
    return k3(z3N(a));
  } else {
    return EiD(o6(), Y(a));
  }
}
export function LSH(a) {
  const l = j1();
  if (l) {
    return l.sanitize(q3G.URL, a) || "";
  } else if (qzn(a, "URL")) {
    return z3N(a);
  } else {
    return mCW(Y(a));
  }
}
function gc(a) {
  const l = j1();
  if (l) {
    return s6(l.sanitize(q3G.RESOURCE_URL, a) || "");
  }
  if (qzn(a, "ResourceURL")) {
    return s6(z3N(a));
  }
  throw new vHH(904, false);
}
export function P3R(a, l, d) {
  return function R7(a, l) {
    if (l === "src" && (a === "embed" || a === "frame" || a === "iframe" || a === "media" || a === "script") || l === "href" && (a === "base" || a === "link")) {
      return gc;
    } else {
      return LSH;
    }
  }(l, d)(a);
}
function j1() {
  const a = Ue();
  return a && a[12];
}
export const Xts = new OlP("ENVIRONMENT_INITIALIZER");
const B7 = new OlP("INJECTOR", -1);
const U7 = new OlP("INJECTOR_DEF_TYPES");
class D3 {
  get(l, d = tn) {
    if (d === tn) {
      const g = new Error(`NullInjectorError: No provider for ${AaK(l)}!`);
      g.name = "NullInjectorError";
      throw g;
    }
    return d;
  }
}
export function MR2(a) {
  return {
    ɵproviders: a
  };
}
function el(...a) {
  return {
    ɵproviders: f6(0, a),
    ɵfromNgModule: true
  };
}
function f6(a, ...l) {
  const d = [];
  const g = new Set();
  let m;
  yr(l, C => {
    const y = C;
    if (O2(y, d, [], g)) {
      m ||= [];
      m.push(y);
    }
  });
  if (m !== undefined) {
    L3(m, d);
  }
  return d;
}
function L3(a, l) {
  for (let d = 0; d < a.length; d++) {
    const {
      providers: m
    } = a[d];
    Mn(m, C => {
      l.push(C);
    });
  }
}
function O2(a, l, d, g) {
  if (!(a = G(a))) {
    return false;
  }
  let m = null;
  let C = Go(a);
  const y = !C && En(a);
  if (C || y) {
    if (y && !y.standalone) {
      return false;
    }
    m = a;
  } else {
    const P = a.ngModule;
    C = Go(P);
    if (!C) {
      return false;
    }
    m = P;
  }
  const w = g.has(m);
  if (y) {
    if (w) {
      return false;
    }
    g.add(m);
    if (y.dependencies) {
      const P = typeof y.dependencies == "function" ? y.dependencies() : y.dependencies;
      for (const L of P) {
        O2(L, l, d, g);
      }
    }
  } else {
    if (!C) {
      return false;
    }
    {
      if (C.imports != null && !w) {
        let L;
        g.add(m);
        try {
          yr(C.imports, B => {
            if (O2(B, l, d, g)) {
              L ||= [];
              L.push(B);
            }
          });
        } finally {}
        if (L !== undefined) {
          L3(L, l);
        }
      }
      if (!w) {
        const L = F1(m) || (() => new m());
        l.push({
          provide: m,
          useFactory: L,
          deps: jt
        }, {
          provide: U7,
          useValue: m,
          multi: true
        }, {
          provide: Xts,
          useValue: () => LFG(m),
          multi: true
        });
      }
      const P = C.providers;
      if (P != null && !w) {
        Mn(P, B => {
          l.push(B);
        });
      }
    }
  }
  return m !== a && a.providers !== undefined;
}
function Mn(a, l) {
  for (let d of a) {
    if ($(d)) {
      d = d.ɵproviders;
    }
    if (Array.isArray(d)) {
      Mn(d, l);
    } else {
      l(d);
    }
  }
}
const lg = oe({
  provide: String,
  useValue: oe
});
function Wi(a) {
  return a !== null && typeof a == "object" && lg in a;
}
function cs(a) {
  return typeof a == "function";
}
export const zSh = new OlP("Set Injector scope.");
const _a = {};
const H8 = {};
let g6;
function nl() {
  if (g6 === undefined) {
    g6 = new D3();
  }
  return g6;
}
export class lqb {}
class Ii extends lqb {
  get destroyed() {
    return this._destroyed;
  }
  constructor(l, d, g, m) {
    super();
    this.parent = d;
    this.source = g;
    this.scopes = m;
    this.records = new Map();
    this._ngOnDestroyHooks = new Set();
    this._onDestroyHooks = [];
    this._destroyed = false;
    m6(l, y => this.processProvider(y));
    this.records.set(B7, bc(undefined, this));
    if (m.has("environment")) {
      this.records.set(lqb, bc(undefined, this));
    }
    const C = this.records.get(zSh);
    if (C != null && typeof C.value == "string") {
      this.scopes.add(C.value);
    }
    this.injectorDefTypes = new Set(this.get(U7.multi, jt, XFs.Self));
  }
  destroy() {
    this.assertNotDestroyed();
    this._destroyed = true;
    try {
      for (const l of this._ngOnDestroyHooks) {
        l.ngOnDestroy();
      }
      for (const l of this._onDestroyHooks) {
        l();
      }
    } finally {
      this.records.clear();
      this._ngOnDestroyHooks.clear();
      this.injectorDefTypes.clear();
      this._onDestroyHooks.length = 0;
    }
  }
  onDestroy(l) {
    this._onDestroyHooks.push(l);
  }
  runInContext(l) {
    this.assertNotDestroyed();
    const d = Dr(this);
    const g = t1(undefined);
    try {
      return l();
    } finally {
      Dr(d);
      t1(g);
    }
  }
  get(l, d = tn, g = XFs.Default) {
    this.assertNotDestroyed();
    g = Nr(g);
    const m = Dr(this);
    const C = t1(undefined);
    try {
      if (!(g & XFs.SkipSelf)) {
        let w = this.records.get(l);
        if (w === undefined) {
          const P = function z3(a) {
            return typeof a == "function" || typeof a == "object" && a instanceof OlP;
          }(l) && I1(l);
          w = P && this.injectableDefInScope(P) ? bc(A2(l), _a) : null;
          this.records.set(l, w);
        }
        if (w != null) {
          return this.hydrate(l, w);
        }
      }
      return (g & XFs.Self ? nl() : this.parent).get(l, d = g & XFs.Optional && d === tn ? null : d);
    } catch (y) {
      if (y.name === "NullInjectorError") {
        (y[J1] = y[J1] || []).unshift(AaK(l));
        if (m) {
          throw y;
        }
        return function u4(a, l, d, g) {
          const m = a[J1];
          if (l[a2]) {
            m.unshift(l[a2]);
          }
          a.message = function U2(a, l, d, g = null) {
            a = a && a.charAt(0) === "\n" && a.charAt(1) == "ɵ" ? a.slice(2) : a;
            let m = AaK(l);
            if (Array.isArray(l)) {
              m = l.map(AaK).join(" -> ");
            } else if (typeof l == "object") {
              let C = [];
              for (let y in l) {
                if (l.hasOwnProperty(y)) {
                  let w = l[y];
                  C.push(y + ":" + (typeof w == "string" ? JSON.stringify(w) : AaK(w)));
                }
              }
              m = `{${C.join(", ")}}`;
            }
            return `${d}${g ? "(" + g + ")" : ""}[${m}]: ${a.replace(jo, "\n  ")}`;
          }("\n" + a.message, m, d, g);
          a.ngTokenPath = m;
          a[J1] = null;
          throw a;
        }(y, l, "R3InjectorError", this.source);
      }
      throw y;
    } finally {
      t1(C);
      Dr(m);
    }
  }
  resolveInjectorInitializers() {
    const l = Dr(this);
    const d = t1(undefined);
    try {
      const g = this.get(Xts.multi, jt, XFs.Self);
      for (const m of g) {
        m();
      }
    } finally {
      Dr(l);
      t1(d);
    }
  }
  toString() {
    const l = [];
    const d = this.records;
    for (const g of d.keys()) {
      l.push(AaK(g));
    }
    return `R3Injector[${l.join(", ")}]`;
  }
  assertNotDestroyed() {
    if (this._destroyed) {
      throw new vHH(205, false);
    }
  }
  processProvider(l) {
    let d = cs(l = G(l)) ? l : G(l && l.provide);
    const g = function ug(a) {
      if (Wi(a)) {
        return bc(undefined, a.useValue);
      } else {
        return bc(N3(a), _a);
      }
    }(l);
    if (cs(l) || l.multi !== true) {
      this.records.get(d);
    } else {
      let m = this.records.get(d);
      if (!m) {
        m = bc(undefined, _a, true);
        m.factory = () => zr(m.multi);
        this.records.set(d, m);
      }
      d = l;
      m.multi.push(l);
    }
    this.records.set(d, g);
  }
  hydrate(l, d) {
    if (d.value === _a) {
      d.value = H8;
      d.value = d.factory();
    }
    if (typeof d.value == "object" && d.value && function Z7(a) {
      return a !== null && typeof a == "object" && typeof a.ngOnDestroy == "function";
    }(d.value)) {
      this._ngOnDestroyHooks.add(d.value);
    }
    return d.value;
  }
  injectableDefInScope(l) {
    if (!l.providedIn) {
      return false;
    }
    const d = G(l.providedIn);
    if (typeof d == "string") {
      return d === "any" || this.scopes.has(d);
    } else {
      return this.injectorDefTypes.has(d);
    }
  }
}
function A2(a) {
  const l = I1(a);
  const d = l !== null ? l.factory : F1(a);
  if (d !== null) {
    return d;
  }
  if (a instanceof OlP) {
    throw new vHH(204, false);
  }
  if (a instanceof Function) {
    return function I8(a) {
      const l = a.length;
      if (l > 0) {
        u3(l, "?");
        throw new vHH(204, false);
      }
      const d = function gi(a) {
        const l = a && (a[Jr] || a[Rn]);
        if (l) {
          const d = function e1(a) {
            if (a.hasOwnProperty("name")) {
              return a.name;
            }
            const l = ("" + a).match(/^function\s*([^\s(]+)/);
            if (l === null) {
              return "";
            } else {
              return l[1];
            }
          }(a);
          console.warn(`DEPRECATED: DI is instantiating a token "${d}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${d}" class.`);
          return l;
        }
        return null;
      }(a);
      if (d !== null) {
        return () => d.factory(a);
      } else {
        return () => new a();
      }
    }(a);
  }
  throw new vHH(204, false);
}
function N3(a, l, d) {
  let g;
  if (cs(a)) {
    const m = G(a);
    return F1(m) || A2(m);
  }
  if (Wi(a)) {
    g = () => G(a.useValue);
  } else if (function _c(a) {
    return !!a && !!a.useFactory;
  }(a)) {
    g = () => a.useFactory(...zr(a.deps || []));
  } else if (function Ur(a) {
    return !!a && !!a.useExisting;
  }(a)) {
    g = () => LFG(G(a.useExisting));
  } else {
    const m = G(a && (a.useClass || a.provide));
    if (!function vn(a) {
      return !!a.deps;
    }(a)) {
      return F1(m) || A2(m);
    }
    g = () => new m(...zr(a.deps));
  }
  return g;
}
function bc(a, l, d = false) {
  return {
    factory: a,
    value: l,
    multi: d ? [] : undefined
  };
}
function m6(a, l) {
  for (const d of a) {
    if (Array.isArray(d)) {
      m6(d, l);
    } else if (d && $(d)) {
      m6(d.ɵproviders, l);
    } else {
      l(d);
    }
  }
}
class _6 {}
class v6 {}
class C6 {
  resolveComponentFactory(l) {
    throw function V8(a) {
      const l = Error(`No component factory found for ${AaK(a)}. Did you add it to @NgModule.entryComponents?`);
      l.ngComponent = a;
      return l;
    }(l);
  }
}
export let _Vd = (() => {
  class a {}
  a.NULL = new C6();
  return a;
})();
function R8() {
  return xc(s1(), Ue());
}
function xc(a, l) {
  return new SBq(Fi(a, l));
}
export let SBq = (() => {
  class a {
    constructor(d) {
      this.nativeElement = d;
    }
  }
  a.__NG_ELEMENT_ID__ = R8;
  return a;
})();
function H3(a) {
  if (a instanceof SBq) {
    return a.nativeElement;
  } else {
    return a;
  }
}
export class FYo {}
export let Qsj = (() => {
  class a {}
  a.__NG_ELEMENT_ID__ = () => function b6() {
    const a = Ue();
    const d = ei(s1().index, a);
    return (R1(d) ? d : a)[11];
  }();
  return a;
})();
let j7 = (() => {
  class a {}
  a.ɵprov = Yz7({
    token: a,
    providedIn: "root",
    factory: () => null
  });
  return a;
})();
export class GfV {
  constructor(l) {
    this.full = l;
    this.major = l.split(".")[0];
    this.minor = l.split(".")[1];
    this.patch = l.split(".").slice(2).join(".");
  }
}
const il = new GfV("15.1.1");
const va = {};
function us(a) {
  return a.ngOriginalError;
}
export class qLn {
  constructor() {
    this._console = console;
  }
  handleError(l) {
    const d = this._findOriginalError(l);
    this._console.error("ERROR", l);
    if (d) {
      this._console.error("ORIGINAL ERROR", d);
    }
  }
  _findOriginalError(l) {
    let d = l && us(l);
    while (d && us(d)) {
      d = us(d);
    }
    return d || null;
  }
}
export function Jf7(a) {
  return a.ownerDocument.defaultView;
}
export function evT(a) {
  return a.ownerDocument;
}
function ds(a) {
  if (a instanceof Function) {
    return a();
  } else {
    return a;
  }
}
function y6(a, l, d) {
  let g = a.length;
  while (true) {
    const m = a.indexOf(l, d);
    if (m === -1) {
      return m;
    }
    if (m === 0 || a.charCodeAt(m - 1) <= 32) {
      const C = l.length;
      if (m + C === g || a.charCodeAt(m + C) <= 32) {
        return m;
      }
    }
    d = m + 1;
  }
}
const M6 = "ng-template";
function J7(a, l, d) {
  let g = 0;
  while (g < a.length) {
    let m = a[g++];
    if (d && m === "class") {
      m = a[g];
      if (y6(m.toLowerCase(), l, 0) !== -1) {
        return true;
      }
    } else if (m === 1) {
      while (g < a.length && typeof (m = a[g++]) == "string") {
        if (m.toLowerCase() === l) {
          return true;
        }
      }
      return false;
    }
  }
  return false;
}
function w6(a) {
  return a.type === 4 && a.value !== M6;
}
function Q7(a, l, d) {
  return l === (a.type !== 4 || d ? a.value : M6);
}
function K7(a, l, d) {
  let g = 4;
  const m = a.attrs || [];
  const C = function T6(a) {
    for (let l = 0; l < a.length; l++) {
      if (_1(a[l])) {
        return l;
      }
    }
    return a.length;
  }(m);
  let y = false;
  for (let w = 0; w < l.length; w++) {
    const P = l[w];
    if (typeof P != "number") {
      if (!y) {
        if (g & 4) {
          g = g & 1 | 2;
          if (P !== "" && !Q7(a, P, d) || P === "" && l.length === 1) {
            if (ps(g)) {
              return false;
            }
            y = true;
          }
        } else {
          const L = g & 8 ? P : l[++w];
          if (g & 8 && a.attrs !== null) {
            if (!J7(a.attrs, L, d)) {
              if (ps(g)) {
                return false;
              }
              y = true;
            }
            continue;
          }
          const X = V3(g & 8 ? "class" : P, m, w6(a), d);
          if (X === -1) {
            if (ps(g)) {
              return false;
            }
            y = true;
            continue;
          }
          if (L !== "") {
            let me;
            me = X > C ? "" : m[X + 1].toLowerCase();
            const Pe = g & 8 ? me : null;
            if (Pe && y6(Pe, L, 0) !== -1 || g & 2 && L !== me) {
              if (ps(g)) {
                return false;
              }
              y = true;
            }
          }
        }
      }
    } else {
      if (!y && !ps(g) && !ps(P)) {
        return false;
      }
      if (y && ps(P)) {
        continue;
      }
      y = false;
      g = P | g & 1;
    }
  }
  return ps(g) || y;
}
function ps(a) {
  return (a & 1) == 0;
}
function V3(a, l, d, g) {
  if (l === null) {
    return -1;
  }
  let m = 0;
  if (g || !d) {
    let C = false;
    while (m < l.length) {
      const y = l[m];
      if (y === a) {
        return m;
      }
      if (y === 3 || y === 6) {
        C = true;
      } else {
        if (y === 1 || y === 2) {
          let w = l[++m];
          while (typeof w == "string") {
            w = l[++m];
          }
          continue;
        }
        if (y === 4) {
          break;
        }
        if (y === 0) {
          m += 4;
          continue;
        }
      }
      m += C ? 1 : 2;
    }
    return -1;
  }
  return function X7(a, l) {
    let d = a.indexOf(4);
    if (d > -1) {
      for (d++; d < a.length;) {
        const g = a[d];
        if (typeof g == "number") {
          return -1;
        }
        if (g === l) {
          return d;
        }
        d++;
      }
    }
    return -1;
  }(l, a);
}
function S6(a, l, d = false) {
  for (let g = 0; g < l.length; g++) {
    if (K7(a, l[g], d)) {
      return true;
    }
  }
  return false;
}
function ep(a, l) {
  e: for (let d = 0; d < l.length; d++) {
    const g = l[d];
    if (a.length === g.length) {
      for (let m = 0; m < a.length; m++) {
        if (a[m] !== g[m]) {
          continue e;
        }
      }
      return true;
    }
  }
  return false;
}
function k6(a, l) {
  if (a) {
    return ":not(" + l.trim() + ")";
  } else {
    return l;
  }
}
function tp(a) {
  let l = a[0];
  let d = 1;
  let g = 2;
  let m = "";
  let C = false;
  while (d < a.length) {
    let y = a[d];
    if (typeof y == "string") {
      if (g & 2) {
        const w = a[++d];
        m += "[" + y + (w.length > 0 ? "=\"" + w + "\"" : "") + "]";
      } else if (g & 8) {
        m += "." + y;
      } else if (g & 4) {
        m += " " + y;
      }
    } else {
      if (m !== "" && !ps(y)) {
        l += k6(C, m);
        m = "";
      }
      g = y;
      C = C || !ps(g);
    }
    d++;
  }
  if (m !== "") {
    l += k6(C, m);
  }
  return l;
}
const pn = {};
export function xp6(a) {
  yc(nn(), Ue(), Bi() + a, false);
}
function yc(a, l, d, g) {
  if (!g) {
    if ((l[2] & 3) == 3) {
      const C = a.preOrderCheckHooks;
      if (C !== null) {
        T(l, C, d);
      }
    } else {
      const C = a.preOrderHooks;
      if (C !== null) {
        N(l, C, 0, d);
      }
    }
  }
  ro(d);
}
function Y8(a, l = null, d = null, g) {
  const m = A6(a, l, d, g);
  m.resolveInjectorInitializers();
  return m;
}
function A6(a, l = null, d = null, g, m = new Set()) {
  const C = [d || jt, el(a)];
  g = g || (typeof a == "object" ? undefined : AaK(a));
  return new Ii(C, l || nl(), g || null, m);
}
export let zs3 = (() => {
  class a {
    static create(d, g) {
      if (Array.isArray(d)) {
        return Y8({
          name: ""
        }, g, d, "");
      }
      {
        const m = d.name ?? "";
        return Y8({
          name: m
        }, d.parent, d.providers, m);
      }
    }
  }
  a.THROW_IF_NOT_FOUND = tn;
  a.NULL = new D3();
  a.ɵprov = Yz7({
    token: a,
    providedIn: "any",
    factory: () => LFG(B7)
  });
  a.__NG_ELEMENT_ID__ = -1;
  return a;
})();
export function Y36(a, l = XFs.Default) {
  const d = Ue();
  if (d === null) {
    return LFG(a, l);
  } else {
    return Ti(s1(), d, G(a), l);
  }
}
export function $Z() {
  throw new Error("invalid");
}
function I6(a, l) {
  const d = a.contentQueries;
  if (d !== null) {
    for (let g = 0; g < d.length; g += 2) {
      const C = d[g + 1];
      if (C !== -1) {
        const y = a.data[C];
        w4(d[g]);
        y.contentQueries(2, l[C], C);
      }
    }
  }
}
function B3(a, l, d, g, m, C, y, w, P, L, B) {
  const X = l.blueprint.slice();
  X[0] = m;
  X[2] = g | 76;
  if (B !== null || a && a[2] & 1024) {
    X[2] |= 1024;
  }
  b4(X);
  X[3] = X[15] = a;
  X[8] = d;
  X[10] = y || a && a[10];
  X[11] = w || a && a[11];
  X[12] = P || a && a[12] || null;
  X[9] = L || a && a[9] || null;
  X[6] = C;
  X[20] = function rc() {
    return m3++;
  }();
  X[21] = B;
  X[16] = l.type == 2 ? a[16] : X;
  return X;
}
function wc(a, l, d, g, m) {
  let C = a.data[l];
  if (C === null) {
    C = al(a, l, d, g, m);
    if (function io() {
      return Jt.lFrame.inI18n;
    }()) {
      C.flags |= 32;
    }
  } else if (C.type & 64) {
    C.type = d;
    C.value = g;
    C.attrs = m;
    const y = t3();
    C.injectorIndex = y === null ? -1 : y.injectorIndex;
  }
  Co(C, true);
  return C;
}
function al(a, l, d, g, m) {
  const C = ks();
  const y = M4();
  const P = a.data[l] = function gp(a, l, d, g, m, C) {
    return {
      type: d,
      index: g,
      insertBeforeIndex: null,
      injectorIndex: l ? l.injectorIndex : -1,
      directiveStart: -1,
      directiveEnd: -1,
      directiveStylingLast: -1,
      componentOffset: -1,
      propertyBindings: null,
      flags: 0,
      providerIndexes: 0,
      value: m,
      attrs: C,
      mergedAttrs: null,
      localNames: null,
      initialInputs: undefined,
      inputs: null,
      outputs: null,
      tViews: null,
      next: null,
      projectionNext: null,
      child: null,
      parent: l,
      projection: null,
      styles: null,
      stylesWithoutHost: null,
      residualStyles: undefined,
      classes: null,
      classesWithoutHost: null,
      residualClasses: undefined,
      classBindings: 0,
      styleBindings: 0
    };
  }(0, y ? C : C && C.parent, d, l, g, m);
  if (a.firstChild === null) {
    a.firstChild = P;
  }
  if (C !== null) {
    if (y) {
      if (C.child == null && P.parent !== null) {
        C.child = P;
      }
    } else if (C.next === null) {
      C.next = P;
    }
  }
  return P;
}
function U3(a, l, d, g) {
  if (d === 0) {
    return -1;
  }
  const m = l.length;
  for (let C = 0; C < d; C++) {
    l.push(g);
    a.blueprint.push(g);
    a.data.push(null);
  }
  return m;
}
function cl(a, l, d) {
  T4(l);
  try {
    const g = a.viewQuery;
    if (g !== null) {
      j6(1, g, d);
    }
    const m = a.template;
    if (m !== null) {
      o5(a, l, m, 1, d);
    }
    a.firstCreatePass &&= false;
    if (a.staticContentQueries) {
      I6(a, l);
    }
    if (a.staticViewQueries) {
      j6(2, a.viewQuery, d);
    }
    const C = a.components;
    if (C !== null) {
      (function r5(a, l) {
        for (let d = 0; d < l.length; d++) {
          wp(a, l[d]);
        }
      })(l, C);
    }
  } catch (g) {
    if (a.firstCreatePass) {
      a.incompleteFirstPass = true;
      a.firstCreatePass = false;
    }
    throw g;
  } finally {
    l[2] &= -5;
    X2();
  }
}
function ll(a, l, d, g) {
  const m = l[2];
  if ((m & 128) != 128) {
    T4(l);
    try {
      b4(l);
      (function bo(a) {
        return Jt.lFrame.bindingIndex = a;
      })(a.bindingStartIndex);
      if (d !== null) {
        o5(a, l, d, 2, g);
      }
      const y = (m & 3) == 3;
      if (y) {
        const L = a.preOrderCheckHooks;
        if (L !== null) {
          T(l, L, null);
        }
      } else {
        const L = a.preOrderHooks;
        if (L !== null) {
          N(l, L, 0, null);
        }
        E(l, 0);
      }
      (function yp(a) {
        for (let l = y3(a); l !== null; l = $0(l)) {
          if (!l[2]) {
            continue;
          }
          const d = l[9];
          for (let g = 0; g < d.length; g++) {
            const m = d[g];
            if (!(m[2] & 512)) {
              Q2(m[3], 1);
            }
            m[2] |= 512;
          }
        }
      })(l);
      (function pl(a) {
        for (let l = y3(a); l !== null; l = $0(l)) {
          for (let d = 10; d < l.length; d++) {
            const g = l[d];
            const m = g[1];
            if (J2(g)) {
              ll(m, g, m.template, g[8]);
            }
          }
        }
      })(l);
      if (a.contentQueries !== null) {
        I6(a, l);
      }
      if (y) {
        const L = a.contentCheckHooks;
        if (L !== null) {
          T(l, L);
        }
      } else {
        const L = a.contentHooks;
        if (L !== null) {
          N(l, L, 1);
        }
        E(l, 1);
      }
      (function i5(a, l) {
        const d = a.hostBindingOpCodes;
        if (d !== null) {
          try {
            for (let g = 0; g < d.length; g++) {
              const m = d[g];
              if (m < 0) {
                ro(~m);
              } else {
                const C = m;
                const y = d[++g];
                const w = d[++g];
                Os(y, C);
                w(2, l[C]);
              }
            }
          } finally {
            ro(-1);
          }
        }
      })(a, l);
      const w = a.components;
      if (w !== null) {
        (function pp(a, l) {
          for (let d = 0; d < l.length; d++) {
            Mp(a, l[d]);
          }
        })(l, w);
      }
      const P = a.viewQuery;
      if (P !== null) {
        j6(2, P, g);
      }
      if (y) {
        const L = a.viewCheckHooks;
        if (L !== null) {
          T(l, L);
        }
      } else {
        const L = a.viewHooks;
        if (L !== null) {
          N(l, L, 2);
        }
        E(l, 2);
      }
      if (a.firstUpdatePass === true) {
        a.firstUpdatePass = false;
      }
      l[2] &= -41;
      if (l[2] & 512) {
        l[2] &= -513;
        Q2(l[3], -1);
      }
    } finally {
      X2();
    }
  }
}
function o5(a, l, d, g, m) {
  const C = Bi();
  const y = g & 2;
  try {
    ro(-1);
    if (y && l.length > 22) {
      yc(a, l, 22, false);
    }
    d(g, m);
  } finally {
    ro(C);
  }
}
function Oo(a, l, d) {
  if (Oe(l)) {
    const m = l.directiveEnd;
    for (let C = l.directiveStart; C < m; C++) {
      const y = a.data[C];
      if (y.contentQueries) {
        y.contentQueries(1, d[C], C);
      }
    }
  }
}
function V6(a, l, d) {
  if (qa()) {
    (function B6(a, l, d, g) {
      const m = d.directiveStart;
      const C = d.directiveEnd;
      if (ne(d)) {
        (function xp(a, l, d) {
          const g = Fi(l, a);
          const m = s5(d);
          const C = a[10];
          const y = fl(a, B3(a, m, null, d.onPush ? 32 : 16, g, l, C, C.createRenderer(g, d), null, null, null));
          a[l.index] = y;
        })(l, d, a.data[m + d.componentOffset]);
      }
      if (!a.firstCreatePass) {
        Es(d, l);
      }
      l1(g, l);
      const y = d.initialInputs;
      for (let w = m; w < C; w++) {
        const P = a.data[w];
        const L = xo(l, a, w, d);
        l1(L, l);
        if (y !== null) {
          G6(0, w - m, L, P, 0, y);
        }
        if (P1(P)) {
          ei(d.index, l)[8] = xo(l, a, w, d);
        }
      }
    })(a, l, d, Fi(d, l));
    if ((d.flags & 64) == 64) {
      p5(a, l, d);
    }
  }
}
function ul(a, l, d = Fi) {
  const g = l.localNames;
  if (g !== null) {
    let m = l.index + 1;
    for (let C = 0; C < g.length; C += 2) {
      const y = g[C + 1];
      const w = y === -1 ? d(l, a) : a[y];
      a[m++] = w;
    }
  }
}
function s5(a) {
  const l = a.tView;
  if (l === null || l.incompleteFirstPass) {
    return a.tView = dl(1, null, a.template, a.decls, a.vars, a.directiveDefs, a.pipeDefs, a.viewQuery, a.schemas, a.consts);
  } else {
    return l;
  }
}
function dl(a, l, d, g, m, C, y, w, P, L) {
  const B = 22 + g;
  const X = B + m;
  const me = function hp(a, l) {
    const d = [];
    for (let g = 0; g < l; g++) {
      d.push(g < a ? null : pn);
    }
    return d;
  }(B, X);
  const Pe = typeof L == "function" ? L() : L;
  return me[1] = {
    type: a,
    blueprint: me,
    template: d,
    queries: null,
    viewQuery: w,
    declTNode: l,
    data: me.slice().fill(null, B),
    bindingStartIndex: B,
    expandoStartIndex: X,
    hostBindingOpCodes: null,
    firstCreatePass: true,
    firstUpdatePass: true,
    staticViewQueries: false,
    staticContentQueries: false,
    preOrderHooks: null,
    preOrderCheckHooks: null,
    contentHooks: null,
    contentCheckHooks: null,
    viewHooks: null,
    viewCheckHooks: null,
    destroyHooks: null,
    cleanup: null,
    contentQueries: null,
    components: null,
    directiveRegistry: typeof C == "function" ? C() : C,
    pipeRegistry: typeof y == "function" ? y() : y,
    firstChild: null,
    schemas: P,
    consts: Pe,
    incompleteFirstPass: false
  };
}
function R6(a, l, d, g) {
  const m = _5(l);
  if (d === null) {
    m.push(g);
  } else {
    m.push(d);
    if (a.firstCreatePass) {
      v5(a).push(g, m.length - 1);
    }
  }
}
function a5(a, l, d, g) {
  for (let m in a) {
    if (a.hasOwnProperty(m)) {
      d = d === null ? {} : d;
      const C = a[m];
      if (g === null) {
        F6(d, l, m, C);
      } else if (g.hasOwnProperty(m)) {
        F6(d, l, g[m], C);
      }
    }
  }
  return d;
}
function F6(a, l, d, g) {
  if (a.hasOwnProperty(d)) {
    a[d].push(l, g);
  } else {
    a[d] = [l, g];
  }
}
function Pr(a, l, d, g, m, C, y, w) {
  const P = Fi(l, d);
  let B;
  let L = l.inputs;
  if (!w && L != null && (B = L[g])) {
    gl(a, d, B, g, m);
    if (ne(l)) {
      c5(d, l.index);
    }
  } else if (l.type & 3) {
    g = function _p(a) {
      if (a === "class") {
        return "className";
      } else if (a === "for") {
        return "htmlFor";
      } else if (a === "formaction") {
        return "formAction";
      } else if (a === "innerHtml") {
        return "innerHTML";
      } else if (a === "readonly") {
        return "readOnly";
      } else if (a === "tabindex") {
        return "tabIndex";
      } else {
        return a;
      }
    }(g);
    m = y != null ? y(m, l.value || "", g) : m;
    C.setProperty(P, g, m);
  }
}
function c5(a, l) {
  const d = ei(l, a);
  if (!(d[2] & 16)) {
    d[2] |= 32;
  }
}
function Z3(a, l, d, g) {
  let m = false;
  if (qa()) {
    const C = g === null ? null : {
      "": -1
    };
    const y = function U6(a, l) {
      const d = a.directiveRegistry;
      let g = null;
      let m = null;
      if (d) {
        for (let C = 0; C < d.length; C++) {
          const y = d[C];
          if (S6(l, y.selectors, false)) {
            g ||= [];
            if (P1(y)) {
              if (y.findHostDirectiveDefs !== null) {
                const w = [];
                m = m || new Map();
                y.findHostDirectiveDefs(y, w, m);
                g.unshift(...w, y);
                Z6(a, l, w.length);
              } else {
                g.unshift(y);
                Z6(a, l, 0);
              }
            } else {
              m = m || new Map();
              y.findHostDirectiveDefs?.(y, g, m);
              g.push(y);
            }
          }
        }
      }
      if (g === null) {
        return null;
      } else {
        return [g, m];
      }
    }(a, d);
    let w;
    let P;
    if (y === null) {
      w = P = null;
    } else {
      [w, P] = y;
    }
    if (w !== null) {
      m = true;
      l5(a, l, d, w, C, P);
    }
    if (C) {
      (function q6(a, l, d) {
        if (l) {
          const g = a.localNames = [];
          for (let m = 0; m < l.length; m += 2) {
            const C = d[l[m + 1]];
            if (C == null) {
              throw new vHH(-301, false);
            }
            g.push(l[m], C);
          }
        }
      })(d, g, C);
    }
  }
  d.mergedAttrs = D1(d.mergedAttrs, d.attrs);
  return m;
}
function l5(a, l, d, g, m, C) {
  for (let L = 0; L < g.length; L++) {
    $a(Es(d, l), a, g[L].type);
  }
  (function bp(a, l, d) {
    a.flags |= 1;
    a.directiveStart = l;
    a.directiveEnd = l + d;
    a.providerIndexes = l;
  })(d, a.data.length, g.length);
  for (let L = 0; L < g.length; L++) {
    const B = g[L];
    if (B.providersResolver) {
      B.providersResolver(B);
    }
  }
  let y = false;
  let w = false;
  let P = U3(a, l, g.length, null);
  for (let L = 0; L < g.length; L++) {
    const B = g[L];
    d.mergedAttrs = D1(d.mergedAttrs, B.hostAttrs);
    f5(a, d, l, P, B);
    h5(P, B, m);
    if (B.contentQueries !== null) {
      d.flags |= 4;
    }
    if (B.hostBindings !== null || B.hostAttrs !== null || B.hostVars !== 0) {
      d.flags |= 64;
    }
    const X = B.type.prototype;
    if (!y && (X.ngOnChanges || X.ngOnInit || X.ngDoCheck)) {
      (a.preOrderHooks ||= []).push(d.index);
      y = true;
    }
    if (!w && (X.ngOnChanges || X.ngDoCheck)) {
      (a.preOrderCheckHooks ||= []).push(d.index);
      w = true;
    }
    P++;
  }
  (function mp(a, l, d) {
    const m = l.directiveEnd;
    const C = a.data;
    const y = l.attrs;
    const w = [];
    let P = null;
    let L = null;
    for (let B = l.directiveStart; B < m; B++) {
      const X = C[B];
      const me = d ? d.get(X) : null;
      const je = me ? me.outputs : null;
      P = a5(X.inputs, B, P, me ? me.inputs : null);
      L = a5(X.outputs, B, L, je);
      const lt = P === null || y === null || w6(l) ? null : g5(P, B, y);
      w.push(lt);
    }
    if (P !== null) {
      if (P.hasOwnProperty("class")) {
        l.flags |= 8;
      }
      if (P.hasOwnProperty("style")) {
        l.flags |= 16;
      }
    }
    l.initialInputs = w;
    l.inputs = P;
    l.outputs = L;
  })(a, d, C);
}
function p5(a, l, d) {
  const g = d.directiveStart;
  const m = d.directiveEnd;
  const C = d.index;
  const y = function n3() {
    return Jt.lFrame.currentDirectiveIndex;
  }();
  try {
    ro(C);
    for (let w = g; w < m; w++) {
      const P = a.data[w];
      const L = l[w];
      i3(w);
      if (P.hostBindings !== null || P.hostVars !== 0 || P.hostAttrs !== null) {
        P2(P, L);
      }
    }
  } finally {
    ro(-1);
    i3(y);
  }
}
function P2(a, l) {
  if (a.hostBindings !== null) {
    a.hostBindings(1, l);
  }
}
function Z6(a, l, d) {
  l.componentOffset = d;
  (a.components ||= []).push(l.index);
}
function h5(a, l, d) {
  if (d) {
    if (l.exportAs) {
      for (let g = 0; g < l.exportAs.length; g++) {
        d[l.exportAs[g]] = a;
      }
    }
    if (P1(l)) {
      d[""] = a;
    }
  }
}
function f5(a, l, d, g, m) {
  a.data[g] = m;
  const C = m.factory ||= F1(m.type);
  const y = new Ge(C, P1(m), Y36);
  a.blueprint[g] = y;
  d[g] = y;
  (function u5(a, l, d, g, m) {
    const C = m.hostBindings;
    if (C) {
      let y = a.hostBindingOpCodes;
      if (y === null) {
        y = a.hostBindingOpCodes = [];
      }
      const w = ~l.index;
      if (function d5(a) {
        let l = a.length;
        while (l > 0) {
          const d = a[--l];
          if (typeof d == "number" && d < 0) {
            return d;
          }
        }
        return 0;
      }(y) != w) {
        y.push(w);
      }
      y.push(d, g, C);
    }
  })(a, l, g, U3(a, d, m.hostVars, pn), m);
}
function q3(a, l, d, g, m, C, y) {
  if (C == null) {
    a.removeAttribute(l, m, d);
  } else {
    const w = y == null ? Y(C) : y(C, g || "", m);
    a.setAttribute(l, m, w, d);
  }
}
function G6(a, l, d, g, m, C) {
  const y = C[l];
  if (y !== null) {
    const w = g.setInput;
    for (let P = 0; P < y.length;) {
      const L = y[P++];
      const B = y[P++];
      const X = y[P++];
      if (w !== null) {
        g.setInput(d, X, L, B);
      } else {
        d[B] = X;
      }
    }
  }
}
function g5(a, l, d) {
  let g = null;
  let m = 0;
  while (m < d.length) {
    const C = d[m];
    if (C !== 0) {
      if (C !== 5) {
        if (typeof C == "number") {
          break;
        }
        if (a.hasOwnProperty(C)) {
          if (g === null) {
            g = [];
          }
          const y = a[C];
          for (let w = 0; w < y.length; w += 2) {
            if (y[w] === l) {
              g.push(C, y[w + 1], d[m + 1]);
              break;
            }
          }
        }
        m += 2;
      } else {
        m += 2;
      }
    } else {
      m += 4;
    }
  }
  return g;
}
function xa(a, l, d, g) {
  return [a, true, false, l, null, 0, g, d, null, null];
}
function Mp(a, l) {
  const d = ei(l, a);
  if (J2(d)) {
    const g = d[1];
    if (d[2] & 48) {
      ll(g, d, g.template, d[8]);
    } else if (d[5] > 0) {
      hl(d);
    }
  }
}
function hl(a) {
  for (let g = y3(a); g !== null; g = $0(g)) {
    for (let m = 10; m < g.length; m++) {
      const C = g[m];
      if (J2(C)) {
        if (C[2] & 512) {
          const y = C[1];
          ll(y, C, y.template, C[8]);
        } else if (C[5] > 0) {
          hl(C);
        }
      }
    }
  }
  const d = a[1].components;
  if (d !== null) {
    for (let g = 0; g < d.length; g++) {
      const m = ei(d[g], a);
      if (J2(m) && m[5] > 0) {
        hl(m);
      }
    }
  }
}
function wp(a, l) {
  const d = ei(l, a);
  const g = d[1];
  (function m5(a, l) {
    for (let d = l.length; d < a.blueprint.length; d++) {
      l.push(a.blueprint[d]);
    }
  })(g, d);
  cl(g, d, d[8]);
}
function fl(a, l) {
  if (a[13]) {
    a[14][4] = l;
  } else {
    a[13] = l;
  }
  a[14] = l;
  return l;
}
function Sc(a) {
  while (a) {
    a[2] |= 32;
    const l = zs(a);
    if (v0(a) && !l) {
      return a;
    }
    a = l;
  }
  return null;
}
function ya(a, l, d, g = true) {
  const m = l[10];
  if (m.begin) {
    m.begin();
  }
  try {
    ll(a, l, a.template, d);
  } catch (y) {
    if (g) {
      G3(l, y);
    }
    throw y;
  } finally {
    if (m.end) {
      m.end();
    }
  }
}
function j6(a, l, d) {
  w4(0);
  l(a, d);
}
function _5(a) {
  return a[7] ||= [];
}
function v5(a) {
  return a.cleanup ||= [];
}
function G3(a, l) {
  const d = a[9];
  const g = d ? d.get(qLn, null) : null;
  if (g) {
    g.handleError(l);
  }
}
function gl(a, l, d, g, m) {
  for (let C = 0; C < d.length;) {
    const y = d[C++];
    const w = d[C++];
    const P = l[y];
    const L = a.data[y];
    if (L.setInput !== null) {
      L.setInput(P, m, g, w);
    } else {
      P[w] = m;
    }
  }
}
function gs(a, l, d) {
  const g = E1(l, a);
  J0(a[11], g, d);
}
function ml(a, l, d) {
  let g = d ? a.styles : null;
  let m = d ? a.classes : null;
  let C = 0;
  if (l !== null) {
    for (let y = 0; y < l.length; y++) {
      const w = l[y];
      if (typeof w == "number") {
        C = w;
      } else if (C == 1) {
        m = j(m, w);
      } else if (C == 2) {
        g = j(g, w + ": " + l[++y] + ";");
      }
    }
  }
  if (d) {
    a.styles = g;
  } else {
    a.stylesWithoutHost = g;
  }
  if (d) {
    a.classes = m;
  } else {
    a.classesWithoutHost = m;
  }
}
function _l(a, l, d, g, m = false) {
  while (d !== null) {
    const C = l[d.index];
    if (C !== null) {
      g.push(zi(C));
    }
    if (X1(C)) {
      for (let w = 10; w < C.length; w++) {
        const P = C[w];
        const L = P[1].firstChild;
        if (L !== null) {
          _l(P[1], P, L, g);
        }
      }
    }
    const y = d.type;
    if (y & 8) {
      _l(a, l, d.child, g);
    } else if (y & 32) {
      const w = x3(d, l);
      let P;
      while (P = w()) {
        g.push(P);
      }
    } else if (y & 16) {
      const w = pa(l, d);
      if (Array.isArray(w)) {
        g.push(...w);
      } else {
        const P = zs(l[16]);
        _l(P[1], P, w, g, true);
      }
    }
    d = m ? d.projectionNext : d.next;
  }
  return g;
}
class kc {
  get rootNodes() {
    const l = this._lView;
    const d = l[1];
    return _l(d, l, d.firstChild, []);
  }
  constructor(l, d) {
    this._lView = l;
    this._cdRefInjectingView = d;
    this._appRef = null;
    this._attachedToViewContainer = false;
  }
  get context() {
    return this._lView[8];
  }
  set context(l) {
    this._lView[8] = l;
  }
  get destroyed() {
    return (this._lView[2] & 128) == 128;
  }
  destroy() {
    if (this._appRef) {
      this._appRef.detachView(this);
    } else if (this._attachedToViewContainer) {
      const l = this._lView[3];
      if (X1(l)) {
        const d = l[8];
        const g = d ? d.indexOf(this) : -1;
        if (g > -1) {
          K0(l, g);
          Qa(d, g);
        }
      }
      this._attachedToViewContainer = false;
    }
    Ei(this._lView[1], this._lView);
  }
  onDestroy(l) {
    R6(this._lView[1], this._lView, null, l);
  }
  markForCheck() {
    Sc(this._cdRefInjectingView || this._lView);
  }
  detach() {
    this._lView[2] &= -65;
  }
  reattach() {
    this._lView[2] |= 64;
  }
  detectChanges() {
    ya(this._lView[1], this._lView, this.context);
  }
  checkNoChanges() {}
  attachToViewContainerRef() {
    if (this._appRef) {
      throw new vHH(902, false);
    }
    this._attachedToViewContainer = true;
  }
  detachFromAppRef() {
    this._appRef = null;
    (function w3(a, l) {
      Ar(a, l, l[11], 2, null, null);
    })(this._lView[1], this._lView);
  }
  attachToAppRef(l) {
    if (this._attachedToViewContainer) {
      throw new vHH(902, false);
    }
    this._appRef = l;
  }
}
class kp extends kc {
  constructor(l) {
    super(l);
    this._view = l;
  }
  detectChanges() {
    const l = this._view;
    ya(l[1], l, l[8], false);
  }
  checkNoChanges() {}
  get context() {
    return null;
  }
}
class Y6 extends _Vd {
  constructor(l) {
    super();
    this.ngModule = l;
  }
  resolveComponentFactory(l) {
    const d = En(l);
    return new Oc(d, this.ngModule);
  }
}
function $6(a) {
  const l = [];
  for (let d in a) {
    if (a.hasOwnProperty(d)) {
      l.push({
        propName: a[d],
        templateName: d
      });
    }
  }
  return l;
}
class Op {
  constructor(l, d) {
    this.injector = l;
    this.parentInjector = d;
  }
  get(l, d, g) {
    g = Nr(g);
    const m = this.injector.get(l, va, g);
    if (m !== va || d === va) {
      return m;
    } else {
      return this.parentInjector.get(l, d, g);
    }
  }
}
class Oc extends v6 {
  get inputs() {
    return $6(this.componentDef.inputs);
  }
  get outputs() {
    return $6(this.componentDef.outputs);
  }
  constructor(l, d) {
    super();
    this.componentDef = l;
    this.ngModule = d;
    this.componentType = l.type;
    this.selector = function O6(a) {
      return a.map(tp).join(",");
    }(l.selectors);
    this.ngContentSelectors = l.ngContentSelectors ? l.ngContentSelectors : [];
    this.isBoundToModule = !!d;
  }
  create(l, d, g, m) {
    let C = (m = m || this.ngModule) instanceof lqb ? m : m?.injector;
    if (C && this.componentDef.getStandaloneInjector !== null) {
      C = this.componentDef.getStandaloneInjector(C) || C;
    }
    const y = C ? new Op(l, C) : l;
    const w = y.get(FYo, null);
    if (w === null) {
      throw new vHH(407, false);
    }
    const P = y.get(j7, null);
    const L = w.createRenderer(null, this.componentDef);
    const B = this.componentDef.selectors[0][0] || "div";
    const X = g ? function fp(a, l, d) {
      return a.selectRootElement(l, d === ifc.ShadowDom);
    }(L, g, this.componentDef.encapsulation) : st(L, B, function C5(a) {
      const l = a.toLowerCase();
      if (l === "svg") {
        return "svg";
      } else if (l === "math") {
        return "math";
      } else {
        return null;
      }
    }(B));
    const me = this.componentDef.onPush ? 288 : 272;
    const Pe = dl(0, null, null, 1, 0, null, null, null, null, null);
    const je = B3(null, Pe, null, me, null, null, w, L, P, y, null);
    let lt;
    let _t;
    T4(je);
    try {
      const Ot = this.componentDef;
      let Xt;
      let ot = null;
      if (Ot.findHostDirectiveDefs) {
        Xt = [];
        ot = new Map();
        Ot.findHostDirectiveDefs(Ot, Xt, ot);
        Xt.push(Ot);
      } else {
        Xt = [Ot];
      }
      const hn = function x5(a, l) {
        const d = a[1];
        a[22] = l;
        return wc(d, 22, 2, "#host", null);
      }(je, X);
      const Vi = function Ap(a, l, d, g, m, C, y, w) {
        const P = m[1];
        (function y5(a, l, d, g) {
          for (const m of a) {
            l.mergedAttrs = D1(l.mergedAttrs, m.hostAttrs);
          }
          if (l.mergedAttrs !== null) {
            ml(l, l.mergedAttrs, true);
            if (d !== null) {
              $4(g, d, l);
            }
          }
        })(g, a, l, y);
        const L = C.createRenderer(l, d);
        const B = B3(m, s5(d), null, d.onPush ? 32 : 16, m[a.index], a, C, L, w || null, null, null);
        if (P.firstCreatePass) {
          Z6(P, a, g.length - 1);
        }
        fl(m, B);
        return m[a.index] = B;
      }(hn, X, Ot, Xt, je, w, L);
      _t = Za(Pe, 22);
      if (X) {
        (function Ep(a, l, d, g) {
          if (g) {
            so(a, d, ["ng-version", il.full]);
          } else {
            const {
              attrs: m,
              classes: C
            } = function Z8(a) {
              const l = [];
              const d = [];
              let g = 1;
              let m = 2;
              while (g < a.length) {
                let C = a[g];
                if (typeof C == "string") {
                  if (m === 2) {
                    if (C !== "") {
                      l.push(C, a[++g]);
                    }
                  } else if (m === 8) {
                    d.push(C);
                  }
                } else {
                  if (!ps(m)) {
                    break;
                  }
                  m = C;
                }
                g++;
              }
              return {
                attrs: l,
                classes: d
              };
            }(l.selectors[0]);
            if (m) {
              so(a, d, m);
            }
            if (C && C.length > 0) {
              M2(a, d, C.join(" "));
            }
          }
        })(L, Ot, X, g);
      }
      if (d !== undefined) {
        (function vl(a, l, d) {
          const g = a.projection = [];
          for (let m = 0; m < l.length; m++) {
            const C = d[m];
            g.push(C != null ? Array.from(C) : null);
          }
        })(_t, this.ngContentSelectors, d);
      }
      lt = function Pp(a, l, d, g, m, C) {
        const y = s1();
        const w = m[1];
        const P = Fi(y, m);
        l5(w, m, y, d, null, g);
        for (let B = 0; B < d.length; B++) {
          l1(xo(m, w, y.directiveStart + B, y), m);
        }
        p5(w, m, y);
        if (P) {
          l1(P, m);
        }
        const L = xo(m, w, y.directiveStart + y.componentOffset, y);
        a[8] = m[8] = L;
        if (C !== null) {
          for (const B of C) {
            B(L, l);
          }
        }
        Oo(w, y, a);
        return L;
      }(Vi, Ot, Xt, ot, je, [Cl]);
      cl(Pe, je, null);
    } finally {
      X2();
    }
    return new b5(this.componentType, lt, xc(_t, je), je, _t);
  }
}
class b5 extends _6 {
  constructor(l, d, g, m, C) {
    super();
    this.location = g;
    this._rootLView = m;
    this._tNode = C;
    this.instance = d;
    this.hostView = this.changeDetectorRef = new kp(m);
    this.componentType = l;
  }
  setInput(l, d) {
    const g = this._tNode.inputs;
    let m;
    if (g !== null && (m = g[l])) {
      const C = this._rootLView;
      gl(C[1], C, m, l, d);
      c5(C, this._tNode.index);
    }
  }
  get injector() {
    return new Xo(this._tNode, this._rootLView);
  }
  destroy() {
    this.hostView.destroy();
  }
  onDestroy(l) {
    this.hostView.onDestroy(l);
  }
}
function Cl() {
  const a = s1();
  Ko(Ue()[1], a);
}
export function qOj(a) {
  let l = function W6(a) {
    return Object.getPrototypeOf(a.prototype).constructor;
  }(a.type);
  let d = true;
  const g = [a];
  while (l) {
    let m;
    if (P1(a)) {
      m = l.ɵcmp || l.ɵdir;
    } else {
      if (l.ɵcmp) {
        throw new vHH(903, false);
      }
      m = l.ɵdir;
    }
    if (m) {
      if (d) {
        g.push(m);
        const y = a;
        y.inputs = J6(a.inputs);
        y.declaredInputs = J6(a.declaredInputs);
        y.outputs = J6(a.outputs);
        const w = m.hostBindings;
        if (w) {
          Lp(a, w);
        }
        const P = m.viewQuery;
        const L = m.contentQueries;
        if (P) {
          M5(a, P);
        }
        if (L) {
          w5(a, L);
        }
        _e(a.inputs, m.inputs);
        _e(a.declaredInputs, m.declaredInputs);
        _e(a.outputs, m.outputs);
        if (P1(m) && m.data.animation) {
          const B = a.data;
          B.animation = (B.animation || []).concat(m.data.animation);
        }
      }
      const C = m.features;
      if (C) {
        for (let y = 0; y < C.length; y++) {
          const w = C[y];
          if (w && w.ngInherit) {
            w(a);
          }
          if (w === qOj) {
            d = false;
          }
        }
      }
    }
    l = Object.getPrototypeOf(l);
  }
  (function Dp(a) {
    let l = 0;
    let d = null;
    for (let g = a.length - 1; g >= 0; g--) {
      const m = a[g];
      m.hostVars = l += m.hostVars;
      m.hostAttrs = D1(m.hostAttrs, d = D1(d, m.hostAttrs));
    }
  })(g);
}
function J6(a) {
  if (a === V1) {
    return {};
  } else if (a === jt) {
    return [];
  } else {
    return a;
  }
}
function M5(a, l) {
  const d = a.viewQuery;
  a.viewQuery = d ? (g, m) => {
    l(g, m);
    d(g, m);
  } : l;
}
function w5(a, l) {
  const d = a.contentQueries;
  a.contentQueries = d ? (g, m, C) => {
    l(g, m, C);
    d(g, m, C);
  } : l;
}
function Lp(a, l) {
  const d = a.hostBindings;
  a.hostBindings = d ? (g, m) => {
    l(g, m);
    d(g, m);
  } : l;
}
let Ml = null;
function E2() {
  if (!Ml) {
    const a = dqk.Symbol;
    if (a && a.iterator) {
      Ml = a.iterator;
    } else {
      const l = Object.getOwnPropertyNames(Map.prototype);
      for (let d = 0; d < l.length; ++d) {
        const g = l[d];
        if (g !== "entries" && g !== "size" && Map.prototype[g] === Map.prototype.entries) {
          Ml = g;
        }
      }
    }
  }
  return Ml;
}
function j3(a) {
  return !!K6(a) && (Array.isArray(a) || !(a instanceof Map) && E2() in a);
}
function K6(a) {
  return a !== null && (typeof a == "function" || typeof a == "object");
}
function ms(a, l, d) {
  return a[l] = d;
}
function $1(a, l, d) {
  return !Object.is(a[l], d) && (a[l] = d, true);
}
function Gs(a, l, d, g) {
  const m = $1(a, l, d);
  return $1(a, l + 1, g) || m;
}
function wl(a, l, d, g, m) {
  const C = Gs(a, l, d, g);
  return $1(a, l + 2, m) || C;
}
function qr(a, l, d, g, m, C) {
  const y = Gs(a, l, d, g);
  return Gs(a, l + 2, m, C) || y;
}
export function uIk(a, l, d, g) {
  const m = Ue();
  if ($1(m, Z1(), l)) {
    nn();
    (function fs(a, l, d, g, m, C) {
      const y = Fi(a, l);
      q3(l[11], y, C, a.value, d, g, m);
    })(wi(), m, a, l, d, g);
  }
  return uIk;
}
function Ma(a, l, d, g) {
  if ($1(a, Z1(), d)) {
    return l + Y(d) + g;
  } else {
    return pn;
  }
}
function D2(a, l, d, g, m, C) {
  const w = Gs(a, g1(), d, m);
  a1(2);
  if (w) {
    return l + Y(d) + g + Y(m) + C;
  } else {
    return pn;
  }
}
export function YNc(a, l, d, g, m, C, y, w) {
  const P = Ue();
  const L = nn();
  const B = a + 22;
  const X = L.firstCreatePass ? function z5(a, l, d, g, m, C, y, w, P) {
    const L = l.consts;
    const B = wc(l, a, 4, y || null, Ts(L, w));
    Z3(l, d, B, Ts(L, P));
    Ko(l, B);
    const X = B.tViews = dl(2, B, g, m, C, l.directiveRegistry, l.pipeRegistry, null, l.schemas, L);
    if (l.queries !== null) {
      l.queries.template(l, B);
      X.queries = l.queries.embeddedTView(B);
    }
    return B;
  }(B, L, P, l, d, g, m, C, y) : L.data[B];
  Co(X, false);
  const me = P[11].createComment("");
  Yt(L, P, me, X);
  l1(me, P);
  fl(P, P[B] = xa(me, P, me, X));
  if (on(X)) {
    V6(L, P, X);
  }
  if (y != null) {
    ul(P, X, w);
  }
}
export function MAs(a) {
  return B1(function nr() {
    return Jt.lFrame.contextLView;
  }(), 22 + a);
}
export function Q6J(a, l, d) {
  const g = Ue();
  if ($1(g, Z1(), l)) {
    Pr(nn(), wi(), g, a, l, g[11], d, false);
  }
  return Q6J;
}
function $3(a, l, d, g, m) {
  const y = m ? "class" : "style";
  gl(a, d, l.inputs[y], y, g);
}
export function TgZ(a, l, d, g) {
  const m = Ue();
  const C = nn();
  const y = 22 + a;
  const w = m[11];
  const P = m[y] = st(w, l, function A4() {
    return Jt.lFrame.currentNamespace;
  }());
  const L = C.firstCreatePass ? function Bp(a, l, d, g, m, C, y) {
    const w = l.consts;
    const L = wc(l, a, 2, m, Ts(w, C));
    Z3(l, d, L, Ts(w, y));
    if (L.attrs !== null) {
      ml(L, L.attrs, false);
    }
    if (L.mergedAttrs !== null) {
      ml(L, L.mergedAttrs, true);
    }
    if (l.queries !== null) {
      l.queries.elementStart(l, L);
    }
    return L;
  }(y, C, m, 0, l, d, g) : C.data[y];
  Co(L, true);
  $4(w, P, L);
  if ((L.flags & 32) != 32) {
    Yt(C, m, P, L);
  }
  if (function Jc() {
    return Jt.lFrame.elementDepthCount;
  }() === 0) {
    l1(P, m);
  }
  (function Qc() {
    Jt.lFrame.elementDepthCount++;
  })();
  if (on(L)) {
    V6(C, m, L);
    Oo(C, L, m);
  }
  if (g !== null) {
    ul(m, L);
  }
  return TgZ;
}
export function qZA() {
  let a = s1();
  if (M4()) {
    U1();
  } else {
    a = a.parent;
    Co(a, false);
  }
  const l = a;
  (function Kc() {
    Jt.lFrame.elementDepthCount--;
  })();
  const d = nn();
  if (d.firstCreatePass) {
    Ko(d, a);
    if (Oe(a)) {
      d.queries.elementEnd(a);
    }
  }
  if (l.classesWithoutHost != null && function xn(a) {
    return (a.flags & 8) != 0;
  }(l)) {
    $3(d, l, Ue(), l.classesWithoutHost, true);
  }
  if (l.stylesWithoutHost != null && function Si(a) {
    return (a.flags & 16) != 0;
  }(l)) {
    $3(d, l, Ue(), l.stylesWithoutHost, false);
  }
  return qZA;
}
export function _UZ(a, l, d, g) {
  TgZ(a, l, d, g);
  qZA();
  return _UZ;
}
export function ynx(a, l, d) {
  const g = Ue();
  const m = nn();
  const C = a + 22;
  const y = m.firstCreatePass ? function iu(a, l, d, g, m) {
    const C = l.consts;
    const y = Ts(C, g);
    const w = wc(l, a, 8, "ng-container", y);
    if (y !== null) {
      ml(w, y, true);
    }
    Z3(l, d, w, Ts(C, m));
    if (l.queries !== null) {
      l.queries.elementStart(l, w);
    }
    return w;
  }(C, m, g, l, d) : m.data[C];
  Co(y, true);
  const w = g[C] = g[11].createComment("");
  Yt(m, g, w, y);
  l1(w, g);
  if (on(y)) {
    V6(m, g, y);
    Oo(m, y, g);
  }
  if (d != null) {
    ul(g, y);
  }
  return ynx;
}
export function BQk() {
  let a = s1();
  const l = nn();
  if (M4()) {
    U1();
  } else {
    a = a.parent;
    Co(a, false);
  }
  if (l.firstCreatePass) {
    Ko(l, a);
    if (Oe(a)) {
      l.queries.elementEnd(a);
    }
  }
  return BQk;
}
export function GkF(a, l, d) {
  ynx(a, l, d);
  BQk();
  return GkF;
}
export function EpF() {
  return Ue();
}
export function QGY(a) {
  return !!a && typeof a.then == "function";
}
export function F4k(a) {
  return !!a && typeof a.subscribe == "function";
}
export const CqO = F4k;
export function NdJ(a, l, d, g) {
  const m = Ue();
  const C = nn();
  const y = s1();
  (function F5(a, l, d, g, m, C, y) {
    const w = on(g);
    const L = a.firstCreatePass && v5(a);
    const B = l[8];
    const X = _5(l);
    let me = true;
    if (g.type & 3 || y) {
      const lt = Fi(g, l);
      const _t = y ? y(lt) : lt;
      const Ot = X.length;
      const Xt = y ? hn => y(zi(hn[g.index])) : g.index;
      let ot = null;
      if (!y && w) {
        ot = function Up(a, l, d, g) {
          const m = a.cleanup;
          if (m != null) {
            for (let C = 0; C < m.length - 1; C += 2) {
              const y = m[C];
              if (y === d && m[C + 1] === g) {
                const w = l[7];
                const P = m[C + 2];
                if (w.length > P) {
                  return w[P];
                } else {
                  return null;
                }
              }
              if (typeof y == "string") {
                C += 2;
              }
            }
          }
          return null;
        }(a, l, m, g.index);
      }
      if (ot !== null) {
        (ot.__ngLastListenerFn__ || ot).__ngNextListenerFn__ = C;
        ot.__ngLastListenerFn__ = C;
        me = false;
      } else {
        C = Al(g, l, B, C, false);
        const hn = d.listen(_t, m, C);
        X.push(C, hn);
        if (L) {
          L.push(m, Xt, Ot, Ot + 1);
        }
      }
    } else {
      C = Al(g, l, B, C, false);
    }
    const Pe = g.outputs;
    let je;
    if (me && Pe !== null && (je = Pe[m])) {
      const lt = je.length;
      if (lt) {
        for (let _t = 0; _t < lt; _t += 2) {
          const Vi = l[je[_t]][je[_t + 1]].subscribe(C);
          const d1 = X.length;
          X.push(C, Vi);
          if (L) {
            L.push(m, g.index, d1, -(d1 + 1));
          }
        }
      }
    }
  })(C, m, m[11], y, a, l, g);
  return NdJ;
}
function L2(a, l, d, g) {
  try {
    return d(g) !== false;
  } catch (m) {
    G3(a, m);
    return false;
  }
}
function Al(a, l, d, g, m) {
  return function C(y) {
    if (y === Function) {
      return g;
    }
    Sc(a.componentOffset > -1 ? ei(a.index, l) : l);
    let P = L2(l, 0, g, y);
    let L = C.__ngNextListenerFn__;
    while (L) {
      P = L2(l, 0, L, y) && P;
      L = L.__ngNextListenerFn__;
    }
    if (m && P === false) {
      y.preventDefault();
      y.returnValue = false;
    }
    return P;
  };
}
export function oxw(a = 1) {
  return function k4(a) {
    return (Jt.lFrame.contextLView = function T0(a, l) {
      while (a > 0) {
        l = l[15];
        a--;
      }
      return l;
    }(a, Jt.lFrame.contextLView))[8];
  }(a);
}
function U5(a, l) {
  let d = null;
  const g = function U8(a) {
    const l = a.attrs;
    if (l != null) {
      const d = l.indexOf(5);
      if (!(d & 1)) {
        return l[d + 1];
      }
    }
    return null;
  }(a);
  for (let m = 0; m < l.length; m++) {
    const C = l[m];
    if (C !== "*") {
      if (g === null ? S6(a, C, true) : ep(g, C)) {
        return m;
      }
    } else {
      d = m;
    }
  }
  return d;
}
export function F$t(a) {
  const l = Ue()[16][6];
  if (!l.projection) {
    const g = l.projection = u3(a ? a.length : 1, null);
    const m = g.slice();
    let C = l.child;
    while (C !== null) {
      const y = a ? U5(C, a) : 0;
      if (y !== null) {
        if (m[y]) {
          m[y].projectionNext = C;
        } else {
          g[y] = C;
        }
        m[y] = C;
      }
      C = C.next;
    }
  }
}
export function Hsn(a, l = 0, d) {
  const g = Ue();
  const m = nn();
  const C = wc(m, 22 + a, 16, null, d || null);
  if (C.projection === null) {
    C.projection = l;
  }
  U1();
  if ((C.flags & 32) != 32) {
    (function j4(a, l, d) {
      n6(l[11], 0, l, d, M8(a, d, l), T8(d.parent || l[6], d, l));
    })(m, g, C);
  }
}
export function s9C(a, l, d) {
  MGl(a, "", l, "", d);
  return s9C;
}
export function MGl(a, l, d, g, m) {
  const C = Ue();
  const y = Ma(C, l, d, g);
  if (y !== pn) {
    Pr(nn(), wi(), C, a, y, C[11], m, false);
  }
  return MGl;
}
function El(a, l) {
  return a << 17 | l << 2;
}
function Ys(a) {
  return a >> 17 & 32767;
}
function Dl(a) {
  return a | 2;
}
function N2(a) {
  return (a & 131068) >> 2;
}
function Q3(a, l) {
  return a & -131069 | l << 2;
}
function K3(a) {
  return a | 1;
}
function K5(a, l, d, g, m) {
  const C = a[d + 1];
  const y = l === null;
  let w = g ? Ys(C) : N2(C);
  let P = false;
  while (w !== 0 && (P === false || y)) {
    const B = a[w + 1];
    if (X5(a[w], l)) {
      P = true;
      a[w + 1] = g ? K3(B) : Dl(B);
    }
    w = g ? Ys(B) : N2(B);
  }
  if (P) {
    a[d + 1] = g ? Dl(C) : K3(C);
  }
}
function X5(a, l) {
  return a === null || l == null || (Array.isArray(a) ? a[1] : a) === l || !!Array.isArray(a) && typeof l == "string" && Mr(a, l) >= 0;
}
const Qi = {
  textEnd: 0,
  key: 0,
  keyEnd: 0,
  value: 0,
  valueEnd: 0
};
function lu(a) {
  return a.substring(Qi.key, Qi.keyEnd);
}
function jp(a) {
  return a.substring(Qi.value, Qi.valueEnd);
}
function ed(a, l) {
  const d = Qi.textEnd;
  if (d === l) {
    return -1;
  } else {
    l = Qi.keyEnd = function $p(a, l, d) {
      while (l < d && a.charCodeAt(l) > 32) {
        l++;
      }
      return l;
    }(a, Qi.key = l, d);
    return zc(a, l, d);
  }
}
function Nc(a, l) {
  const d = Qi.textEnd;
  let g = Qi.key = zc(a, l, d);
  if (d === g) {
    return -1;
  } else {
    g = Qi.keyEnd = function Wp(a, l, d) {
      let g;
      while (l < d && ((g = a.charCodeAt(l)) === 45 || g === 95 || (g & -33) >= 65 && (g & -33) <= 90 || g >= 48 && g <= 57)) {
        l++;
      }
      return l;
    }(a, g, d);
    g = td(a, g, d);
    g = Qi.value = zc(a, g, d);
    g = Qi.valueEnd = function Jp(a, l, d) {
      let g = -1;
      let m = -1;
      let C = -1;
      let y = l;
      let w = y;
      while (y < d) {
        const P = a.charCodeAt(y++);
        if (P === 59) {
          return w;
        }
        if (P === 34 || P === 39) {
          w = y = Qp(a, P, y, d);
        } else if (l === y - 4 && C === 85 && m === 82 && g === 76 && P === 40) {
          w = y = Qp(a, 41, y, d);
        } else if (P > 32) {
          w = y;
        }
        C = m;
        m = g;
        g = P & -33;
      }
      return w;
    }(a, g, d);
    return td(a, g, d);
  }
}
function du(a) {
  Qi.key = 0;
  Qi.keyEnd = 0;
  Qi.value = 0;
  Qi.valueEnd = 0;
  Qi.textEnd = a.length;
}
function zc(a, l, d) {
  while (l < d && a.charCodeAt(l) <= 32) {
    l++;
  }
  return l;
}
function td(a, l, d, g) {
  if ((l = zc(a, l, d)) < d) {
    l++;
  }
  return l;
}
function Qp(a, l, d, g) {
  let m = -1;
  let C = d;
  while (C < g) {
    const y = a.charCodeAt(C++);
    if (y == l && m !== 92) {
      return C;
    }
    m = y == 92 && m === 92 ? 0 : y;
  }
  throw new Error();
}
export function Udp(a, l, d) {
  Do(a, l, d, false);
  return Udp;
}
export function ekj(a, l) {
  Do(a, l, null, true);
  return ekj;
}
export function Akn(a) {
  dr(th, nd, a, false);
}
function nd(a, l) {
  for (let d = function Yp(a) {
    du(a);
    return Nc(a, zc(a, 0, Qi.textEnd));
  }(l); d >= 0; d = Nc(l, d)) {
    th(a, lu(l), jp(l));
  }
}
export function Tol(a) {
  dr(q1, _s, a, true);
}
function _s(a, l) {
  for (let d = function uu(a) {
    du(a);
    return ed(a, zc(a, 0, Qi.textEnd));
  }(l); d >= 0; d = ed(l, d)) {
    q1(a, lu(l), true);
  }
}
function Do(a, l, d, g) {
  const m = Ue();
  const C = nn();
  const y = a1(2);
  if (C.firstUpdatePass) {
    pu(C, a, y, g);
  }
  if (l !== pn && $1(m, y, l)) {
    rd(C, C.data[Bi()], m, m[11], a, m[y + 1] = function ih(a, l) {
      if (a != null) {
        if (typeof l == "string") {
          a += l;
        } else if (typeof a == "object") {
          a = AaK(z3N(a));
        }
      }
      return a;
    }(l, d), g, y);
  }
}
function dr(a, l, d, g) {
  const m = nn();
  const C = a1(2);
  if (m.firstUpdatePass) {
    pu(m, null, C, g);
  }
  const y = Ue();
  if (d !== pn && $1(y, C, d)) {
    const w = m.data[Bi()];
    if (sd(w, g) && !Nl(m, C)) {
      let P = g ? w.classesWithoutHost : w.stylesWithoutHost;
      if (P !== null) {
        d = j(P, d || "");
      }
      $3(m, w, y, d, g);
    } else {
      (function nh(a, l, d, g, m, C, y, w) {
        if (m === pn) {
          m = jt;
        }
        let P = 0;
        let L = 0;
        let B = m.length > 0 ? m[0] : null;
        let X = C.length > 0 ? C[0] : null;
        while (B !== null || X !== null) {
          const me = P < m.length ? m[P + 1] : undefined;
          const Pe = L < C.length ? C[L + 1] : undefined;
          let lt;
          let je = null;
          if (B === X) {
            P += 2;
            L += 2;
            if (me !== Pe) {
              je = X;
              lt = Pe;
            }
          } else if (X === null || B !== null && B < X) {
            P += 2;
            je = B;
          } else {
            L += 2;
            je = X;
            lt = Pe;
          }
          if (je !== null) {
            rd(a, l, d, g, je, lt, y, w);
          }
          B = P < m.length ? m[P] : null;
          X = L < C.length ? C[L] : null;
        }
      })(m, w, y, y[11], y[C + 1], y[C + 1] = function eh(a, l, d) {
        if (d == null || d === "") {
          return jt;
        }
        const g = [];
        const m = z3N(d);
        if (Array.isArray(m)) {
          for (let C = 0; C < m.length; C++) {
            a(g, m[C], true);
          }
        } else if (typeof m == "object") {
          for (const C in m) {
            if (m.hasOwnProperty(C)) {
              a(g, C, m[C]);
            }
          }
        } else if (typeof m == "string") {
          l(g, m);
        }
        return g;
      }(a, l, d), g, C);
    }
  }
}
function Nl(a, l) {
  return l >= a.expandoStartIndex;
}
function pu(a, l, d, g) {
  const m = a.data;
  if (m[d + 1] === null) {
    const C = m[Bi()];
    const y = Nl(a, d);
    if (sd(C, g) && l === null && !y) {
      l = false;
    }
    l = function id(a, l, d, g) {
      const m = function p2(a) {
        const l = Jt.lFrame.currentDirectiveIndex;
        if (l === -1) {
          return null;
        } else {
          return a[l];
        }
      }(a);
      let C = g ? l.residualClasses : l.residualStyles;
      if (m === null) {
        if ((g ? l.classBindings : l.styleBindings) === 0) {
          d = Aa(d = zl(null, a, l, d, g), l.attrs, g);
          C = null;
        }
      } else {
        const y = l.directiveStylingLast;
        if (y === -1 || a[y] !== m) {
          d = zl(m, a, l, d, g);
          if (C === null) {
            let P = function Xp(a, l, d) {
              const g = d ? l.classBindings : l.styleBindings;
              if (N2(g) !== 0) {
                return a[Ys(g)];
              }
            }(a, l, g);
            if (P !== undefined && Array.isArray(P)) {
              P = zl(null, a, l, P[1], g);
              P = Aa(P, l.attrs, g);
              (function vg(a, l, d, g) {
                a[Ys(d ? l.classBindings : l.styleBindings)] = g;
              })(a, l, g, P);
            }
          } else {
            C = function hu(a, l, d) {
              let g;
              const m = l.directiveEnd;
              for (let C = 1 + l.directiveStylingLast; C < m; C++) {
                g = Aa(g, a[C].hostAttrs, d);
              }
              return Aa(g, l.attrs, d);
            }(a, l, g);
          }
        }
      }
      if (C !== undefined) {
        if (g) {
          l.residualClasses = C;
        } else {
          l.residualStyles = C;
        }
      }
      return d;
    }(m, C, l, g);
    (function Gp(a, l, d, g, m, C) {
      let y = C ? l.classBindings : l.styleBindings;
      let w = Ys(y);
      let P = N2(y);
      a[g] = d;
      let B;
      let L = false;
      if (Array.isArray(d)) {
        B = d[1];
        if (B === null || Mr(d, B) > 0) {
          L = true;
        }
      } else {
        B = d;
      }
      if (m) {
        if (P !== 0) {
          const me = Ys(a[w + 1]);
          a[g + 1] = El(me, w);
          if (me !== 0) {
            a[me + 1] = Q3(a[me + 1], g);
          }
          a[w + 1] = function J5(a, l) {
            return a & 131071 | l << 17;
          }(a[w + 1], g);
        } else {
          a[g + 1] = El(w, 0);
          if (w !== 0) {
            a[w + 1] = Q3(a[w + 1], g);
          }
          w = g;
        }
      } else {
        a[g + 1] = El(P, 0);
        if (w === 0) {
          w = g;
        } else {
          a[P + 1] = Q3(a[P + 1], g);
        }
        P = g;
      }
      if (L) {
        a[g + 1] = Dl(a[g + 1]);
      }
      K5(a, B, g, true);
      K5(a, B, g, false);
      (function Q5(a, l, d, g, m) {
        const C = m ? a.residualClasses : a.residualStyles;
        if (C != null && typeof l == "string" && Mr(C, l) >= 0) {
          d[g + 1] = K3(d[g + 1]);
        }
      })(l, B, a, g, C);
      y = El(w, P);
      if (C) {
        l.classBindings = y;
      } else {
        l.styleBindings = y;
      }
    })(m, C, l, d, y, g);
  }
}
function zl(a, l, d, g, m) {
  let C = null;
  const y = d.directiveEnd;
  let w = d.directiveStylingLast;
  for (w === -1 ? w = d.directiveStart : w++; w < y && (C = l[w], g = Aa(g, C.hostAttrs, m), C !== a);) {
    w++;
  }
  if (a !== null) {
    d.directiveStylingLast = w;
  }
  return g;
}
function Aa(a, l, d) {
  const g = d ? 1 : 2;
  let m = -1;
  if (l !== null) {
    for (let C = 0; C < l.length; C++) {
      const y = l[C];
      if (typeof y == "number") {
        m = y;
      } else if (m === g) {
        if (!Array.isArray(a)) {
          a = a === undefined ? [] : ["", a];
        }
        q1(a, y, !!d || l[++C]);
      }
    }
  }
  if (a === undefined) {
    return null;
  } else {
    return a;
  }
}
function th(a, l, d) {
  q1(a, l, z3N(d));
}
function rd(a, l, d, g, m, C, y, w) {
  if (!(l.type & 3)) {
    return;
  }
  const P = a.data;
  const L = P[w + 1];
  const B = function Zp(a) {
    return (a & 1) == 1;
  }(L) ? od(P, l, d, m, N2(L), y) : undefined;
  if (!X3(B)) {
    if (!X3(C)) {
      if (function Oa(a) {
        return (a & 2) == 2;
      }(L)) {
        C = od(P, null, d, m, w, y);
      }
    }
    (function i6(a, l, d, g, m) {
      if (l) {
        if (m) {
          a.addClass(d, g);
        } else {
          a.removeClass(d, g);
        }
      } else {
        let C = g.indexOf("-") === -1 ? undefined : JOm.DashCase;
        if (m == null) {
          a.removeStyle(d, g, C);
        } else {
          if (typeof m == "string" && m.endsWith("!important")) {
            m = m.slice(0, -10);
            C |= JOm.Important;
          }
          a.setStyle(d, g, m, C);
        }
      }
    })(g, y, E1(Bi(), d), m, C);
  }
}
function od(a, l, d, g, m, C) {
  const y = l === null;
  let w;
  while (m > 0) {
    const P = a[m];
    const L = Array.isArray(P);
    const B = L ? P[1] : P;
    const X = B === null;
    let me = d[m + 1];
    if (me === pn) {
      me = X ? jt : undefined;
    }
    let Pe = X ? ra(me, g) : B === g ? me : undefined;
    if (L && !X3(Pe)) {
      Pe = ra(P, g);
    }
    if (X3(Pe) && (w = Pe, y)) {
      return w;
    }
    const je = a[m + 1];
    m = y ? Ys(je) : N2(je);
  }
  if (l !== null) {
    let P = C ? l.residualClasses : l.residualStyles;
    if (P != null) {
      w = ra(P, g);
    }
  }
  return w;
}
function X3(a) {
  return a !== undefined;
}
function sd(a, l) {
  return (a.flags & (l ? 8 : 16)) != 0;
}
export function _uU(a, l = "") {
  const d = Ue();
  const g = nn();
  const m = a + 22;
  const C = g.firstCreatePass ? wc(g, m, 1, l, null) : g.data[m];
  const y = d[m] = W0(d[11], l);
  Yt(g, d, y, C);
  Co(C, false);
}
export function Oqu(a) {
  hij("", a, "");
  return Oqu;
}
export function hij(a, l, d) {
  const g = Ue();
  const m = Ma(g, a, l, d);
  if (m !== pn) {
    gs(g, Bi(), m);
  }
  return hij;
}
export function AsE(a, l, d, g, m) {
  const C = Ue();
  const y = D2(C, a, l, d, g, m);
  if (y !== pn) {
    gs(C, Bi(), y);
  }
  return AsE;
}
export function lnq(a, l, d, g, m, C, y) {
  const w = Ue();
  const P = function Pc(a, l, d, g, m, C, y, w) {
    const L = wl(a, g1(), d, m, y);
    a1(3);
    if (L) {
      return l + Y(d) + g + Y(m) + C + Y(y) + w;
    } else {
      return pn;
    }
  }(w, a, l, d, g, m, C, y);
  if (P !== pn) {
    gs(w, Bi(), P);
  }
  return lnq;
}
export function HOy(a, l, d, g, m, C, y, w, P) {
  const L = Ue();
  const B = function wa(a, l, d, g, m, C, y, w, P, L) {
    const X = qr(a, g1(), d, m, y, P);
    a1(4);
    if (X) {
      return l + Y(d) + g + Y(m) + C + Y(y) + w + Y(P) + L;
    } else {
      return pn;
    }
  }(L, a, l, d, g, m, C, y, w, P);
  if (B !== pn) {
    gs(L, Bi(), B);
  }
  return HOy;
}
export function xDo(a, l, d, g, m, C, y, w, P, L, B) {
  const X = Ue();
  const me = function Sa(a, l, d, g, m, C, y, w, P, L, B, X) {
    const me = g1();
    let Pe = qr(a, me, d, m, y, P);
    Pe = $1(a, me + 4, B) || Pe;
    a1(5);
    if (Pe) {
      return l + Y(d) + g + Y(m) + C + Y(y) + w + Y(P) + L + Y(B) + X;
    } else {
      return pn;
    }
  }(X, a, l, d, g, m, C, y, w, P, L, B);
  if (me !== pn) {
    gs(X, Bi(), me);
  }
  return xDo;
}
export function Gre(a, l, d) {
  dr(q1, _s, Ma(Ue(), a, l, d), true);
}
export function MT6(a, l, d, g, m) {
  dr(q1, _s, D2(Ue(), a, l, d, g, m), true);
}
export function Ikx(a, l, d) {
  const g = Ue();
  if ($1(g, Z1(), l)) {
    Pr(nn(), wi(), g, a, l, g[11], d, true);
  }
  return Ikx;
}
const _ = undefined;
var M = ["en", [["a", "p"], ["AM", "PM"], _], [["AM", "PM"], _, _], [["S", "M", "T", "W", "T", "F", "S"], ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]], _, [["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]], _, [["B", "A"], ["BC", "AD"], ["Before Christ", "Anno Domini"]], 0, [6, 0], ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"], ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"], ["{1}, {0}", _, "{1} 'at' {0}", _], [".", ",", ";", "%", "+", "-", "E", "×", "‰", "∞", "NaN", ":"], ["#,##0.###", "#,##0%", "¤#,##0.00", "#E0"], "USD", "$", "US Dollar", {}, "ltr", function b(a) {
  const d = Math.floor(Math.abs(a));
  const g = a.toString().replace(/^[^.]*\.?/, "").length;
  if (d === 1 && g === 0) {
    return 1;
  } else {
    return 5;
  }
}];
let D = {};
export function dwT(a, l, d) {
  if (typeof l != "string") {
    d = l;
    l = a[wAp.LocaleId];
  }
  l = l.toLowerCase().replace(/_/g, "-");
  D[l] = a;
  if (d) {
    D[l][wAp.ExtraData] = d;
  }
}
export function cg1(a) {
  const l = function St(a) {
    return a.toLowerCase().replace(/_/g, "-");
  }(a);
  let d = Re(l);
  if (d) {
    return d;
  }
  const g = l.split("-")[0];
  d = Re(g);
  if (d) {
    return d;
  }
  if (g === "en") {
    return M;
  }
  throw new vHH(701, false);
}
export function kL8(a) {
  return cg1(a)[wAp.PluralCase];
}
function Re(a) {
  if (!(a in D)) {
    D[a] = dqk.ng && dqk.ng.common && dqk.ng.common.locales && dqk.ng.common.locales[a];
  }
  return D[a];
}
export var wAp = (() => {
  (wAp = wAp || {})[wAp.LocaleId = 0] = "LocaleId";
  wAp[wAp.DayPeriodsFormat = 1] = "DayPeriodsFormat";
  wAp[wAp.DayPeriodsStandalone = 2] = "DayPeriodsStandalone";
  wAp[wAp.DaysFormat = 3] = "DaysFormat";
  wAp[wAp.DaysStandalone = 4] = "DaysStandalone";
  wAp[wAp.MonthsFormat = 5] = "MonthsFormat";
  wAp[wAp.MonthsStandalone = 6] = "MonthsStandalone";
  wAp[wAp.Eras = 7] = "Eras";
  wAp[wAp.FirstDayOfWeek = 8] = "FirstDayOfWeek";
  wAp[wAp.WeekendRange = 9] = "WeekendRange";
  wAp[wAp.DateFormat = 10] = "DateFormat";
  wAp[wAp.TimeFormat = 11] = "TimeFormat";
  wAp[wAp.DateTimeFormat = 12] = "DateTimeFormat";
  wAp[wAp.NumberSymbols = 13] = "NumberSymbols";
  wAp[wAp.NumberFormats = 14] = "NumberFormats";
  wAp[wAp.CurrencyCode = 15] = "CurrencyCode";
  wAp[wAp.CurrencySymbol = 16] = "CurrencySymbol";
  wAp[wAp.CurrencyName = 17] = "CurrencyName";
  wAp[wAp.Currencies = 18] = "Currencies";
  wAp[wAp.Directionality = 19] = "Directionality";
  wAp[wAp.PluralCase = 20] = "PluralCase";
  wAp[wAp.ExtraData = 21] = "ExtraData";
  return wAp;
})();
const gt = ["zero", "one", "two", "few", "many"];
const wt = "en-US";
const vi = {
  marker: "element"
};
const Ki = {
  marker: "ICU"
};
var Jn = (() => {
  (Jn = Jn || {})[Jn.SHIFT = 2] = "SHIFT";
  Jn[Jn.APPEND_EAGERLY = 1] = "APPEND_EAGERLY";
  Jn[Jn.COMMENT = 2] = "COMMENT";
  return Jn;
})();
let Lo = wt;
function zt(a) {
  (function $e(a, l) {
    if (a == null) {
      Ve(l, a, null, "!=");
    }
  })(a, "Expected localeId to be defined");
  if (typeof a == "string") {
    Lo = a.toLowerCase().replace(/_/g, "-");
  }
}
function ti(a, l, d) {
  const g = l.insertBeforeIndex;
  const m = Array.isArray(g) ? g[0] : g;
  if (m === null) {
    return q4(a, 0, d);
  } else {
    return zi(d[m]);
  }
}
function pr(a, l, d, g, m) {
  const C = l.insertBeforeIndex;
  if (Array.isArray(C)) {
    let y = g;
    let w = null;
    if (!(l.type & 3)) {
      w = y;
      y = m;
    }
    if (y !== null && l.componentOffset === -1) {
      for (let P = 1; P < C.length; P++) {
        Fr(a, y, d[C[P]], w, false);
      }
    }
  }
}
function $s(a, l) {
  a.push(l);
  if (a.length > 1) {
    for (let d = a.length - 2; d >= 0; d--) {
      const g = a[d];
      if (!Ws(g)) {
        if (Ea(g, l) && vs(g) === null) {
          No(g, l.index);
        }
      }
    }
  }
}
function Ws(a) {
  return !(a.type & 64);
}
function Ea(a, l) {
  return Ws(l) || a.index > l.index;
}
function vs(a) {
  const l = a.insertBeforeIndex;
  if (Array.isArray(l)) {
    return l[0];
  } else {
    return l;
  }
}
function No(a, l) {
  const d = a.insertBeforeIndex;
  if (Array.isArray(d)) {
    d[0] = l;
  } else {
    ac(ti, pr);
    a.insertBeforeIndex = l;
  }
}
function e4(a, l) {
  const d = a.data[l];
  if (d === null || typeof d == "string") {
    return null;
  } else if (d.hasOwnProperty("currentCaseLViewIndex")) {
    return d;
  } else {
    return d.value;
  }
}
function bC(a, l, d) {
  const g = al(a, d, 64, null, null);
  $s(l, g);
  return g;
}
function Cd(a, l) {
  const d = l[a.currentCaseLViewIndex];
  if (d === null) {
    return d;
  } else if (d < 0) {
    return ~d;
  } else {
    return d;
  }
}
function xg(a) {
  return a >>> 17;
}
function yg(a) {
  return (a & 131070) >>> 1;
}
let Fl = 0;
let yu = 0;
function Mg(a, l, d, g) {
  const m = d[11];
  let y;
  let C = null;
  for (let w = 0; w < l.length; w++) {
    const P = l[w];
    if (typeof P == "string") {
      const L = l[++w];
      if (d[L] === null) {
        d[L] = W0(m, P);
      }
    } else if (typeof P == "number") {
      switch (P & 1) {
        case 0:
          const L = xg(P);
          let B;
          let X;
          if (C === null) {
            C = L;
            y = Z4(m, g);
          }
          if (L === C) {
            B = g;
            X = y;
          } else {
            B = null;
            X = zi(d[L]);
          }
          if (X !== null) {
            const lt = yg(P);
            Fr(m, X, d[lt], B, false);
            const Ot = e4(a, lt);
            if (Ot !== null && typeof Ot == "object") {
              const Xt = Cd(Ot, d);
              if (Xt !== null) {
                Mg(a, Ot.create[Xt], d, d[Ot.anchorIdx]);
              }
            }
          }
          break;
        case 1:
          const Pe = l[++w];
          const je = l[++w];
          q3(m, E1(P >>> 1, d), null, null, Pe, je, null);
      }
    } else {
      switch (P) {
        case Ki:
          const L = l[++w];
          const B = l[++w];
          if (d[B] === null) {
            l1(d[B] = ar(m, L), d);
          }
          break;
        case vi:
          const X = l[++w];
          const me = l[++w];
          if (d[me] === null) {
            l1(d[me] = st(m, X, null), d);
          }
      }
    }
  }
}
function Mu(a, l, d, g, m) {
  for (let C = 0; C < d.length; C++) {
    const y = d[C];
    const w = d[++C];
    if (y & m) {
      let P = "";
      for (let L = C + 1; L <= C + w; L++) {
        const B = d[L];
        if (typeof B == "string") {
          P += B;
        } else if (typeof B == "number") {
          if (B < 0) {
            P += Y(l[g - B]);
          } else {
            const X = B >>> 2;
            switch (B & 3) {
              case 1:
                const me = d[++L];
                const Pe = d[++L];
                const je = a.data[X];
                if (typeof je == "string") {
                  q3(l[11], l[X], null, je, me, P, Pe);
                } else {
                  Pr(a, je, l, me, P, l[11], Pe, false);
                }
                break;
              case 0:
                const lt = l[X];
                if (lt !== null) {
                  J0(l[11], lt, P);
                }
                break;
              case 2:
                SC(a, e4(a, X), l, P);
                break;
              case 3:
                wg(a, e4(a, X), g, l);
            }
          }
        }
      }
    } else {
      const P = d[C + 1];
      if (P > 0 && (P & 3) == 3) {
        const B = e4(a, P >>> 2);
        if (l[B.currentCaseLViewIndex] < 0) {
          wg(a, B, g, l);
        }
      }
    }
    C += w;
  }
}
function wg(a, l, d, g) {
  let m = g[l.currentCaseLViewIndex];
  if (m !== null) {
    let C = Fl;
    if (m < 0) {
      m = g[l.currentCaseLViewIndex] = ~m;
      C = -1;
    }
    Mu(a, g, l.update[m], d, C);
  }
}
function SC(a, l, d, g) {
  const m = function Tg(a, l) {
    let d = a.cases.indexOf(l);
    if (d === -1) {
      switch (a.type) {
        case 1:
          {
            const g = function Mt(a, l) {
              const d = kL8(l)(parseInt(a, 10));
              const g = gt[d];
              if (g !== undefined) {
                return g;
              } else {
                return "other";
              }
            }(l, function Di() {
              return Lo;
            }());
            d = a.cases.indexOf(g);
            if (d === -1 && g !== "other") {
              d = a.cases.indexOf("other");
            }
            break;
          }
        case 0:
          d = a.cases.indexOf("other");
      }
    }
    if (d === -1) {
      return null;
    } else {
      return d;
    }
  }(l, g);
  if (Cd(l, d) !== m && (Sg(a, l, d), d[l.currentCaseLViewIndex] = m === null ? null : ~m, m !== null)) {
    const y = d[l.anchorIdx];
    if (y) {
      Mg(a, l.create[m], d, y);
    }
  }
}
function Sg(a, l, d) {
  let g = Cd(l, d);
  if (g !== null) {
    const m = l.remove[g];
    for (let C = 0; C < m.length; C++) {
      const y = m[C];
      if (y > 0) {
        const w = E1(y, d);
        if (w !== null) {
          Hi(d[11], w);
        }
      } else {
        Sg(a, e4(a, ~y), d);
      }
    }
  }
}
function TC() {
  const a = [];
  let d;
  let g;
  let l = -1;
  function C(w, P) {
    l = 0;
    const L = Cd(w, P);
    g = L !== null ? w.remove[L] : jt;
  }
  function y() {
    if (l < g.length) {
      const w = g[l++];
      if (w > 0) {
        return d[w];
      } else {
        a.push(l, g);
        C(d[1].data[~w], d);
        return y();
      }
    }
    if (a.length === 0) {
      return null;
    } else {
      g = a.pop();
      l = a.pop();
      return y();
    }
  }
  return function m(w, P) {
    for (d = P; a.length;) {
      a.pop();
    }
    C(w.value, P);
    return y;
  };
}
const bd = /\ufffd(\d+):?\d*\ufffd/gi;
const kg = /\ufffd(\d+)\ufffd/;
const Og = /^\s*(\ufffd\d+:?\d*\ufffd)\s*,\s*(select|plural)\s*,/;
const Ag = /\ufffd\/?\*(\d+:\d+)\ufffd/gi;
const AC = /\ufffd(\/?[#*]\d+):?\d*\ufffd/gi;
const PC = /\uE500/g;
function Pg(a, l, d, g, m, C, y) {
  const w = U3(a, g, 1, null);
  let P = w << Jn.SHIFT;
  let L = t3();
  if (l === L) {
    L = null;
  }
  if (L === null) {
    P |= Jn.APPEND_EAGERLY;
  }
  if (y) {
    P |= Jn.COMMENT;
    (function sc(a) {
      if (oc === undefined) {
        oc = a();
      }
    })(TC);
  }
  m.push(P, C === null ? "" : C);
  const B = al(a, w, y ? 32 : 1, C === null ? "" : C, null);
  $s(d, B);
  const X = B.index;
  Co(B, false);
  if (L !== null && l !== L) {
    (function CC(a, l) {
      let d = a.insertBeforeIndex;
      if (d === null) {
        ac(ti, pr);
        d = a.insertBeforeIndex = [null, l];
      } else {
        (function ie(a, l, d) {
          if (a != l) {
            Ve(d, a, l, "==");
          }
        })(Array.isArray(d), true, "Expecting array here");
        d.push(l);
      }
    })(L, X);
  }
  return B;
}
function LC(a, l, d, g, m, C, y) {
  const w = y.match(bd);
  const P = Pg(a, l, d, C, g, w ? null : y, false);
  if (w) {
    Su(m, y, P.index, null, 0, null);
  }
}
function Su(a, l, d, g, m, C) {
  const y = a.length;
  const w = y + 1;
  a.push(null, null);
  const P = y + 2;
  const L = l.split(bd);
  let B = 0;
  for (let X = 0; X < L.length; X++) {
    const me = L[X];
    if (X & 1) {
      const Pe = m + parseInt(me, 10);
      a.push(-1 - Pe);
      B |= Eg(Pe);
    } else if (me !== "") {
      a.push(me);
    }
  }
  a.push(d << 2 | (g ? 1 : 0));
  if (g) {
    a.push(g, C);
  }
  a[y] = B;
  a[w] = a.length - P;
  return B;
}
function Eg(a) {
  return 1 << Math.min(a, 31);
}
function Dg(a) {
  let l;
  let C;
  let d = "";
  let g = 0;
  let m = false;
  while ((l = Ag.exec(a)) !== null) {
    if (m) {
      if (l[0] === `\ufffd/*${C}\ufffd`) {
        g = l.index;
        m = false;
      }
    } else {
      d += a.substring(g, l.index + l[0].length);
      C = l[1];
      m = true;
    }
  }
  d += a.slice(g);
  return d;
}
function mh(a, l, d, g, m, C) {
  let y = 0;
  const w = {
    type: m.type,
    currentCaseLViewIndex: U3(a, l, 1, null),
    anchorIdx: C,
    cases: [],
    create: [],
    remove: [],
    update: []
  };
  (function Ng(a, l, d) {
    a.push(Eg(l.mainBinding), 2, -1 - l.mainBinding, d << 2 | 2);
  })(d, m, C);
  (function vC(a, l, d) {
    const g = a.data[l];
    if (g === null) {
      a.data[l] = d;
    } else {
      g.value = d;
    }
  })(a, C, w);
  const P = m.values;
  for (let L = 0; L < P.length; L++) {
    const B = P[L];
    const X = [];
    for (let me = 0; me < B.length; me++) {
      const Pe = B[me];
      if (typeof Pe != "string") {
        const je = X.push(Pe) - 1;
        B[me] = `\x3c!--\ufffd${je}\ufffd--\x3e`;
      }
    }
    y = RC(a, w, l, d, g, m.cases[L], B.join(""), X) | y;
  }
  if (y) {
    (function BC(a, l, d) {
      a.push(l, 1, d << 2 | 3);
    })(d, y, C);
  }
}
function VC(a) {
  const l = [];
  const d = [];
  let g = 1;
  let m = 0;
  const C = _h(a = a.replace(Og, function (y, w, P) {
    g = P === "select" ? 0 : 1;
    m = parseInt(w.slice(1), 10);
    return "";
  }));
  for (let y = 0; y < C.length;) {
    let w = C[y++].trim();
    if (g === 1) {
      w = w.replace(/\s*(?:=)?(\w+)\s*/, "$1");
    }
    if (w.length) {
      l.push(w);
    }
    const P = _h(C[y++]);
    if (l.length > d.length) {
      d.push(P);
    }
  }
  return {
    type: g,
    mainBinding: m,
    cases: l,
    values: d
  };
}
function _h(a) {
  if (!a) {
    return [];
  }
  let l = 0;
  const d = [];
  const g = [];
  const m = /[{}]/g;
  let C;
  for (m.lastIndex = 0; C = m.exec(a);) {
    const w = C.index;
    if (C[0] == "}") {
      d.pop();
      if (d.length == 0) {
        const P = a.substring(l, w);
        if (Og.test(P)) {
          g.push(VC(P));
        } else {
          g.push(P);
        }
        l = w + 1;
      }
    } else {
      if (d.length == 0) {
        const P = a.substring(l, w);
        g.push(P);
        l = w + 1;
      }
      d.push("{");
    }
  }
  const y = a.substring(l);
  g.push(y);
  return g;
}
function RC(a, l, d, g, m, C, y, w) {
  const P = [];
  const L = [];
  const B = [];
  l.cases.push(C);
  l.create.push(P);
  l.remove.push(L);
  l.update.push(B);
  const me = l6(o6()).getInertBodyElement(y);
  const Pe = ga(me) || me;
  if (Pe) {
    return vh(a, l, d, g, P, L, B, Pe, m, w, 0);
  } else {
    return 0;
  }
}
function vh(a, l, d, g, m, C, y, w, P, L, B) {
  let X = 0;
  let me = w.firstChild;
  while (me) {
    const Pe = U3(a, d, 1, null);
    switch (me.nodeType) {
      case Node.ELEMENT_NODE:
        const je = me;
        const lt = je.tagName.toLowerCase();
        if (u6.hasOwnProperty(lt)) {
          Ch(m, vi, lt, P, Pe);
          a.data[Pe] = lt;
          const ot = je.attributes;
          for (let hn = 0; hn < ot.length; hn++) {
            const Vi = ot.item(hn);
            const d1 = Vi.name.toLowerCase();
            if (Vi.value.match(bd)) {
              if (as.hasOwnProperty(d1)) {
                Su(y, Vi.value, Pe, Vi.name, 0, Q4[d1] ? mCW : null);
              }
            } else {
              UC(m, Pe, Vi);
            }
          }
          X = vh(a, l, d, g, m, C, y, me, Pe, L, B + 1) | X;
          Lg(C, Pe, B);
        }
        break;
      case Node.TEXT_NODE:
        const _t = me.textContent || "";
        const Ot = _t.match(bd);
        Ch(m, null, Ot ? "" : _t, P, Pe);
        Lg(C, Pe, B);
        if (Ot) {
          X = Su(y, _t, Pe, null, 0, null) | X;
        }
        break;
      case Node.COMMENT_NODE:
        const Xt = kg.exec(me.textContent || "");
        if (Xt) {
          const hn = L[parseInt(Xt[1], 10)];
          Ch(m, Ki, "", P, Pe);
          mh(a, d, g, P, hn, Pe);
          FC(C, Pe, B);
        }
    }
    me = me.nextSibling;
  }
  return X;
}
function Lg(a, l, d) {
  if (d === 0) {
    a.push(l);
  }
}
function FC(a, l, d) {
  if (d === 0) {
    a.push(~l);
    a.push(l);
  }
}
function Ch(a, l, d, g, m) {
  if (l !== null) {
    a.push(l);
  }
  a.push(d, m, function xC(a, l, d) {
    return a | l << 17 | d << 1;
  }(0, g, m));
}
function UC(a, l, d) {
  a.push(l << 1 | 1, d.name, d.value);
}
function Rg(a, l, d = -1) {
  const g = nn();
  const m = Ue();
  const C = 22 + a;
  const y = Ts(g.consts, l);
  const w = t3();
  if (g.firstCreatePass) {
    (function DC(a, l, d, g, m, C) {
      const y = t3();
      const w = [];
      const P = [];
      const L = [[]];
      m = function IC(a, l) {
        if (function HC(a) {
          return a === -1;
        }(l)) {
          return Dg(a);
        }
        {
          const d = a.indexOf(`:${l}\ufffd`) + 2 + l.toString().length;
          const g = a.search(new RegExp(`\ufffd\\/\\*\\d+:${l}\ufffd`));
          return Dg(a.substring(d, g));
        }
      }(m, C);
      const B = function EC(a) {
        return a.replace(PC, " ");
      }(m).split(AC);
      for (let X = 0; X < B.length; X++) {
        let me = B[X];
        if (X & 1) {
          const Pe = me.charCodeAt(0) === 47;
          me.charCodeAt(Pe ? 1 : 0);
          const lt = 22 + Number.parseInt(me.substring(Pe ? 2 : 1));
          if (Pe) {
            L.shift();
            Co(t3(), false);
          } else {
            const _t = bC(a, L[0], lt);
            L.unshift([]);
            Co(_t, true);
          }
        } else {
          const Pe = _h(me);
          for (let je = 0; je < Pe.length; je++) {
            let lt = Pe[je];
            if (je & 1) {
              const _t = lt;
              if (typeof _t != "object") {
                throw new Error(`Unable to parse ICU expression in "${m}" message.`);
              }
              mh(a, d, P, l, _t, Pg(a, y, L[0], d, w, "", true).index);
            } else if (lt !== "") {
              LC(a, y, L[0], w, P, d, lt);
            }
          }
        }
      }
      a.data[g] = {
        create: w,
        update: P
      };
    })(g, w === null ? 0 : w.index, m, C, y, d);
  }
  const P = g.data[C];
  const B = Pn(g, w === m[6] ? null : w, m);
  (function wC(a, l, d, g) {
    const m = a[11];
    for (let C = 0; C < l.length; C++) {
      const y = l[C++];
      const w = l[C];
      const L = (y & Jn.APPEND_EAGERLY) === Jn.APPEND_EAGERLY;
      const B = y >>> Jn.SHIFT;
      let X = a[B];
      if (X === null) {
        X = a[B] = (y & Jn.COMMENT) === Jn.COMMENT ? m.createComment(w) : W0(m, w);
      }
      if (L && d !== null) {
        Fr(m, d, X, g, false);
      }
    }
  })(m, P.create, B, w && w.type & 8 ? m[w.index] : null);
  Ga(true);
}
export function SDv(a, l, d) {
  Rg(a, l, d);
  (function xd() {
    Ga(false);
  })();
}
export function pQV(a) {
  (function yC(a) {
    if (a) {
      Fl |= 1 << Math.min(yu, 31);
    }
    yu++;
  })($1(Ue(), Z1(), a));
  return pQV;
}
export function QtT(a) {
  (function MC(a, l, d) {
    if (yu > 0) {
      const g = a.data[d];
      Mu(a, l, Array.isArray(g) ? g : g.update, g1() - yu - 1, Fl);
    }
    Fl = 0;
    yu = 0;
  })(nn(), Ue(), a + 22);
}
function xh(a, l, d, g, m) {
  a = G(a);
  if (Array.isArray(a)) {
    for (let C = 0; C < a.length; C++) {
      xh(a[C], l, d, g, m);
    }
  } else {
    const C = nn();
    const y = Ue();
    let w = cs(a) ? a : G(a.provide);
    let P = N3(a);
    const L = s1();
    const B = L.providerIndexes & 1048575;
    const X = L.directiveStart;
    const me = L.providerIndexes >> 20;
    if (cs(a) || !a.multi) {
      const Pe = new Ge(P, m, Y36);
      const je = Mh(w, l, m ? B : B + me, X);
      if (je === -1) {
        $a(Es(L, y), C, w);
        yh(C, a, l.length);
        l.push(w);
        L.directiveStart++;
        L.directiveEnd++;
        if (m) {
          L.providerIndexes += 1048576;
        }
        d.push(Pe);
        y.push(Pe);
      } else {
        d[je] = Pe;
        y[je] = Pe;
      }
    } else {
      const Pe = Mh(w, l, B + me, X);
      const je = Mh(w, l, B, B + me);
      const _t = je >= 0 && d[je];
      if (m && !_t || !m && (!(Pe >= 0) || !d[Pe])) {
        $a(Es(L, y), C, w);
        const Ot = function KC(a, l, d, g, m) {
          const C = new Ge(a, d, Y36);
          C.multi = [];
          C.index = l;
          C.componentProviders = 0;
          Zg(C, m, g && !d);
          return C;
        }(m ? QC : JC, d.length, m, g, P);
        if (!m && _t) {
          d[je].providerFactory = Ot;
        }
        yh(C, a, l.length, 0);
        l.push(w);
        L.directiveStart++;
        L.directiveEnd++;
        if (m) {
          L.providerIndexes += 1048576;
        }
        d.push(Ot);
        y.push(Ot);
      } else {
        yh(C, a, Pe > -1 ? Pe : je, Zg(d[m ? je : Pe], P, !m && g));
      }
      if (!m && g && _t) {
        d[je].componentProviders++;
      }
    }
  }
}
function yh(a, l, d, g) {
  const m = cs(l);
  const C = function z8(a) {
    return !!a.useClass;
  }(l);
  if (m || C) {
    const P = (C ? G(l.useClass) : l).prototype.ngOnDestroy;
    if (P) {
      const L = a.destroyHooks ||= [];
      if (!m && l.multi) {
        const B = L.indexOf(d);
        if (B === -1) {
          L.push(d, [g, P]);
        } else {
          L[B + 1].push(g, P);
        }
      } else {
        L.push(d, P);
      }
    }
  }
}
function Zg(a, l, d) {
  if (d) {
    a.componentProviders++;
  }
  return a.multi.push(l) - 1;
}
function Mh(a, l, d, g) {
  for (let m = d; m < g; m++) {
    if (l[m] === a) {
      return m;
    }
  }
  return -1;
}
function JC(a, l, d, g) {
  return yd(this.multi, []);
}
function QC(a, l, d, g) {
  const m = this.multi;
  let C;
  if (this.providerFactory) {
    const y = this.providerFactory.componentProviders;
    const w = xo(d, d[1], this.providerFactory.index, g);
    C = w.slice(0, y);
    yd(m, C);
    for (let P = y; P < w.length; P++) {
      C.push(w[P]);
    }
  } else {
    C = [];
    yd(m, C);
  }
  return C;
}
function yd(a, l) {
  for (let d = 0; d < a.length; d++) {
    l.push((0, a[d])());
  }
  return l;
}
export function _Bn(a, l = []) {
  return d => {
    d.providersResolver = (g, m) => function WC(a, l, d) {
      const g = nn();
      if (g.firstCreatePass) {
        const m = P1(a);
        xh(d, g.data, g.blueprint, m, true);
        xh(l, g.data, g.blueprint, m, false);
      }
    }(g, m ? m(a) : a, l);
  };
}
export class h0i {}
export class YKP {}
export function Lck(a, l) {
  return new qg(a, l ?? null);
}
class qg extends h0i {
  constructor(l, d) {
    super();
    this._parent = d;
    this._bootstrapComponents = [];
    this.destroyCbs = [];
    this.componentFactoryResolver = new Y6(this);
    const g = Ai(l);
    this._bootstrapComponents = ds(g.bootstrap);
    this._r3Injector = A6(l, d, [{
      provide: h0i,
      useValue: this
    }, {
      provide: _Vd,
      useValue: this.componentFactoryResolver
    }], AaK(l), new Set(["environment"]));
    this._r3Injector.resolveInjectorInitializers();
    this.instance = this._r3Injector.get(l);
  }
  get injector() {
    return this._r3Injector;
  }
  destroy() {
    const l = this._r3Injector;
    if (!l.destroyed) {
      l.destroy();
    }
    this.destroyCbs.forEach(d => d());
    this.destroyCbs = null;
  }
  onDestroy(l) {
    this.destroyCbs.push(l);
  }
}
class Th extends YKP {
  constructor(l) {
    super();
    this.moduleType = l;
  }
  create(l) {
    return new qg(this.moduleType, l);
  }
}
class Gg extends h0i {
  constructor(l, d, g) {
    super();
    this.componentFactoryResolver = new Y6(this);
    this.instance = null;
    const m = new Ii([...l, {
      provide: h0i,
      useValue: this
    }, {
      provide: _Vd,
      useValue: this.componentFactoryResolver
    }], d || nl(), g, new Set(["environment"]));
    this.injector = m;
    m.resolveInjectorInitializers();
  }
  destroy() {
    this.injector.destroy();
  }
  onDestroy(l) {
    this.injector.onDestroy(l);
  }
}
export function MMx(a, l, d = null) {
  return new Gg(a, l, d).injector;
}
let eb = (() => {
  class a {
    constructor(d) {
      this._injector = d;
      this.cachedInjectors = new Map();
    }
    getOrCreateStandaloneInjector(d) {
      if (!d.standalone) {
        return null;
      }
      if (!this.cachedInjectors.has(d.id)) {
        const g = f6(0, d.type);
        const m = g.length > 0 ? MMx([g], this._injector, `Standalone[${d.type.name}]`) : null;
        this.cachedInjectors.set(d.id, m);
      }
      return this.cachedInjectors.get(d.id);
    }
    ngOnDestroy() {
      try {
        for (const d of this.cachedInjectors.values()) {
          if (d !== null) {
            d.destroy();
          }
        }
      } finally {
        this.cachedInjectors.clear();
      }
    }
  }
  a.ɵprov = Yz7({
    token: a,
    providedIn: "environment",
    factory: () => new a(LFG(lqb))
  });
  return a;
})();
export function jDz(a) {
  a.getStandaloneInjector = l => l.get(eb).getOrCreateStandaloneInjector(a);
}
export function DdM(a, l, d) {
  const g = ai() + a;
  const m = Ue();
  if (m[g] === pn) {
    return ms(m, g, d ? l.call(d) : l());
  } else {
    return function Ac(a, l) {
      return a[l];
    }(m, g);
  }
}
export function VKq(a, l, d, g) {
  return Dh(Ue(), ai(), a, l, d, g);
}
export function WLB(a, l, d, g, m) {
  return sm(Ue(), ai(), a, l, d, g, m);
}
export function kEZ(a, l, d, g, m, C) {
  return am(Ue(), ai(), a, l, d, g, m, C);
}
export function l5B(a, l, d, g, m, C, y) {
  return function cm(a, l, d, g, m, C, y, w, P) {
    const L = l + d;
    if (qr(a, L, m, C, y, w)) {
      return ms(a, L + 4, P ? g.call(P, m, C, y, w) : g(m, C, y, w));
    } else {
      return Tu(a, L + 4);
    }
  }(Ue(), ai(), a, l, d, g, m, C, y);
}
function Tu(a, l) {
  const d = a[l];
  if (d === pn) {
    return undefined;
  } else {
    return d;
  }
}
function Dh(a, l, d, g, m, C) {
  const y = l + d;
  if ($1(a, y, m)) {
    return ms(a, y + 1, C ? g.call(C, m) : g(m));
  } else {
    return Tu(a, y + 1);
  }
}
function sm(a, l, d, g, m, C, y) {
  const w = l + d;
  if (Gs(a, w, m, C)) {
    return ms(a, w + 2, y ? g.call(y, m, C) : g(m, C));
  } else {
    return Tu(a, w + 2);
  }
}
function am(a, l, d, g, m, C, y, w) {
  const P = l + d;
  if (wl(a, P, m, C, y)) {
    return ms(a, P + 3, w ? g.call(w, m, C, y) : g(m, C, y));
  } else {
    return Tu(a, P + 3);
  }
}
export function ALo(a, l) {
  const d = nn();
  let g;
  const m = a + 22;
  if (d.firstCreatePass) {
    g = function um(a, l) {
      if (l) {
        for (let d = l.length - 1; d >= 0; d--) {
          const g = l[d];
          if (a === g.name) {
            return g;
          }
        }
      }
    }(l, d.pipeRegistry);
    d.data[m] = g;
    if (g.onDestroy) {
      (d.destroyHooks ||= []).push(m, g.onDestroy);
    }
  } else {
    g = d.data[m];
  }
  const C = g.factory ||= F1(g.type);
  const y = t1(Y36);
  try {
    const w = f2(false);
    const P = C();
    f2(w);
    (function Fp(a, l, d, g) {
      if (d >= a.data.length) {
        a.data[d] = null;
        a.blueprint[d] = null;
      }
      l[d] = g;
    })(d, Ue(), m, P);
    return P;
  } finally {
    t1(y);
  }
}
export function lcZ(a, l, d) {
  const g = a + 22;
  const m = Ue();
  const C = B1(m, g);
  if (ku(m, g)) {
    return Dh(m, ai(), l, C.transform, d, C);
  } else {
    return C.transform(d);
  }
}
export function xi3(a, l, d, g) {
  const m = a + 22;
  const C = Ue();
  const y = B1(C, m);
  if (ku(C, m)) {
    return sm(C, ai(), l, y.transform, d, g, y);
  } else {
    return y.transform(d, g);
  }
}
export function Dn7(a, l, d, g, m) {
  const C = a + 22;
  const y = Ue();
  const w = B1(y, C);
  if (ku(y, C)) {
    return am(y, ai(), l, w.transform, d, g, m, w);
  } else {
    return w.transform(d, g, m);
  }
}
function ku(a, l) {
  return a[1].data[l].pure;
}
function zh(a) {
  return l => {
    setTimeout(a, undefined, l);
  };
}
export const vpe = class hm extends O.x {
  constructor(l = false) {
    super();
    this.__isAsync = l;
  }
  emit(l) {
    super.next(l);
  }
  subscribe(l, d, g) {
    let m = l;
    let C = d || (() => null);
    let y = g;
    if (l && typeof l == "object") {
      const P = l;
      m = P.next?.bind(P);
      C = P.error?.bind(P);
      y = P.complete?.bind(P);
    }
    if (this.__isAsync) {
      C = zh(C);
      m &&= zh(m);
      y &&= zh(y);
    }
    const w = super.subscribe({
      next: m,
      error: C,
      complete: y
    });
    if (l instanceof e.w0) {
      l.add(w);
    }
    return w;
  }
};
function Md() {
  return this._results[E2()]();
}
class Hh {
  get changes() {
    return this._changes ||= new vpe();
  }
  constructor(l = false) {
    this._emitDistinctChangesOnly = l;
    this.dirty = true;
    this._results = [];
    this._changesDetected = false;
    this._changes = null;
    this.length = 0;
    this.first = undefined;
    this.last = undefined;
    const d = E2();
    const g = Hh.prototype;
    g[d] ||= Md;
  }
  get(l) {
    return this._results[l];
  }
  map(l) {
    return this._results.map(l);
  }
  filter(l) {
    return this._results.filter(l);
  }
  find(l) {
    return this._results.find(l);
  }
  reduce(l, d) {
    return this._results.reduce(l, d);
  }
  forEach(l) {
    this._results.forEach(l);
  }
  some(l) {
    return this._results.some(l);
  }
  toArray() {
    return this._results.slice();
  }
  toString() {
    return this._results.toString();
  }
  reset(l, d) {
    const g = this;
    g.dirty = false;
    const m = function Yi(a) {
      return a.flat(Number.POSITIVE_INFINITY);
    }(l);
    if (this._changesDetected = !function v2(a, l, d) {
      if (a.length !== l.length) {
        return false;
      }
      for (let g = 0; g < a.length; g++) {
        let m = a[g];
        let C = l[g];
        if (d) {
          m = d(m);
          C = d(C);
        }
        if (C !== m) {
          return false;
        }
      }
      return true;
    }(g._results, m, d)) {
      g._results = m;
      g.length = m.length;
      g.last = m[this.length - 1];
      g.first = m[0];
    }
  }
  notifyOnChanges() {
    if (this._changes && (this._changesDetected || !this._emitDistinctChangesOnly)) {
      this._changes.emit(this);
    }
  }
  setDirty() {
    this.dirty = true;
  }
  destroy() {
    this.changes.complete();
    this.changes.unsubscribe();
  }
}
export let Rgc = (() => {
  class a {}
  a.__NG_ELEMENT_ID__ = hb;
  return a;
})();
const db = Rgc;
const pb = class extends db {
  constructor(l, d, g) {
    super();
    this._declarationLView = l;
    this._declarationTContainer = d;
    this.elementRef = g;
  }
  createEmbeddedView(l, d) {
    const g = this._declarationTContainer.tViews;
    const m = B3(this._declarationLView, g, l, 16, null, g.declTNode, null, null, null, null, d || null);
    m[17] = this._declarationLView[this._declarationTContainer.index];
    const y = this._declarationLView[19];
    if (y !== null) {
      m[19] = y.createEmbeddedView(g);
    }
    cl(g, m, l);
    return new kc(m);
  }
};
function hb() {
  return Au(s1(), Ue());
}
function Au(a, l) {
  if (a.type & 4) {
    return new pb(l, a, xc(a, l));
  } else {
    return null;
  }
}
export let s_b = (() => {
  class a {}
  a.__NG_ELEMENT_ID__ = fm;
  return a;
})();
function fm() {
  return _m(s1(), Ue());
}
const fb = s_b;
const gm = class extends fb {
  constructor(l, d, g) {
    super();
    this._lContainer = l;
    this._hostTNode = d;
    this._hostLView = g;
  }
  get element() {
    return xc(this._hostTNode, this._hostLView);
  }
  get injector() {
    return new Xo(this._hostTNode, this._hostLView);
  }
  get parentInjector() {
    const l = br(this._hostTNode, this._hostLView);
    if (h2(l)) {
      const d = As(l, this._hostLView);
      const g = ea(l);
      return new Xo(d[1].data[g + 8], d);
    }
    return new Xo(null, this._hostLView);
  }
  clear() {
    while (this.length > 0) {
      this.remove(this.length - 1);
    }
  }
  get(l) {
    const d = mm(this._lContainer);
    return d !== null && d[l] || null;
  }
  get length() {
    return this._lContainer.length - 10;
  }
  createEmbeddedView(l, d, g) {
    let m;
    let C;
    if (typeof g == "number") {
      m = g;
    } else if (g != null) {
      m = g.index;
      C = g.injector;
    }
    const y = l.createEmbeddedView(d || {}, C);
    this.insert(y, m);
    return y;
  }
  createComponent(l, d, g, m, C) {
    const y = l && !function xr(a) {
      return typeof a == "function";
    }(l);
    let w;
    if (y) {
      w = d;
    } else {
      const X = d || {};
      w = X.index;
      g = X.injector;
      m = X.projectableNodes;
      C = X.environmentInjector || X.ngModuleRef;
    }
    const P = y ? l : new Oc(En(l));
    const L = g || this.parentInjector;
    if (!C && P.ngModule == null) {
      const me = (y ? L : this.parentInjector).get(lqb, null);
      if (me) {
        C = me;
      }
    }
    const B = P.create(L, m, undefined, C);
    this.insert(B.hostView, w);
    return B;
  }
  insert(l, d) {
    const g = l._lView;
    const m = g[1];
    if (function C4(a) {
      return X1(a[3]);
    }(g)) {
      const B = this.indexOf(l);
      if (B !== -1) {
        this.detach(B);
      } else {
        const X = g[3];
        const me = new gm(X, X[6], X[3]);
        me.detach(me.indexOf(l));
      }
    }
    const C = this._adjustIndex(d);
    const y = this._lContainer;
    (function y8(a, l, d, g) {
      const m = 10 + g;
      const C = d.length;
      if (g > 0) {
        d[m - 1][4] = l;
      }
      if (g < C - 10) {
        l[4] = d[m];
        z0(d, 10 + g, l);
      } else {
        d.push(l);
        l[4] = null;
      }
      l[3] = d;
      const y = l[17];
      if (y !== null && d !== y) {
        (function hi(a, l) {
          const d = a[9];
          if (l[16] !== l[3][3][16]) {
            a[2] = true;
          }
          if (d === null) {
            a[9] = [l];
          } else {
            d.push(l);
          }
        })(y, l);
      }
      const w = l[19];
      if (w !== null) {
        w.insertView(a);
      }
      l[2] |= 64;
    })(m, g, y, C);
    const w = G4(C, y);
    const P = g[11];
    const L = Z4(P, y[7]);
    if (L !== null) {
      (function M3(a, l, d, g, m, C) {
        g[0] = m;
        g[6] = l;
        Ar(a, g, d, 1, m, C);
      })(m, y[6], P, g, L, w);
    }
    l.attachToViewContainerRef();
    z0(Sd(y), C, l);
    return l;
  }
  move(l, d) {
    return this.insert(l, d);
  }
  indexOf(l) {
    const d = mm(this._lContainer);
    if (d !== null) {
      return d.indexOf(l);
    } else {
      return -1;
    }
  }
  remove(l) {
    const d = this._adjustIndex(l, -1);
    const g = K0(this._lContainer, d);
    if (g) {
      Qa(Sd(this._lContainer), d);
      Ei(g[1], g);
    }
  }
  detach(l) {
    const d = this._adjustIndex(l, -1);
    const g = K0(this._lContainer, d);
    if (g && Qa(Sd(this._lContainer), d) != null) {
      return new kc(g);
    } else {
      return null;
    }
  }
  _adjustIndex(l, d = 0) {
    return l ?? this.length + d;
  }
};
function mm(a) {
  return a[8];
}
function Sd(a) {
  return a[8] ||= [];
}
function _m(a, l) {
  let d;
  const g = l[a.index];
  if (X1(g)) {
    d = g;
  } else {
    let m;
    if (a.type & 8) {
      m = zi(g);
    } else {
      const C = l[11];
      m = C.createComment("");
      const y = Fi(a, l);
      Fr(C, Z4(C, y), m, function t6(a, l) {
        return a.nextSibling(l);
      }(C, y), false);
    }
    l[a.index] = d = xa(g, l, m, a);
    fl(l, d);
  }
  return new gm(d, a, l);
}
class Pu {
  constructor(l) {
    this.queryList = l;
    this.matches = null;
  }
  clone() {
    return new Pu(this.queryList);
  }
  setDirty() {
    this.queryList.setDirty();
  }
}
class Ih {
  constructor(l = []) {
    this.queries = l;
  }
  createEmbeddedView(l) {
    const d = l.queries;
    if (d !== null) {
      const g = l.contentQueries !== null ? l.contentQueries[0] : d.length;
      const m = [];
      for (let C = 0; C < g; C++) {
        const y = d.getByIndex(C);
        m.push(this.queries[y.indexInDeclarationView].clone());
      }
      return new Ih(m);
    }
    return null;
  }
  insertView(l) {
    this.dirtyQueriesWithMatches(l);
  }
  detachView(l) {
    this.dirtyQueriesWithMatches(l);
  }
  dirtyQueriesWithMatches(l) {
    for (let d = 0; d < this.queries.length; d++) {
      if (km(l, d).matches !== null) {
        this.queries[d].setDirty();
      }
    }
  }
}
class vm {
  constructor(l, d, g = null) {
    this.predicate = l;
    this.flags = d;
    this.read = g;
  }
}
class Td {
  constructor(l = []) {
    this.queries = l;
  }
  elementStart(l, d) {
    for (let g = 0; g < this.queries.length; g++) {
      this.queries[g].elementStart(l, d);
    }
  }
  elementEnd(l) {
    for (let d = 0; d < this.queries.length; d++) {
      this.queries[d].elementEnd(l);
    }
  }
  embeddedTView(l) {
    let d = null;
    for (let g = 0; g < this.length; g++) {
      const m = d !== null ? d.length : 0;
      const C = this.getByIndex(g).embeddedTView(l, m);
      if (C) {
        C.indexInDeclarationView = g;
        if (d !== null) {
          d.push(C);
        } else {
          d = [C];
        }
      }
    }
    if (d !== null) {
      return new Td(d);
    } else {
      return null;
    }
  }
  template(l, d) {
    for (let g = 0; g < this.queries.length; g++) {
      this.queries[g].template(l, d);
    }
  }
  getByIndex(l) {
    return this.queries[l];
  }
  get length() {
    return this.queries.length;
  }
  track(l) {
    this.queries.push(l);
  }
}
class Vh {
  constructor(l, d = -1) {
    this.metadata = l;
    this.matches = null;
    this.indexInDeclarationView = -1;
    this.crossesNgTemplate = false;
    this._appliesToNextNode = true;
    this._declarationNodeIndex = d;
  }
  elementStart(l, d) {
    if (this.isApplyingToNode(d)) {
      this.matchTNode(l, d);
    }
  }
  elementEnd(l) {
    if (this._declarationNodeIndex === l.index) {
      this._appliesToNextNode = false;
    }
  }
  template(l, d) {
    this.elementStart(l, d);
  }
  embeddedTView(l, d) {
    if (this.isApplyingToNode(l)) {
      this.crossesNgTemplate = true;
      this.addMatch(-l.index, d);
      return new Vh(this.metadata);
    } else {
      return null;
    }
  }
  isApplyingToNode(l) {
    if (this._appliesToNextNode && (this.metadata.flags & 1) != 1) {
      const d = this._declarationNodeIndex;
      let g = l.parent;
      while (g !== null && g.type & 8 && g.index !== d) {
        g = g.parent;
      }
      return d === (g !== null ? g.index : -1);
    }
    return this._appliesToNextNode;
  }
  matchTNode(l, d) {
    const g = this.metadata.predicate;
    if (Array.isArray(g)) {
      for (let m = 0; m < g.length; m++) {
        const C = g[m];
        this.matchTNodeWithReadOption(l, d, gb(d, C));
        this.matchTNodeWithReadOption(l, d, g2(d, l, C, false, false));
      }
    } else if (g === Rgc) {
      if (d.type & 4) {
        this.matchTNodeWithReadOption(l, d, -1);
      }
    } else {
      this.matchTNodeWithReadOption(l, d, g2(d, l, g, false, false));
    }
  }
  matchTNodeWithReadOption(l, d, g) {
    if (g !== null) {
      const m = this.metadata.read;
      if (m !== null) {
        if (m === SBq || m === s_b || m === Rgc && d.type & 4) {
          this.addMatch(d.index, -2);
        } else {
          const C = g2(d, l, m, false, false);
          if (C !== null) {
            this.addMatch(d.index, C);
          }
        }
      } else {
        this.addMatch(d.index, g);
      }
    }
  }
  addMatch(l, d) {
    if (this.matches === null) {
      this.matches = [l, d];
    } else {
      this.matches.push(l, d);
    }
  }
}
function gb(a, l) {
  const d = a.localNames;
  if (d !== null) {
    for (let g = 0; g < d.length; g += 2) {
      if (d[g] === l) {
        return d[g + 1];
      }
    }
  }
  return null;
}
function mb(a, l, d, g) {
  if (d === -1) {
    return function Cm(a, l) {
      if (a.type & 11) {
        return xc(a, l);
      } else if (a.type & 4) {
        return Au(a, l);
      } else {
        return null;
      }
    }(l, a);
  } else if (d === -2) {
    return function _b(a, l, d) {
      if (d === SBq) {
        return xc(l, a);
      } else if (d === Rgc) {
        return Au(l, a);
      } else if (d === s_b) {
        return _m(l, a);
      } else {
        return undefined;
      }
    }(a, l, g);
  } else {
    return xo(a, a[1], d, l);
  }
}
function bm(a, l, d, g) {
  const m = l[19].queries[g];
  if (m.matches === null) {
    const C = a.data;
    const y = d.matches;
    const w = [];
    for (let P = 0; P < y.length; P += 2) {
      const L = y[P];
      w.push(L < 0 ? null : mb(l, C[L], y[P + 1], d.metadata.read));
    }
    m.matches = w;
  }
  return m.matches;
}
function Rh(a, l, d, g) {
  const m = a.queries.getByIndex(d);
  const C = m.matches;
  if (C !== null) {
    const y = bm(a, l, m, d);
    for (let w = 0; w < C.length; w += 2) {
      const P = C[w];
      if (P > 0) {
        g.push(y[w / 2]);
      } else {
        const L = C[w + 1];
        const B = l[-P];
        for (let X = 10; X < B.length; X++) {
          const me = B[X];
          if (me[17] === me[3]) {
            Rh(me[1], me, L, g);
          }
        }
        if (B[9] !== null) {
          const X = B[9];
          for (let me = 0; me < X.length; me++) {
            const Pe = X[me];
            Rh(Pe[1], Pe, L, g);
          }
        }
      }
    }
  }
  return g;
}
export function iGM(a) {
  const l = Ue();
  const d = nn();
  const g = w0();
  w4(g + 1);
  const m = km(d, g);
  if (a.dirty && function Ss(a) {
    return (a[2] & 4) == 4;
  }(l) === ((m.metadata.flags & 2) == 2)) {
    if (m.matches === null) {
      a.reset([]);
    } else {
      const C = m.crossesNgTemplate ? Rh(d, l, g, []) : bm(d, l, m, g);
      a.reset(C, H3);
      a.notifyOnChanges();
    }
    return true;
  }
  return false;
}
export function Gf(a, l, d) {
  const g = nn();
  if (g.firstCreatePass) {
    Fh(g, new vm(a, l, d), -1);
    if ((l & 2) == 2) {
      g.staticViewQueries = true;
    }
  }
  Tm(g, Ue(), l);
}
export function Suo(a, l, d, g) {
  const m = nn();
  if (m.firstCreatePass) {
    const C = s1();
    Fh(m, new vm(l, d, g), C.index);
    (function vb(a, l) {
      const d = a.contentQueries ||= [];
      if (l !== (d.length ? d[d.length - 1] : -1)) {
        d.push(a.queries.length - 1, l);
      }
    })(m, a);
    if ((d & 2) == 2) {
      m.staticContentQueries = true;
    }
  }
  Tm(m, Ue(), d);
}
export function CRH() {
  return function Sm(a, l) {
    return a[19].queries[l].queryList;
  }(Ue(), w0());
}
function Tm(a, l, d) {
  const g = new Hh((d & 4) == 4);
  R6(a, l, g, g.destroy);
  if (l[19] === null) {
    l[19] = new Ih();
  }
  l[19].queries.push(new Pu(g));
}
function Fh(a, l, d) {
  if (a.queries === null) {
    a.queries = new Td();
  }
  a.queries.track(new Vh(l, d));
}
function km(a, l) {
  return a.queries.getByIndex(l);
}
export function W1O(a, l) {
  return Au(a, l);
}
function Ad(...a) {}
export const ip1 = new OlP("Application Initializer");
export let CZH = (() => {
  class a {
    constructor(d) {
      this.appInits = d;
      this.resolve = Ad;
      this.reject = Ad;
      this.initialized = false;
      this.done = false;
      this.donePromise = new Promise((g, m) => {
        this.resolve = g;
        this.reject = m;
      });
    }
    runInitializers() {
      if (this.initialized) {
        return;
      }
      const d = [];
      const g = () => {
        this.done = true;
        this.resolve();
      };
      if (this.appInits) {
        for (let m = 0; m < this.appInits.length; m++) {
          const C = this.appInits[m]();
          if (QGY(C)) {
            d.push(C);
          } else if (CqO(C)) {
            const y = new Promise((w, P) => {
              C.subscribe({
                complete: w,
                error: P
              });
            });
            d.push(y);
          }
        }
      }
      Promise.all(d).then(() => {
        g();
      }).catch(m => {
        this.reject(m);
      });
      if (d.length === 0) {
        g();
      }
      this.initialized = true;
    }
  }
  a.ɵfac = function (d) {
    return new (d || a)(LFG(ip1, 8));
  };
  a.ɵprov = Yz7({
    token: a,
    factory: a.ɵfac,
    providedIn: "root"
  });
  return a;
})();
export const AFp = new OlP("AppId", {
  providedIn: "root",
  factory: function $h() {
    return `${Wh()}${Wh()}${Wh()}`;
  }
});
function Wh() {
  return String.fromCharCode(97 + Math.floor(Math.random() * 25));
}
export const g9A = new OlP("Platform Initializer");
export const Lbi = new OlP("Platform ID", {
  providedIn: "platform",
  factory: () => "unknown"
});
export const tb = new OlP("appBootstrapListener");
export let c2e = (() => {
  class a {
    log(d) {
      console.log(d);
    }
    warn(d) {
      console.warn(d);
    }
  }
  a.ɵfac = function (d) {
    return new (d || a)();
  };
  a.ɵprov = Yz7({
    token: a,
    factory: a.ɵfac,
    providedIn: "platform"
  });
  return a;
})();
export const soG = new OlP("LocaleId", {
  providedIn: "root",
  factory: () => f3M(soG, XFs.Optional | XFs.SkipSelf) || function zb() {
    return typeof $localize !== "undefined" && $localize.locale || wt;
  }()
});
export const EJc = new OlP("DefaultCurrencyCode", {
  providedIn: "root",
  factory: () => "USD"
});
class Vb {
  constructor(l, d) {
    this.ngModuleFactory = l;
    this.componentFactories = d;
  }
}
export let Sil = (() => {
  class a {
    compileModuleSync(d) {
      return new Th(d);
    }
    compileModuleAsync(d) {
      return Promise.resolve(this.compileModuleSync(d));
    }
    compileModuleAndAllComponentsSync(d) {
      const g = this.compileModuleSync(d);
      const C = ds(Ai(d).declarations).reduce((y, w) => {
        const P = En(w);
        if (P) {
          y.push(new Oc(P));
        }
        return y;
      }, []);
      return new Vb(g, C);
    }
    compileModuleAndAllComponentsAsync(d) {
      return Promise.resolve(this.compileModuleAndAllComponentsSync(d));
    }
    clearCache() {}
    clearCacheFor(d) {}
    getModuleId(d) {}
  }
  a.ɵfac = function (d) {
    return new (d || a)();
  };
  a.ɵprov = Yz7({
    token: a,
    factory: a.ɵfac,
    providedIn: "root"
  });
  return a;
})();
const e_ = (() => Promise.resolve(0))();
function Kh(a) {
  if (typeof Zone === "undefined") {
    e_.then(() => {
      if (a) {
        a.apply(null, null);
      }
    });
  } else {
    Zone.current.scheduleMicroTask("scheduleMicrotask", a);
  }
}
export class R0b {
  constructor({
    enableLongStackTrace: l = false,
    shouldCoalesceEventChangeDetection: d = false,
    shouldCoalesceRunChangeDetection: g = false
  }) {
    this.hasPendingMacrotasks = false;
    this.hasPendingMicrotasks = false;
    this.isStable = true;
    this.onUnstable = new vpe(false);
    this.onMicrotaskEmpty = new vpe(false);
    this.onStable = new vpe(false);
    this.onError = new vpe(false);
    if (typeof Zone === "undefined") {
      throw new vHH(908, false);
    }
    Zone.assertZonePatched();
    const m = this;
    m._nesting = 0;
    m._outer = m._inner = Zone.current;
    if (Zone.TaskTrackingZoneSpec) {
      m._inner = m._inner.fork(new Zone.TaskTrackingZoneSpec());
    }
    if (l && Zone.longStackTraceZoneSpec) {
      m._inner = m._inner.fork(Zone.longStackTraceZoneSpec);
    }
    m.shouldCoalesceEventChangeDetection = !g && d;
    m.shouldCoalesceRunChangeDetection = g;
    m.lastRequestAnimationFrameId = -1;
    m.nativeRequestAnimationFrame = function Ub() {
      let a = dqk.requestAnimationFrame;
      let l = dqk.cancelAnimationFrame;
      if (typeof Zone !== "undefined" && a && l) {
        const d = a[Zone.__symbol__("OriginalDelegate")];
        if (d) {
          a = d;
        }
        const g = l[Zone.__symbol__("OriginalDelegate")];
        if (g) {
          l = g;
        }
      }
      return {
        nativeRequestAnimationFrame: a,
        nativeCancelAnimationFrame: l
      };
    }().nativeRequestAnimationFrame;
    (function qb(a) {
      const l = () => {
        (function Zb(a) {
          if (!a.isCheckStableRunning && a.lastRequestAnimationFrameId === -1) {
            a.lastRequestAnimationFrameId = a.nativeRequestAnimationFrame.call(dqk, () => {
              a.fakeTopEventTask ||= Zone.root.scheduleEventTask("fakeTopEventTask", () => {
                a.lastRequestAnimationFrameId = -1;
                tf(a);
                a.isCheckStableRunning = true;
                ef(a);
                a.isCheckStableRunning = false;
              }, undefined, () => {}, () => {});
              a.fakeTopEventTask.invoke();
            });
            tf(a);
          }
        })(a);
      };
      a._inner = a._inner.fork({
        name: "angular",
        properties: {
          isAngularZone: true
        },
        onInvokeTask: (d, g, m, C, y, w) => {
          try {
            t_(a);
            return d.invokeTask(m, C, y, w);
          } finally {
            if (a.shouldCoalesceEventChangeDetection && C.type === "eventTask" || a.shouldCoalesceRunChangeDetection) {
              l();
            }
            nf(a);
          }
        },
        onInvoke: (d, g, m, C, y, w, P) => {
          try {
            t_(a);
            return d.invoke(m, C, y, w, P);
          } finally {
            if (a.shouldCoalesceRunChangeDetection) {
              l();
            }
            nf(a);
          }
        },
        onHasTask: (d, g, m, C) => {
          d.hasTask(m, C);
          if (g === m) {
            if (C.change == "microTask") {
              a._hasPendingMicrotasks = C.microTask;
              tf(a);
              ef(a);
            } else if (C.change == "macroTask") {
              a.hasPendingMacrotasks = C.macroTask;
            }
          }
        },
        onHandleError: (d, g, m, C) => {
          d.handleError(m, C);
          a.runOutsideAngular(() => a.onError.emit(C));
          return false;
        }
      });
    })(m);
  }
  static isInAngularZone() {
    return typeof Zone !== "undefined" && Zone.current.get("isAngularZone") === true;
  }
  static assertInAngularZone() {
    if (!R0b.isInAngularZone()) {
      throw new vHH(909, false);
    }
  }
  static assertNotInAngularZone() {
    if (R0b.isInAngularZone()) {
      throw new vHH(909, false);
    }
  }
  run(l, d, g) {
    return this._inner.run(l, d, g);
  }
  runTask(l, d, g, m) {
    const C = this._inner;
    const y = C.scheduleEventTask("NgZoneEvent: " + m, l, Xh, Ad, Ad);
    try {
      return C.runTask(y, d, g);
    } finally {
      C.cancelTask(y);
    }
  }
  runGuarded(l, d, g) {
    return this._inner.runGuarded(l, d, g);
  }
  runOutsideAngular(l) {
    return this._outer.run(l);
  }
}
const Xh = {};
function ef(a) {
  if (a._nesting == 0 && !a.hasPendingMicrotasks && !a.isStable) {
    try {
      a._nesting++;
      a.onMicrotaskEmpty.emit(null);
    } finally {
      a._nesting--;
      if (!a.hasPendingMicrotasks) {
        try {
          a.runOutsideAngular(() => a.onStable.emit(null));
        } finally {
          a.isStable = true;
        }
      }
    }
  }
}
function tf(a) {
  a.hasPendingMicrotasks = !!a._hasPendingMicrotasks || (!!a.shouldCoalesceEventChangeDetection || !!a.shouldCoalesceRunChangeDetection) && a.lastRequestAnimationFrameId !== -1;
}
function t_(a) {
  a._nesting++;
  if (a.isStable) {
    a.isStable = false;
    a.onUnstable.emit(null);
  }
}
function nf(a) {
  a._nesting--;
  ef(a);
}
class Gb {
  constructor() {
    this.hasPendingMicrotasks = false;
    this.hasPendingMacrotasks = false;
    this.isStable = true;
    this.onUnstable = new vpe();
    this.onMicrotaskEmpty = new vpe();
    this.onStable = new vpe();
    this.onError = new vpe();
  }
  run(l, d, g) {
    return l.apply(d, g);
  }
  runGuarded(l, d, g) {
    return l.apply(d, g);
  }
  runOutsideAngular(l) {
    return l();
  }
  runTask(l, d, g, m) {
    return l.apply(d, g);
  }
}
export const lri = new OlP("");
export const rWj = new OlP("");
let Ed;
export let dDg = (() => {
  class a {
    constructor(d, g, m) {
      this._ngZone = d;
      this.registry = g;
      this._pendingCount = 0;
      this._isZoneStable = true;
      this._didWork = false;
      this._callbacks = [];
      this.taskTrackingZone = null;
      if (!Ed) {
        (function jb(a) {
          Ed = a;
        })(m);
        m.addToWindow(g);
      }
      this._watchAngularEvents();
      d.run(() => {
        this.taskTrackingZone = typeof Zone === "undefined" ? null : Zone.current.get("TaskTrackingZone");
      });
    }
    _watchAngularEvents() {
      this._ngZone.onUnstable.subscribe({
        next: () => {
          this._didWork = true;
          this._isZoneStable = false;
        }
      });
      this._ngZone.runOutsideAngular(() => {
        this._ngZone.onStable.subscribe({
          next: () => {
            R0b.assertNotInAngularZone();
            Kh(() => {
              this._isZoneStable = true;
              this._runCallbacksIfReady();
            });
          }
        });
      });
    }
    increasePendingRequestCount() {
      this._pendingCount += 1;
      this._didWork = true;
      return this._pendingCount;
    }
    decreasePendingRequestCount() {
      this._pendingCount -= 1;
      if (this._pendingCount < 0) {
        throw new Error("pending async requests below zero");
      }
      this._runCallbacksIfReady();
      return this._pendingCount;
    }
    isStable() {
      return this._isZoneStable && this._pendingCount === 0 && !this._ngZone.hasPendingMacrotasks;
    }
    _runCallbacksIfReady() {
      if (this.isStable()) {
        Kh(() => {
          while (this._callbacks.length !== 0) {
            let d = this._callbacks.pop();
            clearTimeout(d.timeoutId);
            d.doneCb(this._didWork);
          }
          this._didWork = false;
        });
      } else {
        let d = this.getPendingTasks();
        this._callbacks = this._callbacks.filter(g => !g.updateCb || !g.updateCb(d) || (clearTimeout(g.timeoutId), false));
        this._didWork = true;
      }
    }
    getPendingTasks() {
      if (this.taskTrackingZone) {
        return this.taskTrackingZone.macroTasks.map(d => ({
          source: d.source,
          creationLocation: d.creationLocation,
          data: d.data
        }));
      } else {
        return [];
      }
    }
    addCallback(d, g, m) {
      let C = -1;
      if (g && g > 0) {
        C = setTimeout(() => {
          this._callbacks = this._callbacks.filter(y => y.timeoutId !== C);
          d(this._didWork, this.getPendingTasks());
        }, g);
      }
      this._callbacks.push({
        doneCb: d,
        timeoutId: C,
        updateCb: m
      });
    }
    whenStable(d, g, m) {
      if (m && !this.taskTrackingZone) {
        throw new Error("Task tracking zone is required when passing an update callback to whenStable(). Is \"zone.js/plugins/task-tracking\" loaded?");
      }
      this.addCallback(d, g, m);
      this._runCallbacksIfReady();
    }
    getPendingRequestCount() {
      return this._pendingCount;
    }
    registerApplication(d) {
      this.registry.registerApplication(d, this);
    }
    unregisterApplication(d) {
      this.registry.unregisterApplication(d);
    }
    findProviders(d, g, m) {
      return [];
    }
  }
  a.ɵfac = function (d) {
    return new (d || a)(LFG(R0b), LFG(eoX), LFG(rWj));
  };
  a.ɵprov = Yz7({
    token: a,
    factory: a.ɵfac
  });
  return a;
})();
export let eoX = (() => {
  class a {
    constructor() {
      this._applications = new Map();
    }
    registerApplication(d, g) {
      this._applications.set(d, g);
    }
    unregisterApplication(d) {
      this._applications.delete(d);
    }
    unregisterAllApplications() {
      this._applications.clear();
    }
    getTestability(d) {
      return this._applications.get(d) || null;
    }
    getAllTestabilities() {
      return Array.from(this._applications.values());
    }
    getAllRootElements() {
      return Array.from(this._applications.keys());
    }
    findTestabilityInTree(d, g = true) {
      return Ed?.findTestabilityInTree(this, d, g) ?? null;
    }
  }
  a.ɵfac = function (d) {
    return new (d || a)();
  };
  a.ɵprov = Yz7({
    token: a,
    factory: a.ɵfac,
    providedIn: "platform"
  });
  return a;
})();
let Vc = null;
const rf = new OlP("AllowMultipleToken");
const sf = new OlP("PlatformDestroyListeners");
export class PXZ {
  constructor(l, d) {
    this.name = l;
    this.token = d;
  }
}
export function eFA(a, l, d = []) {
  const g = `Platform: ${l}`;
  const m = new OlP(g);
  return (C = []) => {
    let y = Gl();
    if (!y || y.injector.get(rf, false)) {
      const w = [...d, ...C, {
        provide: m,
        useValue: true
      }];
      if (a) {
        a(w);
      } else {
        (function c_(a) {
          if (Vc && !Vc.get(rf, false)) {
            throw new vHH(400, false);
          }
          Vc = a;
          const l = a.get(p_);
          (function l_(a) {
            const l = a.get(g9A, null);
            if (l) {
              l.forEach(d => d());
            }
          })(a);
        })(function d_(a = [], l) {
          return zs3.create({
            name: l,
            providers: [{
              provide: zSh,
              useValue: "platform"
            }, {
              provide: sf,
              useValue: new Set([() => Vc = null])
            }, ...a]
          });
        }(w, g));
      }
    }
    return function Wb(a) {
      const l = Gl();
      if (!l) {
        throw new vHH(401, false);
      }
      return l;
    }();
  };
}
function Gl() {
  return Vc?.get(p_) ?? null;
}
let p_ = (() => {
  class a {
    constructor(d) {
      this._injector = d;
      this._modules = [];
      this._destroyListeners = [];
      this._destroyed = false;
    }
    bootstrapModuleFactory(d, g) {
      const m = function f_(a, l) {
        let d;
        d = a === "noop" ? new Gb() : (a === "zone.js" ? undefined : a) || new R0b(l);
        return d;
      }(g?.ngZone, function h_(a) {
        return {
          enableLongStackTrace: false,
          shouldCoalesceEventChangeDetection: !!a && !!a.ngZoneEventCoalescing || false,
          shouldCoalesceRunChangeDetection: !!a && !!a.ngZoneRunCoalescing || false
        };
      }(g));
      const C = [{
        provide: R0b,
        useValue: m
      }];
      return m.run(() => {
        const y = zs3.create({
          providers: C,
          parent: this.injector,
          name: d.moduleType.name
        });
        const w = d.create(y);
        const P = w.injector.get(qLn, null);
        if (!P) {
          throw new vHH(402, false);
        }
        m.runOutsideAngular(() => {
          const L = m.onError.subscribe({
            next: B => {
              P.handleError(B);
            }
          });
          w.onDestroy(() => {
            Dd(this._modules, w);
            L.unsubscribe();
          });
        });
        return function g_(a, l, d) {
          try {
            const g = d();
            if (QGY(g)) {
              return g.catch(m => {
                l.runOutsideAngular(() => a.handleError(m));
                throw m;
              });
            } else {
              return g;
            }
          } catch (g) {
            l.runOutsideAngular(() => a.handleError(g));
            throw g;
          }
        }(P, m, () => {
          const L = w.injector.get(CZH);
          L.runInitializers();
          return L.donePromise.then(() => {
            zt(w.injector.get(soG, wt) || wt);
            this._moduleDoBootstrap(w);
            return w;
          });
        });
      });
    }
    bootstrapModule(d, g = []) {
      const m = m_({}, g);
      return function s_(a, l, d) {
        const g = new Th(d);
        return Promise.resolve(g);
      }(0, 0, d).then(C => this.bootstrapModuleFactory(C, m));
    }
    _moduleDoBootstrap(d) {
      const g = d.injector.get(z2F);
      if (d._bootstrapComponents.length > 0) {
        d._bootstrapComponents.forEach(m => g.bootstrap(m));
      } else {
        if (!d.instance.ngDoBootstrap) {
          throw new vHH(-403, false);
        }
        d.instance.ngDoBootstrap(g);
      }
      this._modules.push(d);
    }
    onDestroy(d) {
      this._destroyListeners.push(d);
    }
    get injector() {
      return this._injector;
    }
    destroy() {
      if (this._destroyed) {
        throw new vHH(404, false);
      }
      this._modules.slice().forEach(g => g.destroy());
      this._destroyListeners.forEach(g => g());
      const d = this._injector.get(sf, null);
      if (d) {
        d.forEach(g => g());
        d.clear();
      }
      this._destroyed = true;
    }
    get destroyed() {
      return this._destroyed;
    }
  }
  a.ɵfac = function (d) {
    return new (d || a)(LFG(zs3));
  };
  a.ɵprov = Yz7({
    token: a,
    factory: a.ɵfac,
    providedIn: "platform"
  });
  return a;
})();
function m_(a, l) {
  if (Array.isArray(l)) {
    return l.reduce(m_, a);
  } else {
    return {
      ...a,
      ...l
    };
  }
}
export let z2F = (() => {
  class a {
    get destroyed() {
      return this._destroyed;
    }
    get injector() {
      return this._injector;
    }
    constructor(d, g, m) {
      this._zone = d;
      this._injector = g;
      this._exceptionHandler = m;
      this._bootstrapListeners = [];
      this._views = [];
      this._runningTick = false;
      this._stable = true;
      this._destroyed = false;
      this._destroyListeners = [];
      this.componentTypes = [];
      this.components = [];
      this._onMicrotaskEmptySubscription = this._zone.onMicrotaskEmpty.subscribe({
        next: () => {
          this._zone.run(() => {
            this.tick();
          });
        }
      });
      const C = new de.y(w => {
        this._stable = this._zone.isStable && !this._zone.hasPendingMacrotasks && !this._zone.hasPendingMicrotasks;
        this._zone.runOutsideAngular(() => {
          w.next(this._stable);
          w.complete();
        });
      });
      const y = new de.y(w => {
        let P;
        this._zone.runOutsideAngular(() => {
          P = this._zone.onStable.subscribe(() => {
            R0b.assertNotInAngularZone();
            Kh(() => {
              if (!this._stable && !this._zone.hasPendingMacrotasks && !this._zone.hasPendingMicrotasks) {
                this._stable = true;
                w.next(true);
              }
            });
          });
        });
        const L = this._zone.onUnstable.subscribe(() => {
          R0b.assertInAngularZone();
          if (this._stable) {
            this._stable = false;
            this._zone.runOutsideAngular(() => {
              w.next(false);
            });
          }
        });
        return () => {
          P.unsubscribe();
          L.unsubscribe();
        };
      });
      this.isStable = (0, ce.T)(C, y.pipe((0, Ce.B)()));
    }
    bootstrap(d, g) {
      const m = d instanceof v6;
      if (!this._injector.get(CZH).done) {
        if (!m) {
          $WT(d);
        }
        throw new vHH(405, false);
      }
      let y;
      y = m ? d : this._injector.get(_Vd).resolveComponentFactory(d);
      this.componentTypes.push(y.componentType);
      const w = function a_(a) {
        return a.isBoundToModule;
      }(y) ? undefined : this._injector.get(h0i);
      const L = y.create(zs3.NULL, [], g || y.selector, w);
      const B = L.location.nativeElement;
      const X = L.injector.get(lri, null);
      X?.registerApplication(B);
      L.onDestroy(() => {
        this.detachView(L.hostView);
        Dd(this.components, L);
        X?.unregisterApplication(B);
      });
      this._loadComponent(L);
      return L;
    }
    tick() {
      if (this._runningTick) {
        throw new vHH(101, false);
      }
      try {
        this._runningTick = true;
        for (let d of this._views) {
          d.detectChanges();
        }
      } catch (d) {
        this._zone.runOutsideAngular(() => this._exceptionHandler.handleError(d));
      } finally {
        this._runningTick = false;
      }
    }
    attachView(d) {
      const g = d;
      this._views.push(g);
      g.attachToAppRef(this);
    }
    detachView(d) {
      const g = d;
      Dd(this._views, g);
      g.detachFromAppRef();
    }
    _loadComponent(d) {
      this.attachView(d.hostView);
      this.tick();
      this.components.push(d);
      const g = this._injector.get(tb, []);
      g.push(...this._bootstrapListeners);
      g.forEach(m => m(d));
    }
    ngOnDestroy() {
      if (!this._destroyed) {
        try {
          this._destroyListeners.forEach(d => d());
          this._views.slice().forEach(d => d.destroy());
          this._onMicrotaskEmptySubscription.unsubscribe();
        } finally {
          this._destroyed = true;
          this._views = [];
          this._bootstrapListeners = [];
          this._destroyListeners = [];
        }
      }
    }
    onDestroy(d) {
      this._destroyListeners.push(d);
      return () => Dd(this._destroyListeners, d);
    }
    destroy() {
      if (this._destroyed) {
        throw new vHH(406, false);
      }
      const d = this._injector;
      if (d.destroy && !d.destroyed) {
        d.destroy();
      }
    }
    get viewCount() {
      return this._views.length;
    }
    warnIfDestroyed() {}
  }
  a.ɵfac = function (d) {
    return new (d || a)(LFG(R0b), LFG(lqb), LFG(qLn));
  };
  a.ɵprov = Yz7({
    token: a,
    factory: a.ɵfac,
    providedIn: "root"
  });
  return a;
})();
function Dd(a, l) {
  const d = a.indexOf(l);
  if (d > -1) {
    a.splice(d, 1);
  }
}
export let sBO = (() => {
  class a {}
  a.__NG_ELEMENT_ID__ = Qb;
  return a;
})();
function Qb(a) {
  return function x_(a, l, d) {
    if (ne(a) && !d) {
      const g = ei(a.index, l);
      return new kc(g, g);
    }
    if (a.type & 47) {
      return new kc(l[16], l);
    } else {
      return null;
    }
  }(s1(), Ue(), (a & 16) == 16);
}
class S_ {
  constructor() {}
  supports(l) {
    return j3(l);
  }
  create(l) {
    return new ix(l);
  }
}
const nx = (a, l) => l;
class ix {
  constructor(l) {
    this.length = 0;
    this._linkedRecords = null;
    this._unlinkedRecords = null;
    this._previousItHead = null;
    this._itHead = null;
    this._itTail = null;
    this._additionsHead = null;
    this._additionsTail = null;
    this._movesHead = null;
    this._movesTail = null;
    this._removalsHead = null;
    this._removalsTail = null;
    this._identityChangesHead = null;
    this._identityChangesTail = null;
    this._trackByFn = l || nx;
  }
  forEachItem(l) {
    let d;
    for (d = this._itHead; d !== null; d = d._next) {
      l(d);
    }
  }
  forEachOperation(l) {
    let d = this._itHead;
    let g = this._removalsHead;
    let m = 0;
    let C = null;
    while (d || g) {
      const y = !g || d && d.currentIndex < pf(g, m, C) ? d : g;
      const w = pf(y, m, C);
      const P = y.currentIndex;
      if (y === g) {
        m--;
        g = g._nextRemoved;
      } else {
        d = d._next;
        if (y.previousIndex == null) {
          m++;
        } else {
          C ||= [];
          const L = w - m;
          const B = P - m;
          if (L != B) {
            for (let me = 0; me < L; me++) {
              const Pe = me < C.length ? C[me] : C[me] = 0;
              const je = Pe + me;
              if (B <= je && je < L) {
                C[me] = Pe + 1;
              }
            }
            C[y.previousIndex] = B - L;
          }
        }
      }
      if (w !== P) {
        l(y, w, P);
      }
    }
  }
  forEachPreviousItem(l) {
    let d;
    for (d = this._previousItHead; d !== null; d = d._nextPrevious) {
      l(d);
    }
  }
  forEachAddedItem(l) {
    let d;
    for (d = this._additionsHead; d !== null; d = d._nextAdded) {
      l(d);
    }
  }
  forEachMovedItem(l) {
    let d;
    for (d = this._movesHead; d !== null; d = d._nextMoved) {
      l(d);
    }
  }
  forEachRemovedItem(l) {
    let d;
    for (d = this._removalsHead; d !== null; d = d._nextRemoved) {
      l(d);
    }
  }
  forEachIdentityChange(l) {
    let d;
    for (d = this._identityChangesHead; d !== null; d = d._nextIdentityChange) {
      l(d);
    }
  }
  diff(l) {
    if (l == null) {
      l = [];
    }
    if (!j3(l)) {
      throw new vHH(900, false);
    }
    if (this.check(l)) {
      return this;
    } else {
      return null;
    }
  }
  onDestroy() {}
  check(l) {
    this._reset();
    let m;
    let C;
    let y;
    let d = this._itHead;
    let g = false;
    if (Array.isArray(l)) {
      this.length = l.length;
      for (let w = 0; w < this.length; w++) {
        C = l[w];
        y = this._trackByFn(w, C);
        if (d !== null && Object.is(d.trackById, y)) {
          if (g) {
            d = this._verifyReinsertion(d, C, y, w);
          }
          if (!Object.is(d.item, C)) {
            this._addIdentityChange(d, C);
          }
        } else {
          d = this._mismatch(d, C, y, w);
          g = true;
        }
        d = d._next;
      }
    } else {
      m = 0;
      (function Q6(a, l) {
        if (Array.isArray(a)) {
          for (let d = 0; d < a.length; d++) {
            l(a[d]);
          }
        } else {
          const d = a[E2()]();
          let g;
          while (!(g = d.next()).done) {
            l(g.value);
          }
        }
      })(l, w => {
        y = this._trackByFn(m, w);
        if (d !== null && Object.is(d.trackById, y)) {
          if (g) {
            d = this._verifyReinsertion(d, w, y, m);
          }
          if (!Object.is(d.item, w)) {
            this._addIdentityChange(d, w);
          }
        } else {
          d = this._mismatch(d, w, y, m);
          g = true;
        }
        d = d._next;
        m++;
      });
      this.length = m;
    }
    this._truncate(d);
    this.collection = l;
    return this.isDirty;
  }
  get isDirty() {
    return this._additionsHead !== null || this._movesHead !== null || this._removalsHead !== null || this._identityChangesHead !== null;
  }
  _reset() {
    if (this.isDirty) {
      let l;
      for (l = this._previousItHead = this._itHead; l !== null; l = l._next) {
        l._nextPrevious = l._next;
      }
      for (l = this._additionsHead; l !== null; l = l._nextAdded) {
        l.previousIndex = l.currentIndex;
      }
      this._additionsHead = this._additionsTail = null;
      l = this._movesHead;
      for (; l !== null; l = l._nextMoved) {
        l.previousIndex = l.currentIndex;
      }
      this._movesHead = this._movesTail = null;
      this._removalsHead = this._removalsTail = null;
      this._identityChangesHead = this._identityChangesTail = null;
    }
  }
  _mismatch(l, d, g, m) {
    let C;
    if (l === null) {
      C = this._itTail;
    } else {
      C = l._prev;
      this._remove(l);
    }
    if ((l = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(g, null)) !== null) {
      if (!Object.is(l.item, d)) {
        this._addIdentityChange(l, d);
      }
      this._reinsertAfter(l, C, m);
    } else if ((l = this._linkedRecords === null ? null : this._linkedRecords.get(g, m)) !== null) {
      if (!Object.is(l.item, d)) {
        this._addIdentityChange(l, d);
      }
      this._moveAfter(l, C, m);
    } else {
      l = this._addAfter(new df(d, g), C, m);
    }
    return l;
  }
  _verifyReinsertion(l, d, g, m) {
    let C = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(g, null);
    if (C !== null) {
      l = this._reinsertAfter(C, l._prev, m);
    } else if (l.currentIndex != m) {
      l.currentIndex = m;
      this._addToMoves(l, m);
    }
    return l;
  }
  _truncate(l) {
    while (l !== null) {
      const d = l._next;
      this._addToRemovals(this._unlink(l));
      l = d;
    }
    if (this._unlinkedRecords !== null) {
      this._unlinkedRecords.clear();
    }
    if (this._additionsTail !== null) {
      this._additionsTail._nextAdded = null;
    }
    if (this._movesTail !== null) {
      this._movesTail._nextMoved = null;
    }
    if (this._itTail !== null) {
      this._itTail._next = null;
    }
    if (this._removalsTail !== null) {
      this._removalsTail._nextRemoved = null;
    }
    if (this._identityChangesTail !== null) {
      this._identityChangesTail._nextIdentityChange = null;
    }
  }
  _reinsertAfter(l, d, g) {
    if (this._unlinkedRecords !== null) {
      this._unlinkedRecords.remove(l);
    }
    const m = l._prevRemoved;
    const C = l._nextRemoved;
    if (m === null) {
      this._removalsHead = C;
    } else {
      m._nextRemoved = C;
    }
    if (C === null) {
      this._removalsTail = m;
    } else {
      C._prevRemoved = m;
    }
    this._insertAfter(l, d, g);
    this._addToMoves(l, g);
    return l;
  }
  _moveAfter(l, d, g) {
    this._unlink(l);
    this._insertAfter(l, d, g);
    this._addToMoves(l, g);
    return l;
  }
  _addAfter(l, d, g) {
    this._insertAfter(l, d, g);
    this._additionsTail = this._additionsTail === null ? this._additionsHead = l : this._additionsTail._nextAdded = l;
    return l;
  }
  _insertAfter(l, d, g) {
    const m = d === null ? this._itHead : d._next;
    l._next = m;
    l._prev = d;
    if (m === null) {
      this._itTail = l;
    } else {
      m._prev = l;
    }
    if (d === null) {
      this._itHead = l;
    } else {
      d._next = l;
    }
    if (this._linkedRecords === null) {
      this._linkedRecords = new T_();
    }
    this._linkedRecords.put(l);
    l.currentIndex = g;
    return l;
  }
  _remove(l) {
    return this._addToRemovals(this._unlink(l));
  }
  _unlink(l) {
    if (this._linkedRecords !== null) {
      this._linkedRecords.remove(l);
    }
    const d = l._prev;
    const g = l._next;
    if (d === null) {
      this._itHead = g;
    } else {
      d._next = g;
    }
    if (g === null) {
      this._itTail = d;
    } else {
      g._prev = d;
    }
    return l;
  }
  _addToMoves(l, d) {
    if (l.previousIndex !== d) {
      this._movesTail = this._movesTail === null ? this._movesHead = l : this._movesTail._nextMoved = l;
    }
    return l;
  }
  _addToRemovals(l) {
    if (this._unlinkedRecords === null) {
      this._unlinkedRecords = new T_();
    }
    this._unlinkedRecords.put(l);
    l.currentIndex = null;
    l._nextRemoved = null;
    if (this._removalsTail === null) {
      this._removalsTail = this._removalsHead = l;
      l._prevRemoved = null;
    } else {
      l._prevRemoved = this._removalsTail;
      this._removalsTail = this._removalsTail._nextRemoved = l;
    }
    return l;
  }
  _addIdentityChange(l, d) {
    l.item = d;
    this._identityChangesTail = this._identityChangesTail === null ? this._identityChangesHead = l : this._identityChangesTail._nextIdentityChange = l;
    return l;
  }
}
class df {
  constructor(l, d) {
    this.item = l;
    this.trackById = d;
    this.currentIndex = null;
    this.previousIndex = null;
    this._nextPrevious = null;
    this._prev = null;
    this._next = null;
    this._prevDup = null;
    this._nextDup = null;
    this._prevRemoved = null;
    this._nextRemoved = null;
    this._nextAdded = null;
    this._nextMoved = null;
    this._nextIdentityChange = null;
  }
}
class rx {
  constructor() {
    this._head = null;
    this._tail = null;
  }
  add(l) {
    if (this._head === null) {
      this._head = this._tail = l;
      l._nextDup = null;
      l._prevDup = null;
    } else {
      this._tail._nextDup = l;
      l._prevDup = this._tail;
      l._nextDup = null;
      this._tail = l;
    }
  }
  get(l, d) {
    let g;
    for (g = this._head; g !== null; g = g._nextDup) {
      if ((d === null || d <= g.currentIndex) && Object.is(g.trackById, l)) {
        return g;
      }
    }
    return null;
  }
  remove(l) {
    const d = l._prevDup;
    const g = l._nextDup;
    if (d === null) {
      this._head = g;
    } else {
      d._nextDup = g;
    }
    if (g === null) {
      this._tail = d;
    } else {
      g._prevDup = d;
    }
    return this._head === null;
  }
}
class T_ {
  constructor() {
    this.map = new Map();
  }
  put(l) {
    const d = l.trackById;
    let g = this.map.get(d);
    if (!g) {
      g = new rx();
      this.map.set(d, g);
    }
    g.add(l);
  }
  get(l, d) {
    const m = this.map.get(l);
    if (m) {
      return m.get(l, d);
    } else {
      return null;
    }
  }
  remove(l) {
    const d = l.trackById;
    if (this.map.get(d).remove(l)) {
      this.map.delete(d);
    }
    return l;
  }
  get isEmpty() {
    return this.map.size === 0;
  }
  clear() {
    this.map.clear();
  }
}
function pf(a, l, d) {
  const g = a.previousIndex;
  if (g === null) {
    return g;
  }
  let m = 0;
  if (d && g < d.length) {
    m = d[g];
  }
  return g + l + m;
}
class k_ {
  constructor() {}
  supports(l) {
    return l instanceof Map || K6(l);
  }
  create() {
    return new O_();
  }
}
class O_ {
  constructor() {
    this._records = new Map();
    this._mapHead = null;
    this._appendAfter = null;
    this._previousMapHead = null;
    this._changesHead = null;
    this._changesTail = null;
    this._additionsHead = null;
    this._additionsTail = null;
    this._removalsHead = null;
    this._removalsTail = null;
  }
  get isDirty() {
    return this._additionsHead !== null || this._changesHead !== null || this._removalsHead !== null;
  }
  forEachItem(l) {
    let d;
    for (d = this._mapHead; d !== null; d = d._next) {
      l(d);
    }
  }
  forEachPreviousItem(l) {
    let d;
    for (d = this._previousMapHead; d !== null; d = d._nextPrevious) {
      l(d);
    }
  }
  forEachChangedItem(l) {
    let d;
    for (d = this._changesHead; d !== null; d = d._nextChanged) {
      l(d);
    }
  }
  forEachAddedItem(l) {
    let d;
    for (d = this._additionsHead; d !== null; d = d._nextAdded) {
      l(d);
    }
  }
  forEachRemovedItem(l) {
    let d;
    for (d = this._removalsHead; d !== null; d = d._nextRemoved) {
      l(d);
    }
  }
  diff(l) {
    if (l) {
      if (!(l instanceof Map) && !K6(l)) {
        throw new vHH(900, false);
      }
    } else {
      l = new Map();
    }
    if (this.check(l)) {
      return this;
    } else {
      return null;
    }
  }
  onDestroy() {}
  check(l) {
    this._reset();
    let d = this._mapHead;
    this._appendAfter = null;
    this._forEach(l, (g, m) => {
      if (d && d.key === m) {
        this._maybeAddToChanges(d, g);
        this._appendAfter = d;
        d = d._next;
      } else {
        const C = this._getOrCreateRecordForKey(m, g);
        d = this._insertBeforeOrAppend(d, C);
      }
    });
    if (d) {
      if (d._prev) {
        d._prev._next = null;
      }
      this._removalsHead = d;
      for (let g = d; g !== null; g = g._nextRemoved) {
        if (g === this._mapHead) {
          this._mapHead = null;
        }
        this._records.delete(g.key);
        g._nextRemoved = g._next;
        g.previousValue = g.currentValue;
        g.currentValue = null;
        g._prev = null;
        g._next = null;
      }
    }
    if (this._changesTail) {
      this._changesTail._nextChanged = null;
    }
    if (this._additionsTail) {
      this._additionsTail._nextAdded = null;
    }
    return this.isDirty;
  }
  _insertBeforeOrAppend(l, d) {
    if (l) {
      const g = l._prev;
      d._next = l;
      d._prev = g;
      l._prev = d;
      if (g) {
        g._next = d;
      }
      if (l === this._mapHead) {
        this._mapHead = d;
      }
      this._appendAfter = l;
      return l;
    }
    if (this._appendAfter) {
      this._appendAfter._next = d;
      d._prev = this._appendAfter;
    } else {
      this._mapHead = d;
    }
    this._appendAfter = d;
    return null;
  }
  _getOrCreateRecordForKey(l, d) {
    if (this._records.has(l)) {
      const m = this._records.get(l);
      this._maybeAddToChanges(m, d);
      const C = m._prev;
      const y = m._next;
      if (C) {
        C._next = y;
      }
      if (y) {
        y._prev = C;
      }
      m._next = null;
      m._prev = null;
      return m;
    }
    const g = new ox(l);
    this._records.set(l, g);
    g.currentValue = d;
    this._addToAdditions(g);
    return g;
  }
  _reset() {
    if (this.isDirty) {
      let l;
      this._previousMapHead = this._mapHead;
      l = this._previousMapHead;
      for (; l !== null; l = l._next) {
        l._nextPrevious = l._next;
      }
      for (l = this._changesHead; l !== null; l = l._nextChanged) {
        l.previousValue = l.currentValue;
      }
      for (l = this._additionsHead; l != null; l = l._nextAdded) {
        l.previousValue = l.currentValue;
      }
      this._changesHead = this._changesTail = null;
      this._additionsHead = this._additionsTail = null;
      this._removalsHead = null;
    }
  }
  _maybeAddToChanges(l, d) {
    if (!Object.is(d, l.currentValue)) {
      l.previousValue = l.currentValue;
      l.currentValue = d;
      this._addToChanges(l);
    }
  }
  _addToAdditions(l) {
    if (this._additionsHead === null) {
      this._additionsHead = this._additionsTail = l;
    } else {
      this._additionsTail._nextAdded = l;
      this._additionsTail = l;
    }
  }
  _addToChanges(l) {
    if (this._changesHead === null) {
      this._changesHead = this._changesTail = l;
    } else {
      this._changesTail._nextChanged = l;
      this._changesTail = l;
    }
  }
  _forEach(l, d) {
    if (l instanceof Map) {
      l.forEach(d);
    } else {
      Object.keys(l).forEach(g => d(l[g], g));
    }
  }
}
class ox {
  constructor(l) {
    this.key = l;
    this.previousValue = null;
    this.currentValue = null;
    this._nextPrevious = null;
    this._next = null;
    this._prev = null;
    this._nextAdded = null;
    this._nextRemoved = null;
    this._nextChanged = null;
  }
}
function hf() {
  return new ZZ4([new S_()]);
}
export let ZZ4 = (() => {
  class a {
    constructor(d) {
      this.factories = d;
    }
    static create(d, g) {
      if (g != null) {
        const m = g.factories.slice();
        d = d.concat(m);
      }
      return new a(d);
    }
    static extend(d) {
      return {
        provide: a,
        useFactory: g => a.create(d, g || hf()),
        deps: [[a, new tp0(), new FiY()]]
      };
    }
    find(d) {
      const g = this.factories.find(m => m.supports(d));
      if (g != null) {
        return g;
      }
      throw new vHH(901, false);
    }
  }
  a.ɵprov = Yz7({
    token: a,
    providedIn: "root",
    factory: hf
  });
  return a;
})();
function A_() {
  return new aQg([new k_()]);
}
export let aQg = (() => {
  class a {
    constructor(d) {
      this.factories = d;
    }
    static create(d, g) {
      if (g) {
        const m = g.factories.slice();
        d = d.concat(m);
      }
      return new a(d);
    }
    static extend(d) {
      return {
        provide: a,
        useFactory: g => a.create(d, g || A_()),
        deps: [[a, new tp0(), new FiY()]]
      };
    }
    find(d) {
      const g = this.factories.find(m => m.supports(d));
      if (g) {
        return g;
      }
      throw new vHH(901, false);
    }
  }
  a.ɵprov = Yz7({
    token: a,
    providedIn: "root",
    factory: A_
  });
  return a;
})();
export const _c5 = eFA(null, "core", []);
export let hGG = (() => {
  class a {
    constructor(d) {}
  }
  a.ɵfac = function (d) {
    return new (d || a)(LFG(z2F));
  };
  a.ɵmod = oAB({
    type: a
  });
  a.ɵinj = cJS({});
  return a;
})();
export function D6c(a) {
  if (typeof a == "boolean") {
    return a;
  } else {
    return a != null && a !== "false";
  }
}
export function LMc(a, l) {
  const d = En(a);
  const g = l.elementInjector || nl();
  return new Oc(d).create(g, l.projectableNodes, l.hostElement, l.environmentInjector);
}