var formulario = document.getElementById("formulario");
var inputs = document.querySelectorAll("#formulario input");
<<<<<<< HEAD
var user = document.getElementById("user");
var names = document.getElementById("lastName");
var date = document.getElementById("birthdate");
var mail = document.getElementById("email");
var addres = document.getElementById("address");
var localty = document.getElementById("city");
var cp = document.getElementById("zip");
var phone = document.getElementById("phone");
var docu = document.getElementById("id");
=======
var user = document.getElementById("usuario");
var names = document.getElementById("nombre");
var date = document.getElementById("nacimiento");
var mail = document.getElementById("email");
var addres = document.getElementById("direccion");
var localty = document.getElementById("localidad");
var cp = document.getElementById("codigo-postal");
var phone = document.getElementById("telefono");
var docu = document.getElementById("dni");
>>>>>>> 72fd8e9f74d559ca7864f522db5e42a48b8b8153
var pass = document.getElementById("password");
var pass2 = document.getElementById("password2");
var btn2 = document.getElementById("butonSend");
var validateUser = false;
var validateNames = false;
var validateDate = false;
var validateMail = false;
var validateAddres = false;
var validateLocalty = false;
var validateCps = false;
var validatePhones = false;
var validateDocus = false;
var validatePass = false;
var validatePass2 = false;
user.addEventListener("focus", function (e) {
  document
<<<<<<< HEAD
    .getElementById("groupUser")
    .classList.remove("formGroupIncorrect");
});
names.addEventListener("focus", function (e) {
  document
    .getElementById("groupName")
    .classList.remove("formGroupIncorrect");
});
date.addEventListener("focus", function (e) {
  document
    .getElementById("groupBirthday")
    .classList.remove("formGroupIncorrect");
=======
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
>>>>>>> 72fd8e9f74d559ca7864f522db5e42a48b8b8153
});
mail.addEventListener("focus", function (e) {
  document
    .getElementById("grupo__email")
<<<<<<< HEAD
    .classList.remove("formGroupIncorrect");
});
addres.addEventListener("focus", function (e) {
  document
    .getElementById("groupAddress")
    .classList.remove("formGroupIncorrect");
});
localty.addEventListener("focus", function (e) {
  document
    .getElementById("groupCity")
    .classList.remove("formGroupIncorrect");
});
cp.addEventListener("focus", function (e) {
  document
    .getElementById("groupZip")
    .classList.remove("formGroupIncorrect");
});
phone.addEventListener("focus", function (e) {
  document
    .getElementById("groupPhone")
    .classList.remove("formGroupIncorrect");
});
docu.addEventListener("focus", function (e) {
  document
    .getElementById("groupId")
    .classList.remove("formGroupIncorrect");
});
pass.addEventListener("focus", function (e) {
  document
    .getElementById("groupPassword")
    .classList.remove("formGroupIncorrect");
});
pass2.addEventListener("focus", function (e) {
  document
    .getElementById("groupPassword2")
    .classList.remove("formGroupIncorrect");
=======
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
>>>>>>> 72fd8e9f74d559ca7864f522db5e42a48b8b8153
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
    if (validateName) {
      document
<<<<<<< HEAD
        .getElementById("groupUser")
        .classList.add("formGroupIncorrect");
      document
        .getElementById("groupUser")
        .classList.remove("formGroupCorrect");
      document
        .querySelector("#groupUser i")
        .classList.remove("uil-check-circle");
      document
        .querySelector("#groupUser i")
        .classList.add("uil-times-circle");
      document
        .querySelector("#groupUser .formInputError")
        .classList.add("formInputErrorActive");
        validateUser = false;
    } else {
      document
        .getElementById("groupUser")
        .classList.remove("formGroupIncorrect");
      document
        .getElementById("groupUser")
        .classList.add("formGroupCorrect");
      document
        .querySelector("#groupUser i")
        .classList.remove("uil-check-circle");
      document
        .querySelector("#groupUser i")
        .classList.add("uil-check-circle");
      document
        .querySelector("#groupUser .formInputError")
        .classList.remove("formInputErrorActive");
=======
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
        validateUser = false;
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
>>>>>>> 72fd8e9f74d559ca7864f522db5e42a48b8b8153
        validateUser = true;
    }
  } else {
    document
<<<<<<< HEAD
      .getElementById("groupUser")
      .classList.add("formGroupIncorrect");
    document
      .getElementById("groupUser")
      .classList.remove("formGroupCorrect");
    document
      .querySelector("#groupUser i")
      .classList.remove("uil-check-circle");
    document
      .querySelector("#groupUser i")
      .classList.add("uil-times-circle");
    document
      .querySelector("#groupUser .formInputError")
      .classList.add("formInputErrorActive");
=======
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
>>>>>>> 72fd8e9f74d559ca7864f522db5e42a48b8b8153
      validateUser = false;
      
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
    if (validateName) {
      document
<<<<<<< HEAD
        .getElementById("groupName")
        .classList.add("formGroupIncorrect");
      document
        .getElementById("groupName")
        .classList.remove("formGroupCorrect");
      document
        .querySelector("#groupName i")
        .classList.remove("uil-check-circle");
      document
        .querySelector("#groupName i")
        .classList.add("uil-times-circle");
      document
        .querySelector("#groupName .formInputError")
        .classList.add("formInputErrorActive");
        validateNames = false;
    } else {
      document
        .getElementById("groupName")
        .classList.remove("formGroupIncorrect");
      document
        .getElementById("groupName")
        .classList.add("formGroupCorrect");
      document
        .querySelector("#groupName i")
        .classList.remove("uil-check-circle");
      document
        .querySelector("#groupName i")
        .classList.add("uil-check-circle");
      document
        .querySelector("#groupName .formInputError")
        .classList.remove("formInputErrorActive");
=======
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
        validateNames = false;
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
>>>>>>> 72fd8e9f74d559ca7864f522db5e42a48b8b8153
        validateNames = true;
    }
  } else {
    document
<<<<<<< HEAD
      .getElementById("groupName")
      .classList.add("formGroupIncorrect");
    document
      .getElementById("groupName")
      .classList.remove("formGroupCorrect");
    document
      .querySelector("#groupName i")
      .classList.remove("uil-check-circle");
    document
      .querySelector("#groupName i")
      .classList.add("uil-times-circle");
    document
      .querySelector("#groupName .formInputError")
      .classList.add("formInputErrorActive");
=======
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
>>>>>>> 72fd8e9f74d559ca7864f522db5e42a48b8b8153
    validateNames = false;
  }
});
date.addEventListener("blur", function (e) {
  var dateValue = date.value;
  var month = dateValue.substring(0, 2);
  var slash1 = dateValue.substring(2, 3);
  var day = dateValue.substring(3, 5);
  var slash2 = dateValue.substring(5, 6);
  var year = dateValue.substring(6, 10);
  if (day > 31 || day < 1) {
    document
<<<<<<< HEAD
      .getElementById("groupBirthday")
      .classList.add("formGroupIncorrect");
    document
      .getElementById("groupBirthday")
      .classList.remove("formGroupCorrect");
    document
      .querySelector("#groupBirthday i")
      .classList.remove("uil-check-circle");
    document
      .querySelector("#groupBirthday i")
      .classList.add("uil-times-circle");
    document
      .querySelector("#groupBirthday .formInputError")
      .classList.add("formInputErrorActive");
      validateDate = false;
  } else if (month > 12 || month < 1) {
    document
      .getElementById("groupBirthday")
      .classList.add("formGroupIncorrect");
    document
      .getElementById("groupBirthday")
      .classList.remove("formGroupCorrect");
    document
      .querySelector("#groupBirthday i")
      .classList.remove("uil-check-circle");
    document
      .querySelector("#groupBirthday i")
      .classList.add("uil-times-circle");
    document
      .querySelector("#groupBirthday .formInputError")
      .classList.add("formInputErrorActive");
      validateDate = false;
  } else if (slash1 != "/" || slash2 != "/") {
    document
      .getElementById("groupBirthday")
      .classList.add("formGroupIncorrect");
    document
      .getElementById("groupBirthday")
      .classList.remove("formGroupCorrect");
    document
      .querySelector("#groupBirthday i")
      .classList.remove("uil-check-circle");
    document
      .querySelector("#groupBirthday i")
      .classList.add("uil-times-circle");
      validateDate = false;
    document
      .querySelector("#groupBirthday .formInputError")
      .classList.add("formInputErrorActive");
  } else if (year < 1990 || year > 2020) {
    document
      .getElementById("groupBirthday")
      .classList.add("formGroupIncorrect");
    document
      .getElementById("groupBirthday")
      .classList.remove("formGroupCorrect");
    document
      .querySelector("#groupBirthday i")
      .classList.remove("uil-check-circle");
    document
      .querySelector("#groupBirthday i")
      .classList.add("uil-times-circle");
    document
      .querySelector("#groupBirthday .formInputError")
      .classList.add("formInputErrorActive");
      validateDate = false;
  } else {
    document
      .getElementById("groupBirthday")
      .classList.remove("formGroupIncorrect");
    document
      .getElementById("groupBirthday")
      .classList.add("formGroupCorrect");
    document
      .querySelector("#groupBirthday i")
      .classList.remove("uil-check-circle");
    document
      .querySelector("#groupBirthday i")
      .classList.add("uil-check-circle");
    document
      .querySelector("#groupBirthday .formInputError")
      .classList.remove("formInputErrorActive");
=======
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
      validateDate = false;
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
      validateDate = false;
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
      validateDate = false;
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
      validateDate = false;
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
>>>>>>> 72fd8e9f74d559ca7864f522db5e42a48b8b8153
      validateDate = true;
  }
});
mail.addEventListener("blur", function (e) {
  e.preventDefault();
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (regexEmail.test(mail.value)) {
    document
      .getElementById("grupo__email")
<<<<<<< HEAD
      .classList.remove("formGroupIncorrect");
    document
      .getElementById("grupo__email")
      .classList.add("formGroupCorrect");
=======
      .classList.remove("formulario__grupo-incorrecto");
    document
      .getElementById("grupo__email")
      .classList.add("formulario__grupo-correcto");
>>>>>>> 72fd8e9f74d559ca7864f522db5e42a48b8b8153
    document
      .querySelector("#grupo__email i")
      .classList.remove("uil-check-circle");
    document.querySelector("#grupo__email i").classList.add("uil-check-circle");
    document
<<<<<<< HEAD
      .querySelector("#grupo__email .formInputError")
      .classList.remove("formInputErrorActive");
=======
      .querySelector("#grupo__email .formulario__input-error")
      .classList.remove("formulario__input-error-activo");
>>>>>>> 72fd8e9f74d559ca7864f522db5e42a48b8b8153
      validateMail = true;
  } else {
    document
      .getElementById("grupo__email")
<<<<<<< HEAD
      .classList.add("formGroupIncorrect");
    document
      .getElementById("grupo__email")
      .classList.remove("formGroupCorrect");
=======
      .classList.add("formulario__grupo-incorrecto");
    document
      .getElementById("grupo__email")
      .classList.remove("formulario__grupo-correcto");
>>>>>>> 72fd8e9f74d559ca7864f522db5e42a48b8b8153
    document
      .querySelector("#grupo__email i")
      .classList.remove("uil-check-circle");
    document.querySelector("#grupo__email i").classList.add("uil-times-circle");
    document
<<<<<<< HEAD
      .querySelector("#grupo__email .formInputError")
      .classList.add("formInputErrorActive");
=======
      .querySelector("#grupo__email .formulario__input-error")
      .classList.add("formulario__input-error-activo");
>>>>>>> 72fd8e9f74d559ca7864f522db5e42a48b8b8153
      validateMail = false;
  }
});
docu.addEventListener("blur", function (e) {
<<<<<<< HEAD
  if (docu.value.length >= 8) {
=======
  if (docu.value.length == 8) {
>>>>>>> 72fd8e9f74d559ca7864f522db5e42a48b8b8153
    var verificateDocu = docu.value;
    var validateDocu = false;
    for (let i = 0; i < verificateDocu.length; i++) {
      var letra = verificateDocu.substring(i, i + 1);
      if (letra == Number(letra)) {
        validateDocu = true;
      }
    }
    if (validateDocu) {
      document
<<<<<<< HEAD
        .getElementById("groupId")
        .classList.remove("formGroupIncorrect");
      document
        .getElementById("groupId")
        .classList.add("formGroupCorrect");
      document
        .querySelector("#groupId i")
        .classList.remove("uil-check-circle");
      document.querySelector("#groupId i").classList.add("uil-check-circle");
      document
        .querySelector("#groupId .formInputError")
        .classList.remove("formInputErrorActive");
        validateDocus = true;
    } else {
      document
        .getElementById("groupId")
        .classList.add("formGroupIncorrect");
      document
        .getElementById("groupId")
        .classList.remove("formGroupCorrect");
      document
        .querySelector("#groupId i")
        .classList.remove("uil-check-circle");
      document.querySelector("#groupId i").classList.add("uil-times-circle");
      document
        .querySelector("#groupId .formInputError")
        .classList.add("formInputErrorActive");
=======
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
        validateDocus = true;
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
>>>>>>> 72fd8e9f74d559ca7864f522db5e42a48b8b8153
        validateDocus = false;
    }
  } else {
    document
<<<<<<< HEAD
      .getElementById("groupId")
      .classList.add("formGroupIncorrect");
    document
      .getElementById("groupId")
      .classList.remove("formGroupCorrect");
    document
      .querySelector("#groupId i")
      .classList.remove("uil-check-circle");
    document.querySelector("#groupId i").classList.add("uil-times-circle");
    document
      .querySelector("#groupId .formInputError")
      .classList.add("formInputErrorActive");
=======
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
>>>>>>> 72fd8e9f74d559ca7864f522db5e42a48b8b8153
      validateDocus = false;
  }
});
cp.addEventListener("blur", function (e) {
  if (cp.value.length > 3 && cp.value.length <= 5) {
    var verificateCp = cp.value;
    var validateCp = false;
    for (let i = 0; i < verificateCp.length; i++) {
      var letra = verificateCp.substring(i, i + 1);
      if (letra == Number(letra)) {
        validateCp = true;
      }
    }
    if (validateCp) {
      document
<<<<<<< HEAD
        .getElementById("groupZip")
        .classList.remove("formGroupIncorrect");
      document
        .getElementById("groupZip")
        .classList.add("formGroupCorrect");
      document
        .querySelector("#groupZip i")
        .classList.remove("uil-check-circle");
      document
        .querySelector("#groupZip i")
        .classList.add("uil-check-circle");
      document
        .querySelector("#groupZip .formInputError")
        .classList.remove("formInputErrorActive");
        validateCps = true;
    } else {
      document
        .getElementById("groupZip")
        .classList.add("formGroupIncorrect");
      document
        .getElementById("groupZip")
        .classList.remove("formGroupCorrect");
      document
        .querySelector("#groupZip i")
        .classList.remove("uil-check-circle");
      document
        .querySelector("#groupZip i")
        .classList.add("uil-times-circle");
      document
        .querySelector("#groupZip .formInputError")
        .classList.add("formInputErrorActive");
=======
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
        validateCps = true;
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
>>>>>>> 72fd8e9f74d559ca7864f522db5e42a48b8b8153
        validateCps = false;
    }
  } else {
    document
<<<<<<< HEAD
      .getElementById("groupZip")
      .classList.add("formGroupIncorrect");
    document
      .getElementById("groupZip")
      .classList.remove("formGroupCorrect");
    document
      .querySelector("#groupZip i")
      .classList.remove("uil-check-circle");
    document
      .querySelector("#groupZip i")
      .classList.add("uil-times-circle");
    document
      .querySelector("#groupZip .formInputError")
      .classList.add("formInputErrorActive");
=======
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
>>>>>>> 72fd8e9f74d559ca7864f522db5e42a48b8b8153
      validateCps = false;
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
    
    if (validatePhone) {
      document
<<<<<<< HEAD
        .getElementById("groupPhone")
        .classList.remove("formGroupIncorrect");
      document
        .getElementById("groupPhone")
        .classList.add("formGroupCorrect");
      document
        .querySelector("#groupPhone i")
        .classList.remove("uil-check-circle");
      document
        .querySelector("#groupPhone i")
        .classList.add("uil-check-circle");
      document
        .querySelector("#groupPhone .formInputError")
        .classList.remove("formInputErrorActive");
        validatePhones = true;
    } else {
      document
        .getElementById("groupPhone")
        .classList.add("formGroupIncorrect");
      document
        .getElementById("groupPhone")
        .classList.remove("formGroupCorrect");
      document
        .querySelector("#groupPhone i")
        .classList.remove("uil-check-circle");
      document
        .querySelector("#groupPhone i")
        .classList.add("uil-times-circle");
      document
        .querySelector("#groupPhone .formInputError")
        .classList.add("formInputErrorActive");
=======
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
        validatePhones = true;
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
>>>>>>> 72fd8e9f74d559ca7864f522db5e42a48b8b8153
        validatePhones = false;
    }
  } else {
    document
<<<<<<< HEAD
      .getElementById("groupPhone")
      .classList.add("formGroupIncorrect");
    document
      .getElementById("groupPhone")
      .classList.remove("formGroupCorrect");
    document
      .querySelector("#groupPhone i")
      .classList.remove("uil-check-circle");
    document
      .querySelector("#groupPhone i")
      .classList.add("uil-times-circle");
    document
      .querySelector("#groupPhone .formInputError")
      .classList.add("formInputErrorActive");
=======
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
>>>>>>> 72fd8e9f74d559ca7864f522db5e42a48b8b8153
      validatePhones = false;
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
<<<<<<< HEAD
      .getElementById("groupCity")
      .classList.remove("formGroupIncorrect");
    document
      .getElementById("groupCity")
      .classList.add("formGroupCorrect");
    document
      .querySelector("#groupCity i")
      .classList.remove("uil-check-circle");
    document
      .querySelector("#groupCity i")
      .classList.add("uil-check-circle");
    document
      .querySelector("#groupCity .formInputError")
      .classList.remove("formInputErrorActive");
=======
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
>>>>>>> 72fd8e9f74d559ca7864f522db5e42a48b8b8153
      validateLocalty = true;
  }
  if (!bien) {
    document
<<<<<<< HEAD
      .getElementById("groupCity")
      .classList.add("formGroupIncorrect");
    document
      .getElementById("groupCity")
      .classList.remove("formGroupCorrect");
    document
      .querySelector("#groupCity i")
      .classList.remove("uil-check-circle");
    document
      .querySelector("#groupCity i")
      .classList.add("uil-times-circle");
    document
      .querySelector("#groupCity .formInputError")
      .classList.add("formInputErrorActive");
=======
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
>>>>>>> 72fd8e9f74d559ca7864f522db5e42a48b8b8153
      validateLocalty = false;
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
<<<<<<< HEAD
      .getElementById("groupAddress")
      .classList.remove("formGroupIncorrect");
    document
      .getElementById("groupAddress")
      .classList.add("formGroupCorrect");
    document
      .querySelector("#groupAddress i")
      .classList.remove("uil-check-circle");
    document
      .querySelector("#groupAddress i")
      .classList.add("uil-check-circle");
    document
      .querySelector("#groupAddress .formInputError")
      .classList.remove("formInputErrorActive");
=======
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
>>>>>>> 72fd8e9f74d559ca7864f522db5e42a48b8b8153
      validateAddres = true;
  }
  if (!bien) {
    document
<<<<<<< HEAD
      .getElementById("groupAddress")
      .classList.add("formGroupIncorrect");
    document
      .getElementById("groupAddress")
      .classList.remove("formGroupCorrect");
    document
      .querySelector("#groupAddress i")
      .classList.remove("uil-check-circle");
    document
      .querySelector("#groupAddress i")
      .classList.add("uil-times-circle");
    document
      .querySelector("#groupAddress .formInputError")
      .classList.add("formInputErrorActive");
=======
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
>>>>>>> 72fd8e9f74d559ca7864f522db5e42a48b8b8153
      validateAddres = false;
  }
});
pass.addEventListener("blur", function (e) {
  var validos =
    "ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var letra;
  var bien = true;
  for (var i = 0; i < pass.value.length; i++) {
    letra = pass.value.charAt(i).toLowerCase();
<<<<<<< HEAD
    if (validos.indexOf(letra) == -1 || pass.value.length <= 7) {
      bien = false;
    }
    document
      .getElementById("groupPassword")
      .classList.remove("formGroupIncorrect");
    document
      .getElementById("groupPassword")
      .classList.add("formGroupCorrect");
    document
      .querySelector("#groupPassword i")
      .classList.remove("uil-check-circle");
    document
      .querySelector("#groupPassword i")
      .classList.add("uil-check-circle");
    document
      .querySelector("#groupPassword .formInputError")
      .classList.remove("formInputErrorActive");
=======
    if (validos.indexOf(letra) == -1 || pass.value.length <= 6) {
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
>>>>>>> 72fd8e9f74d559ca7864f522db5e42a48b8b8153
      validatePass = true;
  }
  if (!bien) {
    document
<<<<<<< HEAD
      .getElementById("groupPassword")
      .classList.add("formGroupIncorrect");
    document
      .getElementById("groupPassword")
      .classList.remove("formGroupCorrect");
    document
      .querySelector("#groupPassword i")
      .classList.remove("uil-check-circle");
    document
      .querySelector("#groupPassword i")
      .classList.add("uil-times-circle");
    document
      .querySelector("#groupPassword .formInputError")
      .classList.add("formInputErrorActive");
=======
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
>>>>>>> 72fd8e9f74d559ca7864f522db5e42a48b8b8153
      validatePass = false;
  }
});
pass2.addEventListener("blur", function (e) {
  if (pass2.value == pass.value) {
    document
<<<<<<< HEAD
      .getElementById("groupPassword2")
      .classList.remove("formGroupIncorrect");
    document
      .getElementById("groupPassword2")
      .classList.add("formGroupCorrect");
    document
      .querySelector("#groupPassword2 i")
      .classList.remove("uil-check-circle");
    document
      .querySelector("#groupPassword2 i")
      .classList.add("uil-check-circle");
    document
      .querySelector("#groupPassword2 .formInputError")
      .classList.remove("formInputErrorActive");
      validatePass2 = true;
  } else {
    document
      .getElementById("groupPassword2")
      .classList.add("formGroupIncorrect");
    document
      .getElementById("groupPassword2")
      .classList.remove("formGroupCorrect");
    document
      .querySelector("#groupPassword2 i")
      .classList.remove("uil-check-circle");
    document
      .querySelector("#groupPassword2 i")
      .classList.add("uil-times-circle");
    document
      .querySelector("#groupPassword2 .formInputError")
      .classList.add("formInputErrorActive");
      validatePass2 = false;
  }
});
btn2.addEventListener("click", clickButton);
function clickButton(e) {
  myLocalStorage();
=======
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
      validatePass2 = true;
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
      validatePass2 = false;
  }
});

btn2.addEventListener("click", clickButton);
function clickButton(e) {
>>>>>>> 72fd8e9f74d559ca7864f522db5e42a48b8b8153
  var url = "https://basp-m2022-api-rest-server.herokuapp.com/signup";
  url = url + "?name=" + user.value + "&lastName=" + names.value + "&dob=" + date.value + "&email=" + mail.value + "&address=" + addres.value + "&city=" + localty.value + "&zip=" + cp.value + "&phone=" + phone.value + "&dni=" + docu.value + "&password=" + pass.value;
  e.preventDefault();
  if (!validateUser || !validateNames || !validateDate || !validateMail || !validateAddres || !validateLocalty || !validateCps || !validatePhones || !validateDocus || !validatePass ) {
      fetch(url)
      .then(function (response) {
        return response.json()
      })
      .then(function (jsonResponse) {
<<<<<<< HEAD
        alert(jsonResponse.errors[0].msg);
      })
=======
        alert(jsonResponse.msg);
        myStorage();
        
      })
      
>>>>>>> 72fd8e9f74d559ca7864f522db5e42a48b8b8153
    } else {
      fetch(url)
      .then(function (response) {
        return response.json()
      })
      .then(function (jsonResponse) {
        alert(jsonResponse.msg + '\nuser: ' + user.value + '\nlastname: ' + names.value + '\ndate: ' + date.value + '\nmail: ' + mail.value + '\naddress: ' + addres.value + '\nlocalty: ' + localty.value + '\ncp: ' + cp.value + '\nphone: ' + phone.value + '\ndni: ' + docu.value + '\nPassword: ' +  pass.value);
      })
    }};

<<<<<<< HEAD
  function myLocalStorage() {
=======
    
  
  
  function myStorage() {
>>>>>>> 72fd8e9f74d559ca7864f522db5e42a48b8b8153
    localStorage.setItem('name', user.value);
    localStorage.setItem('lastName', names.value);
    localStorage.setItem('dni', docu.value);
    localStorage.setItem('date', date.value);
    localStorage.setItem('phone', phone.value);
    localStorage.setItem('address', addres.value);
    localStorage.setItem('city', localty.value);
    localStorage.setItem('zip', cp.value);
    localStorage.setItem('email', mail.value);
  }
<<<<<<< HEAD
=======
  
>>>>>>> 72fd8e9f74d559ca7864f522db5e42a48b8b8153
  window.onload = function () {
      if (
          localStorage.getItem('name') != null &&
          localStorage.getItem('lastName') != null &&
          localStorage.getItem('dni') != null &&
          localStorage.getItem('date') != null &&
          localStorage.getItem('phone') != null &&
          localStorage.getItem('address') != null &&
          localStorage.getItem('city') != null &&
          localStorage.getItem('zip') != null &&
          localStorage.getItem('email') != null
      ) {
        user.value = localStorage.getItem('name');
        names.value = localStorage.getItem('lastName');
        docu.value = localStorage.getItem('dni');
        date.value = localStorage.getItem('date');
        phone.value = localStorage.getItem('phone');
        addres.value = localStorage.getItem('address');
        localty.value = localStorage.getItem('city');
        cp.value = localStorage.getItem('zip');
        mail.value = localStorage.getItem('email');
      }
  };