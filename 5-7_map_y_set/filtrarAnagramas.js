/*
Filtrar anagramas

Anagramas son palabras que tienen el mismo número de letras, 
pero en diferente orden.

Por ejemplo:
nap - pan
ear - are - era
cheaters - hectares - teachers

Escriba una función aclean(arr) que devuelva un array limpio 
de anagramas.

Por ejemplo:
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log( aclean(arr) ); // "nap,teachers,ear" o "PAN,cheaters,era"

Es decir, de cada grupo de anagramas debe quedar solo una palabra, 
sin importar cual.

*/

function aclean(arr) {
  let set = new Set();
  let newArr = [];
  for (let palabra of arr) {
    const palabraOrdenada = palabra.toLowerCase().split("").sort().join("");

    if (!set.has(palabraOrdenada)) {
      set.add(palabraOrdenada);
      newArr.push(palabra);
    }
  }
  return newArr;
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr)); // "nap,teachers,ear" o "PAN,cheaters,era"
console.log("-----------------");

function aclean2(arr) {
  let map = new Map();

  for (let word of arr) {
    let sorted = word.toLowerCase().split("").sort().join("");
    map.set(sorted, word);
  }

  return Array.from(map.values());
}
console.log(aclean2(arr)); // "nap,teachers,ear" o "PAN,cheaters,era"
console.log("-----------------");

function aclean3(arr) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    let sorted = arr[i].toLowerCase().split("").sort().join("");
    obj[sorted] = arr[i];
  }

  return Object.values(obj);
}

alert(aclean3(arr));
