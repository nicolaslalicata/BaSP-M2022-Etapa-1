// ARRAYS
// Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", 
//"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).

var mesesDelAnho = ["Enero", "Febrero","Marzo","Abril","Mayo", "Junio", "Julio","Agosto","Septiembre", "Octubre","Noviembre","Diciembre",];
console.log("\n-Exercise 3.a:");
console.log(mesesDelAnho[05], mesesDelAnho[11]);
// Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
console.log("\n-Exercise 3.b:");
console.log(mesesDelAnho.sort());
// Agregar un elemento al principio y al final del array (utilizar unshift y push).

console.log("\n-Exercise 3.c:");
console.log(mesesDelAnho.unshift("Verano"));
console.log(mesesDelAnho);
console.log(mesesDelAnho.push("FallWinter"));
console.log(mesesDelAnho);

// Quitar un elemento del principio y del final del array (utilizar shift y pop).
console.log("\n-Exercise 3.d:");
console.log(mesesDelAnho.shift());
console.log(mesesDelAnho);
console.log(mesesDelAnho.pop());
console.log(mesesDelAnho);

// Invertir el orden del array (utilizar reverse).
var reversa = mesesDelAnho.reverse();
console.log("\n-Exercise 3.e:");
console.log(reversa);

//Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
console.log("\n-Exercise 3.f:");
console.log(mesesDelAnho.join("-"));

// Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
var mesesDelAnho1 = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre",];
var recorteMeses = mesesDelAnho1.slice(4, 11);
console.log("\n-Exercise 3.g:");
console.log(recorteMeses);