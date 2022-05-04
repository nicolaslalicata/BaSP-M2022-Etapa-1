var formulario = document.getElementById("formulario");
var inputs = document.querySelectorAll("#formulario input");
var user = document.getElementById("user");
var names = document.getElementById("lastName");
var date = document.getElementById("birthdate");
var mail = document.getElementById("email");
var addres = document.getElementById("address");
var localty = document.getElementById("city");
var cp = document.getElementById("zip");
var phone = document.getElementById("phone");
var docu = document.getElementById("id");
var pass = document.getElementById("password");
var pass2 = document.getElementById("password2");
var btn2 = document.getElementById("butonSend");
var validateUser = true;
var validateNames = true;
var validateDate = true;
var validateMail = true;
var validateAddres = true;
var validateLocalty = true;
var validateCps = true;
var validatePhones = true;
var validateDocus = true;
var validatePass = true;
var validatePass2 = true;
user.addEventListener("focus", function (e) {
  document
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
});
mail.addEventListener("focus", function (e) {
  document
    .getElementById("grupo__email")
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
        validateUser = true;
    }
  } else {
    document
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
        validateNames = true;
    }
  } else {
    document
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
      validateDate = true;
  }
});
mail.addEventListener("blur", function (e) {
  e.preventDefault();
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (regexEmail.test(mail.value)) {
    document
      .getElementById("grupo__email")
      .classList.remove("formGroupIncorrect");
    document
      .getElementById("grupo__email")
      .classList.add("formGroupCorrect");
    document
      .querySelector("#grupo__email i")
      .classList.remove("uil-check-circle");
    document.querySelector("#grupo__email i").classList.add("uil-check-circle");
    document
      .querySelector("#grupo__email .formInputError")
      .classList.remove("formInputErrorActive");
      validateMail = true;
  } else {
    document
      .getElementById("grupo__email")
      .classList.add("formGroupIncorrect");
    document
      .getElementById("grupo__email")
      .classList.remove("formGroupCorrect");
    document
      .querySelector("#grupo__email i")
      .classList.remove("uil-check-circle");
    document.querySelector("#grupo__email i").classList.add("uil-times-circle");
    document
      .querySelector("#grupo__email .formInputError")
      .classList.add("formInputErrorActive");
      validateMail = false;
  }
});
docu.addEventListener("blur", function (e) {
  if (docu.value.length >= 8) {
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
        validateDocus = false;
    }
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
        validateCps = false;
    }
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
        validatePhones = false;
    }
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
      validateLocalty = true;
  }
  if (!bien) {
    document
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
      validateAddres = true;
  }
  if (!bien) {
    document
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
      validatePass = true;
  }
  if (!bien) {
    document
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
      validatePass = false;
  }
});
pass2.addEventListener("blur", function (e) {
  if (pass2.value == pass.value) {
    document
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
  e.preventDefault();
  var url = "https://basp-m2022-api-rest-server.herokuapp.com/signup";
  url = url + "?name=" + user.value + "&lastName=" + names.value + "&dob=" + date.value + "&email=" + mail.value + "&address=" + addres.value + "&city=" + localty.value + "&zip=" + cp.value + "&phone=" + phone.value + "&dni=" + docu.value + "&password=" + pass.value;
  if (!validateUser || user.value == 0) {
    alert('error in Name: '+ user.value )
  } else if (!validateNames || names.value == 0) {
    alert('error in LastName: ' + names.value )
  }else if (!validateDate || date.value == 0){
    alert('error in Datebirth: ' + date.value)
  }else if (!validateMail || mail.value == 0){
    alert('error in E-mail: ' + mail.value)
  }else if (!validateAddres || addres.value == 0){
    alert('error in Address: ' + addres.value)
  }else if (!validateLocalty || localty.value == 0){
    alert('error in City: ' + localty.value)
  }else if (!validatePhones || phone.value == 0){
    alert('error in Phone: ' + phone.value)
  }else if (!validateDocus || docu.value == 0){
    alert('error in ID: ' + docu.value) 
  }else if (!validateCps || cp.value == 0){
    alert('error in ZIP: ' + cp.value)
  } else if (!validatePass || pass.value == 0){
    alert('error in Password: ' + pass.value)
  }else if (!validatePass2 || pass2.value == 0){
    alert('error in Confirm Password: ' + pass2.value)
  } 
  else {
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (responseJson) {
          myLocalStorage();
             alert (responseJson.msg + "\nFirst name: " + user.value + "\nLast name: " + names.value +
            "\nDNI: " + docu.value + "\nBirthday: " + date.value + "\nCellphone: " + phone.value +
            "\nAddress: " + addres.value + "\nLocation: " + localty.value + "\nPostal code: " +
          	cp.value + "\nEmail: " + mail.value + "\nPassword: " + pass.value);
        })
        .catch(function (fails) {
             alert(fails.errors[0].msg);
        });
}
  };
  function myLocalStorage() {
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