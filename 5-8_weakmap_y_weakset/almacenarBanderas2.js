/*
Almacenar banderas "no leídas"

Hay un array de mensajes:

let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

Su código puede acceder a él, pero los mensajes son administrados 
por el código de otra persona. Se agregan mensajes nuevos, los 
códigos viejos se eliminan regularmente con ese código, y usted 
no sabe los momentos exactos en que sucede.

Ahora, ¿qué estructura de datos podría usar para almacenar 
información sobre si el mensaje “ha sido leído”? 
La estructura debe ser adecuada para dar la respuesta “¿se leyó?” 
para el objeto del mensaje dado.

P.D Cuando un mensaje se elimina de messages, también debería 
desaparecer de su estructura.

P.P.D. No debemos modificar los objetos del mensaje, o 
agregarles nuestras propiedades. Como son administrados por el 
código de otra persona, eso puede generarnos resultados no deseados.
*/

let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" },
];

// la propiedad simbólica solo es conocida por nuestro código
let isRead = Symbol("isRead");
messages[0][isRead] = true;
messages[1][isRead] = true;

console.log(messages);
console.log("---------------------------");

console.log(`Message from ${messages[0].from} is Read: ${messages[0][isRead]}`);
console.log("---------------------------");
console.log(`Message from ${messages[2].from} is Read: ${messages[2][isRead]}`);
console.log("---------------------------");
