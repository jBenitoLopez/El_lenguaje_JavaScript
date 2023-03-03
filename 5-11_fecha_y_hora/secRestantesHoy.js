/*
¿Cuantos segundos faltan para el día de mañana?

Crea una función getSecondsToTomorrow() que devuelva 
la cantidad de segundos que faltan para el día de mañana.

Por ejemplo, si ahora son las 23:00, entonces:
getSecondsToTomorrow() == 3600

P.D.: La función debe poder funcionar para cualquier día, 
sin valores fijos en el código como “today”.
*/

function getSecondsToTomorrow() {
  const now = new Date();
  const dayEnd = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  return Math.round((dayEnd - now) / 1000);
}

console.log(getSecondsToTomorrow()); //3600

function getSecondsToTomorrow2() {
  let now = new Date();
  let hour = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let totalSecondsToday = (hour * 60 + minutes) * 60 + seconds;
  let totalSecondsInADay = 86400;

  return totalSecondsInADay - totalSecondsToday;
}

console.log(getSecondsToTomorrow2()); //3600
