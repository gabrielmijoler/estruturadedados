// => substituin function

function potencia(b,e) {//b base e = expoente
    return b**e
}
console.log(potencia(2,10))

// arrow function equivalente
// quando temos mais um parametro, os parenteses retornam
cont potencia2=(b,e) => b**e
console.log(potencia2(2,10))

// funcao sem parametros, que retornam um numero aleatorio entre 1 e 60
function megasena (){
    // math.random()->retorna um numero entre 0 (inclusive) e 1 (exclusive)
    // * 60 -> ajusta faiax de valores para entre 0 e 59
    // + 1 -> ajusta faiax de valores para entre 1 e 60
    // match.cell()->retira as casas decimais de um numero, deixando apenas a parte inteira
    
    return match.cell(math.random()*60+1)

}
console.log(megasena(),megasena(),megasena(),megasena(),megasena(),megasena())

// arrow
// parebteses vazio (obrigatorios) marcam o lugar dos parametros
let megasena2 = () => math.cell(math.random()*60 +1)
console.log(megasena(),megasena(),megasena(),megasena(),megasena(),megasena())

function somavet(vet){
let soma = 0
for(let n of vet) soma+=n // soma=soma +n 
return soma
}

console.log(somavet([1,2,3,4,5,6,7,8,9]))

// com mais de uma linha no corpo, as chaves voltam e nao é mais
// possivel omitir a palavra- chave *return* caso a funcao retorne valor 
const somavet2= vet =>{
    let soma = 0
for(let n of vet) soma+=n // soma=soma +n 
return soma
}
console.log(somavet2([1,2,3,4,5,6,7,8,9]))

//CONCLUCAO: arrow function  sao ideias para casos em q o corpo da funcao
// possui apenas uma linha, embora arrow functions com multiplas linhas nao sejam incomuns
