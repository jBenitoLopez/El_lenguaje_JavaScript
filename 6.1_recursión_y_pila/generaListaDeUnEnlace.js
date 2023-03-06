/*
Generar una lista de un solo enlace

Digamos que tenemos una lista de un solo enlace 
(como se describe en el capítulo Recursión y pila):

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

Escribe una función printList(list) que genere los 
elementos de la lista uno por uno.

Haz dos variantes de la solución: 
- utilizando un bucle 
- y utilizando recursividad.

¿Qué es mejor: con recursividad o sin ella?
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

function printListBucle(list) {
  console.log("length: ", list);
  let pool = structuredClone(list);

  while (true) {
    if (pool?.value === undefined) break;

    console.log(pool.value);

    if (pool.next === null) {
      break;
    } else {
      pool = pool.next;
    }
  }
}

// printListBucle(list);

function printListRecursive(list) {
  if (list?.value === undefined) return;

  console.log(list.value);
  printListRecursive(list.next);

  if (list.next === null) return;
}

// printListRecursivo(list);

function printListBucleOfi(list) {
  let tmp = list;

  while (tmp) {
    console.log(tmp.value);
    tmp = tmp.next;
  }
}

printListBucleOfi(list);

function printListRecursiveOfi(list) {
  console.log(list.value); // genera el elemento actual

  if (list.next) {
    printListRecursiveOfi(list.next); // hace lo mismo para el resto de la lista
  }
}

printListRecursiveOfi(list);
