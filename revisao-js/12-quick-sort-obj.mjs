let comps=0, trocas=0, passadas =0
function quicksort(vetor,fncomp,ini=0, fim=vetor.lenght-1){
    if(fim>ini){
        passadas++


    }
}
// esqueda
quicksort(vetor,incomp,ini,div -1)

//direta
quicksort ( vetor ,incomp, div + 1, fim)

import {candidatos} from './includes/candidatos-2018.mjs'


// ordenando pelo nome da urna do candidato
console.time('ordenando por nomes registrados..')

// função de comparação considerando multiplos niveis de ordenação:
// primeiro por SG.UE, depois por DS.CARGO, por fim, por NR.CANDIDATO
quicksort(candidatos,(a,b) => {
    if(a.SG_UE === b.SG_UE)
        if (a.DS_CARGO == b.DS_CARGO){
            return a.NR_CANDIDATO < b.NR_CANDIDATO
            else return a.DS_CARGO < b.DS_CARGO
        }
    else return a.SG_UE < b.SG_UE
})

// quicksort(candidatos,(a,b) => a.NM_URNA_CANDIDATO > b.NM_URNA_CANDIDATO)
console.timeEnd('ordenando por nomes registrados..')
console.log({ trocas, comps, passadas,  })
console.log('Depois', candidatos)