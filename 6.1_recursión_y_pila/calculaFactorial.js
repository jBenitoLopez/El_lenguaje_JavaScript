/*
Calcula el factorial

El factorial de un número natural es un número 
multiplicado por "número menos uno", luego por 
"número menos dos", y así sucesivamente hasta 1. 
El factorial de n se denota como n!

Podemos escribir la definición de factorial así:
n! = n * (n - 1) * (n - 2) * ...*1

Valores de factoriales para diferentes n:
1! = 1
2! = 2 * 1 = 2
3! = 3 * 2 * 1 = 6
4! = 4 * 3 * 2 * 1 = 24
5! = 5 * 4 * 3 * 2 * 1 = 120

La tarea es escribir una función factorial(n) 
que calcule n! usando llamadas recursivas.

console.log( factorial(5) ); // 120

P.D. Pista: n! puede ser escrito como n *(n-1)! 
Por ejemplo: 3! = 3*2! = 3*2*1! = 6
*/

function factorial(n) {
  return n !== 1 ? n * factorial(n - 1) : 1;
}

console.log(factorial(5)); // 5 * 4 * 3 * 2 * 1 = 120
