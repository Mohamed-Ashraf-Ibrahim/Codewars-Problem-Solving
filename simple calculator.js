function calculator(a, b, sign) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "unknown value";
  }

  if (sign === "+") {
    return a + b;
  } else if (sign === "-") {
    return a - b;
  } else if (sign === "*") {
    return a * b;
  } else if (sign === "/") {
    if (b !== 0) {
      return a / b;
    } else {
      return "undefined";
    }
  } else {
    return "unknown value";
  }
}
