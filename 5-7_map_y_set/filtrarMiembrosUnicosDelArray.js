/*
Filtrar miembros únicos del array
Digamos que arr es un array.

Cree una función unique(arr) que debería devolver 
un array con elementos únicos de arr.

Por ejemplo:

function unique(arr) {
  // tu código
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) ); // Hare, Krishna, :-O
P.D. Aquí se usan strings, pero pueden ser valores de cualquier tipo.

P.D.S. Use Set para almacenar valores únicos.
*/

function unique(arr) {
  return Array.from(new Set(arr));
}

let values = [
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

console.log(unique(values)); // Hare, Krishna, :-O
