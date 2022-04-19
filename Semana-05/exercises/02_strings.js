// Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).
var cadena = "Hoy en dìa hay mucha demanda de programadores en la industria";
cadena = cadena.toUpperCase();
console.log("\n-Exercise 2.a:");
console.log(cadena);

//Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres
// guardando el resultado en una nueva variable (utilizar substring).
var cadena2 = "Aprender un lenguaje conlleva tiempo y dedicacion";
var guardado = cadena2.substring(0, 5);
console.log("\n-Exercise 2.b:");
console.log(guardado);

// Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos
// 3 caracteres guardando el resultado en una nueva variable (utilizar substring).
var cadena3 = "Desarrollar una aplicacion implica tener un equipo disciplinado";
var guardado2 = cadena3.substring(60, 63);
console.log("\n-Exercise 2.c:");
console.log(guardado2);

// Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con 
// la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable
// (utilizar substring, toUpperCase, toLowerCase y el operador +).
var cadena3 = "Hola que tal";
var mayuscula = cadena3.substring(0, 1);
var residuo = cadena3.slice(1);
var mayuscula = mayuscula.toUpperCase();
var total = mayuscula + residuo;
console.log("\n-Exercise 2.d:");
console.log(total);

// Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.
// Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
var hello = "Mi nombre es nicolas";
var resultado = hello.indexOf(" ");
console.log("\n-Exercise 2.e:");
console.log(resultado);
//Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
//Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de
//ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase
//y el operador +).
var palabraLarga = "otorrinolaringolo medicina"
var resultadoPalabra;

var palabraLarga, resultadoPalabra

palabraLarga="otorrinolaringologo medicina"

resultadoPalabra = palabraLarga.substring(0,1).toUpperCase()+ palabraLarga.substring(1, palabraLarga.indexOf(" ")+1).toLowerCase()
		+palabraLarga.substring(palabraLarga.indexOf(" ")+1, palabraLarga.indexOf(" ")+2).toUpperCase()+
		palabraLarga.substring(palabraLarga.indexOf(" ")+2).toLowerCase()
console.log("\n-Exercise 2.f:");
console.log(resultadoPalabra);




















