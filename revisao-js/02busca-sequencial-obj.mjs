// COMPARAÇÃO PARA OBJETOS.

function buscaSequencial(vetor, fncomp){ // sao parametros vetor e comparaobj
    for (let i = 0; i < vetor.length; i++){  
        if(fncomp(vetor[1])) return i
    }
    return -1
}
// compara as string do objeto
function comparaNome(obj) {
    return obj.firt_name === 'FAUSTO'
}

import { objNomes } from '../includes/vetor-obj-nomes.mjs';


console.time ("Buscando FAUSTO") // dispara a contagem ede tempo   time
console.log(buscaSequencial(objNomes, comparaNome))// o .objNomes, vira o .vetor na busca sequencial e o .comparaNome entra no lugar do .fncomp
// por isso o loop funciona
console.timeEnd("Buscando FAUSTO") // para a contagem do tempo timeEnd


console.time ("Buscando MOACIR") // dispara a contagem ede tempo   time
console.log(buscaSequencial(objNomes, function(obj) {  // ou (objNomes, obj => obj.firt_name === 'MOACIR') arrow
    return obj.firt_name === 'MOACIR'
}))
console.timeEnd("Buscando MOACIR") 