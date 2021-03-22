/*
QUICK SHORT

escolhe um dos elementros do veotr para ser o pivo(na nossa implementacao o ultimo elemento)e, na priemira passada
o vetor, a partir da posição final do vetor, outro subvetor a direita, que contem apenas valores
maiores que o pivo.

Em seguida, recursivamente repete o processo em cada um dos subvetores ate que todo o vetor esteja oedenado
*/



let comps = 0, trocas = 0, passadas = 0

function quicksort(vetor, ini = 0, fim = vetor.length - 1) {
    if (fim > ini) { // deve ter mais de um elemento para ordenar
        passadas++
        let pivot = fim
        let div = ini - 1
        // for indo do primeiro elemento ate o penultimo
        for (let i = ini; i < fim; i++) {
            if (vetor[i] < vetor[pivot]) {
                div++
                [vetor[i], vetor[div]] = [vetor[div], vetor[i]]
                trocas++
            }
            comps++
        }
        div++
        // colocando o pivo em seu lugar definitivo
        if (vetor[pivot] < vetor[div]) {
            [vetor[pivot], vetor[div]] = [vetor[div], vetor[pivot]]
            trocas++
        }
        comps++
        //quicksort esquerda
        quicksort(vetor, ini, div - 1)

        // quicksort direita
        quicksort(vetor, div + 1, fim)

    }
}


//let nums = [7, 4, 9, 0, 6, 1, 8, 2, 5, 3]
//let nums=[9,8,7,6,5,4,3,2,1,0]
let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
quicksort(nums)
console.log(nums)
console.log({ comps, trocas, passadas })

import { nomes } from './includes/100-mil-nomes.mjs'

console.time('ordenando nomes..')
quicksort(nomes)
console.timeEnd('ordenando nomes..')
let memoria = process.memoryUsage().heapUsed / 1024 / 1024
console.log({ trocas, comps, passadas, memoria })
console.log('Depois', nomes)