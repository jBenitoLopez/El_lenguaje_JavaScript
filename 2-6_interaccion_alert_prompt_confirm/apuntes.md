# Interacción: alert, prompt, confirm

## alert

Este ya lo hemos visto. Muestra un mensaje y espera a que el usuario presione “Aceptar”.

```JS
alert("Hello");
```

La mini ventana con el mensaje se llama **ventana modal**. La palabra “modal” significa que el visitante no puede interactuar con el resto de la página, presionar otros botones, etc., hasta que se haya ocupado de la ventana. En este caso, hasta que presionen “OK”.

## prompt

La función prompt acepta dos argumentos

- `title`
  El texto a mostrar al usuario.
- `default`
  Un segundo parámetro opcional, el valor inicial del campo de entrada.

```JS
result = prompt(title, [default]);
```

> Los corchetes [...] alrededor de default en la sintaxis de arriba denotan que el parámetro es opcional, no requerido.

Muestra una ventana modal con un mensaje de texto, un campo de entrada para el visitante y los botones OK/CANCELAR.

El usuario puede escribir algo en el campo de entrada de solicitud y presionar OK. Así obtenemos ese texto en result. O puede cancelar la entrada presionando Cancelar o presionando la tecla Esc obteniendo null en result.

La llamada a prompt retorna el texto del campo de entrada o null si la entrada fue cancelada.

Por ejemplo:

```JS
let age = prompt ('¿Cuántos años tienes?', 100);

alert(`Tienes ${age} años!`); //Tienes 100 años!
```

## confirm

La función `confirm` muestra una ventana `modal` con una pregunta y dos botones: `OK` y `CANCELAR`.
El resultado es true si se pulsa OK y false en caso contrario.

La tecla `/ESC` también `CANCELAR`.

```JS
let isBoss = confirm("¿Eres el jefe?");

alert( isBoss ); // true si se pulsa OK
```

Todos estos métodos son modales: detienen la ejecución del script y no permiten que el usuario interactúe con el resto de la página hasta que la ventana se haya cerrado.

**Hay dos limitaciones comunes a todos los métodos anteriores:**

1. La ubicación exacta de la ventana modal está determinada por el navegador. Normalmente, está en el centro.
2. El aspecto exacto de la ventana también depende del navegador. No podemos modificarlo.

Ese es el precio de la simplicidad. Existen otras formas de mostrar ventanas más atractivas e interactivas para el usuario, pero si la “apariencia” no importa mucho, estos métodos funcionan bien.

## Tareas

Crea una página web que pida un nombre y lo muestre.
