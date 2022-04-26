var mail2 = document.getElementById('email2')
var password4 = document.getElementById('contrasenha3')


mail2.addEventListener("blur", function (e) {
    e.preventDefault();
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (regexEmail.test(mail2.value)) {
        alert("Formato valido")
    } else {
        alert("Formato no valido")
    }
  });

  password4.addEventListener("blur", function (e) {
    var validos =
      " ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var letra;
    var bien = true;
    for (var i = 0; i < password4.value.length; i++) {
      letra = password4.value.charAt(i).toLowerCase();
      if (validos.indexOf(letra) == -1 ) {
        bien = false;
      }
      alert ('Formato valido')
    }
    if (!bien) {
      console.log ('Formato no valido')
    }
  });