var Portaria = function () {
  this.createPessoa = function (type) {
    var pessoa;

    if (type == "1") {
      pessoa = new Diretor();
    } else if (type == "2") {
      pessoa = new Coordenador();
    } else if (type == "3") {
      pessoa = new Professor();
    } else if (type == "4") {
      pessoa = new Adiministrativo();
    } else if (type == "5") {
      pessoa = new Aluno();
    } else if (type == "6") {
      pessoa = new Vestibulando();
    } else {
      pessoa = new Semvinculo();
    }

    pessoa.type = type;

    return pessoa;
  }
}

var Diretor = function () {
  this.vinculo = false;
};

var Coordenador = function () {
  this.vinculo = false;
};

var Professor = function () {
  this.vinculo = false;
};

var Adiministrativo = function () {
  this.vinculo = false;
};

var Aluno = function () {
  this.vinculo = true;
};

var Vestibulando = function () {
  this.vinculo = false;
};

var Semvinculo = function () {
  this.vinculo = false;
};

function enviar() {
  var valorOpcao = document.querySelector('#vinculo_opcao').value;
  window.alert(valorOpcao);
  return valorOpcao;
}
function run() { //USANDO INPUT
  var portaria = new Portaria();
  var cod = enviar();
  var pessoa = portaria.createPessoa(cod);
  console.log(pessoa)
  function redirecionamento() {
    if (pessoa.vinculo == true) {
      document.querySelector('#form_opcao').action = "./lanchonete.html";
    } else {
      document.querySelector('#form_opcao').action = "./rejeicao.html";
    }
  }
  redirecionamento()
}
run()


























// function run() { utilizando SELECT
//   var portaria = new Portaria();
//   let select = document.querySelector('#vinculo_opcao');
//   var valorOpcao = select.options[select.selectedIndex].value;
//   var cod = valorOpcao;
//   var pessoa = portaria.createPessoa(cod);
//   console.log(pessoa.vinculo);
// }
// run()

// function redirecionamento() {
//   document.querySelector('#vinculo_opcao').action = "./rejeicao.html";
// }
// redirecionamento()