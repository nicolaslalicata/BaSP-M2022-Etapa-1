var formulario = document.getElementById('formulario');
var inp = document.querySelectorAll('#login input');
var mail2 = document.getElementById('meil')
var pass3 = document.getElementById('password')


mail2.addEventListener('focus', function(e){
    document
          .getElementById("grupo__meil")
          .classList.remove("formulario__grupo-incorrecto");
          
  })


mail2.addEventListener("blur", function (e) {
    e.preventDefault();
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (regexEmail.test(mail2.value)) {
      document
        .getElementById("grupo__meil")
        .classList.remove("formulario__grupo-incorrecto");
      document
        .getElementById("grupo__meil")
        .classList.add("formulario__grupo-correcto");
      document
        .querySelector("#grupo__meil i")
        .classList.remove("uil-check-circle");
      document.querySelector("#grupo__meil i").classList.add("uil-check-circle");
      document
        .querySelector("#grupo__meil .formulario__input-error")
        .classList.remove("formulario__input-error-activo");
    } else {
      document
        .getElementById("grupo__meil")
        .classList.add("formulario__grupo-incorrecto");
      document
        .getElementById("grupo__meil")
        .classList.remove("formulario__grupo-correcto");
      document
        .querySelector("#grupo__meil i")
        .classList.remove("uil-check-circle");
      document.querySelector("#grupo__meil i").classList.add("uil-times-circle");
      document
        .querySelector("#grupo__meil .formulario__input-error")
        .classList.add("formulario__input-error-activo");
    }
  });

  pass3.addEventListener('focus', function(e){
    document
          .getElementById("grupo__pass3")
          .classList.remove("formulario__grupo-incorrecto");
          
  })

  pass3.addEventListener("blur", function (e) {
    var validos =
      " ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var letra;
    var bien = true;
    for (var i = 0; i < pass3.value.length; i++) {
      letra = pass3.value.charAt(i).toLowerCase();
      if (validos.indexOf(letra) == -1 || pass3.value.length < 5) {
        bien = false;
      }
      document
        .getElementById("grupo__pass3")
        .classList.remove("formulario__grupo-incorrecto");
      document
        .getElementById("grupo__pass3")
        .classList.add("formulario__grupo-correcto");
      document
        .querySelector("#grupo__pass3 i")
        .classList.remove("uil-check-circle");
      document
        .querySelector("#grupo__pass3 i")
        .classList.add("uil-check-circle");
      document
        .querySelector("#grupo__pass3 .formulario__input-error")
        .classList.remove("formulario__input-error-activo");
    }
    if (!bien) {
      document
        .getElementById("grupo__pass3")
        .classList.add("formulario__grupo-incorrecto");
      document
        .getElementById("grupo__pass3")
        .classList.remove("formulario__grupo-correcto");
      document
        .querySelector("#grupo__pass3 i")
        .classList.remove("uil-check-circle");
      document
        .querySelector("#grupo__pass3 i")
        .classList.add("uil-times-circle");
      document
        .querySelector("#grupo__pass3 .formulario__input-error")
        .classList.add("formulario__input-error-activo");
    }
  });