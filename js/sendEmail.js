/* Obtem os valores dos campos de entrada do form com base em seus respectivos Ids */
const form = document.querySelector("form");
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const mess = document.getElementById("message");
const assunto = document.getElementById("assunto");

function sendEmail() {
  const bodyMessage = `Nome: ${fullName.value}<br> Email: ${email.value}<br> Mensagem: ${mess.value}`;

  Email.send({
    SecureToken: "a0d5b63e-0012-41eb-86cc-bc48d5de9eb6",
    To: "rodrigo.pedroso.dev@gmail.com",
    From: "rodrigo.pedroso.dev@gmail.com",
    Subject: assunto.value,
    Body: bodyMessage,
  }).then((message) => {
    if (message == "OK") {
      Swal.fire({
        title: "Sucesso",
        text: "Mensagem Enviado com Sucesso!",
        icon: "success",
      });
    }
  });
}

function checkInputs() {
  const items = document.querySelectorAll(".form-control");

  for (const item of items) {
    if (item.value == "") {
      item.classList.add("error");
      item.parentElement.classList.add("error");
    }

    if (items[1].value != "") {
      checkEmail();
    }

    items[1].addEventListener("keyup", () => {
      checkEmail();
    });

    item.addEventListener("keyup", () => {
      if (item.value != "") {
        item.classList.remove("error");
        item.parentElement.classList.remove("error");
      } else {
        item.classList.add("error");
        item.parentElement.classList.add("error");
      }
    });
  }
}

function checkEmail() {
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  const errorTextEmail = document.querySelector(".form-control.email");

  if (!email.value.match(emailRegex)) {
    email.classList.add("error");
    email.parentElement.classList.add("error");

    if (email.value != "") {
      errorTextEmail.innerText = "Digite o email valido";
    } else {
      errorTextEmail.innerText = "";
    }
  } else {
    email.classList.remove("error");
    email.parentElement.classList.remove("error");
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();

  if (
    !fullName.classList.contains("error") &&
    !email.classList.contains("error") &&
    !mess.classList.contains("error") &&
    !assunto.classList.contains("error")
  ) {
    sendEmail();

    form.reset();
    return false;
  }
});

/* 
Username: "rodrigo.pedroso.dev@gmail.com",
    Password: "73D9650E2F2F45C16A6A5A2315429F1AFD06",
*/
