let a =10, b=15, c=10
console.log(a>b)
console.log(a<b)
console.log(a==b)
console.log(a != b)

console.log('---------------------')

// strings
a='maria'
b = 'dinah'
c= 'maria'
console.log(a>b)
console.log(a<b)
console.log(a==b)
console.log(a != b)
console.log('---------------------')

//booleans // quando compara true e false
a = true
b = false
c = true 
console.log(a>b)
console.log(a<b)
console.log(a==b)
console.log(a != b)
console.log('---------------------')

//vetores
a = [1,2,3,4,5]
b = [10,20,30,40,50]
c = [1,2,3,4,5]
console.log(a>b)
console.log(a<b)
console.log(a==b)
console.log(a != b)
console.log('---------------------')

// na comparacao de vetores, os resultados para maior e menor nao sao consistentes
// conclusao ; vetores NAO SAO diretamente comparaveis entre si

// objetos
a = {marca: 'volkswagen', modelo :'fusca', ano:1976}
b = {marca: 'fiat', modelo:'147', ano :1980}
c = {marca: 'volkswagen', modelo :'fusca', ano:1976}
console.log(a>b)
console.log(a<b)
console.log(a==b)
console.log(a != b)
console.log('---------------------')

// Objetos tambem apresentam inconsistencia quando comparados diretamente 
// conclusao geral:
// tipos de dados que sao comparaveis em js: number, string e booleans
