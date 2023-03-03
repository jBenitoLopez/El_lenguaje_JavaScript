/*
  ¿Cuántos segundos transcurrieron el día de hoy?

Escribe una función getSecondsToday() que devuelva 
la cantidad de segundos transcurridos desde el 
comienzo del día.

Por ejemplo, si en este momento fueran las 10:00 am, 
sin horario de verano, entonces:
getSecondsToday() == 36000 // (3600 * 10)

La función debe poder funcionar correctamente cualquier día. 
Es decir, no debe poseer valores fijos en el código, 
como por ej. “today”.
*/
function getSecondsToday() {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  console.log("today :>> ", now);
  return (now - today) / 1000;
}
console.log(getSecondsToday()); //== 36000 // (3600 * 10)

function getSecondsToday2() {
  let now = new Date();
  return now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
}
console.log(getSecondsToday());
