# Introducción a JavaScript

- JavasScript inicialmente tenía otro nombre: “LiveScript” y no tiene nada que ver con Java
- Las especificaciones oficiales las puedes encontrar en [ECMA-262](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/)

## Motores JavasScript en los navegadores

- _Chrome, Opera y Edge_: V8
- _Firefox_: SpiderMonkey
- _IE_: Chakra
- _Nitro_: JavaScriptCore
- _Safari_: SquirrelFish

> Los motores determinan las características soportadas de javascript, aunque estos siempre se están actualizando.
> Por ejemplo, si “la característica X es soportada por V8”, entonces probablemente funciona en Chrome, Opera y Edge.

### ¿Como trabajan los motores?

1. El motor (embebido si es un navegador) lee (“analiza”) el script.
2. Luego convierte (“compila”) el script a lenguaje de máquina.
3. Por último, el código máquina se ejecuta, muy rápido.

## ¿Qué puede hacer JavaScript en el navegador?

- Agregar nuevo HTML a la página, cambiar el contenido existente y modificar estilos.
- Reaccionar a las acciones del usuario, ejecutarse con los clics del ratón, movimientos del puntero y al oprimir teclas.
- Enviar solicitudes de red a servidores remotos, descargar y cargar archivos (Tecnologías llamadas AJAX y COMET).
- Obtener y configurar cookies, hacer preguntas al visitante y mostrar mensajes.
- Recordar datos en el lado del cliente con el almacenamiento local (“local storage”).

## ¿Qué NO PUEDE hacer JavaScript en el navegador?

- No puede leer y escribir arbitrariamente archivos en el disco duro, copiarlos o ejecutar programas.
- Existen maneras de interactuar con la cámara, micrófono y otros dispositivos, pero eso requiere el permiso explícito.
- No se permiten acceder a otras paginas, sobre todo si provienen de otros dominios/protocolos/puertos. Esta restricción se conoce como _“Same Origin Policy”_ aunque puede ser posible la comunicación entre dos páginas si tienen un acuerdo establecido.

> JavaScript también permite crear servidores, aplicaciones móviles, etc. y no tienen que tener las mismas limitaciones que las paginas del navegador.

## Lenguajes que transpilan a JavasScript

- CoffeeScript Es una “sintaxis azucarada” para JavaScript. Introduce una sintaxis corta, permitiéndonos escribir un código más claro y preciso. Usualmente desarrolladores de Ruby prefieren este lenguaje.
- TypeScript se concentra en agregar “tipado estricto” (“strict data typing”) para simplificar el desarrollo y soporte de sistemas complejos. Es desarrollado por Microsoft.
- FLow también agrega la escritura de datos, pero de una manera diferente. Desarrollado por Facebook.
- Dart es un lenguaje independiente, tiene su propio motor que se ejecuta en entornos que no son de navegador (como aplicaciones móviles), pero que también se puede convertir/transpilar a JavaScript. Desarrollado por Google.
- Brython es un transpilador de Python a JavaScript que permite escribir aplicaciones en Python puro sin JavaScript.
- Kotlin es un lenguaje moderno, seguro y conciso que puede apuntar al navegador o a Node.

Hay más.
