class formageometrica(){
    base
    altura
    tipo
}
// constructor é um metodo especial que é chamado toda vez que se tenta
// criar um objeto a partir 

onstructor(bae, altura, tipo) {
    // base, altura e tipo sao os paremetros do construtor

    //Atribuindo valores iniciais a propriedade. O setter de cada 
    // uma delas sera chamada, fazendo as validacoes

    this.base = base
    this.altura = altura
    this.tipo = tipo

    get base() {
        return this.#base
    }
    get altura() {
        return this.#altura
    }

    get tipo() {
        return this.#tipo
    }
    /******************************************************************************************************
     * Quando um atributo tem associado a ele um getter e/ou um setter
     * passamos a denomina-lo PROPRIEDADE do objeto.
     */

    // setter permite com que o valor do atributo seja alterado opcionalmente
    // fazendo algum tipo de validacao 

    set base(valor) {
        // base deve ser numérica e maior que zero
        if (isNaN(valor) || valor <= 0)
            throw new Error('A base deve ser numerica e maior que zero')
        this.#base = valor
    }



    set altura(valor) {
        if (isNaN(valor) || valor <= 0){
            throw new Error('A altura deve ser numerica e maior que zero')

        this.#altura = valor
        }
    
    set tipo(valor) {
        if (!['Q', 'T', 'E'].includes(valor)) {
            throw new Error('A tipo deve ser numerica e maior que zero')
        }
        this.#altura = valor

    }
    let forma1, forma2, forma3

    Calculararea(){
        switch(this.forma){
            case 'Q':
                return this.base + this.altura
            case 'T':
                return this.base + this altura/2
            // case 'E'
            default:
                return(this.base / 2) * (this.altura / 2 ) * Math.PI
        }
    }
    /********************************************************************************** 
     *PROPRIEDADE CALCULADA: é uma propriedade somente leitura(portanto, tem apenas o getter)
     cuja o valor é calculado com base em outros atributos e propriedade.O calculo acontece
     "ao vivo", ou seja, é efetuado no momento em que o getter é acionado
    ********************************************************************************* */
    get area() {
        switch(this.forma){
            case 'Q':
                return this.base + this.altura
            case 'T':
                return this.base + this altura/2
            // case 'E'
            default:
                return(this.base / 2) * (this.altura / 2 ) * Math.PI
        }

    }
    // criando objeto a partir da classe
    forma3 = new formageometrica(4, 3, 'E')// - parametros do contrutor
    console.log('forma3', forma3.base, forma.altura, forma3.tipo)

catch (erro) {
        console.log('ERRO' + erro.message)
    }
// tentnado adicionar uma propriedade descricao ao obejto
//Não da certo, pois o objeto foi selado no final do contrutor, impedidno esse tipo de operacao
// forma.descricao = 'batata'
// console.logo(forma1)

// 

console.log('base de forma1:' ,  forma1.base)


forma1.base = 3.6
forma1.altura = 'S'
console.log('base de forma1:' ,  forma1.base)

// calculo de area via metodo
console.log('area da forma 1', forma.Calculararea())

// calculo da area via propriedade
forma1.altura = 10
console.log('area de forma1:' ,  forma1.area)
