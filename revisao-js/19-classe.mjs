// Normalmente, se usa inicial maiúscula para nomear classes
class FormaGeometrica {

    /* 
        Variáveis usadas dentro de uma classe são chamadas ATRIBUTOS.
        Existem dois tipos de atributos:
        1) Atributo PÚBLICO: pode ser acessado tanto de dentro quanto
           de fora da classe.
        2) Atributo PRIVADO: só pode ser acessado de dentro da classe.
           Em JavaScript, os nomes de atributos privados devem iniciar
           com uma #.
    */

    // Declaração de atributos PRIVADOS - note que NÃO usamos let, var
    // ou const
    #base
    #altura
    #tipo

    /*
        Além variáveis (atributos), classes podem conter também funções,
        que são chamadas, nesse caso, de MÉTODO. Existe um método especial,
        chamado "constructor", que é invocado toda vez que se tenta criar
        um objeto a partir da classe.
    */
    constructor(base, altura, tipo) {
        // O construtor recebe dados externos: base, altura e tipo
        // e os armazena os atributos internos #base, #altura e #tipo.
        // Toda vez que nos referimos a um atributo ou método (que pertencem
        // à classe), precisamos prefixá-los com this + ponto.
        

        //VALIDAÇÃO
        
        if (typeof base !== 'number' || base <=0){
            // gera um erro na criação do objeto
            throw new Error ('ERRO: a base precisa ser numerica e maior que zero')
        }
        if (typeof altura !== 'number' || altura <=0){
            // gera um erro na criação do objeto
            throw new Error ('ERRO: a altura precisa ser numerica e maior que zero')
        }
        
        if(! ['R','T','E'].includes(tipo)){
        //if(tipo !=='R' && tipo !== 'T' && tipo !== 'E'){
            throw new Error('ERRO: o tipo precisa ser um dos valores: "R", "T","E"')
        }

        this.#base = base
        this.#altura = altura
        this.#tipo = tipo
    }

    get base (){
        return this.#base
    }

    get altura (){
        return this.#altura
    }

    get tipo (){
        return this.#tipo
    }

}
// criadndo objetos a partir da classe 
let forma1 = new FormaGeometrica(15,16, 'T') // Isso chamara o construtor da classe


// uma funcao getter é chamada Sem utilização de parenteses
console.log(forma1.base, forma1.altura, forma1.tipo)

let forma2 = new FormaGeometrica(2, 3, 'E')
console.log(forma2.base, forma2.altura, forma2.tipo)
