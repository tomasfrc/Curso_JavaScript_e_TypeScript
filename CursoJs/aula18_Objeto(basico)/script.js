/*
const pessoa1 = {
  nome: "Luiz",
  sobreNome: "Miranda",
  idade: "25",
};

console.log(pessoa1.nome);*/

/*
---------------------------------------------------------------------------------
function criaPessoa(nome, sobrenome, idade) {
  return {
    nome: nome,
    sobrenome: sobrenome,
    idade: idade,
  };
}

const pessoa1 = criaPessoa("Luiz", "Caldas", 24);
const pessoa2 = criaPessoa("Maria", "Caldas", 23);
const pessoa3 = criaPessoa("João", "Caldas", 34);
const pessoa4 = criaPessoa("Junior", "Caldas", 54);
const pessoa5 = criaPessoa("Paulo", "Caldas", 44);
console.log(pessoa1.nome);
console.log(pessoa2.nome);
console.log(pessoa3.nome);
console.log(pessoa4.nome);
console.log(pessoa5.nome);

------------------------------------------------------------------*/
const pessoa1 = {
  nome: "Luiz",
  sobreNome: "Miranda",
  idade: "25",

  fala() {
    console.log(`A minha idade atual é ${this.idade}`);
  },

  incrementaIdade() {
    this.idade++;
  },
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
