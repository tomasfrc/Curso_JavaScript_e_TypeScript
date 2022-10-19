let varA = "A"; //B
let varB = "B"; //C
let varC = "C"; //A

//Forma moderna
[varA, varB, varC] = [varB, varC, varA];
/*
forma tadicional
const varAtemp = varA;
varA = varB;
varB = varC;
varC = varAtemp;*/

console.log(varA, varB, varC);
