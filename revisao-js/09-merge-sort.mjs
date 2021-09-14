/*
    MERGE SORT

    No processo de ordenação, esse algoritmo "desmonta" o vetor original
    contendo N elementos até obter N vetores de apenas um elemento cada um.
    Em seguida, usando a técnica de mesclagem (merge), "remonta" o vetor,
    dessa vez com os elementos já em ordem.
    
*/
let comps = 0, divisoes = 0, juncoes = 0

function mergeSort(vetor) {

    function mesclar(vetEsq, vetDir) {
        let pEsq = 0, pDir = 0, vetRes = []
        while(pEsq < vetEsq.length && pDir < vetDir.length) {
            
            if(vetEsq[pEsq] < vetDir[pDir]) {
                vetRes.push(vetEsq[pEsq])
                pEsq++
            }
            else {
                vetRes.push(vetDir[pDir])
                pDir++
            }
            comps ++
        }

        // Verificando de qual lado houve sobra
        let sobra
        if(pEsq < pDir) sobra = vetEsq.slice(pEsq)      // Sobra à esquerda
        else sobra = vetDir.slice(pDir)                 // Sobra à direita

        // O vetor retornado será formado pelo vetor resultado + sobra
        return [...vetRes, ...sobra]  // Concatenando os dois vetores
    }

    // Desmontando o vetor
    if(vetor.length > 1) {  // Para desmontar, são necessários pelo menos 2 elementos
        let meio = Math.floor(vetor.length / 2)// retorna numero inteiro dentro do array, metade do valor
        // slice(): fatia um vetor, desde a posição inicial indicada (inclusive)
        // até a posição final (exclusive - A ÚLTIMA POSIÇÃO NÃO ENTRA NA FATIA GERADA)
        let vetEsq = vetor.slice(0, meio)
        // Quando o segundo parâmetro de slice() é omitido, são incluídos todos os elementos
        // até o final
        let vetDir = vetor.slice(meio)
        divisoes++

        // console.log({vetEsq, vetDir})

        // Chamadas recursivas à própria função para continuar o processo de desmontagem
        vetEsq = mergeSort(vetEsq)
        vetDir = mergeSort(vetDir)
        
        let vetFinal = mesclar(vetEsq, vetDir)
        juncoes++

        return vetFinal

    }
    return vetor  // condicao de saida : vetor.lenght === 1
}


let nums = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]


let numsord = mergeSort(nums)
console.log(numsord)
console.log({comps,divisoes, juncoes})

comps = 0, divisoes = 0, juncoes = 0

import {nomes} from '../includes/vetor-nomes.mjs'

console.time('ordenando nomes...')
let nomesord= mergeSort(nomes)
let memoriaMB= process.memoryUsage().heapUsed / 1024/ 1024
console.timeEnd('ordenando nomes...')
console.log(nomesord)
console.log({comps,divisoes,juncoes,memoriaMB})