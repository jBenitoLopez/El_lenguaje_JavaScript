# Bucles: while y for

Usualmente necesitamos repetir acciones.

Por ejemplo, mostrar los elementos de una lista uno tras otro o simplemente ejecutar el mismo código para cada número del 1 al 10.

Los Bucles son una forma de repetir el mismo código varias veces.

---

**Los bucles for…of y for…in**

Un pequeño anuncio para lectores avanzados.

Este artículo cubre solamente los bucles básicos: `while`, `do..while` y `for(..;..;..)`.

Si llegó a este artículo buscando otro tipo de bucles, aquí están los enlaces:

- Vea [for…in](https://es.javascript.info/object#forin) para bucles sobre propiedades de objetos.
- Vea [for…of](https://es.javascript.info/array#loops) e [iterables](https://es.javascript.info/iterable) para bucles sobre arrays y objetos iterables.

De otra manera, por favor continúe leyendo.

---

## El bucle “while”

El bucle `while` (mientras) tiene la siguiente sintaxis:

```js
while (condition) {
  // código
  // llamado "cuerpo del bucle"
}
```

Mientras la condición `condition` sea verdadera, el `código` del cuerpo del bucle será ejecutado.

Por ejemplo, el bucle debajo imprime `i` mientras se cumpla `i < 3`:

```js
let i = 0;
while (i < 3) {
  // muestra 0, luego 1, luego 2
  alert(i);
  i++;
}
```

Cada ejecución del cuerpo del bucle se llama iteración. El bucle en el ejemplo de arriba realiza 3 iteraciones.

Si faltara `i++` en el ejemplo de arriba, el bucle sería repetido (en teoría) eternamente. En la práctica, el navegador tiene maneras de detener tales bucles desmedidos; y en el JavaScript del lado del servidor, podemos eliminar el proceso.

Cualquier expresión o variable puede usarse como condición del bucle, no solo las comparaciones: El `while` evaluará y transformará la condición a un booleano.

Por ejemplo, una manera más corta de escribir `while (i != 0)` es `while (i)`:

```js
let i = 3;
while (i) {
  // cuando i sea 0, la condición se volverá falsa y el bucle se detendrá
  alert(i);
  i--;
}
```

---

**Las llaves no son requeridas para un cuerpo de una sola línea**

Si el cuerpo del bucle tiene una sola sentencia, podemos omitir las llaves `{…}`:

```js
let i = 3;
while (i) alert(i--);
```

---

## El bucle “do…while”

La comprobación de la condición puede ser movida debajo del cuerpo del bucle usando la sintaxis `do..while`:

```js
do {
  // cuerpo del bucle
} while (condition);
```

El bucle primero ejecuta el cuerpo, luego comprueba la condición, y, mientras sea un valor verdadero, la ejecuta una y otra vez.

```js
let i = 0;
do {
  alert(i);
  i++;
} while (i < 3);
```

Esta sintaxis solo debe ser usada cuando quieres que el cuerpo del bucle sea ejecutado al menos una vez sin importar que la condición sea verdadera. Usualmente, se prefiere la otra forma: `while(…) {…}`.

## El bucle “for”

El bucle for es más complejo, pero también el más usado.

Se ve así:

```js
for (begin; condition; step) {
  // (comienzo, condición, paso)
  // ... cuerpo del bucle ...
}
```

Aprendamos el significado de cada parte con un ejemplo. El bucle debajo corre alert(i) para i desde 0 hasta (pero no incluyendo) 3:

```js
for (let i = 0; i < 3; i++) {
  // muestra 0, luego 1, luego 2
  alert(i);
}
```

Vamos a examinar la declaración for parte por parte:

| parte     |             |                                                                               |
| --------- | ----------- | ----------------------------------------------------------------------------- |
| comienzo  | `let i = 0` | Se ejecuta una ez al comienzo del bucle.                                      |
| condición | `i < 3`     | Comprobada antes de cada iteración del bucle. Si es falsa, el bucle finaliza. |
| cuerpo    | `alert(i)`  | Se ejecuta una y otra vez mientras la condición sea verdadera.                |
| paso      | `i++`       | Se ejecuta después del cuerpo en cada iteración.                              |

El algoritmo general del bucle funciona de esta forma:

```
Se ejecuta comenzar
→ (si condición → ejecutar cuerpo y ejecutar paso)
→ (si condición → ejecutar cuerpo y ejecutar paso)
→ (si condición → ejecutar cuerpo y ejecutar paso)
→ ...
```

Si eres nuevo en bucles, te podría ayudar regresar al ejemplo y reproducir cómo se ejecuta paso por paso en una pedazo de papel.

Esto es lo que sucede exactamente en nuestro caso:

```js
// for (let i = 0; i < 3; i++) alert(i)

// se ejecuta comenzar
let i = 0;
// si condición → ejecutar cuerpo y ejecutar paso
if (i < 3) {
  alert(i);
  i++;
}
// si condición → ejecutar cuerpo y ejecutar paso
if (i < 3) {
  alert(i);
  i++;
}
// si condición → ejecutar cuerpo y ejecutar paso
if (i < 3) {
  alert(i);
  i++;
}
// ...finaliza, porque ahora i == 3
```

---

**Declaración de variable en línea**

Aquí, la variable “counter” `i` es declarada en el bucle. Esto es llamado una declaración de variable “en línea”. Dichas variables son visibles solo dentro del bucle.

```js
for (let i = 0; i < 3; i++) {
  alert(i); // 0, 1, 2
}
alert(i); // error, no existe dicha variable
```

En vez de definir una variable, podemos usar una que ya exista:

```js
let i = 0;

for (i = 0; i < 3; i++) {
  // usa una variable existente
  alert(i); // 0, 1, 2
}

alert(i); // 3, visible, porque fue declarada fuera del bucle
```

---

## Omitiendo partes

Cualquier parte de `for` puede ser omitida.

Por ejemplo, podemos quitar `comienzo` si no necesitamos realizar nada al inicio del bucle.

Como aquí:

```js
let i = 0; // Ya tenemos i declarada y asignada

for (; i < 3; i++) {
  // no hay necesidad de "comenzar"
  alert(i); // 0, 1, 2
}
```

También podemos eliminar la parte `paso`:

```js
let i = 0;

for (; i < 3; ) {
  alert(i++);
}
```

Esto hace al bucle idéntico a `while (i < 3)`.

En realidad podemos eliminar todo, creando un bucle infinito:

```js
for (;;) {
  // se repite sin limites
}
```

Por favor, nota que los dos punto y coma `;` del `for` deben estar presentes. De otra manera, habría un error de sintaxis.

## Rompiendo el bucle

Normalmente, se sale de un bucle cuando la condición se vuelve falsa.

Pero podemos forzar una salida en cualquier momento usando la directiva especial `break`.

Por ejemplo, el bucle debajo le pide al usuario por una serie de números, “rompiéndolo” cuando un número no es ingresado:

```js
let sum = 0;

while (true) {
  let value = +prompt("Ingresa un número", "");

  if (!value) break; // (\*)

  sum += value;
}
alert("Suma: " + sum);
```

La directiva `break` es activada en la línea `(*)` si el usuario ingresa una línea vacía o cancela la entrada. Detiene inmediatamente el bucle, pasando el control a la primera línea después de el bucle. En este caso, `alert`.

La combinación “bucle infinito + `break` según sea necesario” es ideal en situaciones donde la condición del bucle debe ser comprobada no al inicio o al final de el bucle, sino a la mitad o incluso en varias partes del cuerpo.

## Continuar a la siguiente iteración

La directiva `continue` es una “versión más ligera” de `break`. No detiene el bucle completo. En su lugar, detiene la iteración actual y fuerza al bucle a comenzar una nueva (si la condición lo permite).

Podemos usarlo si hemos terminado con la iteración actual y nos gustaría movernos a la siguiente.

El bucle debajo usa `continue` para mostrar solo valores impares:

```js
for (let i = 0; i < 10; i++) {
  // si es verdadero, saltar el resto del cuerpo
  if (i % 2 == 0) continue;

  alert(i); // 1, luego 3, 5, 7, 9
}
```

Para los valores pares de `i`, la directiva `continue` deja de ejecutar el cuerpo y pasa el control a la siguiente iteración de `for` (con el siguiente número). Así que el `alert` solo es llamado para valores impares.

---

**La directiva `continue` ayuda a disminuir la anidación**
Un bucle que muestra valores impares podría verse así:

```js
for (let i = 0; i < 10; i++) {
  if (i % 2) {
    alert(i);
  }
}
```

Desde un punto de vista técnico, esto es idéntico al ejemplo de arriba. Claro, podemos simplemente envolver el código en un bloque if en vez de usar continue.

Pero como efecto secundario, esto crearía un nivel más de anidación (la llamada a alert dentro de las llaves). Si el código dentro de if posee varias líneas, eso podría reducir la legibilidad en general.

---

**No break/continue a la derecha de ‘?’**

Por favor, nota que las construcciones sintácticas que no son expresiones no pueden user usadas con el operador ternario `?`. En particular, directivas como `break/continue` no son permitidas aquí.

Por ejemplo, si tomamos este código:

```js
if (i > 5) {
  alert(i);
} else {
  continue;
}
```

…y lo reescribimos usando un signo de interrogación:

```js
(i > 5) ? alert(i) : continue; // continue no está permitida aquí
```

…deja de funcionar. Código como este generará un error de sintaxis:

Esta es otra razón por la cual se recomienda no usar el operador de signo de interrogación `?` en lugar de `if`.

---

## Etiquetas para break/continue

A veces necesitamos salirnos de múltiples bucles anidados al mismo tiempo.

Por ejemplo, en el código debajo usamos un bucle sobre `i` y `j`, solicitando las coordenadas `(i,j) de (0,0)` a `(3,3)`:

```js
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    let input = prompt(`Valor en las coordenadas (${i},${j})`, "");

    // ¿Y si quiero salir de aquí hacia Listo (debajo)?
  }
}

alert("Listo!");
```

Necesitamos una manera de detener el proceso si el usuario cancela la entrada.

El `break` ordinario después de `input` solo nos sacaría del bucle interno. Eso no es suficiente. ¡Etiquetas, vengan al rescate!

Una etiqueta es un identificador con un signo de dos puntos “:” antes de un bucle:

```js
labelName: for (...) {
...
}
```

La declaración `break <labelName>` en el bucle debajo nos saca hacia la etiqueta:

```js
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    let input = prompt(`Value at coords (${i},${j})`, "");

    // Si es una cadena de texto vacía o se canceló, entonces salir de ambos bucles
    if (!input) break outer; // (*)

    // hacer algo con el valor...
  }
}

alert("Listo!");
```

En el código de arriba, `break outer` mira hacia arriba por la etiqueta llamada `outer` y nos saca de dicho bucle.

Así que el control va directamente de `(*)` a `alert('Listo!')`.

También podemos mover la etiqueta a una línea separada:

```js
outer:
for (let i = 0; i < 3; i++) { ... }
```

La directiva `continue` también puede usar usada con una etiqueta. En este caso, la ejecución del código salta a la siguiente iteración del bucle etiquetado.

---

**Las etiquetas no son “goto”**

Las etiquetas no nos permiten saltar a un lugar arbitrario en el código.

Por ejemplo, es imposible hacer esto:

```js
break label; // ¿saltar a label? No funciona.

label: for (...)
```

Una directiva `break` debe estar en el interior del bucle. Aunque, técnicamente, puede estar en cualquier bloque de código etiquetado:

```js
label: {
  // ...
  break label; // funciona
  // ...
}
```

…Aunque 99.9% del tiempo `break` se usa dentro de bucles, como hemos visto en ejemplos previos.

Un `continue` es solo posible dentro de un bucle.

---

## Resumen

Cubrimos 3 tipos de bucles:

- while – La condición es comprobada antes de cada iteración.
- do..while – La condición es comprobada después de cada iteración.
- for ( ; ; ) – La condición es comprobada antes de cada iteración, con ajustes adicionales disponibles.

Para crear un bucle “infinito”, usualmente se usa `while(true)`. Un bucle como este, tal y como cualquier otro, puede ser detenido con la directiva `break`.

Si queremos detener la iteración actual y adelantarnos a la siguiente, podemos usar la directiva `continue`.

`break/continue` soportan etiquetas antes del bucle. Una etiqueta es la única forma de usar `break/continue` para escapar de un bucle anidado para ir a uno exterior.
<br><br>

## Tareas

**Último valor del bucle**

¿Cuál es el último valor mostrado en alerta por este código? ¿Por qué?

```js
let i = 3;

while (i) {
  alert(i--);
}
```

**¿Qué valores serán mostrados por el bucle while?**

Para cada iteración del bucle, escribe qué valor será impreso y luego compáralo con la solución.

Ambos bucles ¿alertan los mismos valores?

La forma de prefijo `++i`:

```js
let i = 0;
while (++i < 5) alert(i);
```

La forma de sufijo `i++`

```
let i = 0;
while (i++ < 5) alert( i );
```

**¿Qué valores serán mostrados por el bucle "for"?**

Para cada bucle, anota qué valores mostrará y luego compara las respuestas.

Ambos bucles, ¿muestran en alert los mismos valores?

La forma del sufijo:

```js
for (let i = 0; i < 5; i++) alert(i);
```

La forma del prefijo:

```js
for (let i = 0; i < 5; ++i) alert(i);
```

**Muestra números pares en el bucle**

Usa el bucle for para mostrar números pares del 2 al 10.

Ejecutar el demo

**Reemplaza "for" por "while"**

Reescribe el código cambiando el bucle `for` a `while` sin alterar su comportamiento (la salida debería ser la misma).

```js
for (let i = 0; i < 3; i++) {
  alert(`número ${i}!`);
}
```

**Repite hasta que la entrada sea correcta**

Escribe un bucle que solicite un número mayor que `100`. Si el usuario ingresa otro número – pídele que ingrese un valor de nuevo.

El bucle debe pedir un número hasta que el usuario ingrese un número mayor que `100` o bien cancele la entrada/ingrese una linea vacía.

Aquí podemos asumir que el usuario solo ingresará números. No hay necesidad de implementar un manejo especial para entradas no numéricas en esta tarea.

Ejecutar el demo

**Muestra números primos**

Un número entero mayor que `1` es llamado primo si no puede ser dividido sin un resto por ningún número excepto `1` y él mismo.

En otras palabras, `n > 1` es un [primo](https://es.wikipedia.org/wiki/N%C3%BAmero_primo) si no puede ser divido exactamente por ningún número excepto `1` y `n`.

Por ejemplo, `5` es un primo, porque no puede ser divido exactamente por `2`, `3` y `4`.

Escribe el código que muestre números primos en el intervalo de `2` a `n`.

Para `n = 10` el resultado será `2, 3, 5, 7`.

PD. El código debería funcionar para cualquier `n`, no debe estar programado para valores fijos.

---

[Index](../README.md)
