/*
Hacer mayúscula el primer carácter

Escribe una función ucFirst(str) que devuelva el 
string str con el primer 
carácter en mayúscula, por ejemplo:

ucFirst("john") == "John";
*/
function ucFirst(string) {
  return string[0].toUpperCase() + string.slice(1);
}

ucFirst("john"); // == "John";
