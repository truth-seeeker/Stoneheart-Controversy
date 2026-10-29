var O = require("./655.js");
var e = require("./576.js");
export function Q(Ce) {
  return (0, O.FC)(this, arguments, function* () {
    const _e = Ce.getReader();
    try {
      while (true) {
        const {
          value: q,
          done: j
        } = yield (0, O.qq)(_e.read());
        if (j) {
          return yield (0, O.qq)(undefined);
        }
        yield yield (0, O.qq)(q);
      }
    } finally {
      _e.releaseLock();
    }
  });
}
export function L(Ce) {
  return (0, e.m)(Ce?.getReader);
}