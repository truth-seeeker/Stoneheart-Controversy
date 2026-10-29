export function d(e) {
  const ce = e(Ce => {
    Error.call(Ce);
    Ce.stack = new Error().stack;
  });
  ce.prototype = Object.create(Error.prototype);
  ce.prototype.constructor = ce;
  return ce;
}