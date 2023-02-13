## Constructor, operador "new"

El sintaxis habitual `{...}` nos permite crear un objeto. Pero a menudo necesitamos crear varios objetos similares, como múltiples usuarios, elementos de menú, etcétera.

Esto se puede realizar utilizando el constructor de funciones y el operador `"new"`.

## Función constructora

La función constructora es técnicamente una función normal. Aunque hay dos convenciones:

1. Son nombradas con la primera letra mayúscula.
2. Sólo deben ejecutarse con el operador "new".

Por ejemplo:

```js
function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User("Jack");

alert(user.name); // Jack
alert(user.isAdmin); // false
```

Cuando una función es ejecutada con `new`, realiza los siguientes pasos:

1. Se crea un nuevo objeto vacío y se asigna a `this`.
2. Se ejecuta el cuerpo de la función. Normalmente se modifica this y se le agrega nuevas propiedades.
3. Se devuelve el valor de this.

En otras palabras, `new User(...)` realiza algo como:

```js
function User(name) {
  // this = {};  (implícitamente)

  // agrega propiedades a this
  this.name = name;
  this.isAdmin = false;

  // return this;  (implícitamente)
}
```

Entonces let user = new User("Jack") da el mismo resultado que:

```js
let user = {
  name: "Jack",
  isAdmin: false
};
```

Ahora si queremos crear otros usuarios, podemos llamar a `new User("Ann")`, `new User("Alice")`, etcétera. Mucho más corto que usar literales todo el tiempo y también fácil de leer.

Este es el principal propósito del constructor – implementar código de creación de objetos re-utilizables.

Tomemos nota otra vez: técnicamente cualquier función (excepto las de flecha pues no tienen this) puede ser utilizada como constructor. Puede ser llamada con `new`, y ejecutará el algoritmo de arriba. La “primera letra mayúscula” es un acuerdo general, para dejar en claro que la función debe ser ejecutada con `new`.

----

**new function() { … }**

Si tenemos muchas líneas de código todas sobre la creación de un único objeto complejo, podemos agruparlas en un constructor de función que es llamado inmediatamente de esta manera:

```js
// crea una función e inmediatamente la llama con new
let user = new function() {
  this.name = "John";
  this.isAdmin = false;

  // ...otro código para creación de usuario
  // tal vez lógica compleja y sentencias
  // variables locales etc
};
```

Este constructor no puede ser llamado de nuevo porque no es guardado en ninguna parte, sólo es creado y llamado. Por lo tanto este truco apunta a encapsular el código que construye el objeto individual, sin reutilización futura.

----

## Constructor modo test: new.target

----

**Temas avanzados**
La sintaxis de esta sección es raramente utilizada, puedes omitirla a menos que quieras saber todo.

----

Dentro de una función, podemos verificar si ha sido llamada con o sin el `new` utilizando una propiedad especial: `new.target`.

En las llamadas normales devuelve `undefined`, y cuando es llamada con `new` devuelve la función:

```js
function User() {
  alert(new.target);
}

// sin  "new":
User(); // undefined

// con  "new":
new User(); // function User { ... }
```

Esto puede ser utilizado dentro de la función para conocer si ha sido llamada con `new`, "en modo constructor "; o sin él, “en modo regular”.

También podemos hacer que ambas formas de llamarla, con `new` y “regular”, realicen lo mismo:

```js
function User(name) {
  if (!new.target) { // si me ejecutas sin new
    return new User(name); // ...Agregaré new por ti
  }

  this.name = name;
}

let john = User("John"); // redirige llamado a new User
alert(john.name); // John
```

Este enfoque es utilizado aveces en las librerías para hacer el sintaxis más flexible. Así la gente puede llamar a la función con o sin `new` y aún funciona.

Sin embargo, probablemente no sea algo bueno para usar en todas partes, porque omitir `new` hace que sea un poco menos obvio lo que está sucediendo. Con ' ' todos sabemos que se está creando el nuevo objeto.

Return desde constructores
Normalmente, los constructores no tienen una sentencia return. Su tarea es escribir todo lo necesario al this, y automáticamente este se convierte en el resultado.

Pero si hay una sentencia return, entonces la regla es simple:

Si return es llamado con un objeto, entonces se devuelve tal objeto en vez de this.
Si return es llamado con un tipo de dato primitivo, es ignorado.
En otras palabras, return con un objeto devuelve ese objeto, en todos los demás casos se devuelve this.

Por ejemplo, aquí return anula this al devolver un objeto:

```js
function BigUser() {

  this.name = "John";

  return { name: "Godzilla" };  // <-- devuelve este objeto
}

alert( new BigUser().name );  // Godzilla, recibió ese objeto
```

Y aquí un ejemplo con un return vacío (o podemos colocar un primitivo después de él, no importa):

```js
function SmallUser() {

  this.name = "John";

  return; // <-- devuelve this
}

alert( new SmallUser().name );  // John
```

Normalmente los constructores no tienen una sentencia return. Aquí mencionamos el comportamiento especial con devolución de objetos principalmente por el bien de la integridad.

----

**Omitir paréntesis**

Por cierto, podemos omitir paréntesis después de `new`:

```ls
let user = new User; // <-- sin paréntesis
// lo mismo que
let user = new User();
```

Omitir paréntesis aquí no se considera “buen estilo”, pero la especificación permite esa sintaxis.

----

## Métodos en constructor

Utilizar constructor de funciones para crear objetos nos da mucha flexibilidad. La función constructor puede tener argumentos que definan cómo construir el objeto y qué colocar dentro.

Por supuesto podemos agregar a `this` no sólo propiedades, sino también métodos.

Por ejemplo, `new User(name)` de abajo, crea un objeto con el `name` dado y el método `sayHi`:

```js
function User(name) {
  this.name = name;

  this.sayHi = function() {
    alert( "Mi nombre es: " + this.name );
  };
}

let john = new User("John");

john.sayHi(); // Mi nombre es: John

/*
john = {
   name: "John",
   sayHi: function() { ... }
}
*/
```

Para crear objetos complejos existe una sintaxis más avanzada, [classes](https://es.javascript.info/classes), que cubriremos más adelante.

## Resumen

- Las funciones Constructoras o, más corto, constructores, son funciones normales, pero existe un común acuerdo para nombrarlas con la primera letra en mayúscula.
- Las funciones Constructoras sólo deben ser llamadas utilizando `new`. Tal llamado implica la creación de un `this` vacío al comienzo y devolver el `this` rellenado al final.

Podemos utilizar funciones constructoras para crear múltiples objetos similares.

JavaScript proporciona funciones constructoras para varios objetos de lenguaje incorporados: como `Date` para fechas, `Set` para conjuntos y otros que planeamos estudiar.

----

**Objetos, ¡volveremos!**

En este capítulo solo cubrimos los conceptos básicos sobre objetos y constructores. Son esenciales para aprender más sobre tipos de datos y funciones en los próximos capítulos.

Después de aprender aquello, volvemos a los objetos y los cubrimos en profundidad en los capítulos [Prototipos y herencia](https://es.javascript.info/prototypes) y [Clases](https://es.javascript.info/classes).

----

## Tareas

### Dos funciones – un objeto

¿Es posible crear las funciones `A` y `B` para que se cumpla `new A() == new B()`?

```js
function A() { ... }
function B() { ... }

let a = new A();
let b = new B();

alert( a == b ); // true
```

Si es posible, entonces proporcione un ejemplo de su código.

**solución**

Si, es posible.

Si una función devuelve un objeto, entonces `new` lo devuelve en vez de `this`.

Por lo tanto pueden, por ejemplo, devolver el mismo objeto definido externamente `obj`:

```js
let obj = {};

function A() { return obj; }
function B() { return obj; }

alert( new A() == new B() ); // true
```

### Crear nueva Calculadora

Crear una función constructora `Calculator` que crea objetos con 3 métodos:

- `read()` pide dos valores usando prompt y los guarda en las propiedades del objeto con los nombres `a` y `b`.
- `sum()` devuelve la suma de estas propiedades.
- `mul()`devuelve el producto de la multiplicación de estas propiedades.

Por ejemplo:

```js
let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
```

[Ejecutar el demo](https://es.javascript.info/constructor-new#)
[Abrir en entorno controlado con pruebas](https://plnkr.co/edit/3nR68H2HWFG661Ca?p=preview).

**solución**

```js
function Calculator() {

  this.read = function() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  };

  this.sum = function() {
    return this.a + this.b;
  };

  this.mul = function() {
    return this.a * this.b;
  };
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
```

[Abrir la solución con pruebas en un entorno controlado](https://plnkr.co/edit/R1EA5jTTlEwBTjUS?p=preview).

### Crear nuevo Acumulador

Crear una función constructor Accumulator(startingValue).

El objeto que crea debería:

- Almacene el “valor actual” en la propiedad `value`. El valor inicial se establece en el argumento del constructor `startingValue`.
- El método `read()` debe usar `prompt` para leer un nuevo número y agregarlo a `value`.

En otras palabras, la propiedad `value` es la suma de todos los valores ingresados por el usuario con el valor inicial `startingValue`.

Aquí está la demostración del código:

```js
let accumulator = new Accumulator(1); // valor inicial 1

accumulator.read(); // agrega el valor introducido por el usuario
accumulator.read(); // agrega el valor introducido por el usuario

alert(accumulator.value); // muestra la suma de estos valores
```

[Ejecutar el demo](https://es.javascript.info/constructor-new#)

[Abrir en entorno controlado con pruebas](https://plnkr.co/edit/Uhk0b96PaSMW96RZ?p=preview).

**solución**

```js
function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function() {
    this.value += +prompt('Cuánto más agregar?', 0);
  };

}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);
```

[Abrir la solución con pruebas en un entorno controlado](https://plnkr.co/edit/5068ze7vJe21t2A9?p=preview).
