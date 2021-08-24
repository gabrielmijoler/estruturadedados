/*

    ALGORITIMO DE ORDENACAO BUBBLE SORT
        
    Percorre o vetor, comparando um elemento com seu sucessor.Caso
    o sucessor seja menor que o valor atual, ocorre a troca entre eles 
    Esses processo se repete em varias passadas ate que, percurso final 
    nenhuma troca seja feita.
    
    TROCA NUM ARRAY O MAIOR PELO MENOR ATE CHEGAR NO NUMERO FINAL DO ARRAY
*/
let tottrocas,comps,pass

function bubblesort(vetor){
    tottrocas=0 ,comps=0, pass = 0
    let trocas
    do{
        trocas = 0 // inicio de uam nova passada
        pass++
        // percursor do vetor do iniicio ate o penultimo elemento
        for(let i=0; i <= vetor.length-1; i++){
            if(vetor[i] > vetor [i+1]){
                trocas++
               // let aux = vetor[i]
               // vetor [1] = vetor [i+1]
               //vetor [i+1] = aux

               // troca direta em javascript usando desestruturacao de vetores
                [vetor[i],vetor[i+1]]=[vetor[i+1],vetor[i]]

                trocas++

            }
            comps++
        }
        tottrocas += trocas

    } while (trocas>0)
}

// let nums = [7,4,9,0,6,1,8,2,5,3]

// pior caso 
let nums =[9,8,7,6,5,4,3,2,1,0]

console.log('ANTES', nums)
bubblesort(nums)
console.log('Depois:', nums)
console.log({tottrocas, comps, pass})

import { empresas } from '../includes/15-mil-empresas.mjs'

console.log('ANTES', empresas)
console.time('Ordenar empresas')
bubblesort(empresas)
console.timeEnd('Ordenar empresas')
console.log({tottrocas, comps, pass})
console.log('Depois:', empresas)