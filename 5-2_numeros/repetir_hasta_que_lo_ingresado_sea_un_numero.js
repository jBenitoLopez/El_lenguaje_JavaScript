/*
Repetir hasta que lo ingresado sea un número

Crea una función readNumber que pida un número hasta que el 
visitante ingrese un valor numérico válido.

El valor resultante debe ser devuelto como number.

El visitante puede también detener el proceso ingresando una linea vacía o presionando “CANCEL”. En tal caso la función debe devolver null.

*/

{
  function readNumber() {
    let number;
    do {
      number = +prompt("Dame un numero: ");
    } while (Number.isNaN(number));
    return number;
  }

  // console.log("numero :>> ", readNumber());
  //permite decimales

  // -----------------------------------------

  function readNumber2() {
    let num;

    do {
      num = prompt("Ingrese un número por favor:", 0);
    } while (!isFinite(num));

    if (num === null || num === "") return null;

    return +num;
  }

  console.log(`Read: ${readNumber2()}`);
}
