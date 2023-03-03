/*
¿Cuál es el último día del mes?

Escribe una función getLastDayOfMonth(year, month) 
que devuelva el último día del mes dado. 
A veces es 30, 31 o incluso 28/29 para febrero.

Parámetros:
year – el año en formato de cuatro dígitos, por ejemplo 2012.
month – el mes, de 0 a 11. 

Por ejemplo, 
getLastDayOfMonth(2012, 1) = 29 (febrero, año bisiesto).
*/

function getLastDayOfMonth(year, month) {
  // como mes empieza en cero ya no hace falta sumarle 1
  // el dia 0 provoca que Date se auto corrija y devuelve el ultimo día del mes
  return new Date(year, month, 0);
}

// los meses esta bien: 2 es febrero, 1 es enero
console.log(getLastDayOfMonth(2012, 2), "espected day: 29"); // 29 (febrero, año bisiesto).
console.log(getLastDayOfMonth(2012, 1), "espected day: 31"); // 31
console.log(getLastDayOfMonth(2012, 2), "espected day: 29"); // 29
console.log(getLastDayOfMonth(2013, 2), "espected day: 28"); // 28
