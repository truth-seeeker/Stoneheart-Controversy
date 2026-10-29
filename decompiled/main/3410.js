export const z = {
  setTimeout(e, de, ...ce) {
    const {
      delegate: Ce
    } = z;
    if (Ce?.setTimeout) {
      return Ce.setTimeout(e, de, ...ce);
    } else {
      return setTimeout(e, de, ...ce);
    }
  },
  clearTimeout(e) {
    const {
      delegate: de
    } = z;
    return (de?.clearTimeout || clearTimeout)(e);
  },
  delegate: undefined
};