class hd extends Error {
  constructor(s) {
    super(`No translation found for ${gd(s)}.`);
    this.parsedMessage = s;
    this.type = "MissingTranslationError";
  }
}
const Rl = function (f, ...s) {
  if (Rl.translate) {
    const p = Rl.translate(f, s);
    f = p[0];
    s = p[1];
  }
  let u = xu(f[0], f.raw[0]);
  for (let p = 1; p < f.length; p++) {
    u += s[p - 1] + xu(f[p], f.raw[p]);
  }
  return u;
};
function xu(f, s) {
  if (s.charAt(0) === ":") {
    return f.substring(function pd(f, s) {
      for (let u = 1, p = 1; u < f.length; u++, p++) {
        if (s[p] === "\\") {
          p++;
        } else if (f[u] === ":") {
          return u;
        }
      }
      throw new Error(`Unterminated $localize metadata block in "${s}".`);
    }(f, s) + 1);
  } else {
    return f;
  }
}
(() => typeof globalThis !== "undefined" && globalThis || typeof global !== "undefined" && global || typeof window !== "undefined" && window || typeof self !== "undefined" && typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope && self)().$localize = Rl;