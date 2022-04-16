// FOR
/*Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript
para mostrar una alerta utilizando cada una de las palabras.
Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta 
por cada palabra modificada.
Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) 
recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable sentence.
Al final mostrar una única alerta con la cadena completa.
Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número
de la repetición, es decir que al final de la ejecución del bucle for debería haber 10 elementos
dentro del array, desde el número 0 hasta al número 9. Mostrar por la consola del navegador 
el array final (utilizar console.log).
*/

//Ex A
/*
var array1 = ["boca", "independiente", "estudiantes", "rosario central", "lanus"]

 
var contador = array1.length



for (var i = 0; i < contador; i++) {
   alert(array1[i]);
}



// Ex B

for (var i = 0; i < contador; i++) {
    
    array2 = array1[i].substring(0,1).toUpperCase() + array1[i].slice(1);
    alert("Al elemento dentro del array se le cambio el primer caracter en minuscula por mayuscula: " + array2 )

}


// Ex C


var sentence = ""

for (var i = 0; i < contador; i++) {
    sentence = ([i]+array1);
    
}

alert(sentence);




var arrayVacio= [];

for (var i = 0; i < 10; i++) {
    arrayVacio.push([i]); 
    
    
}

console.log(arrayVacio);

*/