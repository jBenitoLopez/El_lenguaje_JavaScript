/*
Barajar un array

Escribe la función shuffle(array) que baraje (reordene de forma aleatoria) 
los elementos del array.

Múltiples ejecuciones de shuffle puede conducir a diferentes órdenes de 
elementos. 

Por ejemplo:

let arr = [1, 2, 3];
shuffle(arr);
// arr = [3, 2, 1]

shuffle(arr);
// arr = [2, 1, 3]

shuffle(arr);
// arr = [3, 1, 2]
// ...
Todos los reordenamientos de elementos tienen que tener la misma probabilidad. Por ejemplo, [1,2,3] puede ser reordenado como [1,2,3] o [1,3,2] o [3,1,2] etc, con igual probabilidad en cada caso.
*/

function shuffle(array) {
  const rounds = Math.round(1 - 0.5 + Math.random() * (5 - 1 + 1));
  console.log("rounds :>> ", rounds);
  let newArray = [...array];
  let arr = [];

  for (let i = 0; i < rounds; i++) {
    arr = [...newArray];
    newArray = [];

    while (arr.length !== 0) {
      const aleatorio = Math.round(1 - 0.5 + Math.random() * (1 - 1 + 1));
      const num = arr.shift();
      if (aleatorio > 0) {
        newArray.push(num);
      } else {
        newArray.unshift(num);
      }
    }
  }

  return newArray;
}

let arr = [1, 2, 3];

console.log(shuffle(arr));
console.log(shuffle(arr));
console.log(shuffle(arr));
console.log("----------------------");
let newArr = shuffle(arr);
console.log(newArr);
newArr = shuffle(arr);
console.log(newArr);
newArr = shuffle(arr);
console.log(newArr);
console.log("----------------------");

// normal: 0.0 => 0.9
// -0.5: -0.5 => 0.5
function shuffle2(array) {
  return array.sort(() => Math.random() - 0.5);
}

console.log(shuffle2(arr));
console.log(shuffle2(arr));
console.log(shuffle2(arr));
console.log("----------------------");
console.log("----------------------");

for (let i = 0; i < 10; i++) {
  console.log(Math.random() - 0.5);
}
