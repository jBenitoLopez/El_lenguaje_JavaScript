/*
La entrada es un array de números, por ejemplo arr = [1, -2, 3, 4, -9, 6].

La tarea es: encuentra el subarray contiguo de items de arr con la suma máxima.

Escribe la función getMaxSubSum(arr) que devuelva tal sumo.

Si todos los elementos son negativos, significa que que no tomamos ninguno (el subarray está vacío), entonces la suma es cero:
*/

// Encontrar el subarreglo contiguo con la suma máxima con el algoritmo Kadane
function getMaxSubSum(arr) {
  let maxTotal = arr[0];
  let maxActual = arr[0];

  for (let i = 1; i < arr.length; i++) {
    const nuevoMaxActual = arr[i] + maxActual;

    maxActual = arr[i] > nuevoMaxActual ? arr[i] : nuevoMaxActual;

    if (maxActual > maxTotal) {
      maxTotal = maxActual;
    }
  }

  return maxTotal > 0 ? maxTotal : 0;
}

console.log(getMaxSubSum([2, -3, 2, 2, 0])); // == 4
console.log(getMaxSubSum([1, -2, 3, 4, -9, 6])); // == 7
console.log(getMaxSubSum([-1, 2, 3, -9])); // == 5 (la suma de items resaltados)
console.log(getMaxSubSum([2, -1, 2, 3, -9])); // == 6
console.log(getMaxSubSum([-1, 2, 3, -9, 11])); // == 11
console.log(getMaxSubSum([-2, -1, 1, 2])); // == 3
console.log(getMaxSubSum([100, -9, 2, -3, 5])); // == 100
console.log(getMaxSubSum([1, 2, 3])); // == 6 (toma todo)
console.log(getMaxSubSum([-1, -2, -3])); // = 0

function getMaxSubSum2(arr) {
  let maxTotal = arr[0];
  let maxActual = arr[0];
  for (let i = 1; i < arr.length; i++) {
    maxActual = Math.max(arr[i], maxActual + arr[i]);
    maxTotal = Math.max(maxTotal, maxActual);
  }
  return maxTotal;
}
