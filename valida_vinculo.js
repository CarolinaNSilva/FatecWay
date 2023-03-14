var Portaria = function () {
  this.createPessoa = function (type) {
      var pessoa;

      if (type === "1") {
          pessoa = new Diretor();
      } else if (type === "2") {
        pessoa = new Coordenador();
      } else if (type === "3") {
        pessoa = new Professor();
      } else if (type === "4") {
        pessoa = new Adiministrativo();
      }else if (type === "5") {
        pessoa = new Aluno();
      }else if (type === "6") {
        pessoa = new Vestibulando();
      }else {
        pessoa = new Semvinculo();
      }

      pessoa.type = type;

      pessoa.say = function () {
          console.log(this.type + "v " + this.hourly + "e");
      }

      return pessoa;
  }
}

var Diretor = function () {
  this.cargo = "Diretor";
};

var Coordenador = function () {
  this.cargo = "Coordenador";
};

var Professor = function () {
  this.cargo = "Professor";
};

var Adiministrativo = function () {
  this.cargo = "Adiministrativo";
};

var Aluno = function () {
  this.cargo = "Aluno";
};

var Vestibulando = function () {
  this.cargo = "Vestibulando";
};

var Semvinculo = function () {
  this.cargo = " Sem vinculo";
};

  console.log("\nSeja Bem-vindo a Portaria FATEC!\nPara liberar acesso informe seu vinculo com a instituição")

  console.log(`
  Vinculo         código
----------------------------
  Diretor:           1
  Coordenador:       2
  Professor:         3
  Adiministrativo:   4
  Aluno:             5 
  Vestibulando:      6
  Outro:             0
`)
function run() {

var portaria = new Portaria();
var cod = "1";
var pessoa = portaria.createPessoa(cod);

console.log(pessoa.cargo)
}
run()
