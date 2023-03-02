/*
¿Qué día del mes era hace algunos días atrás?

Crea una función getDateAgo(date, days) que 
devuelva el día del mes que corresponde, 
contando la cantidad de días days respecto 
de la fecha date.

Por ejemplo, 
si hoy es 20, 
  entonces getDateAgo(new Date(), 1) 
  debería ser 19 y getDateAgo(new Date(), 2) 
  debería ser 18.


Debe poder funcionar para days=365 o más:

let date = new Date(2015, 0, 2);

console.log( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
console.log( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
console.log( getDateAgo(date, 365) ); // 2, (2 Jan 2014)
P.D.: La función no debería modificar la fecha date 
pasada como argumento.
*/

function getDateAgo(date, days) {
  date = structuredClone(date);
  date.setDate(date.getDate() + days);
  return date;
}
let date = new Date();

console.log("Date :>> ", date);
console.log("mas 1 día :>> ", getDateAgo(date, 1));
console.log("mas 2 días :>> ", getDateAgo(date, 2));
console.log("mas 365 días :>> ", getDateAgo(date, 365));
console.log("---------------------------------------");

function getDateAgo2(date, days) {
  let dateCopy = new Date(date);

  dateCopy.setDate(date.getDate() - days);
  return dateCopy.getDate();
}

let date2 = new Date(2015, 0, 2);
console.log("Date :>> ", date2);
console.log("mas 1 día :>> ", getDateAgo(date2, 1)); // 1, (1 Jan 2015)
console.log("mas 2 días :>> ", getDateAgo(date2, 2)); // 31, (31 Dec 2014)
console.log("mas 365 días :>> ", getDateAgo(date2, 365)); // 2, (2 Jan 2014)
