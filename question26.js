let x = { a: { b: 1 } };

let y = JSON.parse(JSON.stringify(x));

y.a.b = 10;

console.log(y);

console.log(x.a.b);
