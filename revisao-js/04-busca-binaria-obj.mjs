

let comps = 0

function buscabinaria(vetor, valorbusca) {
    comps = 0
    let ini = 0
    let fim = vetor.length - 1
    let meio
    while (fim >= ini) {
        meio = Math.floor((fim + ini) / 2) // Math.floor() arredonda para baixo
        if (fncomp(vetor[meio]) === 0) {
            comps++
            return meio // achou
        }
        else if (fncomp(vetor[meio] < 0)) {
            comps += 2
            fim = meio - 1
        }
        else {
            comps += 2
            ini = meio + 1
        }
    }
    return -1// valor nao existe no vetor
}
// retornos da arropw function para busca binaria
// 0 igualdade
// -1 o valor de busca eh MENOR  que o valor do objeto comparado
// +1 o valor de busca eh MAIOR  que o valor do objeto comparado

const comparanomebin = Obj => {
    if (obj.first_name === 'FAUSTO') return 0
    else if ('FAUSTO' < obj.first_name) return -1
    else return 1
}

import { objnomes } from '../includes/vetor-nomes.mjs'
console.time("Busca ORKUTILSON")
console.log(buscabinaria(objnomes, obj => {
    const valorbusca = 'ORKUTILSON'
    if (objnomes.first_name === valorbusca) return 0
    else if (valorbusca < obj.first_name) return -1
    else return 1
}), { comps })

console.time("Busca ABRAAO")
console.log(buscabinaria(nomes, "ABRAAO")

console.time("Busca FAUSTO")
console.log(buscabinaria(nomes, "FAUSTO")


console.time("Busca ZELIA")
console.log(buscabinaria(nomes, "ZELIA")
