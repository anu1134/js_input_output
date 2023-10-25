const sealedObject = {
  name: "Anshika Agarwal",
  age: "25",
};

Object.seal(sealedObject);
//Object.freeze(sealedObject);

sealedObject.age = "26";

console.log(sealedObject.age);
