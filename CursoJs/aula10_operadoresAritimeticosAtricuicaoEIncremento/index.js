/*
Aritiméticos
+ = Adição / Concatenação
- = Subitração
/ = Divisão
* = Multiplicação
** = Potenciação
% = Resto da divisão

ordem de execução primeiro = () , **, (*, /, %), (+, -)

incremento =  ++
Desemento = --

Operadores de Atribuição
+= , -=, **=

parseInt() = Tranforma o numero tipo string para um numero inteiro
parseFloat() = Tranforma o numero tipo string para um numero real, com decimal
Number() = trasforma em um numero, mais fácil !
*/

const num1 = 10;
const num2 = 3;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 ** num2);
console.log(num1 % num2);

let contador = 1;
contador++; // ++ incrementa 1 no contador e decremento é --
console.log(contador);

// se eu quiser incrementar ou dequementrar mais de 1

let contador2 = 0;

contador2 += 2; //contador = contador + 2
contador2 += 2; //contador = contador + 2
contador2 += 2; //contador = contador + 2

console.log(contador2);
