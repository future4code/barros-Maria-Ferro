// A

let minhaString: string = "Bananinha"
// minhaString = 23. Quando tento atribuir um número à variável do tipo string, aparece um erro: "O tipo 'number' não pode ser atribuído ao tipo 'string'"

// B

let meuNumero: number | string = 23
// Para esta variável aceitar string também, temos que atribuir os dois tipos a ela, dizendo que ela pode assumir qualquer um deles, da forma feita acima.

// C

enum CorFavorita {
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    AZUL = "Azul",
    AZULESCURO = "Azul-Escuro",
    VIOLETA = "Violeta"
}

type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: CorFavorita
}

const pessoa: Pessoa = {
    nome: "Maria",
    idade: 29,
    corFavorita: CorFavorita.VERMELHO
}

const pessoa2: Pessoa = {
    nome: "Matheus",
    idade: 27,
    corFavorita: CorFavorita.AZUL
}

const pessoa3: Pessoa = {
    nome: "Luiza",
    idade: 29,
    corFavorita: CorFavorita.VERDE
}

const pessoa4: Pessoa = {
    nome: "Izabel",
    idade: 20,
    corFavorita: CorFavorita.LARANJA
}

// D (feito acima porque não posso declarar depois)