/*
    ESTRUTURA DE DADOS ÁRVORE BINÁRIA DE BUSCA
    - Árvore ~> é uma estrutura de dados não-linear, hierárquica,
      que é formada recursivamente por outras subárvores.
    - Árvore binária ~> uma árvore na qual cada nodo tem grau máximo
      igual a 2 (ou seja, cada nodo pode ter, no máximo, dois descendentes
      diretos).
    - Árvore binária de busca ~> é uma árvore binária otimizada para a
      operação de busca binária. Por isso, na inserção, os valores são 
      colocados já em ordem.
*/

/* Classe que representa a unidade de informação da árvore binária de busca */
class Node {
    constructor(val) {
        this.data = val     // Armazena a informação relevante para o usuário
        this.left = null    // Ponteiro para a subárvore esquerda
        this.right = null   // Ponteiro para a subárvore direita
    }
}

/* Classe que implementa a árvore binária de busca */
class BinarySearchTree {

    #root           // Raiz da árvore

    constructor() {
        this.#root = null        
    }

    /* Método para efetuar inserção na ABB */
    insert(val) {

        const inserted = new Node(val)

        // 1º caso: árvore vazia
        // O primeiro nodo fica sendo a raiz da árvore
        if(this.#root === null) this.#root = inserted

        // 2º caso: inserção recursiva, percorrendo a árvore
        // recursivamente
        else this.#insertNode(inserted, this.#root)
    }

    /* Método PRIVADO que insere um novo nodo na árvore
       Parâmetros:
       inserted ~> nodo a ser inserido
       root ~> a raiz da subárvore onde o nodo será inserido
    */
    #insertNode(inserted, root) {
        // 1º caso: o valor a ser inserido é MENOR que o valor da raiz;
        // inserção ocorre à ESQUERDA da raiz
        if(inserted.data < root.data) {
            // Se a posição à esquerda da raiz está desocupada, faz aí a inserção
            if(root.left === null) root.left = inserted
            // Senão, reinicia o processo de inserção, recursivamente, com a
            // subárvore esquerda como raiz
            else this.#insertNode(inserted, root.left)
        }

        // 2º caso: o valor a ser inserido é MAIOR que o valor da raiz;
        // a inserção ocorre à DIREITA da raiz
        else if(inserted.data > root.data) {
            // Se a posição à direita da raiz está desocupada, faz aí a inserção
            if(root.right === null) root.right = inserted
            // Senão, reinicia o processo de inserção, recursivamente, com a
            // subárvore direita como raiz
            else this.#insertNode(inserted, root.right)
        }

        // 3º caso: o valor a ser inserido é IGUAL ao valor da raiz;
        // não se faz nada, já que a ABB, por definição, não deve ter valores
        // repetidos
    }

    /************************************************************
     * PERCURSOS
    *************************************************************/

    /* Método que executa o percurso em-ordem (in-order traversal) 
    na árvore 
        Ordem do percurso:
        1º ~> percorre recursivamente em-ordem a subárvore esquerda
        2º ~> visita a raiz
        3º ~> percorre recursivamente em-ordem a subárvore direita
    */
    inOrderTraversal(fnCallback, root = this.#root) {
        if(root !== null) {
            this.inOrderTraversal(fnCallback, root.left)    // 1º
            fnCallback(root.data)                           // 2º
            this.inOrderTraversal(fnCallback, root.right)   // 3º
        }
    }

    /* Método que executa o percurso pré-ordem (pre-order traversal) 
    na árvore 
        Ordem do percurso:
        1º ~> visita a raiz
        2º ~> percorre recursivamente pré-ordem a subárvore esquerda
        3º ~> percorre recursivamente pré-ordem a subárvore direita
    */
    preOrderTraversal(fnCallback, root = this.#root) {
        if(root !== null) {
            fnCallback(root.data)                           // 1º
            this.preOrderTraversal(fnCallback, root.left)   // 2º
            this.preOrderTraversal(fnCallback, root.right)  // 3º
        }
    }

    /* Método que executa o percurso pós-ordem (post-order traversal) 
    na árvore 
        Ordem do percurso:
        1º ~> percorre recursivamente pós-ordem a subárvore esquerda
        2º ~> percorre recursivamente pós-ordem a subárvore direita
        3º ~> visita a raiz
    */
    postOrderTraversal(fnCallback, root = this.#root) {
        if(root !== null) {
            this.postOrderTraversal(fnCallback, root.left)   // 1º
            this.postOrderTraversal(fnCallback, root.right)  // 2º
            fnCallback(root.data)                            // 3
        }
    }

    /**************************************************************/

    /* Método que retorna o nodo de menor valor da árvore */
    #minNode(root) {
        // A partir da raiz, percorre à esquerda enquanto possível
        while(root !== null && root.left !== null) root = root.left
        return root
    }

    /* Método que retorna o nodo de maior valor da árvore */
    #maxNode(root) {
        // A partir da raiz, percorre à direita enquanto possível
        while(root !== null && root.right !== null) root = root.right
        return root
    }

    /* Método público para excluir um valor da árvore */
    remove(val) {
        this.#root = this.#removeNode(this.#root, val)
    }

    /* Método PRIVADO para excluir um nodo da árvore */
    #removeNode(root, val) {

        // 1º caso: árvore vazia
        if(root === null) return null

        // 2º caso: o valor a ser excluído é MENOR que o valor da raiz
        // Continua recursivamente o processo de exclusão pela subárvore ESQUERDA
        if(val < root.data) {
            root.left = this.#removeNode(root.left, val)
            return root
        }

        // 3º caso: o valor a ser excluído é MAIOR que o valor da raiz
        // Continua recursivamente o processo de exclusão pela subárvore DIREITA
        if(val > root.data) {
            root.right = this.#removeNode(root.right, val)
            return root
        }

        // 4º caso: o valor a ser excluído é IGUAL ao valor da raiz
        // O nodo a ser excluído foi encontrado; é necessário, agora,
        // verificar o GRAU desse nodo para aplicar o algoritmo de 
        // exclusão apropriado

        // 4.1: nodo de grau 0 (nodo folha)
        if(root.left === null && root.right === 0) {
            root = null
            return root
        }

        // 4.2: nodo de grau 1, com subárvore à esquerda
        if(root.left !== null && root.right === null) {
            root = root.left
            return root
        }

        // 4.3: nodo de grau 1, com subárvore à direita
        if(root.left === null && root.right !== null) {
            root = root.right
            return root
        }

        // 4.4: nodo de grau 2

    }


}

///////////////////////////////////////////////////////////////////////////

const arvore = new BinarySearchTree()

arvore.insert(48)
arvore.insert(71)
arvore.insert(15)
arvore.insert(29)
arvore.insert(57)
arvore.insert(1)
arvore.insert(80)
arvore.insert(13)
arvore.insert(19)
arvore.insert(37)
arvore.insert(23)
arvore.insert(21)
arvore.insert(25)
arvore.insert(51)
arvore.insert(64)

// Percurso em-ordem
let percurso = []
arvore.inOrderTraversal(val => percurso.push(val))
console.log('Percurso em-ordem:', percurso)

// Percurso pré-ordem
percurso = []
arvore.preOrderTraversal(val => percurso.push(val))
console.log('Percurso pré-ordem:', percurso)

// Percurso pós-ordem
percurso = []
arvore.postOrderTraversal(val => percurso.push(val))
console.log('Percurso pós-ordem:', percurso)