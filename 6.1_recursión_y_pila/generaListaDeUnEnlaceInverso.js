/*
Genere una lista de un solo enlace en orden inverso

Genere una lista de un solo enlace a partir de la 
tarea anterior Generar una lista de un solo enlace 
en orden inverso.

Escribe dos soluciones: 
  utilizando un bucle 
  y utilizando recursividad.
*/

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

function printReverseListBucle(list) {
  let listReverse = [];

  while (list) {
    listReverse.push(list.value);

    // if (list.next === null) break;
    list = list.next;
  }
  return listReverse.reverse();
}

console.log(printReverseListBucle(list));
console.log("---------------------------");
function printReverseListRecursive(list) {
  let listReverse = [];
  if (list.next) {
    printReverseListRecursive(list.next);
  }

  console.log(list.value);
}

console.log(printReverseListRecursive(list));
