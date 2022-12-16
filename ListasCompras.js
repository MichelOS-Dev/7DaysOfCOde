let resposta = 'SIM';
let arrayFrutas = [], arrayLaticinios = [], arrayCongelados = [], arrayDoces = [];

while(resposta.toUpperCase() == "SIM"){
    resposta = prompt("Você deseja adicionar uma comida na sua lista de compras?");
    while(resposta.toUpperCase() != "SIM" && resposta.toUpperCase() != "NÃO"){
        alert(`Operação não reconhecida!`);
        resposta = prompt("Você deseja adicionar uma comida na sua lista de compras? Responda 'sim' ou 'não'.");
    }
    if(resposta.toUpperCase() == "NÃO"){
        break;
    }

    let comida = prompt("Qual comida você deseja inserir?");
    let categoria = prompt("Em qual categoria ela se encontra? \n1 - Frutas \n2 - Laticínios \n3 - Congelados \n4 - Doces");
    if(categoria === '1'){
        arrayFrutas.push(comida);
    } else if (categoria === '2'){
        arrayLaticinios.push(comida);
    } else if (categoria === '3'){
        arrayDoces.push(comida);
    } else if (categoria === '4'){
        arrayCongelados.push(comida);
    } else {
        alert("Essa categoria não foi pré-definida.")
    }
}

alert(`Lista de compras:\n  Frutas: ${arrayFrutas}\n  Laticínios: ${arrayLaticinios}\n  Doces: ${arrayDoces}\n  Congelados: ${arrayCongelados}`);
