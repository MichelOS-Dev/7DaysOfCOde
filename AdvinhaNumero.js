function valorAleatorio(max, min){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max - min + 1) + min);
}
const numero = valorAleatorio(10,0);
let resposta = prompt("Qual o número escolhido?");
if(resposta == numero){
    alert("Parabéns vocẽ acertou!");
}else{
    let i = 2;
    while(resposta != numero && i > 0){
        alert("Você errou, vocẽ ainda possui "+i+" tentativa(s)!");
        resposta = prompt("Qual o número escolhido?");
        if(resposta == numero){
            alert("Parabéns você acertou!");
        }
        i--;
    }
}
if(resposta != numero){
    alert("O valor correto era "+numero+"!")
}
//Testando atualização
// console.log(valorAleatorio(10,0));