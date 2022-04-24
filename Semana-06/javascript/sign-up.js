var formulario = document.getElementById('formulario');
var inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}



var validarFormulario = function(e){
switch (e.target.name) {
    case "usuario":
        if(expresiones.usuario.test(e.target.value)){
            document.getElementById('grupo__usuario').classList.remove('formulario__grupo-incorrecto')
            document.getElementById('grupo__usuario').classList.add('formulario__grupo-correcto')
            document.querySelector('#grupo__usuario i').classList.remove('uil-check-circle')
            document.querySelector('#grupo__usuario i').classList.add('uil-check-circle')
            document.querySelector('#grupo__usuario .formulario__input-error').classList.remove('formulario__input-error-activo')
    
    
        } else {
            document.getElementById('grupo__usuario').classList.add('formulario__grupo-incorrecto')
            document.getElementById('grupo__usuario').classList.remove('formulario__grupo-correcto')
            document.querySelector('#grupo__usuario i').classList.remove('uil-check-circle')
            document.querySelector('#grupo__usuario i').classList.add('uil-times-circle')
            document.querySelector('#grupo__usuario .formulario__input-error').classList.add('formulario__input-error-activo')
        }
    
       
    break;
    case "nombre":
        if(expresiones.nombre.test(e.target.value)){
            document.getElementById('grupo__nombre').classList.remove('formulario__grupo-incorrecto')
            document.getElementById('grupo__nombre').classList.add('formulario__grupo-correcto')
            document.querySelector('#grupo__nombre i').classList.remove('uil-check-circle')
            document.querySelector('#grupo__nombre i').classList.add('uil-check-circle')
            document.querySelector('#grupo__nombre .formulario__input-error').classList.remove('formulario__input-error-activo')
    
    
        } else {
            document.getElementById('grupo__nombre').classList.add('formulario__grupo-incorrecto')
            document.getElementById('grupo__nombre').classList.remove('formulario__grupo-correcto')
            document.querySelector('#grupo__nombre i').classList.remove('uil-check-circle')
            document.querySelector('#grupo__nombre i').classList.add('uil-times-circle')
            document.querySelector('#grupo__nombre .formulario__input-error').classList.add('formulario__input-error-activo')
        }
    break;
    case "nacimiento":
        if(expresiones.telefono.test(e.target.value)){
            document.getElementById('grupo__nacimiento').classList.remove('formulario__grupo-incorrecto')
            document.getElementById('grupo__nacimiento').classList.add('formulario__grupo-correcto')
            document.querySelector('#grupo__nacimiento i').classList.remove('uil-check-circle')
            document.querySelector('#grupo__nacimiento i').classList.add('uil-check-circle')
            document.querySelector('#grupo__nacimiento .formulario__input-error').classList.remove('formulario__input-error-activo')
    
    
        } else {
            document.getElementById('grupo__nacimiento').classList.add('formulario__grupo-incorrecto')
            document.getElementById('grupo__nacimiento').classList.remove('formulario__grupo-correcto')
            document.querySelector('#grupo__nacimiento i').classList.remove('uil-check-circle')
            document.querySelector('#grupo__nacimiento i').classList.add('uil-times-circle')
            document.querySelector('#grupo__nacimiento .formulario__input-error').classList.add('formulario__input-error-activo')
        }
    break;
    case "direccion":
        if(expresiones.telefono.test(e.target.value)){
            document.getElementById('grupo__direccion').classList.remove('formulario__grupo-incorrecto')
            document.getElementById('grupo__direccion').classList.add('formulario__grupo-correcto')
            document.querySelector('#grupo__direccion i').classList.remove('uil-check-circle')
            document.querySelector('#grupo__direccion i').classList.add('uil-check-circle')
            document.querySelector('#grupo__direccion .formulario__input-error').classList.remove('formulario__input-error-activo')
    
    
        } else {
            document.getElementById('grupo__direccion').classList.add('formulario__grupo-incorrecto')
            document.getElementById('grupo__direccion').classList.remove('formulario__grupo-correcto')
            document.querySelector('#grupo__direccion i').classList.remove('uil-check-circle')
            document.querySelector('#grupo__direccion i').classList.add('uil-times-circle')
            document.querySelector('#grupo__direccion .formulario__input-error').classList.add('formulario__input-error-activo')
        }
    break;
    case "telefono":
        if(expresiones.telefono.test(e.target.value)){
            document.getElementById('grupo__telefono').classList.remove('formulario__grupo-incorrecto')
            document.getElementById('grupo__telefono').classList.add('formulario__grupo-correcto')
            document.querySelector('#grupo__telefono i').classList.remove('uil-check-circle')
            document.querySelector('#grupo__telefono i').classList.add('uil-check-circle')
            document.querySelector('#grupo__telefono .formulario__input-error').classList.remove('formulario__input-error-activo')
    
    
        } else {
            document.getElementById('grupo__telefono').classList.add('formulario__grupo-incorrecto')
            document.getElementById('grupo__telefono').classList.remove('formulario__grupo-correcto')
            document.querySelector('#grupo__telefono i').classList.remove('uil-check-circle')
            document.querySelector('#grupo__telefono i').classList.add('uil-times-circle')
            document.querySelector('#grupo__telefono .formulario__input-error').classList.add('formulario__input-error-activo')
        }
    break;
    case "email":
        if(expresiones.telefono.test(e.target.value)){
            document.getElementById('grupo__email').classList.remove('formulario__grupo-incorrecto')
            document.getElementById('grupo__email').classList.add('formulario__grupo-correcto')
            document.querySelector('#grupo__email i').classList.remove('uil-check-circle')
            document.querySelector('#grupo__email i').classList.add('uil-check-circle')
            document.querySelector('#grupo__email .formulario__input-error').classList.remove('formulario__input-error-activo')
    
    
        } else {
            document.getElementById('grupo__email').classList.add('formulario__grupo-incorrecto')
            document.getElementById('grupo__email').classList.remove('formulario__grupo-correcto')
            document.querySelector('#grupo__email i').classList.remove('uil-check-circle')
            document.querySelector('#grupo__email i').classList.add('uil-times-circle')
            document.querySelector('#grupo__email .formulario__input-error').classList.add('formulario__input-error-activo')
        }
    break;
    case "localidad":
        if(expresiones.telefono.test(e.target.value)){
            document.getElementById('grupo__localidad').classList.remove('formulario__grupo-incorrecto')
            document.getElementById('grupo__localidad').classList.add('formulario__grupo-correcto')
            document.querySelector('#grupo__localidad i').classList.remove('uil-check-circle')
            document.querySelector('#grupo__localidad i').classList.add('uil-check-circle')
            document.querySelector('#grupo__localidad .formulario__input-error').classList.remove('formulario__input-error-activo')
    
    
        } else {
            document.getElementById('grupo__localidad').classList.add('formulario__grupo-incorrecto')
            document.getElementById('grupo__localidad').classList.remove('formulario__grupo-correcto')
            document.querySelector('#grupo__localidad i').classList.remove('uil-check-circle')
            document.querySelector('#grupo__localidad i').classList.add('uil-times-circle')
            document.querySelector('#grupo__localidad .formulario__input-error').classList.add('formulario__input-error-activo')
        }
    break;
    case "codigo-postal":
        if(expresiones.telefono.test(e.target.value)){
            document.getElementById('grupo__codigo-postal').classList.remove('formulario__grupo-incorrecto')
            document.getElementById('grupo__codigo-postal').classList.add('formulario__grupo-correcto')
            document.querySelector('#grupo__codigo-postal i').classList.remove('uil-check-circle')
            document.querySelector('#grupo__codigo-postal i').classList.add('uil-check-circle')
            document.querySelector('#grupo__codigo-postal .formulario__input-error').classList.remove('formulario__input-error-activo')
    
    
        } else {
            document.getElementById('grupo__codigo-postal').classList.add('formulario__grupo-incorrecto')
            document.getElementById('grupo__codigo-postal').classList.remove('formulario__grupo-correcto')
            document.querySelector('#grupo__codigo-postal i').classList.remove('uil-check-circle')
            document.querySelector('#grupo__codigo-postal i').classList.add('uil-times-circle')
            document.querySelector('#grupo__codigo-postal .formulario__input-error').classList.add('formulario__input-error-activo')
        }
    break;
    case "dni":
        if(expresiones.telefono.test(e.target.value)){
            document.getElementById('grupo__dni').classList.remove('formulario__grupo-incorrecto')
            document.getElementById('grupo__dni').classList.add('formulario__grupo-correcto')
            document.querySelector('#grupo__dni i').classList.remove('uil-check-circle')
            document.querySelector('#grupo__dni i').classList.add('uil-check-circle')
            document.querySelector('#grupo__dni .formulario__input-error').classList.remove('formulario__input-error-activo')
    
    
        } else {
            document.getElementById('grupo__dni').classList.add('formulario__grupo-incorrecto')
            document.getElementById('grupo__dni').classList.remove('formulario__grupo-correcto')
            document.querySelector('#grupo__dni i').classList.remove('uil-check-circle')
            document.querySelector('#grupo__dni i').classList.add('uil-times-circle')
            document.querySelector('#grupo__dni .formulario__input-error').classList.add('formulario__input-error-activo')
        }
    break;
    case "password":
        if(expresiones.telefono.test(e.target.value)){
            document.getElementById('grupo__password').classList.remove('formulario__grupo-incorrecto')
            document.getElementById('grupo__password').classList.add('formulario__grupo-correcto')
            document.querySelector('#grupo__password i').classList.remove('uil-check-circle')
            document.querySelector('#grupo__password i').classList.add('uil-check-circle')
            document.querySelector('#grupo__password .formulario__input-error').classList.remove('formulario__input-error-activo')
    
    
        } else {
            document.getElementById('grupo__password').classList.add('formulario__grupo-incorrecto')
            document.getElementById('grupo__password').classList.remove('formulario__grupo-correcto')
            document.querySelector('#grupo__password i').classList.remove('uil-check-circle')
            document.querySelector('#grupo__password i').classList.add('uil-times-circle')
            document.querySelector('#grupo__password .formulario__input-error').classList.add('formulario__input-error-activo')
        }
    break;
    case "password2":
        if(expresiones.telefono.test(e.target.value)){
            document.getElementById('grupo__password2').classList.remove('formulario__grupo-incorrecto')
            document.getElementById('grupo__password2').classList.add('formulario__grupo-correcto')
            document.querySelector('#grupo__password2 i').classList.remove('uil-check-circle')
            document.querySelector('#grupo__password2 i').classList.add('uil-check-circle')
            document.querySelector('#grupo__password2 .formulario__input-error').classList.remove('formulario__input-error-activo')
    
    
        } else {
            document.getElementById('grupo__password2').classList.add('formulario__grupo-incorrecto')
            document.getElementById('grupo__password2').classList.remove('formulario__grupo-correcto')
            document.querySelector('#grupo__password2 i').classList.remove('uil-check-circle')
            document.querySelector('#grupo__password2 i').classList.add('uil-times-circle')
            document.querySelector('#grupo__password2 .formulario__input-error').classList.add('formulario__input-error-activo')
        }
    break;
}
};


inputs.forEach(function (input){
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', function (e){
    e.preventDefault();
});


/*inputs.forEach(function (input){
    input.addEventListener('keyup', function(){
        console.log("solto la tecla")
    });
});*/