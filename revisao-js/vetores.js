let frutas = ['laranja','maca','banana', 'pera','uva','mamao']

console.log(frutas)

let ultimafruta = frutas.pop()

console.log(frutas)
console.log(ultimafruta)

//tirar o primeiro elementoo do vetor
let primeirafruta = shift()


console.log(frutas)
console.log(primeirafruta)


//removendo de posicoes intermediarias
//splice()
// 1 posicao sera removida (lembrese q a contagem comeca em zero)
// 2 quantidade de elementos q serao removidos

let terceirafruta = frutas.splice(2,1) //fruta posicao 2

console.log(frutas)
console.log(terceirafruta)

// inserindo elemnto no fim do vetor
frutas.push('jabuticaba')

console.log(frutas)
// inserir um elemento no inicio do vetor
frutas.unshift('amora')

console.log(frutas)

//inserindo em posicao intermediarias
//splice() para insercao
// 1 posicao onde ocorrera a insercao
// 2 quantos elementos serao excluidos
//  parametros seguintes: elementos a serem inseridos

frutas.splice(3,0 , 'pessego')
console.log(frutas)


// inserindo duas frutas na 3 posicao
frutas.splice(2,0,'caqui','jaca')
console.log(frutas)


// subtistuir 6º fruta

fruta.splice(5,1,'abacate')
console.log(frutas)
