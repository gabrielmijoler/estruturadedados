// funcao de calculo do fatorial

// o fatorialde um numero é igual a ele proprio multiplicado 
// por todos os seus antecessores até o 1

// 5! = 5*4*3*2*1(120)
// 4! = 4*3*2*1 (24)

// funcao de calculo do fatorial, pelo metado ITERATIVO

function fatorial1(n) {
    let res = 1
    for (let i = n; i > 1; i--) res *= i  // res = res * i 
    return res
}

//console.log(fatorial2(5))
//onsole.log(fatorial2(4))

// 5! = 5 * 4 * 3 * 2 * 1(120)
// 4! = 4 * 3 * 2 * 1 (24)
// 5!= 5*(4!)
// 5!= 5*((5-1)!)
// n! = n * ((n - 1)!) - principio da recursao
// 1! = 1
// 0! = 1
// funcao de calculo do fatorial, pelo metado Recursivo

function fatorial2(n){
    console.log({n})
    if (n <= 1) return 1 // condicao de parada ou de saida
    else return n * fatorial2(n-1)

}
console.log(fatorial2(5))
console.log(fatorial2(4))
