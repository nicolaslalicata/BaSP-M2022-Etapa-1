// Crear una función suma que reciba dos valores numéricos y 
// retorne el resultado. Ejecutar la función y guardar el resultado en una 
// variable, mostrando el valor de dicha variable en la consola del navegador.
console.log("\n-Exercise 6:");

function sumar() {
  var num1 = Number(prompt("Ingrese un valor"));
  var num2 = Number(prompt("Ingrese un valor"));
  var suma = num1 + num2;

  if (isNaN(num1) || isNaN(num2)) {
    alert("Uno de los parametros no representa un Numero");
  } else {
    console.log("El resultado es: " + suma);
  }

  if (Number.isInteger(suma)) {
    console.log("La variable es entera");
  } else if ((suma = Math.round(num2) + Math.round(num1))) {
    alert("La variable original contiene decimales, numero entero = " + suma);
  }
}
sumar();

//Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.
var parametro = Math.random() * 100;

function validarNumero(parametro) {}

if (Number.isInteger(parametro)) {
  console.log("La variable es entera");
} else {
  console.log("La variable contiene decimales");
}

/*
//A la función suma del ejercicio 6b) agregarle una llamada que 
valide que los números sean enteros. En caso que haya decimales mostrar 
un alerta con el error y retorna el número convertido a entero (redondeado).



function validarDecimal (sumar) {
if(Number.isInteger(suma)) {
  console.log('La variable es entera');
}
else if (suma = Math.round(num2) + Math.round(num1)) {
    alert("La variable original contiene decimales, numero entero = " + suma)
}
}
*/
