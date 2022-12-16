const pergunta01 = prompt("Qual o seu nome?");
const pergunta02 = prompt("Quantos anos você tem?");
const pergunta03 = prompt("Qual a linguagem de programação você está estudando?")

alert("Olá " + pergunta01 + ", você tem "+pergunta02+" anos e já está aprendendo "+pergunta03+"\n");

const pergunta04 = prompt("Você gosta de estudar "+ pergunta03+"? \n Responda com número 1 para SIM e 2 para NÃO.");

if(pergunta04 == 1){
    alert("Muito bom! Continue estudando e você terá muito sucesso.");
}
if(pergunta04 == 2){
    alert("Ahh que pena... Já tentou aprender outras linguagens?");
}

//RESOLUÇÃO 02

/* const nome = prompt("Qual o seu nome?");
const idade = prompt("Quantos anos você tem?");
const linguagem = prompt("Qual linguagem de programação você está estudando?");
const msg = `"Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!"!`;

alert(msg);

const gosta = prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 - SIM ou 2 - NÃO`);
if (gosta == 1){
    alert("Muito bom! Continue estudando e você terá muito sucesso.");
}
if (gosta == 2){
    alert("Ahh que pena... Já tentou aprender outras linguagens?");
} */