let x = {
  y: "z",
  print: () => {
    return this.y === "z";
  },
};

console.log(x.print());
