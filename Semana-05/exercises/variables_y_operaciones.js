//Primer ejercicio
var num = 5
var num2 = 25
var resultado = num + num2

console.log (resultado);

//Ejercicio B
var text = "Mi nombre es "
var text2 = "Nicolas Lalicata"
var concatenacion = text + text2

console.log(concatenacion);

// Ejercicio C
var conteo = "Html es un lenguaje de marcado "
var conteo2 = "Mientras que JS es un lenguaje de programacion"
var conteojunto = conteo + conteo2;

console.log(conteojunto.length);

// STRINGS

// Ejercicio A
var cadena = "Hoy en dìa hay mucha demanda de programadores en la industria"
    cadena = cadena.toUpperCase();

    console.log(cadena);

//Ejercicio B
var cadena2 = "Aprender un lenguaje conlleva tiempo y dedicacion"
var guardado= cadena2.substring(0 , 5);

    console.log(guardado);


// Ejercicio C

var cadena3 = "Desarrollar una aplicacion implica tener un equipo disciplinado"
var guardado2 = cadena3.substring(60 , 63);

    console.log(guardado2);

// Ejercicio D

var cadena3 = "hola que tal"
var mayuscula = cadena3.substring(0 , 1);
var residuo =  cadena3.slice(1);
var mayuscula = mayuscula.toUpperCase();

var total = mayuscula + residuo

console.log(total);

// Ejercicio E

var hello = "Mi nombre es nicolas"
var resultado = hello.indexOf(" ");



// Ejercicio F

var variable1 = "inexorablemente espaciales"
var index = variable1.indexOf(" ");
var primermayus = variable1.substring(0 , 1);
var residual = variable1.slice(1 , 16);
var primermayus = primermayus.toUpperCase();

var resultadofinal = primermayus + residual





var segundamayus = variable1.substring(16 , 17)
var residuos = variable1.slice (17);
var segundamayus = segundamayus.toUpperCase();

var final = segundamayus + residuos



var tema1 = resultadofinal + final 

console.log(tema1);

// ARRAYS
//Ejercicio A
var mesesDelAnho = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

console.log(mesesDelAnho[05], mesesDelAnho[11]);
// Ejercicio B
console.log(mesesDelAnho.sort());
// Ejercicio c
console.log(mesesDelAnho.unshift("Verano"));
console.log(mesesDelAnho);
console.log(mesesDelAnho.push("FallWinter"));
console.log(mesesDelAnho);
// Ejercicio D
console.log(mesesDelAnho.shift());
console.log(mesesDelAnho);
console.log(mesesDelAnho.pop());
console.log(mesesDelAnho);
// Ejercicio E
var reversa = mesesDelAnho.reverse();
console.log(reversa);
// Ejercicio F
console.log(mesesDelAnho.join("-"));
//Ejercicio G
var mesesDelAnho1 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
var recorteMeses = mesesDelAnho1.slice(4,11);
console.log(recorteMeses);

// IF ELSE!
// Ejercicio A

var x = Math.random();
    if (x >= 0.5) {
        alert ("Greater than 0,5")
    }
else {
    alert ("Lower than 0,5")
}

// Ejercicio B

var age = 25
if (age < 2 ) {
    alert ("bebe")
}


