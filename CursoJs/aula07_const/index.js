//Não podemos criar constantes com palavras reservadas, ex: const const
//Constantes precisa de nomes significativos. Ex const n = "João" (Não é indicado) ; const nomeCliente = "João" (Correto)
//Não pode começar o nome da constante com número. Ex const 1nome;
/*Não pode conter espaços ou traços ex const nome-cliente ou nome cliente. Podemos utilizar a anotação camelCase, segundapalavra inicia com letra maiuscula.*/
//Case-sensitive, letra Maiuscula e menuscula são diferentes ex: const nomeCliente é diferente de const nomecliente
//Não podemos alterar o valor de uma consatnte
//Não utilize VAR, utilize CONST

const primeiroNumero = 5; // number = número
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
console.log(resultadoDuplicado);

console.log(typeof primeiroNumero); //Verificar o tipo do valor da variável
console.log(primeiroNumero + segundoNumero); //Somando o número, se fosse do tipo string seria concatenado.
console.log(typeof (primeiroNumero + segundoNumero));
