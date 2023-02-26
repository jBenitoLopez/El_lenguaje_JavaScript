/*
Filtrar rango "en el lugar"
Escribe una función filterRangeInPlace(arr, a, b) 
que obtenga un array `arr` y remueva del mismo 
todos los valores excepto aquellos que se encuentran 
entre a y b. 

El test es: a ≤ arr[i] ≤ b.

La función solo debe modificar el array. No debe devolver nada.
Por ejemplo:
let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4); // remueve los números excepto aquellos entre 1 y 4
console.log( arr ); // [3, 1]
*/

function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
      i--;
      continue;
    }
  }
}

let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4); // remueve los números excepto aquellos entre 1 y 4
console.log(arr); // [3, 1]
console.log("------------- :>> ");

function filterRangeInPlaceSol(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];

    // remueve aquellos elementos que se encuentran fuera del intervalo
    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

let arr2 = [5, 3, 8, 1];

filterRangeInPlaceSol(arr2, 1, 4); // remueve los números excepto aquellos entre 1 y 4

console.log(arr2); // [3, 1]
