let a =10, b=15, c=10
console.log(a > b)
console.log(a < b)
console.log(a === b)
console.log(a !== b)

console.log('---------------------')

// comparacaoes de strings
let nome1='CATIFUNDIA'
let nome2 = 'FELISBISNO'
let nome3= 'AGATHIA'
console.log(nome1 > nome2)
console.log(nome1 < nome2)
console.log(nome1 === nome2 )
console.log(nome1 > nome3)
console.log(nome1 < nome3)
console.log(nome1 === nome3 )  // diferenca de == para === ,== converte string para number outro nao
console.log('---------------------')

//booleans // quando compara true e false
let a = true, b = false, c = true 
console.log(a > b)
console.log(a < b)
console.log(a === b) // === igual e !== diferente 
console.log(a !== b)
console.log(a === c)
console.log(a !== c)
console.log('---------------------')

//vetores
let a = [1,2,3,4,5]
let b = [10,20,30,40,50]
let c = [1,2,3,4,5]
console.log(a > b)
console.log(a < b)
console.log(a === b)
console.log(a != b)
console.log('---------------------')

// na comparacao de vetores, os resultados para maior e menor nao sao consistentes
// conclusao ; vetores NAO SAO diretamente comparaveis entre si

// objetos
a = {marca: 'volkswagen', modelo :'fusca', ano:1976}
b = {marca: 'fiat', modelo:'147', ano :1980}
c = {marca: 'volkswagen', modelo :'fusca', ano:1976}
console.log(a > b)
console.log(a < b)
console.log(a === b)
console.log(a !== b)
console.log('---------------------')

// Objetos tambem apresentam inconsistencia quando comparados diretamente 
// conclusao geral:
// tipos de dados que sao comparaveis em js: number, string e booleans

console.log(a.marca > b.marca)
console.log(a.marca < b.marca)