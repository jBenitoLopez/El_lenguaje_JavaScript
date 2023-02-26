/*
Filtrar elementos únicos de un array

Partiendo del array arr.
Crea una función unique(arr) que devuelva un array con los 
elementos que se encuentran una sola vez dentro de arr.

Por ejemplo:

function unique(arr) {
  //tu código
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(strings) ); // Hare, Krishna, :-O
*/

function unique(arr) {
  let uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }
  return uniqueArr;
}

let strings = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

console.log(unique(strings)); // Hare, Krishna, :-O

console.log("-----------------------------");

function unique2(arr) {
  return [...new Set(arr)];
}

console.log(unique2(strings));
