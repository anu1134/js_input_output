let x = [3, 2, 4, 5, 1, 10];

let y = x.reduce((x, y) => {
  if (x > y) return x;
  return y;
});

console.log(y);
