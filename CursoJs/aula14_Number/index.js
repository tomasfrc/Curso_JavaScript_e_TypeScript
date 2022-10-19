let num1 = 0.7; //Number
let num2 = 0.1; //Number

//imprecisão
num1 = Number(num1.toFixed(2)); // opção 1º para corrigir imprecisão de valores muito pequenos, operações abaixo de 0 (calculos)
// num1 = (num1 * 100 + num2 * 100) / 100; 2º opção
console.log(num1);

//console.log(num1.toString() + num2.toString()); //.toString() serve para passar o valor de numero para string, altema só na saida.
//num1 = num1.toString(); aqui altera o valor do num1 para string.
//console.log(num1.toString(2)); Altera o valor de num1 para binário.
//console.log(num1.toFixed(2)); //toFixed você diminui a quantidade de casas decimais e a quantidade de casas decimais coloca no ()
//console.log(Number.isInteger(num1)); // Ele vai retornar se é verdadeiro para valor inteiro ou false se é numero quebrado.
