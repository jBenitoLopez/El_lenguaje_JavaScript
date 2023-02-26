/*
Obtener edad promedio

Escribe la función getAverageAge(users) 
que obtenga un array de objetos con la propiedad age 
y devuelva el promedio de age.

La fórmula de promedio es (age1 + age2 + ... + ageN) / N.

Por ejemplo:
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
*/

function getAverageAge(users) {
  const sum = users.reduce((acc, val) => {
    return acc + val.age;
  }, 0);

  return sum / users.length;
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };
let arr = [john, pete, mary];

console.log(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28
