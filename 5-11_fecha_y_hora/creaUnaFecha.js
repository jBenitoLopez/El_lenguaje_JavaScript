/*
Crea un objeto Date para la fecha: 
Feb 20, 2012, 3:12am. 
La zona horaria es local.

Muéstralo en pantalla utilizando console.log.
*/

const date1 = new Date(2012, 1, 20, 3, 12);
console.log("date1 :>> ", date1);

const date2 = new Date("2012-02-20T03:12z");
console.log("date2 :>> ", date2);
