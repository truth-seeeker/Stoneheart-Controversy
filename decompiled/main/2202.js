export const h = function O() {
  if (typeof Symbol == "function" && Symbol.iterator) {
    return Symbol.iterator;
  } else {
    return "@@iterator";
  }
}();