/***
 * Busca Sequencial 
 * 
 * Percorre a sequência de dados no inicio 
 * cada um deles contra 
 * 
 * 
 * 
 * 
 * 
 * 
 * quando encontra o valor de busca, o percurso é interrompido 
*e retorna-se a POSIÇÃO  onde foi encontrado o valor de busca
*
*Caso o valor de busca não tenha sido encontrado após o percurso 
*total da sequência de dados , retorna-se o valor convencional -1
*pra indicar a indexistência do valor de busca entre os dados
*
*a busca sequencial NÂO EXISTE
*/

function buscaSequencial (vetor, valorBusca){
    //Percurso com for tradicional, compara os vetores
    for (let i = 0; i < vetor.length; i++){
        //Encotrado o valor de busca, retorna-se a posição onde foi encontrado 
        if (vetor[i] === valorBusca) return i
    } 
    //Retorna-se -1 caso o valor de busca não tenha sido encontrado 
    return -1
}
const frutas = ['laranja', 'maça', 'uva', 'pera', 'jabuticaba', 'limão', 'mamão']

console.log('Posição de uva:', buscaSequencial(frutas, 'uva'))
console.log('Posição de uva:', buscaSequencial(frutas, 'laranja')) // busca sequencia eh funcao onde fruta passa para achar laranja e achar sua posicao
console.log('Posição de uva:', buscaSequencial(frutas, 'mamão'))
console.log('Posição de uva:', buscaSequencial(frutas, 'abacate'))


import { nomes } from '../includes/vetor-nomes.mjs'


console.time ("Buscando FAUSTO") // dispara a contagem ede tempo   time
console.log(buscaSequencial(nomes,'FAUSTO'))
console.timeEnd("Buscando FAUSTO") // para a contagem do tempo timeEnd

console.time ("Buscando JURANDIR") // dispara a contagem ede tempo   time
console.log(buscaSequencial(nomes,'JURANDIR'))
console.timeEnd("Buscando JURANDIR") // para a contagem do tempo timeEnd

console.time ("Buscando VERONICA") // dispara a contagem ede tempo   time
console.log(buscaSequencial(nomes,'VERONICA'))
console.timeEnd("Buscando VERONICA") // para a contagem do tempo timeEnd


console.time ("Buscando BERNARDO") // dispara a contagem ede tempo   time
console.log(buscaSequencial(nomes,'BERNARDO'))
console.timeEnd("Buscando BERNARDO") // para a contagem do tempo timeEnd