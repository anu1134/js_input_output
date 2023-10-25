let x = new Promise((y, z) => {
  y("Hello");
  z("World");
});

x.then((res) => console.log(res));
