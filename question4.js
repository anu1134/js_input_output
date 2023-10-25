let x = [1, 2, 3];
let y = [...x];
let z = y.map((val) => val * 2);
z[1] = 8;

console.log(z);
