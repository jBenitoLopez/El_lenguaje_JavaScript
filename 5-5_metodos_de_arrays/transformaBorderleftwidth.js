/*
Transforma border-left-width en borderLeftWidth

Escribe la función camelize(str) que convierta palabras 
separadas por guión como “mi-cadena-corta” 
en palabras con mayúscula “miCadenaCorta”.

Esto sería: remover todos los guiones y que cada palabra 
después de un guión comience con mayúscula.

Ejemplos:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
P.D. Pista: usa split para dividir el string en un array, transfórmalo y vuelve a unirlo (join).
*/

function camelize(str) {
  // console.log("split: ", str.split("-"));
  const arr = str.split("");

  const result = arr.reduce((acc, val, index, array) => {
    if (val === "-") {
      if (array[index + 1]) {
        array[index + 1] = array[index + 1].toUpperCase();
        return acc;
      }
      return acc;
    }
    return acc + val;
  }, "");

  return result;
}

console.log(camelize("mi-cadena-corta"));
console.log(camelize("background-color")); // == 'backgroundColor';
console.log(camelize("list-style-image")); // == 'listStyleImage';
console.log(camelize("-webkit-transition")); // == 'WebkitTransition';
console.log("--------------------------");

function camelizeSol(str) {
  return str
    .split("-") // separa 'my-long-word' en el array ['my', 'long', 'word']
    .map(
      // convierte en mayúscula todas las primeras letras de los elementos del array excepto por el primero
      // convierte ['my', 'long', 'word'] en ['my', 'Long', 'Word']

      (word, index) => {
        console.log({ word, index });
        return index == 0 ? word : word[0].toUpperCase() + word.slice(1);
      }
    )
    .map((item) => {
      console.log({ item });
      return item;
    })
    .join(""); // une ['my', 'Long', 'Word'] en 'myLongWord'
}

console.log(camelizeSol("mi-cadena-corta"));
console.log(camelizeSol("background-color")); // == 'backgroundColor';
console.log(camelizeSol("list-style-image")); // == 'listStyleImage';
console.log(camelizeSol("-webkit-transition")); // == 'WebkitTransition';
