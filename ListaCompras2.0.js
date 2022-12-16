let resposta = 'SIM';
let arrayFrutas = [], arrayLaticinios = [], arrayCongelados = [], arrayDoces = [];
let comida = "";
let categoria = "";

while(resposta.toUpperCase() == "SIM" || resposta.toUpperCase() == 'REMOVER'){
    if(arrayFrutas.length === 0 && arrayLaticinios.length === 0 && arrayDoces.length === 0 && arrayCongelados.length === 0){
        resposta = prompt("Você deseja adicionar uma comida na lista de compras? Responda 'sim' ou 'não'.");
    } else {
        resposta = prompt("Você deseja adicionar uma comida na lista de compras? Responda 'sim', 'não' ou 'remover'.");
    }
    if(resposta.toUpperCase() == "NÃO"){
        break;
    }
    while(resposta.toUpperCase() != 'SIM' && resposta.toUpperCase() != 'NÃO' && resposta.toUpperCase() != 'REMOVER'){
        alert(`Operação não reconhecida!`);
        if(arrayFrutas.length === 0 && arrayLaticinios.length === 0 && arrayDoces.length === 0 && arrayCongelados.length === 0){
            resposta = prompt("Você deseja adicionar uma comida na lista de compras? Responda 'sim' ou 'não'.");
        } else {
            resposta = prompt("Você deseja adicionar uma comida na lista de compras? Responda 'sim', 'não' ou 'remover'.");
        }
    }
    if(resposta.toUpperCase() === 'SIM'){
        comida = prompt("Qual comida você deseja inserir?");
        categoria = prompt("Em qual categoria ela se encontra? \n1 - Frutas \n2 - Laticínios \n3 - Congelados \n4 - Doces");
        if(categoria === '1'){
            arrayFrutas.push(comida);
        } else if (categoria === '2'){
            arrayLaticinios.push(comida);
        } else if (categoria === '3'){
            arrayCongelados.push(comida);
        } else if (categoria === '4'){
            arrayDoces.push(comida);
        } else {
            alert("Essa categoria não foi pré-definida.")
        }
    }else if(resposta.toUpperCase() === 'REMOVER'){
        if(arrayFrutas.length === 0 && arrayLaticinios.length === 0 && arrayDoces.length === 0 && arrayCongelados.length === 0){  //se a lista estiver vazia (tratamento de bug, caso a pessoa digite "remover" mesmo quando forem exibidas apenas as opções "sim" e "não"
            alert(`A lista está vazia!`);
        } else {
            let remover = prompt(`Qual elemento você deseja remover da lista? Veja a lista abaixo:\nLista de compras:\n  Frutas: ${arrayFrutas}\n  Laticínios: ${arrayLaticinios}\n  Doces: ${arrayDoces}\n  Congelados: ${arrayCongelados}`);
            let pos1 = arrayFrutas.indexOf(remover);
            let pos2 = arrayLaticinios.indexOf(remover);
            let pos3 = arrayCongelados.indexOf(remover);
            let pos4 = arrayDoces.indexOf(remover);

            if(pos1 != -1){
                arrayFrutas.splice(pos1, 1); 
                alert(`O item ${remover} foi removido com sucesso!`)
            }else if(pos2 != -1){
                arrayLaticinios.splice(pos2, 1); 
                alert(`O item ${remover} foi removido com sucesso!`)
            }else if(pos3 != -1){
                arrayCongelados.splice(pos3, 1); 
                alert(`O item ${remover} foi removido com sucesso!`)
            }else if(pos4 != -1){   
                arrayDoces.splice(pos4, 1); 
                alert(`O item ${remover} foi removido com sucesso!`)
            }else{
                alert('Não foi possível encontrar o item dentro da lista!');
            }
            alert(`Lista de compras:\n  Frutas: ${arrayFrutas}\n  Laticínios: ${arrayLaticinios}\n  Doces: ${arrayDoces}\n  Congelados: ${arrayCongelados}`);
        }
    }else{
        alert('Processo finalizado!');
        break;
    }
    
}

alert(`Lista de compras:\n  Frutas: ${arrayFrutas}\n  Laticínios: ${arrayLaticinios}\n  Doces: ${arrayDoces}\n  Congelados: ${arrayCongelados}`);
