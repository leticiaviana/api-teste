const form = document.querySelector("form");

const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const senha = document.querySelector("#senha");
const tel = document.querySelector("#tel");

function cadastrar() {
  fetch("http://localhost:8080/cadastrar", {
    headers: {
      accept: "applicatiion/json",
      "Content-type": "applicatiion/json",
    },
    method: "POST",
    body: JSON.stringify({
      nome: this.nome.value,
      email: this.email.value,
      senha: this.senha.value,
      telefone: this.tel.value,
    }),
  })
    .then(function (res) {
      console.log(res);
    })
    .catch(function (res) {
      console.log(res);
    });
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  cadastrar();
  limpar();
});

function limpar() {
  this.nome.value = "";
  this.email.value = "";
  this.senha.value = "";
  this.tel.value = "";
}
