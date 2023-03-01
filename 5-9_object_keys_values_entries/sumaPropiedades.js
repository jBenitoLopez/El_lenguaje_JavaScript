/*
Suma las propiedades

Hay un objeto salaries con un número arbitrario de salarios.

Escriba la función sumSalaries(salaries) que devuelva la suma 
de todos los salarios utilizando Object.values y el bucle 
for..of.

Si salaries está vacío, entonces el resultado debe ser 0.

Por ejemplo:

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

alert( sumSalaries(salaries) ); // 650
*/

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

console.log("forOf");
function sumSalaries(salaries) {
  let sum = 0;
  for (const salary of Object.values(salaries)) {
    sum += salary ? salary : 0;
  }
  return sum;
}

console.log(sumSalaries(salaries)); // 650

console.log("Reducer");

function sumSalaries2(salaries) {
  return Object.values(salaries).reduce((acc, cur) => {
    return acc + cur;
  }, 0);
}

console.log(sumSalaries2(salaries)); // 650
