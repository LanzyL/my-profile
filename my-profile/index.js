function calculate(a, b) {
  a = Number(a);
  b = Number(b);

  return {
    add: a + b,
    subtract: a - b,
    multiply: a * b,
    divide: a / b,
    modulo: a % b,
    exponent: a ** b
  };
}

console.log(calculate(2, 8));
