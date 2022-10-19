let nome = "Henrique"; //String. Var é mais antigo, se usa mais LET.
let nome2; //Declarol variável.

nome2 = "João"; //Iniciando a variável.
nome2 = "Otávio";

console.log(nome, "nasceu em 1984");
console.log("Em 200", nome, "conheceu Maria");
console.log(nome, "casou-se com Maria em 2012");
console.log("Maria teve um filho com", nome, "em 2015");
console.log("O filho de", nome, "se chame Eduardo");

console.log(nome2);

//Não podemos criar variáveis com palavras reservadas, ex: let let
//Variáveis precisa de nomes significativos. Ex let n = "João" (Não é indicado) ; let nomeCliente = "João" (Correto)
//Não pode começar o nome da variável com número. Ex let 1nome;
/*Não pode conter espaços ou traços ex let nome-cliente ou nome cliente. Podemos utilizar a anotação camelCase, segundapalavra inicia com letra maiuscula.*/
//Case-sensitive, letra Maiuscula e menuscula são diferentes ex: let nomeCliente é diferente de let nomecliente
//Não podemos redeclarar variáveis com let.
//Não utilize VAR, utilize LET
