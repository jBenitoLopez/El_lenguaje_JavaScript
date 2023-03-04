/*
Convierte el objeto en JSON y de vuelta

Convierte el user a JSON y luego léalo de vuelta en otra variable.

let user = {
  name: "John Smith",
  age: 35
};

*/

let user = {
  name: "John Smith",
  age: 35,
};

console.log(user);
const json = JSON.stringify(user);
console.log(json);
console.log(JSON.parse(json));
console.log("-------------------------------------");

let user2 = JSON.parse(JSON.stringify(user));
console.log(user2);
