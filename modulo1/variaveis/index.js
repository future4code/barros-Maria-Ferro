// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

// 1. 10, 5

// 2. 10, 10, 10

// 3. horasDia, salarioDia

//EXERCÍCIOS DE ESCRITA DE CÓDIGO

let nome
let idade
console.log (typeof nome, idade)

//1. d) Foi impresso UNDEFINED, pois não atribuí valores para as minhas variáveis.

let novoNome = (prompt("Qual é seu nome?"))
let novaIdade = (prompt("Qual é sua idade?"))

console.log (typeof novoNome)
console.log (typeof novaIdade)

//1. f) Ambas as variáveis são lidas como string, apesar de idade ser um número, porque o prompt só recebe string.

console.log ("Olá", novoNome, ", você tem", novaIdade, "anos.")

//EXERCÍCIO 2

let perguntaChuva = "Está chovendo hoje?"
let perguntaOculos = "Você usa óculos?"
let perguntaCalca = "Você está de calça jeans?"

let respostaChuva = (prompt(perguntaChuva))
let respostaOculos = (prompt(perguntaOculos))
let respostaCalca = (prompt(perguntaCalca))

console.log(perguntaChuva, respostaChuva)
console.log(perguntaOculos, respostaOculos)
console.log(perguntaCalca, respostaCalca)

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