/*
Sucesión de Fibonacci

La secuencia de sucesión de Fibonacci tiene la 
fórmula Fn = Fn-1 + Fn-2. En otras palabras, 
el siguiente número es una suma de los dos 
anteriores.

Los dos primeros números son 1, luego 2(1+1), 
luego 3(1+2), 5(2+3) y así sucesivamente: 
1, 1, 2, 3, 5, 8, 13, 21....

La sucesión de Fibonacci está relacionada la 
proporción áurea y muchos fenómenos naturales 
alrededor nuestro.

Escribe una función fib(n) que devuelve la 
secuencia n-th de Fibonacci.

Un ejemplo de trabajo: 
function fib(n) { 
  // your code 
}

console.log(fib(3)); // 2
console.log(fib(7)); // 13
console.log(fib(77)); // 5527939700884757

P.D. La función debería ser rápida. La llamada 
     a fib(77) no debería tardar más de una 
     fracción de segundo.
*/

function fib(n, n1 = 1, n2 = 0) {
  n1 = n1 + n2;
  [n1, n2] = [n2, n1];
  return n > 1 ? fib(--n, n1, n2) : n2;
}

// console.log(fib(3)); // 2
// console.log(fib(7)); // 13
// console.log(fib(77)); // 5527939700884757
// console.log("---------------- :>> ");

function fib2(n) {
  console.log("n-1, n-2 :>> ", {
    n,
    n1: n - 1,
    n2: n - 2,
    res: n - 1 + (n - 2),
  });
  return n <= 1 ? n : fib2(n - 1) + fib2(n - 2);
}

console.log(fib2(3)); // 2
// console.log(fib2(7)); // 13
// console.log(fib2(77)); // 5527939700884757
