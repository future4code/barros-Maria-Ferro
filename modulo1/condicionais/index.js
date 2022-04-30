//EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

//01A. O código pede um número ao usuário e verifica se ele é par, ou seja, se a divisão dele por 2 resulta em resto 0. Caso seja par, ele imprime a mensagem "Passou no teste" no console, e caso não seja, imprime "Não passou no teste".
//01B. Para números pares.
//01C. Para números ímpares.

//02A. O código serve para verificar o preço de uma fruta escolhida pelo usuário.
//02B. Caso a fruta escolhida seja maçã, será impresso: "O preço da fruta Maçã é R$2.25".
//02C. Caso seja retirado o BREAK, será impresso "O preço da fruta Pêra é R$5", porque ele vai considerar o último valor atribuído.

//03A. A primeira linha está solicitando ao usuário que digite o primeiro número.
//03B. Caso fosse o número 10, a mensagem seria "Esse número passou no teste", e caso fosse -10, retornará algum erro porque não há condição para isso.
//03C. Sim, haverá um erro porque a variável "mensagem" está sendo declarada dentro da condicional if, portanto quando ela é chamada fora da condicional, o código não consegue localiza-la. 

//EXERCÍCIOS DE ESCRITA DE CÓDIGO

//01.

let dirigir = Number(prompt("Qual é a sua idade?"))

if (dirigir >= 18) {
    console.log("Você pode dirigir.")
} else {
    console.log("Você não pode dirigir.")
}

//02.

const turno = prompt("Em que turno você estuda? Digite M para matutino, V para vespertino ou N para noturno.")

if (turno === "M") {
    console.log("Bom dia!")
} else if (turno === "V") {
    console.log("Boa tarde!")
} else if (turno === "N") {
    console.log("Boa noite!")
}

//03.

const novoTurno = prompt("Em que turno você estuda? Digite M para matutino, V para vespertino ou N para noturno.")
switch (novoTurno) {
    case "M":
        console.log("Bom dia!")
        break
    case "V":
        console.log("Boa tarde!")
        break
    case "N":
        console.log("Boa noite!")
        break
    default:
        console.log("Turno não localizado.")
        break
}

//04.

const generoFilme = prompt("Qual é o gênero do filme?")
const precoIngresso = Number(prompt("Qual é o preço do ingresso?"))

const condicao1 = generoFilme === "fantasia"
const condicao2 = precoIngresso < 15

if (condicao1 && condicao2) {
    console.log("Bom filme!")
} else {
    console.log("Escolha outro filme :(")
}

// DESAFIOS

//01. 

if (condicao1 && condicao2) {
    const lanchinho = prompt("Qual lanchinho você vai comprar?")
    console.log(`Bom filme! Aproveite o seu ${lanchinho}!`)
} else {
    console.log("Escolha outro filme :(")
}

//02.

// INFORMAÇÕES ----

const nomeCompleto = prompt("Digite seu nome completo.")
const tipoDeJogo = prompt("Qual é o tipo do jogo? Digite IN para INTERNACIONAL ou DO para DOMÉSTICO.")
const etapaJogo = prompt("Qual é a etapa do jogo? Digite SF para SEMI-FINAL, DT para TERCEIRO LUGAR ou FI para FINAL.")
const categoria = prompt("Qual é a categoria? 1, 2, 3 ou 4")
const quantidade = Number(prompt("Digite a quantidade de ingressos."))

const valorSF = [1320, 880, 550, 220]
const valorDT = [660, 440, 330, 170]
const valorFI = [1980, 1320, 880, 330]

// DADOS INGRESSO ----

let imprimirEtapa
let valorTipo

switch (etapaJogo) {
    case 'SF':
        imprimirEtapa = "Semi-final"
        valorTipo = valorSF[categoria-1]
        break
    case 'DT':
        imprimirEtapa = "Decisão Terceiro Lugar"
        valorTipo = valorDT[categoria-1]
        break
    case 'FI':
        imprimirEtapa = "Final"
        valorTipo = valorFI[categoria-1]
        break
}

let imprimirTipo
let valorIngresso
let valorTotal
const dolar = 4.1

switch (tipoDeJogo) {
    case 'DO':
        imprimirTipo = "Nacional"
        valorIngresso = `R$ ${valorTipo}`
        valorTotal = `R$ ${valorTipo * quantidade}`
        break
    case 'IN':
        imprimirTipo = "Internacional"
        valorIngresso = `U$ ${valorTipo / dolar}`
        valorTotal = `U$ ${valorTipo * quantidade / dolar}`
        break
}

// IMPRIMIR NO CONSOLE ----

console.log(`--- Dados da Compra ---
Nome do cliente: ${nomeCompleto}
Tipo do Jogo: ${imprimirTipo}
Etapa do jogo: ${imprimirEtapa}
Categoria: ${categoria}
Quantidade de ingressos: ${quantidade} ingressos
--- Valores ---
Valor do ingresso: ${valorIngresso}
Valor total: ${valorTotal}`)