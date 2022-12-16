const area = prompt("Qual área deseja seguir?\nFront-End ou Back-End");
let aprender = "";
if(area.toUpperCase() == "FRONT-END"){
    aprender = prompt("Quer aprender React ou Vue?");
}else if(area.toUpperCase() == "BACK-END"){
    aprender = prompt("Quer aprender C# ou Java?");
}else{
    alert("Você não inseriu um nome válido!");
}

const escolha =  prompt("1 - seguir se especializando na área escolhida ou 2 - seguir se desenvolvendo para se tornar Fullstack");
if(escolha == 1){
    alert("Sucesso no seu aprendizado em ${aprender} na área de ${area}!");
}else if(escolha == 2){
    alert("Sucesso nos seus desenvolvimentos futuros, além de ${aprender} para se tornar um dos melhores!");
}else{
    alert("Valor inválido!");
}

let msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.");
while (msg === "ok"){
    let novaTecnologia = prompt("Qual?");
    alert(`${novaTecnologia} é realmente uma tecnologia muito legal!`)
    msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.");
}