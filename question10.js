// Remove duplicates from an array

const a = [1, 2, 2, 3, 4, 5, 6, 7, 5, 8, 8];

const newArray = [...new Set(a)];

console.log(newArray);
