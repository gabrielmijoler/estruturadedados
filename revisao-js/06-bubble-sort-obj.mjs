let tottrocas, comps, pass

function bubblesort(vetor,fncomp) {
    tottrocas = 0, comps=0, pass=0
    let trocas
    do{
        trocas = 0 // inicio de uma nova passada
        pass++
        
    }
    // percurso do vetor do inicio o penultimo elemento
    for(let i=0; i <= vetor.length-2; i++){
    
    if (fncomp(vetor[i], vetor[i+1])){
        
        // troca direta em javascript usando desestruturacao de vetores
         [vetor[i], vetor[i+1]]=[vetor[i+1], vetor [i]]
        
         trocas++
    } 
    comps++
}
tottrocas+=trocas
}while(trocas > 0)

 //A função de comparação precisa retornar:
 //true -> se o primeiro objeto for maior que o segundo
 //false -> caso contrário 
 
 import {candidatos} from "../includes/candidatos-2018.mjs"
 
 //Ordenando pelo nome de registro do candidato 
 console.log("ANTES", candidatos)
 console.time("Ordenar por nome de registro...")
 bubbleSort(candidatos,(a,b) => a.NM_CANDIDATO > b.NM_CANDIDATO)
 console.timeEnd("Ordenar por nome de registro...")
 console.log("DEPOIS: ", candidatos)
 console.log({totTrocas, comps, pass})

 console.log("ANTES", candidatos)
 console.time("Ordenar por nome de registro...")
 bubbleSort(candidatos,(a,b) => a.SG_UE > b.SG_UE)
 console.timeEnd("Ordenar por nome de registro...")
 console.log("DEPOIS: ", candidatos)
 console.log({totTrocas, comps, pass})