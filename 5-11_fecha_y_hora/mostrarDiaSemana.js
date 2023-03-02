/*
Muestra en pantalla un día de la semana

Escribe una función getWeekDay(date) para mostrar 
el día de la semana en formato corto: 
  ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’.

Por ejemplo:
let date = new Date(2012, 0, 3);  // 3 Jan 2012
alert( getWeekDay(date) );        // debería mostrar "TU"
*/

let date = new Date(2012, 0, 3); // 3 Jan 2012

function getWeekDay(date) {
  const weekDays = {
    0: "SU",
    1: "MO",
    2: "TU",
    3: "WE",
    4: "TH",
    5: "SA",
    6: "SU",
  };

  return weekDays[date.getDay()];
}
console.log(getWeekDay(date)); // debería mostrar "TU"

function getWeekDay2(date) {
  let days = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];

  return days[date.getDay()];
}

let date2 = new Date(2014, 0, 3); // 3 Jan 2014

console.log(getWeekDay2(date2)); // FR
