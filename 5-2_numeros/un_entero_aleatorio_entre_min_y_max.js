/*
Un entero aleatorio entre min y max

Crea una función randomInteger(min, max) que genere un número entero aleatorio entre min y max incluyendo ambos, min y max, como valores posibles.

Todo número del intervalo min..max debe aparecer con la misma probabilidad.

Ejemplos de funcionamiento:

alert( randomInteger(1, 5) ); // 1
alert( randomInteger(1, 5) ); // 3
alert( randomInteger(1, 5) ); // 5
Puedes usar la solución de la tarea previa como base.
*/

{
  function randomInteger(min, max) {
    // ahora rand es desde  (min-0.5) hasta (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }

  console.log(randomInteger(10, 15));
  console.log(randomInteger(10, 15));
  console.log(randomInteger(10, 15));
  console.log(randomInteger(10, 15));
  console.log(randomInteger(10, 15));
  console.log(randomInteger(10, 15));
  console.log(randomInteger(10, 15));
}
