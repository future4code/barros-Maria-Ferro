// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

// 1. 10, 5

// 2. 10, 10, 10

// 3. horasDia, salarioDia

let nome
let idade
console.log (typeof nome, idade)

//EXERCÍCIOS DE ESCRITA DE CÓDIGO

//1. d) Foi impresso UNDEFINED, pois não atribuí valores para as minhas variáveis.

let novoNome = (prompt("Qual é seu nome?"))
let novaIdade = (prompt("Qual é sua idade?"))

console.log (typeof novoNome)
console.log (typeof novaIdade)

//1. f) Ambas as variáveis são lidas como string, apesar de idade ser um número, porque o prompt só recebe string.

console.log ("Olá", novoNome, ", você tem", novaIdade, "anos.")

//EXERCÍCIO 2

console.log("Está chovendo hoje?")
let estáChovendo = true
console.log (estáChovendo)

console.log("Você usa óculos?")
let usaOculos = false
console.log (usaOculos)

console.log("Você está de calça jeans?")
let calcaJeans = true
console.log (calcaJeans)

//EXERCÍCIO 3

let a = 10
let b = 25

let c = a
a = b
b = c

console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)

//DESAFIO

let numUm = (prompt("Insira o primeiro número."))
let numDois = (prompt("Insira o segundo número."))

let numUmNum = Number(numUm)
let numDoisNum = Number(numDois)

let soma = numUmNum + numDoisNum
let multiplicacao = numUmNum * numDoisNum

console.log ("O primeiro número somado ao segundo número resulta em:", soma)
console.log ("O primeiro número multiplicado pelo segundo número resulta em:", multiplicacao)