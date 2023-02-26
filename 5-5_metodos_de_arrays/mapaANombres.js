/*
Tienes un array de objetos user, cada uno tiene user.name. 
Escribe el código que lo convierta en un array de nombres.

Por ejemplo:
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];
let names2 =  // ... tu código 

console.log( names ); // John, Pete, Mary
*/

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };
let users = [john, pete, mary];

let names = users.map((item) => item.name);

console.log(names); // John, Pete, Mary
