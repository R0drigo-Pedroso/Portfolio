/* Obtenção dos elementos HTML do formulário por meio de seus IDs */
const form = document.querySelector("form");
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const mess = document.getElementById("message");
const assunto = document.getElementById("assunto");

/* Função para enviar o email usando a biblioteca Email.js e exibir um alerta SweetAlert em caso de sucesso */
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
      /* Exibe um alerta de sucesso usando a biblioteca SweetAlert */
      Swal.fire({
        title: "Sucesso",
        text: "Mensagem Enviada com Sucesso!",
        icon: "success",
      });
    }
  });
}

/* Função para verificar os campos de entrada do formulário */
function checkInputs() {
  const items = document.querySelectorAll(".form-control");

  for (const item of items) {
    if (item.value == "") {
      /* Adiciona a classe 'error' para destacar campos vazios */
      item.classList.add("error");
      item.parentElement.classList.add("error");
    }

    if (items[1].value != "") {
      /* Chama a função para verificar o formato do email se o campo de email não estiver vazio */
      checkEmail();
    }

    /* Adiciona um ouvinte de evento para verificar o formato do email enquanto o usuário digita */
    items[1].addEventListener("keyup", () => {
      checkEmail();
    });

    /* Adiciona um ouvinte de evento para remover a classe 'error' quando o campo não está vazio */
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

/* Função para verificar o formato do email usando uma expressão regular */
function checkEmail() {
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  const errorTextEmail = document.querySelector(".form-control.email");

  if (!email.value.match(emailRegex)) {
    /* Adiciona a classe 'error' para destacar um email inválido e exibe uma mensagem de erro */
    email.classList.add("error");
    email.parentElement.classList.add("error");

    if (email.value != "") {
      errorTextEmail.innerText = "Digite um email válido";
    } else {
      errorTextEmail.innerText = "";
    }
  } else {
    /* Remove a classe 'error' se o email for válido */
    email.classList.remove("error");
    email.parentElement.classList.remove("error");
  }
}

/* Ouvinte de evento para o envio do formulário */
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();

  /* Verifica se todos os campos estão preenchidos corretamente antes de enviar o email */
  if (
    !fullName.classList.contains("error") &&
    !email.classList.contains("error") &&
    !mess.classList.contains("error") &&
    !assunto.classList.contains("error")
  ) {
    /* Chama a função para enviar o email se todos os campos estiverem preenchidos corretamente */
    sendEmail();

    /* Reseta o formulário após o envio bem-sucedido */
    form.reset();
    return false;
  }
});

/* 
As informações de SecureToken, To, From e Subject no objeto passado para Email.send()
devem ser substituídas pelos valores reais correspondentes à sua configuração do Email.js.
*/
