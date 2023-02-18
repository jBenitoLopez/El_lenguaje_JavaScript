/*
### Suma números del visitante

Crea un script que pida al visitante que ingrese dos números y muestre su suma.

[Ejecutar el demo](https://es.javascript.info/number#)

P.D. Hay una trampa con los tipos de valores.
*/

{
  const num1 = +prompt("Dame el primer número: ", 0);
  const num2 = +prompt("Dame el segundo número: ", 0);
  const suma = num1 + num2;

  alert("La suma es: " + suma);
}
