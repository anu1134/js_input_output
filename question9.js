function multiply(factor) {
  return function (value) {
    return value * factor;
  };
}

const square = multiply(2);

console.log(square(5));
