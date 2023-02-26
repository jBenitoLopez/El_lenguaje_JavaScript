/*
Filtrar un rango

Escribe una función filterRange(arr, a, b) que obtenga un array arr,
busque los elementos con valor mayor o igual a `a` 
y menor o igual a `b` 
y devuelva un array con los resultados.


La función no debe modificar el array. Debe devolver un nuevo array.
Por ejemplo:

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
alert( filtered ); // 3,1 (valores dentro del rango)
alert( arr ); // 5,3,8,1 (array original no modificado)
*/

function filterRange(arr, a, b) {
  return arr.filter((number) => number >= a && number <= b);
}

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
console.log(filtered); // 3,1 (valores dentro del rango)
console.log(arr); // 5,3,8,1 (array original no modificado)
console.log("--------------------");

function filterRangeSol(arr, a, b) {
  // agregamos paréntesis en torno a la expresión para mayor legibilidad
  return arr.filter((number) => a <= number && number <= b);
}

let arr2 = [5, 3, 8, 1];
let filtered2 = filterRangeSol(arr2, 1, 4);
console.log(filtered2); // 3,1 (valores dentro del rango)
console.log(arr2); // 5,3,8,1 (array original no modificado)
