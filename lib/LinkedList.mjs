/*
    ESTRUTURA DE DADOS LISTA ENCADEADA
    - A lista encadeada é uma estrutura de dados formada por unidades
      de informação chamadas nodos ou nós.
    - Cada nodo da lista encadeada tem duas partes: uma, que armazena a
      informação e outra que guarda o endereço do próximo nodo da sequência
    - A qualquer momento, temos um conhecimento apenas limitado de onde
      se encontram todos os nodos da lista. Sabemos apenas onde está o
      primeiro e o último nodo da sequência. Os nodos intermediários precisam
      ser encontrados partindo-se do primeiro e percorrendo a sequência
*/

class Node{
  constructor(val){
    this.data = val // informação relevante para o usuario
    this.next = null  // Ponteiro para o proximo nodo da sequencia
  }
}



export default class LinkedList{

   #head
   #tail
   #count

   constructor(){
    this.#head = null
    this.#tail = null
    this.#count = 0

  }
  get isEmpty(){
    return this.#count === 0
  }
  get count(){
    return this.#count
  }
  insert(pos, val){
    const inserted = new Node(val)

    if(this.isEmpty){
      this.#head = inserted
      this.#tail = inserted
    }
    else if(pos === 0){
      inserted.next = this.#head

      this.#head = inserted
    }
    else if(pos >= this.#count){
      this.#tail.next = inserted
      this.#tail = inserted
    }
    this.#count++
    console.log(`Head ${JSON.stringify(this.#head)} , tail ${JSON.stringify(this.#tail)}, count ${JSON.stringify(this.#count)}`)
  }
}

const lista = new LinkedList

lista.insert(0, 'Fusca' )
lista.insert(0, 'Corcel' )
lista.insert(2, 'Opala' )