export function P(e, de) {
  if (e) {
    const ce = e.indexOf(de);
    if (ce >= 0) {
      e.splice(ce, 1);
    }
  }
}