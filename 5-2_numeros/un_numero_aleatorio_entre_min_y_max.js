/*
Un número aleatorio entre min y max

La función incorporada Math.random() crea un valor 
aleatorio entre 0 y 1 (no incluyendo 1).

Escribe una función random(min, max) para generar 
un número de punto flotante entre min y max (no incluyendo max).

Ejemplos de su funcionamiento:

alert( random(1, 5) ); // 1.2345623452
alert( random(1, 5) ); // 3.7894332423
alert( random(1, 5) ); // 4.3435234525
*/

{
  function random(min, max) {
    return min + parseInt(Math.random() * (max - min));
  }

  console.log(random(10, 15)); // 1.2345623452
  console.log(random(10, 15)); // 3.7894332423
  console.log(random(10, 15)); // 4.3435234525
  console.log(random(10, 15)); // 4.3435234525
  console.log(random(10, 15)); // 4.3435234525
}
