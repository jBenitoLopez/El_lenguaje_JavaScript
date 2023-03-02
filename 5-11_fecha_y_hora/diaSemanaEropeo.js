/*
Día de la semana europeo

En los países europeos se cuentan los días de la semana 
a partir del lunes (número 1), 
seguido del martes (número 2), 
hasta el domingo (número 7). 

Escribe una función getLocalDay(date) que devuelva el 
día de la semana “europeo” para la variable date.

let date = new Date(2012, 0, 3);  // 3 Jan 2012
alert( getLocalDay(date) );       // tuesday, should show 2
*/
// const LOCAL_DAYS = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Thursday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];
// let date = new Date(2012, 0, 3); // 3 Jan 2012

// function getLocalDay(date) {
//   return LOCAL_DAYS[date.getDay()];
// }

// console.log(getLocalDay(date)); // tuesday, should show 2

function getLocalDay(date) {
  let day = date.getDay();

  if (day == 0) {
    // weekday 0 (sunday) is 7 in european
    day = 7;
  }

  return day;
}

let date = new Date(2012, 0, 3); // 3 Jan 2012
console.log(getLocalDay(date)); // tuesday, should show 2
