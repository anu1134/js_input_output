let x = [1, 2, 3, 4];
let y = x.map((num) => num * 2);
let z = y.reduce((acc, curr) => acc + curr, 0);

console.log(z);
