import Stack from '../lib/Stack.mjs'

const expressao ='3/{2 + 4 *[(-1 -(4*7)/2]+[(2*7)}'

const analisador = new Stack()  // cria uma pilha

// tipos de simbolos, colchete, parentese e chave


function verifFechamento(tipoFecha, posFecha, infoAbre){
    if (infoAbre === undefined){
        console.log(`ERRo: ha mais simbolos de fechamento que de abertura; tipo ${tipoFecha}, posição ${posFecha}`)
    }
    else if (tipoFecha === infoAbre.tipo){
        console.log(`Simbolo tipo ${infoAbre.tipo} aberto na posição ${infoAbre.i} e fechado na posição ${posFecha}`)
    } else{
        console.log(`Erro: simbolo de fechamento do tipo ${tipoFecha} encontrada na pósição ${posFecha} esperado tipo ${infoAbre.tipo}`)
    }
}

// percorre a expressao procurando o simbolos 

for(let i = 0; i < expressao.length; i++) {
    switch(expressao.charAt(i)){
        case '{':
            analisador.push({tipo: 'X', i: i})
            break
         case '[':
            analisador.push({tipo: 'C', i: i})
            break
        case '(':
            analisador.push({tipo: 'P', i: i})
            break
        case '}':
            verifFechamento('X', i , analisador.pop())
            break
        case ']':
        verifFechamento('C', i , analisador.pop())
            break
        case ')':
        verifFechamento('P', i , analisador.pop())
            break
    }     
}

// console.log(analisador.print())

// Verificar se houve sobra na pilha 
// Acontece quando ha mais simbolos de abertura do que de fechamentos

while(! analisador.isEmpty){
    let sobra = analisador.pop()
    console.log(`ERRO: Simbolo de abertura do tipo ${sobra.tipo} na posição ${sobra.i} nao possui simbolo de fechamento correpondente`)

}