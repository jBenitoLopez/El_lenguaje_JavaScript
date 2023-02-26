/*
let arr = [5, 2, 1, -10, 8];

// ... tu código para ordenar en orden decreciente

alert( arr ); // 8, 5, 2, 1, -10
*/
let arr = [5, 2, 1, -10, 8];
arr.sort((a, b) => b - a);

console.log(arr); // 8, 5, 2, 1, -10
