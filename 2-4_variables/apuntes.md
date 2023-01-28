# Variables

Una variable es un “almacén con un nombre” para guardar datos.
Para generar una variable en JavaScript, se usa la palabra clave let.

```JS
let message = 'Hola!'; // define la variable y asigna un valor

alert(message); // Hola!

let user = 'John',
    age = 25,
    message = 'Hola';
```

En scripts más viejos, a veces se encuentra otra palabra clave: var en lugar de let:

```JS
var mensaje = 'Hola';
```

Existen sutiles diferencias entre let y var, pero no nos interesan en este momento. Cubriremos el tema a detalle en el capítulo La vieja "var".

## Nombramiento de variables

1. El nombre únicamente puede incluir letras, dígitos, o los símbolos $ y \_.
2. El primer carácter no puede ser un dígito.

Cuando el nombre contiene varias palabras, se suele usar el estilo camelCase.

### Nombres válidos:

```JS
let userName;
let test123;

let $ = 1; // Declara una variable con el nombre "$"
let _ = 2; // y ahora una variable con el nombre "_"

alert($ + _); // 3
```

### Nombres incorrectos:

```JS
let 1a; // no puede iniciar con un dígito

let my-name; // los guiones '-' no son permitidos en nombres
```

### La Capitalización es Importante

Dos variables con nombres manzana y MANZANA son variables distintas.

### Las letras que no son del alfabeto inglés están permitidas, pero no se recomiendan

Es posible utilizar letras de cualquier alfabeto, incluyendo letras del cirílico, hologramas chinos, etc.:

```JS
let имя = '...';
let 我 = '...';
```

Técnicamente, no existe ningún error aquí, pero existe una tradición internacional de utilizar inglés en el nombramiento de variables.

### Nombres reservados

Hay una [lista de palabras reservadas](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords), las cuales no pueden ser utilizadas como nombre de variable porque el lenguaje en sí las utiliza.

Por ejemplo: let, class, return, y function están reservadas.

El siguiente código nos da un error de sintaxis:

```JS
let let = 5; // no se puede le nombrar "let" a una variable  ¡Error!
let return = 5; // tampoco se le puede nombrar "return", ¡Error!
```

### Una asignación sin utilizar `use strict`

Antiguamente era técnicamente posible crear una variable simplemente asignando un valor sin utilizar ‘let’. Esto aún funciona si no ponemos ‘use strict’ en nuestros scripts para mantener la compatibilidad con scripts antiguos.

### Constantes

Para declarar una variable constante (inmutable) use const en vez de let.

Las variables declaradas utilizando const se llaman “constantes”. No pueden ser alteradas. Al intentarlo causaría un error:

```JS
const myBirthday = '18.04.1982';

myBirthday = '01.01.2001'; // ¡error, no se puede reasignar la constante!
```

### Constantes mayúsculas

Existe una práctica utilizada ampliamente de utilizar constantes como aliases de valores difíciles-de-recordar y que se conocen previo a la ejecución.

Tales constantes se nombran utilizando letras mayúsculas y guiones bajos.

```JS
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...cuando debemos elegir un color
let color = COLOR_ORANGE;
alert(color); // #FF7F00
```

Ventajas:

- COLOR_ORANGE es mucho más fácil de recordar que "#FF7F00".
- Es mucho más fácil escribir mal "#FF7F00" que COLOR_ORANGE.
- Al leer el código, COLOR_ORANGE tiene mucho más significado que #FF7F00.

¿Cuándo se deben utilizar letras mayúsculas para una constante, y cuando se debe nombrarla de manera normal? Dejémoslo claro.

Ser una “constante” solo significa que el valor de la variable nunca cambia. Pero hay constantes que son conocidas previo a la ejecución (como el valor hexadecimal del color rojo) y hay constantes que son calculadas en el tiempo de ejecución, pero no cambian después de su asignación inicial.

```JS
const pageLoadTime = /* el tiempo que tardó la página web para cargar */;
```

El valor de pageLoadTime no se conoce antes de cargar la página, así que la nombramos normalmente. No obstante, es una constante porque no cambia después de su asignación inicial.

En otras palabras, las constantes con nombres en mayúscula son utilizadas solamente como alias para valores invariables y preestablecidos (“hard-coded”).

### Nombrar cosas correctamente

Estando en el tema de las variables, existe una cosa de mucha importancia.

Una variable debe tener un nombre claro, de significado evidente, que describa el dato que almacena.

Nombrar variables es una de las habilidades más importantes y complejas en la programación. Un vistazo rápido a el nombre de las variables nos revela cuál código fue escrito por un principiante o por un desarrollador experimentado.

En un proyecto real, la mayor parte de el tiempo se pasa modificando y extendiendo una base de código en vez de empezar a escribir algo desde cero. Cuando regresamos a algún código después de hacer algo distinto por un rato, es mucho más fácil encontrar información que está bien etiquetada. O, en otras palabras, cuando las variables tienen nombres adecuados.

Por favor pasa tiempo pensando en el nombre adecuado para una variable antes de declararla. Hacer esto te da un retorno muy sustancial.

Algunas reglas buenas para seguir:

- Use términos legibles para humanos como `userName` o `shoppingCart`.
- Evite abreviaciones o nombres cortos `a, b, c,` al menos que en serio sepa lo que está haciendo.
- Cree nombres que describen al máximo lo que son y sean concisos. Ejemplos que no son adecuados son `data` y `value`. Estos nombres no nos dicen nada. Estos solo está bien usarlos en el contexto de un código que deje excepcionalmente obvio cuál valor o cuales datos está referenciando la variable.
- Acuerda en tu propia mente y con tu equipo cuáles términos se utilizarán. Si a un visitante se le llamara “user”, debemos llamar las variables relacionadas `currentUser` o `newUser` en vez de `currentVisitor` o `newManInTown`.

¿Suena simple? De hecho lo es, pero no es tan fácil crear nombres de variables descriptivos y concisos a la hora de practicar. Inténtelo.

### ¿Reusar o crear?

Una última nota. Existen programadores haraganes que, en vez de declarar una variable nueva, tienden a reusar las existentes.

El resultado de esto es que sus variables son como cajas en las cuales la gente introduce cosas distintas sin cambiar sus etiquetas. ¿Que existe dentro de la caja? ¿Quién sabe? Necesitamos acercarnos y revisar.

Dichos programadores se ahorran un poco durante la declaración de la variable, pero pierden diez veces más a la hora de depuración.

Una variable extra es algo bueno, no algo malvado.

Los minificadores de JavaScript moderno, y los navegadores optimizan el código suficientemente bien para no generar cuestiones de rendimiento. Utilizar diferentes variables para distintos valores incluso puede ayudar a optimizar su código

## Resumen

- `let` – es la forma moderna de declaración de una variable.
- `var` – es la declaración de variable de vieja escuela. Normalmente no lo utilizamos en absoluto. Cubriremos sus sutiles diferencias con let en el capítulo La vieja "var", por si lo necesitaras.
- `const` – es como `let`, pero el valor de la variable no puede ser alterado.

## Tarea 1

1. Declara dos variables: admin y name.
2. Asigna el valor "John" a name.
3. Copia el valor de name a admin.
4. Muestra el valor de admin usando alert (debe salir “John”).

## Tarea 2

Examina el siguiente código:

```JS
const birthday = '18.04.1982';

const age = someCode(birthday);
```

Aquí tenemos una constante birthday para la fecha de cumpleaños, y la edad age, que también es constante.

age es calculada desde birthday con la ayuda de “cierto código” someCode(), que es una llamada a función que no hemos explicado aún (¡lo haremos pronto!); los detalles no importan aquí, el punto es que age se calcula de alguna forma basándose en birthday.

¿Sería correcto usar mayúsculas en birthday? ¿Y en age? ¿O en ambos?

```JS
const BIRTHDAY = '18.04.1982'; // ¿birthday en mayúsculas?

const AGE = someCode(BIRTHDAY); // ¿age en mayúsculas?
```

### Solución 2

Generalmente usamos mayúsculas para constantes que están “hard-codeadas”. En otras palabras, cuando el valor se conoce antes de la ejecución y se escribe directamente en el código.

En este código, birthday es exactamente así, por lo que podemos escribirla en mayúsculas.

En cambio, age es evaluada en ejecución. Hoy tenemos una edad, un año después tendremos otra. Es constante en el sentido que no cambia durante la ejecución del código, pero es un poco “menos constante” que birthday ya que se calcula, por lo que debemos mantenerla en minúscula.

---

[Index](../README.md)
