/*
Suma todos los números hasta el elegido

Escribe una función sumTo(n) que calcule la suma 
de los números 1 + 2 + ... + n.

Por ejemplo:
sumTo(1) = 1
sumTo(2) = 2 + 1 = 3
sumTo(3) = 3 + 2 + 1 = 6
sumTo(4) = 4 + 3 + 2 + 1 = 10
...
sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050


Escribe 3 soluciones diferentes:

- Utilizando un bucle for.
- Usando la recursividad, pues sumTo(n) = n + sumTo(n-1) para n > 1.
- Utilizando la fórmula de progresión aritmética.

Un ejemplo del resultado:

function sumTo(n) { 
  //... tu código ... 
}

console.log( sumTo(100) ); // 5050

P.D. ¿Qué variante de la solución es la más rápida? 
     ¿Y la más lenta? ¿Por qué?

P.P.D. ¿Podemos usar la recursión para contar sumTo(100000)?
*/

function sumTo_conFor(n) {
  // - Utilizando un bucle for.
  let sum = 0;
  for (let i = n; i > 0; i--) {
    sum += i;
  }
  return sum;
}

console.log(sumTo_conFor(100)); // = 100 + 99 + ... + 2 + 1 = 5050

function sumTo_recursivo(n) {
  // - Usando la recursividad,
  // pues sumTo(n) = n + sumTo(n-1) para n > 1.
  if (n === 1) return 1;

  return n + sumTo_recursivo(n - 1);
}

console.log(sumTo_recursivo(100)); // = 100 + 99 + ... + 2 + 1 = 5050

function sumTo_recursivo(n) {
  // - Utilizando la fórmula de progresión aritmética.
  return (n * (n + 1)) / 2;
}

console.log(sumTo_recursivo(100)); // = 100 + 99 + ... + 2 + 1 = 5050
