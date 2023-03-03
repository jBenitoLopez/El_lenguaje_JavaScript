/*
Cambia el formato a fecha relativa

Escribe una función formatDate(date) que muestre la fecha 
en el siguiente formato:

- Si a partir de la fecha date pasó menos de 1 segundo, 
  debe devolver "ahora mismo".
- De no ser así, si a partir de la fecha date pasó menos 
  de 1 minuto, debe retornar "hace n seg,".
- De no ser así, si pasó menos de una hora, debe retornar 
  "hace n min.".
- De no ser así, debe retornar la fecha completa en el 
  formato "DD.MM.AA HH:mm". 
  Es decir: "día.mes.año horas:minutos", 
  cada uno de ellos en formato de 2 dígitos, 
  por ej. 31.12.16 10:00.


For instance:
console.log( formatDate(new Date(new Date - 1)) ); // "ahora mismo"
console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "hace 30 seg."
console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "hace 5 min."

// la fecha de ayer en formato 31.12.16 20:00
console.log( formatDate(new Date(new Date - 86400 * 1000)) );
*/

function formatDate(date) {
  const now = new Date();
  const dif = now - date;
  console.log("dif :>> ", dif);

  if (dif < 1000) {
    return `ahora mismo.`;
  }

  if (dif < 60000) {
    // menos de 1 minuto de diferencia
    return `hace ${dif / 1000} seg.`;
  }

  if (dif < 3600000) {
    // menos de 1 minuto de diferencia
    return `hace ${dif / 1000 / 60} min.`;
  }
  const f = [
    date.getFullYear().toString(),
    "0" + (date.getMonth() + 1),
    "0" + date.getDate(),
    "0" + date.getHours(),
    "0" + date.getMinutes(),
  ].map((item) => item.slice(-2));

  return `${f[0]}.${f[1]}.${f[2]} ${f[3]}:${f[4]}`;
}

console.log(formatDate(new Date(new Date() - 1)), " >> spected: ahora mismo"); // "ahora mismo"
console.log(
  formatDate(new Date(new Date() - 30 * 1000)),
  " >> spected: hace 30 seg."
); // "hace 30 seg."
console.log(
  formatDate(new Date(new Date() - 5 * 60 * 1000)),
  " >> spected: hace 5 min."
); // "hace 5 min."

// la fecha de ayer en formato 31.12.16 20:00
console.log(
  formatDate(new Date(new Date() - 86400 * 1000)),
  " >> spected: 31.12.16 20:00"
);

console.log("-----------------");

function formatDate2(date) {
  let diff = new Date() - date; // la diferencia entre ambas, representada en milisegundos

  if (diff < 1000) {
    // menos de 1 segundo
    return "ahora mismo";
  }

  let sec = Math.floor(diff / 1000); // convierte el resultado en segundos

  if (sec < 60) {
    return "hace " + sec + " seg.";
  }

  let min = Math.floor(diff / 60000); // convierte el resultado en minutos
  if (min < 60) {
    return "hace " + min + " min.";
  }

  // cambia le formato de la fecha
  // se le agrega un dígito 0 al día/mes/horas/minutos que contenga un único digito.
  let d = date;
  d = [
    "0" + d.getDate(),
    "0" + (d.getMonth() + 1),
    "" + d.getFullYear(),
    "0" + d.getHours(),
    "0" + d.getMinutes(),
  ].map((component) => component.slice(-2)); // toma los últimos 2 dígitos de cada componente

  // une los componentes para formar una única fecha
  return d.slice(0, 3).join(".") + " " + d.slice(3).join(":");
}

console.log(formatDate2(new Date(new Date() - 1))); // "ahora mismo"

console.log(formatDate2(new Date(new Date() - 30 * 1000))); // "hace 30 seg."

console.log(formatDate2(new Date(new Date() - 5 * 60 * 1000))); // "hace 5 min."

// la fecha de ayer en formato 31.12.2016 20:00
console.log(formatDate2(new Date(new Date() - 86400 * 1000)));
console.log("-----------------");

function formatDate3(date) {
  let dayOfMonth = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let diffMs = new Date() - date;
  let diffSec = Math.round(diffMs / 1000);
  let diffMin = diffSec / 60;
  let diffHour = diffMin / 60;

  // dándole formato
  year = year.toString().slice(-2);
  month = month < 10 ? "0" + month : month;
  dayOfMonth = dayOfMonth < 10 ? "0" + dayOfMonth : dayOfMonth;
  hour = hour < 10 ? "0" + hour : hour;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  if (diffSec < 1) {
    return "ahora mismo";
  } else if (diffMin < 1) {
    return `hace ${diffSec} seg.`;
  } else if (diffHour < 1) {
    return `hace ${diffMin} min.`;
  } else {
    return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`;
  }
}

console.log(formatDate3(new Date(new Date() - 1))); // "ahora mismo"

console.log(formatDate3(new Date(new Date() - 30 * 1000))); // "hace 30 seg."

console.log(formatDate3(new Date(new Date() - 5 * 60 * 1000))); // "hace 5 min."

// la fecha de ayer en formato 31.12.2016 20:00
console.log(formatDate3(new Date(new Date() - 86400 * 1000)));
console.log("-----------------");
