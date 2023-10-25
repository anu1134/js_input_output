let a = [1, 2, 3, 4, 5];
let result = a.some((val) => {
  return val % 2 === 0;
});

console.log(result);
