const texto = "socorram-me, subi no onibus em marrocos"

// usando vetor como pilha
const pilha = []

// desemontando o texto e colocando cada letra na pilha
for(let  i = 0 ; i < texto.length; i++){
    //Na pilha, a insercao sempre ocorre no final
    pilha.push(texto.charAt(i))
}
//      TESTES
//pilha.unshift('X', 'Y', 'Z') // inseri no inicio (operação proibida em uma pilha)
// pilha.splice(14, 0, '9', '8', '7') // insere no meio(tambem proibida para pilhas)
//pilha.splice(22,7)// Exclusao meio da pilha(proibido!)

console.log(pilha) 

let textorev = ''

while(pilha.length){
    // na pilha,a retirada é smepre feita tambem no final
    textorev += pilha.pop()
}
console.log(textorev)