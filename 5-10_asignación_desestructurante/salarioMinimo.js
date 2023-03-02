/*
El salario máximo

Hay un objeto salaries:
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

Crear la función topSalary(salaries) que devuelva 
el nombre de la persona mejor pagada.

Si salaries es vacío, debe devolver null.
Si hay varias personas con la mejor paga, devolver cualquiera de ellas.

PD: Utilice Object.entries y desestructuración para iterar sobre pares 
de claves/valores
*/

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function topSalary(salaries) {
  let max = [undefined, 0];
  for (const [key, value] of Object.entries(salaries)) {
    if (max[1] < value) {
      max[0] = key;
      max[1] = value;
    }
  }
  return max[0];
}

console.log(topSalary(salaries));

function topSalary2(salaries) {
  let maxSalary = 0;
  let maxName = null;

  for (const [name, salary] of Object.entries(salaries)) {
    if (maxSalary < salary) {
      maxSalary = salary;
      maxName = name;
    }
  }

  return maxName;
}

console.log(topSalary2(salaries));
