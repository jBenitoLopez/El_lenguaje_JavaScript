/*
Excluir referencias circulares

En casos simples de referencias circulares, podemos excluir 
una propiedad infractora de la serialización por su nombre.

Pero a veces no podemos usar el nombre, ya que puede usarse 
tanto en referencias circulares como en propiedades normales. 
Entonces podemos verificar la propiedad por su valor.

Escriba la función replacer para convertir todo a string, 
pero elimine las propiedades que hacen referencia a meetup:

let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  occupiedBy: [{name: "John"}, {name: "Alice"}],
  place: room
};

// referencias circulares
room.occupiedBy = meetup;
meetup.self = meetup;

console.log( JSON.stringify(meetup, function replacer(key, value) {
  // tu código 
}));

// el resultado debería ser:
{
  "title":"Conference",
  "occupiedBy":[{"name":"John"},{"name":"Alice"}],
  "place":{"number":23}
}
*/

let room = {
  number: 23,
};

let meetup = {
  title: "Conference",
  occupiedBy: [{ name: "John" }, { name: "Alice" }],
  place: room,
};

// referencias circulares
room.occupiedBy = meetup;
meetup.self = meetup;

// console.log(
//   JSON.stringify(
//     meetup,
//     function replacer(key, value) {
//       console.log(key, value);
//       return ["occupiedBy", "self"].includes(key) ? undefined : value;
//     },
//     2
//   )
// );

console.log(
  JSON.stringify(
    meetup,
    function replacer(key, value) {
      console.log(key, value);
      return key != "" && value == meetup ? undefined : value;
    },
    2
  )
);

// el resultado debería ser:
// {
//   "title":"Conference",
//   "occupiedBy":[{"name":"John"},{"name":"Alice"}],
//   "place":{"number":23}
// }
