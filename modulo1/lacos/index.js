// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

//01. O código está estabelecendo 0 como o valor inicial, e então que i é o ponto de partida, que o código deverar rodar até é ser menor que 5, e adicionar uma unidade a i até finalizar. Então somar o valor com i. O que será impresso no console é 10 (1 + 2 + 3 + 4).

//02A. Será impresso no console: 19, 21, 23, 25, 27, 30 (mas um embaixo do outro).
//02B. Não, o for...of acessa apenas os elementos do array. Para acessar o índice, eu poderia utilizar for (let i =0; i < array.lenght; i++) e estabelecer o que estou buscando dentro da array.

//03. Seria impresso:
// *
// **
// ***
// ****

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

//01.

const bichinhos = Number(prompt("Quantos bichinhos de estimação você tem?"))

let arrayBichinhos = []
let nomesBichinhos
let i = 0

if (bichinhos === 0) {
    console.log("Que pena! Você pode adotar um pet!")
} else if (bichinhos > 0) {
    for (i = 0; i < bichinhos; i++) {
        nomesBichinhos = prompt(`Digite o nome do bichinho ${i+1}!`)
        arrayBichinhos.push(nomesBichinhos)
    }
console.log(arrayBichinhos)
}

//02.

let arrayOriginal = [50, 77, 93, 110, 134, 150]

//02A.

for(let numero of arrayOriginal) {
    console.log(numero)
}

//02B.

for(let numero of arrayOriginal) {
    console.log(numero / 10)
}

//02C.

let arrayPares = []

for (i = 0; i < arrayOriginal.length; i++) {
    if(arrayOriginal[i] % 2 === 0) {
        arrayPares.push(arrayOriginal[i])
    }
}

console.log(arrayPares)

//02D. 

let arrayStrings = []

for (i = 0; i < arrayOriginal.length; i++) {
    arrayStrings.push(`O elemento do índex ${i} é: ${arrayOriginal[i]}.`)
}

console.log(arrayStrings)

//02E.

let maior = 0
let menor = 1000

for (let numero of arrayOriginal) {
    if (numero > maior) {
        maior = numero
    }
    if (numero < menor) {
        menor = numero
    }
}

console.log(`Maior número: ${maior}
Menor número: ${menor}`)

// DESAFIOS

// 01.

const numeroPensado = Number(prompt("Digite o número que você pensou!"))

console.log("Vamos jogar!")

let numeroChute = 0
let listaChutes = []

while (numeroChute !== numeroPensado) {
    numeroChute = Number(prompt("Chute um número!"))
    if (numeroChute > numeroPensado) {
        console.log(`O número chutado foi: ${numeroChute}.
Errou!!! O número que você chutou é MAIOR que o número correto.`)
} else if (numeroChute < numeroPensado) {
    console.log(`O número chutado foi: ${numeroChute}.
Errou!!! O número que você chutou é MENOR que o número correto.`)
}
    listaChutes.push(numeroChute)
}

console.log(`O número chutado foi: ${numeroChute}.
NA MOSCA!!!
O número de tentativas foi: ${listaChutes.length}.`)

// 02.

const numerosLista = []
const tamanho = 100

for (let i = 0; i < tamanho; i++) {
    numerosLista.push(i+1)
}

function sortearNumero() {

    console.log("Vamos jogar!")

    const numeroComputador = numerosLista[Math.floor(Math.random() * 100)]

    let listaChutes = []
    numeroChute = 0

    while (numeroChute !== numeroComputador) {
    numeroChute = Number(prompt("Chute um número de 1 a 100!"))
        if (numeroChute > numeroComputador) {
        console.log(`O número chutado foi: ${numeroChute}.
Errou!!! O número que você chutou é MAIOR que o número correto.`)
        } else if (numeroChute < numeroComputador) {
        console.log(`O número chutado foi: ${numeroChute}.
Errou!!! O número que você chutou é MENOR que o número correto.`)
    }
        listaChutes.push(numeroChute)
    }

    console.log(`O número chutado foi: ${numeroChute}.
NA MOSCA!!!
O número de tentativas foi: ${listaChutes.length}.`)

}

sortearNumero()

if(confirm("Quer jogar novamente?")) {
    sortearNumero()
} else {
    console.log("Fim do jogo!")
}

// Não foi muito difícil resolver. Primeiro, para facilitar, fui atrás de como poderia gerar uma array com número de 1 a 100 sem precisar digitar um por um, e consegui incluir isto no meu código, o que já adiantou bastante. Quanto ao sorteio dos números, li a referência indicada e também peguei como referência o código de sorteio de cartas do BlackJack, então tentei entender para que serve também o Math.floor. Por fim, criei a função baseada no código criado para o exercício anterior, apenas alterando para as informações geradas pelo computador.
