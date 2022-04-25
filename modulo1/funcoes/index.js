// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

// 1.

// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))

// a. Será impresso no console:
// 10
// 50

// b. Se não colocassemos o console.log, não apareceria nada no console. A função estaria sendo executada no nosso código, mas não impressa no console.

// 2.

// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)

// a. A função recebe um texto do usuário, transforma todos os caracteres para minúscula e verifica se inclui a palavra "cenoura". Ele deve retorna true or false.
// b. i. true
// ii. true
// iii. true (o includes verifica se o termo inteiro aparece em qualquer lugar da string, mesmo que não seja a palavra inteira)

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

//1.
//a. 

function sobreMim() {
    console.log("Eu sou a Maria, tenho 28 anos, moro em Florianópolis e sou estudante.")
}

//b. 

function informacoes (nome, idade, cidade, profissão) {
    nome = "Maria"
    idade = Number("28")
    cidade = "Florianópolis"
    profissão = "estudante"

    return `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissão}.`
}

console.log(informacoes())

// 2.
//a.

function somar(num1, num2) {

    return num1 + num2
}

console.log(somar(8,45))

//b.

function maior(numero1, numero2) {

    return numero1 >= numero2
}

//console.log(maior(87,425))

//c. 

function numeroPar(num) {

    return num % 2 === 0
}

//d. 

function tamanhoMen(mensagem) {
    const tamanho = mensagem.length
    const maiuscula = mensagem.toUpperCase()

    console.log(`${tamanho}, ${maiuscula}`)
}

tamanhoMen("O rato roeu a roupa do rei de Roma")

// 3.

function soma(number1, number2) {
    return number1 + number2
}

function subtracao(number1, number2) {
    return number1 - number2
}

function multiplicacao(number1, number2) {
    return number1 * number2
}

function divisao(number1, number2) {
    return number1 / number2
}

let primeiroNumero = Number(prompt("Insira um número."))
let segundoNumero = Number(prompt("Insira outro número."))

console.log(soma(primeiroNumero, segundoNumero))
console.log(subtracao(primeiroNumero, segundoNumero))
console.log(multiplicacao(primeiroNumero, segundoNumero))
console.log(divisao(primeiroNumero, segundoNumero))

// DESAFIOS

// 1.
//a.

const imprimir = resultado => {
    console.log(resultado)
}

const calcular = (valor1, valor2) => valor1 + valor2

imprimir(calcular(25, 46))

//b.

function pitagoras(cateto1, cateto2) {
    const hipotenusa = (cateto1 * cateto1) + (cateto2 * cateto2)
    const resultado = Math.sqrt(hipotenusa) //precisei pesquisar como calcular a raiz quadrada em javascript pq não consegui pensar em outra solução
    return `O valor da hipotenusa é: ${resultado}`
}

imprimir(pitagoras(4,3))
