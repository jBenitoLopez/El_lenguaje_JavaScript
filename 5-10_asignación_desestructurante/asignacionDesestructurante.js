/*
Asignación desestructurante

Tenemos un objeto:
let user = {
  name: "John",
  years: 30
};

Escriba la asignación desestructurante que asigne las propiedades:

name en la variable name.
years en la variable age.
isAdmin en la variable isAdmin (false, si no existe tal propiedad)

Este es un ejemplo de los valores después de su asignación:

let user = { name: "John", years: 30 };

// tu código al lado izquierdo:
// ... = user

alert( name ); // John
alert( age ); // 30
alert( isAdmin ); // false

*/

let user = {
  name: "John",
  years: 30,
};

let { name, years: age, isAdmin = false } = user;
console.log(name); // John
console.log(age); // 30
console.log(isAdmin); // false
