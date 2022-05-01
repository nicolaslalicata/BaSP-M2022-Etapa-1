var formulario = document.getElementById("formulario");
var inputs = document.querySelectorAll("#formulario input");
var user = document.getElementById("usuario");
var names = document.getElementById("nombre");
var date = document.getElementById("nacimiento");
var mail = document.getElementById("email");
var addres = document.getElementById("direccion");
var localty = document.getElementById("localidad");
var cp = document.getElementById("codigo-postal");
var phone = document.getElementById("telefono");
var docu = document.getElementById("dni");
var pass = document.getElementById("password");
var pass2 = document.getElementById("password2");
var btn2 = document.getElementById("butonSend");
var validar = {
  users: true,
  names: true,
  date: false,
  mail: false,
  addres: false,
  localty: false,
  cp: false,
  phone: false,
  docu: false,
  pass: false,
  password2: false,
};

user.addEventListener("focus", function (e) {
  document
    .getElementById("grupo__usuario")
    .classList.remove("formulario__grupo-incorrecto");
});

names.addEventListener("focus", function (e) {
  document
    .getElementById("grupo__nombre")
    .classList.remove("formulario__grupo-incorrecto");
});

date.addEventListener("focus", function (e) {
  document
    .getElementById("grupo__nacimiento")
    .classList.remove("formulario__grupo-incorrecto");
});

mail.addEventListener("focus", function (e) {
  document
    .getElementById("grupo__email")
    .classList.remove("formulario__grupo-incorrecto");
});

addres.addEventListener("focus", function (e) {
  document
    .getElementById("grupo__direccion")
    .classList.remove("formulario__grupo-incorrecto");
});

localty.addEventListener("focus", function (e) {
  document
    .getElementById("grupo__localidad")
    .classList.remove("formulario__grupo-incorrecto");
});

cp.addEventListener("focus", function (e) {
  document
    .getElementById("grupo__codigo-postal")
    .classList.remove("formulario__grupo-incorrecto");
});

phone.addEventListener("focus", function (e) {
  document
    .getElementById("grupo__telefono")
    .classList.remove("formulario__grupo-incorrecto");
});

docu.addEventListener("focus", function (e) {
  document
    .getElementById("grupo__dni")
    .classList.remove("formulario__grupo-incorrecto");
});

pass.addEventListener("focus", function (e) {
  document
    .getElementById("grupo__password")
    .classList.remove("formulario__grupo-incorrecto");
});

pass2.addEventListener("focus", function (e) {
  document
    .getElementById("grupo__password2")
    .classList.remove("formulario__grupo-incorrecto");
});

user.addEventListener("blur", function (e) {
  if (user.value.length > 3) {
    var prueba = user.value;
    var validateName = false;
    for (let i = 0; i < prueba.length; i++) {
      var letra = prueba.substring(i, i + 1);
      if (letra == Number(letra)) {
        validateName = true;
      }
    }
    console.log(validateName);
    if (validateName) {
      document
        .getElementById("grupo__usuario")
        .classList.add("formulario__grupo-incorrecto");
      document
        .getElementById("grupo__usuario")
        .classList.remove("formulario__grupo-correcto");
      document
        .querySelector("#grupo__usuario i")
        .classList.remove("uil-check-circle");
      document
        .querySelector("#grupo__usuario i")
        .classList.add("uil-times-circle");
      document
        .querySelector("#grupo__usuario .formulario__input-error")
        .classList.add("formulario__input-error-activo");
      validar["users"] = false;
    } else {
      document
        .getElementById("grupo__usuario")
        .classList.remove("formulario__grupo-incorrecto");
      document
        .getElementById("grupo__usuario")
        .classList.add("formulario__grupo-correcto");
      document
        .querySelector("#grupo__usuario i")
        .classList.remove("uil-check-circle");
      document
        .querySelector("#grupo__usuario i")
        .classList.add("uil-check-circle");
      document
        .querySelector("#grupo__usuario .formulario__input-error")
        .classList.remove("formulario__input-error-activo");
      validar["users"] = true;
    }
  } else {
    document
      .getElementById("grupo__usuario")
      .classList.add("formulario__grupo-incorrecto");
    document
      .getElementById("grupo__usuario")
      .classList.remove("formulario__grupo-correcto");
    document
      .querySelector("#grupo__usuario i")
      .classList.remove("uil-check-circle");
    document
      .querySelector("#grupo__usuario i")
      .classList.add("uil-times-circle");
    document
      .querySelector("#grupo__usuario .formulario__input-error")
      .classList.add("formulario__input-error-activo");
    validar["users"] = false;
  }
});

names.addEventListener("blur", function (e) {
  if (names.value.length > 3) {
    var prueba = names.value;
    var validateName = false;
    for (let i = 0; i < prueba.length; i++) {
      var letra = prueba.substring(i, i + 1);
      if (letra == Number(letra)) {
        validateName = true;
      }
    }
    console.log(validateName);
    if (validateName) {
      document
        .getElementById("grupo__nombre")
        .classList.add("formulario__grupo-incorrecto");
      document
        .getElementById("grupo__nombre")
        .classList.remove("formulario__grupo-correcto");
      document
        .querySelector("#grupo__nombre i")
        .classList.remove("uil-check-circle");
      document
        .querySelector("#grupo__nombre i")
        .classList.add("uil-times-circle");
      document
        .querySelector("#grupo__nombre .formulario__input-error")
        .classList.add("formulario__input-error-activo");
      validar["names"] = false;
    } else {
      document
        .getElementById("grupo__nombre")
        .classList.remove("formulario__grupo-incorrecto");
      document
        .getElementById("grupo__nombre")
        .classList.add("formulario__grupo-correcto");
      document
        .querySelector("#grupo__nombre i")
        .classList.remove("uil-check-circle");
      document
        .querySelector("#grupo__nombre i")
        .classList.add("uil-check-circle");
      document
        .querySelector("#grupo__nombre .formulario__input-error")
        .classList.remove("formulario__input-error-activo");
      validar["names"] = true;
    }
  } else {
    document
      .getElementById("grupo__nombre")
      .classList.add("formulario__grupo-incorrecto");
    document
      .getElementById("grupo__nombre")
      .classList.remove("formulario__grupo-correcto");
    document
      .querySelector("#grupo__nombre i")
      .classList.remove("uil-check-circle");
    document
      .querySelector("#grupo__nombre i")
      .classList.add("uil-times-circle");
    document
      .querySelector("#grupo__nombre .formulario__input-error")
      .classList.add("formulario__input-error-activo");
    validar["names"] = false;
  }
});

date.addEventListener("blur", function (e) {
  var dateValue = date.value;
  var day = dateValue.substring(0, 2);
  var slash1 = dateValue.substring(2, 3);
  var month = dateValue.substring(3, 5);
  var slash2 = dateValue.substring(5, 6);
  var year = dateValue.substring(6, 10);

  if (day > 31 || day < 1) {
    document
      .getElementById("grupo__nacimiento")
      .classList.add("formulario__grupo-incorrecto");
    document
      .getElementById("grupo__nacimiento")
      .classList.remove("formulario__grupo-correcto");
    document
      .querySelector("#grupo__nacimiento i")
      .classList.remove("uil-check-circle");
    document
      .querySelector("#grupo__nacimiento i")
      .classList.add("uil-times-circle");
    document
      .querySelector("#grupo__nacimiento .formulario__input-error")
      .classList.add("formulario__input-error-activo");
    validar["date"] = false;
  } else if (month > 12 || month < 1) {
    document
      .getElementById("grupo__nacimiento")
      .classList.add("formulario__grupo-incorrecto");
    document
      .getElementById("grupo__nacimiento")
      .classList.remove("formulario__grupo-correcto");
    document
      .querySelector("#grupo__nacimiento i")
      .classList.remove("uil-check-circle");
    document
      .querySelector("#grupo__nacimiento i")
      .classList.add("uil-times-circle");
    document
      .querySelector("#grupo__nacimiento .formulario__input-error")
      .classList.add("formulario__input-error-activo");
    validar["date"] = false;
  } else if (slash1 != "/" || slash2 != "/") {
    document
      .getElementById("grupo__nacimiento")
      .classList.add("formulario__grupo-incorrecto");
    document
      .getElementById("grupo__nacimiento")
      .classList.remove("formulario__grupo-correcto");
    document
      .querySelector("#grupo__nacimiento i")
      .classList.remove("uil-check-circle");
    document
      .querySelector("#grupo__nacimiento i")
      .classList.add("uil-times-circle");
    validar["date"] = false;
    document
      .querySelector("#grupo__nacimiento .formulario__input-error")
      .classList.add("formulario__input-error-activo");
  } else if (year < 1990 || year > 2030) {
    document
      .getElementById("grupo__nacimiento")
      .classList.add("formulario__grupo-incorrecto");
    document
      .getElementById("grupo__nacimiento")
      .classList.remove("formulario__grupo-correcto");
    document
      .querySelector("#grupo__nacimiento i")
      .classList.remove("uil-check-circle");
    document
      .querySelector("#grupo__nacimiento i")
      .classList.add("uil-times-circle");
    document
      .querySelector("#grupo__nacimiento .formulario__input-error")
      .classList.add("formulario__input-error-activo");
    validar["date"] = false;
  } else {
    document
      .getElementById("grupo__nacimiento")
      .classList.remove("formulario__grupo-incorrecto");
    document
      .getElementById("grupo__nacimiento")
      .classList.add("formulario__grupo-correcto");
    document
      .querySelector("#grupo__nacimiento i")
      .classList.remove("uil-check-circle");
    document
      .querySelector("#grupo__nacimiento i")
      .classList.add("uil-check-circle");
    document
      .querySelector("#grupo__nacimiento .formulario__input-error")
      .classList.remove("formulario__input-error-activo");
    validar["date"] = true;
  }
});

mail.addEventListener("blur", function (e) {
  e.preventDefault();
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (regexEmail.test(mail.value)) {
    document
      .getElementById("grupo__email")
      .classList.remove("formulario__grupo-incorrecto");
    document
      .getElementById("grupo__email")
      .classList.add("formulario__grupo-correcto");
    document
      .querySelector("#grupo__email i")
      .classList.remove("uil-check-circle");
    document.querySelector("#grupo__email i").classList.add("uil-check-circle");
    document
      .querySelector("#grupo__email .formulario__input-error")
      .classList.remove("formulario__input-error-activo");
    validar["mail"] = true;
  } else {
    document
      .getElementById("grupo__email")
      .classList.add("formulario__grupo-incorrecto");
    document
      .getElementById("grupo__email")
      .classList.remove("formulario__grupo-correcto");
    document
      .querySelector("#grupo__email i")
      .classList.remove("uil-check-circle");
    document.querySelector("#grupo__email i").classList.add("uil-times-circle");
    document
      .querySelector("#grupo__email .formulario__input-error")
      .classList.add("formulario__input-error-activo");
    validar["mail"] = false;
  }
});

docu.addEventListener("blur", function (e) {
  if (docu.value.length > 7) {
    var verificateDocu = docu.value;
    var validateDocu = false;
    for (let i = 0; i < verificateDocu.length; i++) {
      var letra = verificateDocu.substring(i, i + 1);
      if (letra == Number(letra)) {
        validateDocu = true;
      }
    }
    console.log(validateDocu);
    if (validateDocu) {
      document
        .getElementById("grupo__dni")
        .classList.remove("formulario__grupo-incorrecto");
      document
        .getElementById("grupo__dni")
        .classList.add("formulario__grupo-correcto");
      document
        .querySelector("#grupo__dni i")
        .classList.remove("uil-check-circle");
      document.querySelector("#grupo__dni i").classList.add("uil-check-circle");
      document
        .querySelector("#grupo__dni .formulario__input-error")
        .classList.remove("formulario__input-error-activo");
      validar["mail"] = true;
    } else {
      document
        .getElementById("grupo__dni")
        .classList.add("formulario__grupo-incorrecto");
      document
        .getElementById("grupo__dni")
        .classList.remove("formulario__grupo-correcto");
      document
        .querySelector("#grupo__dni i")
        .classList.remove("uil-check-circle");
      document.querySelector("#grupo__dni i").classList.add("uil-times-circle");
      document
        .querySelector("#grupo__dni .formulario__input-error")
        .classList.add("formulario__input-error-activo");
      validar["mail"] = false;
    }
  } else {
    document
      .getElementById("grupo__dni")
      .classList.add("formulario__grupo-incorrecto");
    document
      .getElementById("grupo__dni")
      .classList.remove("formulario__grupo-correcto");
    document
      .querySelector("#grupo__dni i")
      .classList.remove("uil-check-circle");
    document.querySelector("#grupo__dni i").classList.add("uil-times-circle");
    document
      .querySelector("#grupo__dni .formulario__input-error")
      .classList.add("formulario__input-error-activo");
    validar["mail"] = false;
  }
});

cp.addEventListener("blur", function (e) {
  if (cp.value.length > 0 && cp.value.length <= 5) {
    var verificateCp = cp.value;
    var validateCp = false;
    for (let i = 0; i < verificateCp.length; i++) {
      var letra = verificateCp.substring(i, i + 1);
      if (letra == Number(letra)) {
        validateCp = true;
      }
    }
    console.log(validateCp);
    if (validateCp) {
      document
        .getElementById("grupo__codigo-postal")
        .classList.remove("formulario__grupo-incorrecto");
      document
        .getElementById("grupo__codigo-postal")
        .classList.add("formulario__grupo-correcto");
      document
        .querySelector("#grupo__codigo-postal i")
        .classList.remove("uil-check-circle");
      document
        .querySelector("#grupo__codigo-postal i")
        .classList.add("uil-check-circle");
      document
        .querySelector("#grupo__codigo-postal .formulario__input-error")
        .classList.remove("formulario__input-error-activo");
      validar["cp"] = true;
    } else {
      document
        .getElementById("grupo__codigo-postal")
        .classList.add("formulario__grupo-incorrecto");
      document
        .getElementById("grupo__codigo-postal")
        .classList.remove("formulario__grupo-correcto");
      document
        .querySelector("#grupo__codigo-postal i")
        .classList.remove("uil-check-circle");
      document
        .querySelector("#grupo__codigo-postal i")
        .classList.add("uil-times-circle");
      document
        .querySelector("#grupo__codigo-postal .formulario__input-error")
        .classList.add("formulario__input-error-activo");
      validar["cp"] = false;
    }
  } else {
    document
      .getElementById("grupo__codigo-postal")
      .classList.add("formulario__grupo-incorrecto");
    document
      .getElementById("grupo__codigo-postal")
      .classList.remove("formulario__grupo-correcto");
    document
      .querySelector("#grupo__codigo-postal i")
      .classList.remove("uil-check-circle");
    document
      .querySelector("#grupo__codigo-postal i")
      .classList.add("uil-times-circle");
    document
      .querySelector("#grupo__codigo-postal .formulario__input-error")
      .classList.add("formulario__input-error-activo");
    validar["cp"] = false;
  }
});

phone.addEventListener("blur", function (e) {
  if (phone.value.length == 10) {
    var verificatePhone = phone.value;
    var validatePhone = false;
    for (let i = 0; i < verificatePhone.length; i++) {
      var letra = verificatePhone.substring(i, i + 1);
      if (letra == Number(letra)) {
        validatePhone = true;
      }
    }
    console.log(validatePhone);
    if (validatePhone) {
      document
        .getElementById("grupo__telefono")
        .classList.remove("formulario__grupo-incorrecto");
      document
        .getElementById("grupo__telefono")
        .classList.add("formulario__grupo-correcto");
      document
        .querySelector("#grupo__telefono i")
        .classList.remove("uil-check-circle");
      document
        .querySelector("#grupo__telefono i")
        .classList.add("uil-check-circle");
      document
        .querySelector("#grupo__telefono .formulario__input-error")
        .classList.remove("formulario__input-error-activo");
      validar["phone"] = true;
    } else {
      document
        .getElementById("grupo__telefono")
        .classList.add("formulario__grupo-incorrecto");
      document
        .getElementById("grupo__telefono")
        .classList.remove("formulario__grupo-correcto");
      document
        .querySelector("#grupo__telefono i")
        .classList.remove("uil-check-circle");
      document
        .querySelector("#grupo__telefono i")
        .classList.add("uil-times-circle");
      document
        .querySelector("#grupo__telefono .formulario__input-error")
        .classList.add("formulario__input-error-activo");
      validar["phone"] = false;
    }
  } else {
    document
      .getElementById("grupo__telefono")
      .classList.add("formulario__grupo-incorrecto");
    document
      .getElementById("grupo__telefono")
      .classList.remove("formulario__grupo-correcto");
    document
      .querySelector("#grupo__telefono i")
      .classList.remove("uil-check-circle");
    document
      .querySelector("#grupo__telefono i")
      .classList.add("uil-times-circle");
    document
      .querySelector("#grupo__telefono .formulario__input-error")
      .classList.add("formulario__input-error-activo");
    validar["phone"] = false;
  }
});

localty.addEventListener("blur", function (e) {
  var validos = " abcdefghijklmnopqrstuvwxyz0123456789";
  var letra;
  var bien = true;
  for (var i = 0; i < localty.value.length; i++) {
    letra = localty.value.charAt(i).toLowerCase();
    if (validos.indexOf(letra) == -1 || localty.value.length < 3) {
      bien = false;
    }
    document
      .getElementById("grupo__localidad")
      .classList.remove("formulario__grupo-incorrecto");
    document
      .getElementById("grupo__localidad")
      .classList.add("formulario__grupo-correcto");
    document
      .querySelector("#grupo__localidad i")
      .classList.remove("uil-check-circle");
    document
      .querySelector("#grupo__localidad i")
      .classList.add("uil-check-circle");
    document
      .querySelector("#grupo__localidad .formulario__input-error")
      .classList.remove("formulario__input-error-activo");
    validar["localty"] = true;
  }
  if (!bien) {
    document
      .getElementById("grupo__localidad")
      .classList.add("formulario__grupo-incorrecto");
    document
      .getElementById("grupo__localidad")
      .classList.remove("formulario__grupo-correcto");
    document
      .querySelector("#grupo__localidad i")
      .classList.remove("uil-check-circle");
    document
      .querySelector("#grupo__localidad i")
      .classList.add("uil-times-circle");
    document
      .querySelector("#grupo__localidad .formulario__input-error")
      .classList.add("formulario__input-error-activo");
    validar["localty"] = false;
  }
});

addres.addEventListener("blur", function (e) {
  var validos = " abcdefghijklmnopqrstuvwxyz0123456789";
  var letra;
  var bien = true;
  for (var i = 0; i < addres.value.length; i++) {
    letra = addres.value.charAt(i).toLowerCase();
    if (validos.indexOf(letra) == -1 || addres.value.length < 5) {
      bien = false;
    }
    document
      .getElementById("grupo__direccion")
      .classList.remove("formulario__grupo-incorrecto");
    document
      .getElementById("grupo__direccion")
      .classList.add("formulario__grupo-correcto");
    document
      .querySelector("#grupo__direccion i")
      .classList.remove("uil-check-circle");
    document
      .querySelector("#grupo__direccion i")
      .classList.add("uil-check-circle");
    document
      .querySelector("#grupo__direccion .formulario__input-error")
      .classList.remove("formulario__input-error-activo");
    validar["addres"] = true;
  }
  if (!bien) {
    document
      .getElementById("grupo__direccion")
      .classList.add("formulario__grupo-incorrecto");
    document
      .getElementById("grupo__direccion")
      .classList.remove("formulario__grupo-correcto");
    document
      .querySelector("#grupo__direccion i")
      .classList.remove("uil-check-circle");
    document
      .querySelector("#grupo__direccion i")
      .classList.add("uil-times-circle");
    document
      .querySelector("#grupo__direccion .formulario__input-error")
      .classList.add("formulario__input-error-activo");
    validar["addres"] = false;
  }
});

pass.addEventListener("blur", function (e) {
  var validos =
    " ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var letra;
  var bien = true;
  for (var i = 0; i < pass.value.length; i++) {
    letra = pass.value.charAt(i).toLowerCase();
    if (validos.indexOf(letra) == -1 || pass.value.length < 5) {
      bien = false;
    }
    document
      .getElementById("grupo__password")
      .classList.remove("formulario__grupo-incorrecto");
    document
      .getElementById("grupo__password")
      .classList.add("formulario__grupo-correcto");
    document
      .querySelector("#grupo__password i")
      .classList.remove("uil-check-circle");
    document
      .querySelector("#grupo__password i")
      .classList.add("uil-check-circle");
    document
      .querySelector("#grupo__password .formulario__input-error")
      .classList.remove("formulario__input-error-activo");
    validar["pass"] = true;
  }
  if (!bien) {
    document
      .getElementById("grupo__password")
      .classList.add("formulario__grupo-incorrecto");
    document
      .getElementById("grupo__password")
      .classList.remove("formulario__grupo-correcto");
    document
      .querySelector("#grupo__password i")
      .classList.remove("uil-check-circle");
    document
      .querySelector("#grupo__password i")
      .classList.add("uil-times-circle");
    document
      .querySelector("#grupo__password .formulario__input-error")
      .classList.add("formulario__input-error-activo");
    validar["pass"] = false;
  }
});

pass2.addEventListener("blur", function (e) {
  if (pass2.value == pass.value) {
    document
      .getElementById("grupo__password2")
      .classList.remove("formulario__grupo-incorrecto");
    document
      .getElementById("grupo__password2")
      .classList.add("formulario__grupo-correcto");
    document
      .querySelector("#grupo__password2 i")
      .classList.remove("uil-check-circle");
    document
      .querySelector("#grupo__password2 i")
      .classList.add("uil-check-circle");
    document
      .querySelector("#grupo__password2 .formulario__input-error")
      .classList.remove("formulario__input-error-activo");
    validar["pass2"] = true;
  } else {
    document
      .getElementById("grupo__password2")
      .classList.add("formulario__grupo-incorrecto");
    document
      .getElementById("grupo__password2")
      .classList.remove("formulario__grupo-correcto");
    document
      .querySelector("#grupo__password2 i")
      .classList.remove("uil-check-circle");
    document
      .querySelector("#grupo__password2 i")
      .classList.add("uil-times-circle");
    document
      .querySelector("#grupo__password2 .formulario__input-error")
      .classList.add("formulario__input-error-activo");
    validar["pass2"] = false;
  }
});

btn2.addEventListener("click", clickButton);

function clickButton(e) {
  e.preventDefault();

  if (
    validar.users.value &&
    validar.names.value &&
    validar.date.value &&
    validar.cp.value &&
    validar.docu.value &&
    validar.localty.value &&
    validar.mail.value &&
    validar.pass.value &&
    validar.password2.value &&
    validar.phone.value &&
    validar.addres.value
  ) {
    
  } else {
 
  }
}