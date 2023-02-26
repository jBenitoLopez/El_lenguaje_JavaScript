/*
escribe la función sortByAge(users) que cree un array de objetos 
con al propiedad age y los ordene según age.

Por ejemplo:
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };
let arr = [ pete, john, mary ];

sortByAge(arr);

// ahora: [john, mary, pete]
alert(arr[0].name); // John
alert(arr[1].name); // Mary
alert(arr[2].name); // Pete
*/

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };
let arr = [pete, john, mary];

function sortByAge(users) {
  let arr = [];

  for (let i = 0; i < users.length; i++) {
    console.log("users[i].age :>> ", users[i].age);
    if (arr.length === 0 || arr[arr.length - 1] <= users[i].age) {
      arr.push(users[i].age);
    } else {
      console.log("arr :>> ", arr);
      arr = [
        ...arr.slice(0, i),
        users[i].age,
        ...arr.slice(i + 1, arr.length - 1),
      ];
    }
  }
  return arr;
}

console.log(sortByAge(arr));
