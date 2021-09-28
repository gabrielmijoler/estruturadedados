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

        // CHAMANDO OS Set das propriedades para fazer a validação
        this.base = base
        this.altura = altura
        this.tipo = tipo
    }

    // função Getter: faz com que se torne visivel ao mundo externo, informaçoes armazenadas nos atributos privados.
    get base (){
        return this.#base
    }

    get altura (){
        return this.#altura
    }

    get tipo (){
        return this.#tipo
    }

    //Funçoes Setter: permitem que o valor de atributos privados sejam alterados do lado de fora da classe.
    
    set base(valor){
        if (typeof valor !== 'number' || valor <=0){
            // gera um erro na criação do objeto
            throw new Error ('ERRO: a base precisa ser numerica e maior que zero')
        }
        this.#base = valor
    }

    set altura(valor){
        if (typeof valor !== 'number' || valor <=0){
            // gera um erro na criação do objeto
            throw new Error ('ERRO: a altura precisa ser numerica e maior que zero')
        }
        this.#altura = valor
    }

    set tipo(valor){
        if(! ['R','T','E'].includes(valor)){
            //if(tipo !=='R' && tipo !== 'T' && tipo !== 'E'){
                throw new Error('ERRO: o tipo precisa ser um dos valores: "R", "T","E"')
            }
        this.#tipo = valor
    }

    /* PROPRIEDADES */

    // Metodo publico
    calcArea(){
        switch(this.tipo){
            case 'R':  
                return this.base * this.altura
            case 'T':
                return this.base * this.altura / 2  
            case 'E':  
                return (this.base /2) * (this.altura / 2) * Math.PI
        }
    }

    //ALTERNATIVO: propriedade somente-leitura (so possui o getter)
    get area(){
        switch(this.tipo){
            case 'R':  
                return this.base * this.altura
            case 'T':
                return this.base * this.altura / 2  
            case 'E':  
                return (this.base /2) * (this.altura / 2) * Math.PI
        }
    }



}
// criadndo objetos a partir da classe 
let forma1 = new FormaGeometrica(15,16, 'T') // Isso chamara o construtor da classe
let forma2 = new FormaGeometrica(2, 3, 'E')

// uma funcao getter é chamada Sem utilização de parenteses

forma1.base = 7 // chama a função setter e altera o valor
forma1.altura = 2 // chama a função setter e altera o valor
forma1.tipo= 'T'
console.log(forma1.base, forma1.altura, forma1.tipo)

console.log(forma2.base, forma2.altura, forma2.tipo)


console.log('Area da forma1',forma1.calcArea())

console.log('Area da forma2',forma2.calcArea())

console.log('Area da forma1',forma1.area)

console.log('Area da forma2',forma2.area)


// PROPRIEDADE area é somente leitura , nao pode ser alterada, pq n tem setter 