/*
Crea una calculadora extensible

Crea una función Calculator que cree objetos calculadores “extensibles”.

La actividad consiste de dos partes.

Primero, implementar el método calculate(str) 
que toma un string como "1 + 2" 
en el formato “NUMERO operador NUMERO” (delimitado por espacios) 
y devuelve el resultado. 
Debe entender más + y menos -.

Ejemplo de uso:

let calc = new Calculator;

console.log( calc.calculate("3 + 7") ); // 10
Luego agrega el método addMethod(name, func) 
que enseñe a la calculadora una nueva operación. 
Toma el operador name y la función con dos argumentos 
func(a,b) que lo implementa.

Por ejemplo, vamos a agregar la multiplicación *, division / y potencia **:

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log( result ); // 8

Sin paréntesis ni expresiones complejas en esta tarea.
Los números y el operador deben estar delimitados por exactamente un espacio.
Puede haber manejo de errores si quisieras agregarlo.
*/

function Calculator() {
  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b,
  };
  this.addMethod = function (op, fn) {
    this.methods[op] = fn;
  };
  this.calculate = function (str) {
    let split = str.split(" "),
      a = +split[0],
      op = split[1],
      b = +split[2];

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  };
}

let calc = new Calculator();
console.log(calc.calculate("3 + 7"), "spected: 3 + 7 = 10"); // 10
console.log(calc.calculate("7 - 3"), "spected: 7 - 3 = 4"); // 4
console.log("-------------------------------------");

calc.addMethod("*", (a, b) => a * b);
calc.addMethod("/", (a, b) => a / b);
calc.addMethod("**", (a, b) => a ** b);

console.log(calc.calculate("2 * 3"), "spected: 2 * 3 = 6"); // 8
console.log(calc.calculate("10 / 5"), "spected: 10 / 5 = 2"); // 8
console.log(calc.calculate("2 ** 3"), "spected: 2 ** 3 = 8"); // 8
console.log("-------------------------------------");
console.log("-------------------------------------");
