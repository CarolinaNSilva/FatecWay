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
          pessoa = new Ninguem();
        }
  
        pessoa.type = type;
  
        pessoa.say = function () {
            console.log(this.type + ": rate " + this.hourly + "/hour");
        }
  
        return employee;
    }
  }
  
  var Diretor = function () {
    this.hourly = "$12";
  };
  
  var PartTime = function () {
    this.hourly = "$11";
  };
  
  var Temporary = function () {
    this.hourly = "$10";
  };
  
  var Contractor = function () {
    this.hourly = "$15";
  };
  
  function run() {
  
    var pessoa = [];
    var factory = new Factory();
  
    employees.push(factory.createEmployee("fulltime"));
    employees.push(factory.createEmployee("parttime"));
    employees.push(factory.createEmployee("temporary"));
    employees.push(factory.createEmployee("contractor"));
  
    for (var i = 0, len = employees.length; i < len; i++) {
        employees[i].say();
    }
  }
  