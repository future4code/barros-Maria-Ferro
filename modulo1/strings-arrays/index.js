// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO


// let array
// console.log('a. ', array)

// array = null
// console.log('b. ', array)

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length)

// let i = 0
// console.log('d. ', array[i])

// array[i+1] = 19
// console.log('e. ', array)

// const valor = array[i+6]
// console.log('f. ', valor)

// 01.
// a. undefined
// b. null
// c. 11
// d. 3
// e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// f. 9

// 02.
// O console imprimirá o seguinte:
// SUBI NUM ÔNIBUS EM MIRROCOS, 27


// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// 01.

const emailDoUsuario = prompt("Digite seu e-mail.").trim()
const nomeDoUsuario = prompt("Digite seu nome.")

console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso! Seja bem-vindo(a) ${nomeDoUsuario}!`)

// 02.

const comidasFavoritas = ["Sushi", "Moqueca", "Bife acebolado", "Feijoada", "Ostras"]

console.log('a.', comidasFavoritas)

console.log(`b. Essas são as minhas comidas favoritas:
1. ${comidasFavoritas[0]}
2. ${comidasFavoritas[1]}
3. ${comidasFavoritas[2]}
4. ${comidasFavoritas[3]}
5. ${comidasFavoritas[4]}`)

const comidaUsuario = prompt("Qual sua comida favorita?")

comidasFavoritas[1] = comidaUsuario

console.log('c.', comidasFavoritas)

// 03.

let listaDeTarefas = []

let tarefa1 = prompt("Digite a primeira tarefa que você precisa realizar.")
let tarefa2 = prompt("Digite a segunda tarefa que você precisa realizar.")
let tarefa3 = prompt("Digite a terceira tarefa que você precisa realizar.")

listaDeTarefas.push(tarefa1, tarefa2, tarefa3)

console.log(listaDeTarefas)

let tarefaRealizada = Number(prompt("Digite a tarefa que você já realizou: 0, 1 ou 2."))

listaDeTarefas.splice(tarefaRealizada, 1)

console.log(listaDeTarefas)

// DESAFIO

// 01.

let frase = prompt("Digite uma frase!")
const arrayFrase = frase.split(" ")
console.log(arrayFrase)

// 02. 

let arrayFrutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]

console.log(arrayFrutas.indexOf("Abacaxi"), arrayFrutas.length)

// FIM



