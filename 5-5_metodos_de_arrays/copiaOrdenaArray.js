/**
Supongamos que tenemos un array arr. 
Nos gustaría tener una copia ordenada del mismo, 
pero mantener arr sin modificar.

Crea una función copySorted(arr) que devuelva esa copia.

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (sin cambios)
 */

function copySorted(arr) {
  return [...arr].sort((a, b) => a.localeCompare(b));
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

console.log(sorted); // CSS, HTML, JavaScript
console.log(arr); // HTML, JavaScript, CSS (sin cambios)
console.log("---------------- ");

function copySorted2(arr) {
  return arr.slice().sort();
}

let arr2 = ["HTML", "JavaScript", "CSS"];
let sorted2 = copySorted2(arr2);
console.log(sorted2);
console.log(arr2);
