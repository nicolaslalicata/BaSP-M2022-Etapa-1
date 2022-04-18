// FOR



//Ex A

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

