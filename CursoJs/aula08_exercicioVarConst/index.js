/*
Luiz Otávio Miranda tem 30 anos, pesa 84 Kg 
tem 1.8 de altura e seu IMC é de 25.9254.
Luiz Otávio nasceu em 1980 
*/

const nome = "Luiz Otávio";
const sobreNome = "Miranda";
const idade = 30;
const peso = 84;
const alturaEmM = 1.8;
let imc; // Peso / (altura * altura)
let anoNascimento;
//pega o ano atual
const dataAtual = new Date();
const anoAtual = dataAtual.getFullYear();

imc = peso / (alturaEmM * alturaEmM);
imc = imc.toFixed(2);
anoNascimento = anoAtual - idade;

// Template string

console.log(`${nome} ${sobreNome} tem ${idade} anos, pesa ${peso} Kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${imc}.`);
console.log(`${nome} nasceu em ${anoNascimento}`);
