
// EX A/B
function sumar(){
    
    
    var num1 = Number(124);
    var num2 = Number(5562);
    suma = num1 + num2;


if (isNaN(num1) || isNaN(num2)){
   alert("Uno de los parametros no representa un Numero: NaN")
} 
else {
   console.log("El resultado es: " + suma);
}

if(Number.isInteger(suma)) {
    console.log('La variable es entera');
  }
  else if (suma = Math.round(num2) + Math.round(num1)) {
      alert("La variable original contiene decimales, numero entero = " + suma)
  } 

 }
 
sumar();

// EX C

var parametro = Math.random()*100;

function validarNumero (parametro) {}

if(Number.isInteger(parametro)) {
    console.log('La variable es entera');
  }
  else {
    console.log("La variable contiene decimales");
 }

// EX D

/*
function validarDecimal (sumar) {

if(Number.isInteger(suma)) {
    console.log('La variable es entera');
  }
  else if (suma = Math.round(num2) + Math.round(num1)) {
      alert("La variable original contiene decimales, numero entero = " + suma)
  }
}
*/
