var formulario = document.getElementById("formulario");
var inp = document.querySelectorAll("#login input");
var mail2 = document.getElementById("meil");
var pass3 = document.getElementById("password");
var btn = document.getElementById("btn-send");
var validateEmail = 0;
var validatePassword = 0;
mail2.addEventListener("focus", function (e) {
  document
    .getElementById("grupoMeil")
    .classList.remove("formGroup-incorrect");
});
mail2.addEventListener("blur", function (e) {
  e.preventDefault();
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (regexEmail.test(mail2.value)) {
    document
      .getElementById("grupoMeil")
      .classList.remove("formGroup-incorrect");
    document
      .getElementById("grupoMeil")
      .classList.add("formGroup-correct");
    document
      .querySelector("#grupoMeil i")
      .classList.remove("uil-check-circle");
    document.querySelector("#grupoMeil i").classList.add("uil-check-circle");
    document
      .querySelector("#grupoMeil .formInput-error")
      .classList.remove("formInput-error-activo");
    validateEmail = 1;
  } else {
    document
      .getElementById("grupoMeil")
      .classList.add("formGroup-incorrect");
    document
      .getElementById("grupoMeil")
      .classList.remove("formGroup-correct");
    document
      .querySelector("#grupoMeil i")
      .classList.remove("uil-check-circle");
    document.querySelector("#grupoMeil i").classList.add("uil-times-circle");
    document
      .querySelector("#grupoMeil .formInput-error")
      .classList.add("formInput-error-activo");
    validateEmail = 0;
  }
});
pass3.addEventListener("focus", function (e) {
  document
    .getElementById("groupPass3")
    .classList.remove("formGroup-incorrect");
});
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
      .getElementById("groupPass3")
      .classList.remove("formGroup-incorrect");
    document
      .getElementById("groupPass3")
      .classList.add("formGroup-correct");
    document
      .querySelector("#groupPass3 i")
      .classList.remove("uil-check-circle");
    document.querySelector("#groupPass3 i").classList.add("uil-check-circle");
    document
      .querySelector("#groupPass3 .formInput-error")
      .classList.remove("formInput-error-activo");
    validatePassword = 1;
  }
  if (!bien) {
    document
      .getElementById("groupPass3")
      .classList.add("formGroup-incorrect");
    document
      .getElementById("groupPass3")
      .classList.remove("formGroup-correct");
    document
      .querySelector("#groupPass3 i")
      .classList.remove("uil-check-circle");
    document.querySelector("#groupPass3 i").classList.add("uil-times-circle");
    document
      .querySelector("#groupPass3 .formInput-error")
      .classList.add("formInput-error-activo");
    validatePassword = 0;
  }
});
btn.addEventListener("click", clickButton);
function clickButton(e) {
  var url = "https://basp-m2022-api-rest-server.herokuapp.com/login";
  url = url + "?email=" + mail2.value + "&password=" + pass3.value;
  e.preventDefault();
  if (!validateEmail || !validatePassword) {
    fetch(url)
    .then(function (response) {
      return response.json()
    })
    .then(function (jsonResponse) {
     alert(jsonResponse.errors[0].msg);
    })
  } else {
    fetch(url)
    .then(function (response) {
      return response.json()
    })
    .then(function (jsonResponse) {
     alert(jsonResponse.msg);
    })
  }}