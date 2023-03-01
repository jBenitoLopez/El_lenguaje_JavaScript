/*
Contar propiedades

Escriba una función count(obj) que devuelva el número de 
propiedades en el objeto:

let user = {
  name: 'John',
  age: 30
};

alert( count(user) ); // 2
Trate de hacer el código lo más corto posible.

PD: Ignore propiedades simbólicas, solamente cuente las 
propiedades “regulares”.
*/

let user = {
  name: "John",
  age: 30,
};

function count(obj) {
  return Object.keys(obj).length;
}

console.log(count(user)); // 2
