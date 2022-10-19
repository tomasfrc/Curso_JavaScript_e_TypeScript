let umaString = "Um \\texto"; // Para comocar uma barra invertida, só colocar duas barras invertida

//                012345678  Uma string tem posições e começa do 0
let umaString2 = "Um texto"; // Para comocar uma barra invertida, só colocar duas barras invertida

console.log(umaString);
console.log(umaString2[4]); //Para pegar uma posição especifica da string se usa [posição])
console.log(umaString2.indexOf("texto", 3)); // Pesquisa na string a posição da palavra ,3 vai encontrar a partir da posição 3
console.log(umaString2.lastIndexOf("o")); // Pesquisa na string do final
//console.log(umaString2.replace("Um", "outra")); // Subistitui uma palavra por outra
console.log(umaString2.length); // Tamanho da string
console.log(umaString2.slice(2, 6)); // Pega uma parte fatiada do texto
console.log(umaString2.split(" ")); // Coloca a strig em um array separadament
