let x = [1, 2, 3];

let y = x.filter((val) => val > 1);

x = [4, 5, 6];

y = y.map((val) => val * 2);

console.log(x, y);
