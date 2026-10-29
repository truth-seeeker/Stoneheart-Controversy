export function f(e, de, ce, Ce = 0, oe = false) {
  const _e = de.schedule(function () {
    ce();
    if (oe) {
      e.add(this.schedule(null, Ce));
    } else {
      this.unsubscribe();
    }
  }, Ce);
  e.add(_e);
  if (!oe) {
    return _e;
  }
}