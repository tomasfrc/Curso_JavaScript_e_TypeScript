const numero = Number(prompt("Digite um numero:"));
const numeroTitulo = document.getElementById("numero-titulo");
const texto = document.getElementById("texto");

numeroTitulo.innerHTML = numero;
texto.innerHTML += `<p>Raiz quadrada: ${Math.sqrt(numero)}.</p>`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p>Arrendondando para baixo: ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>Arrendondando para cima: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>Com duas casa decimais: ${numero.toFixed(2)}</p>`;
