let x = [1, 2, 3];

let y = x.map((num) => {
  x.push(num + 3);
  return num + 1;
});

console.log(y);
