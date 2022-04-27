// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
let altura = Number(prompt('Digite a altura do retângulo'))
let largura = Number(prompt('Digite a largura do retângulo'))

let area = altura * largura

console.log(area)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
let anoAtual = Number(prompt('Em que anos estamos?'))
let anoNasc = Number(prompt('Qual seu ano de nascimento?'))

let idadeUsuario = (anoAtual - anoNasc)

console.log(idadeUsuario)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui

  return (peso / (altura*altura))

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
const nome = prompt('Qual seu nome?')
const idade = prompt('Qual a sua idade?')
const email = prompt('Qual é seu e-mail?')

console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
let cor1 = prompt('Digite uma cor favorita.')
let cor2 = prompt('Digite outra cor favorita.')
let cor3 = prompt('Digite mais uma cor favorita.')

console.log([cor1, cor2, cor3]) 

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui

  return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

  return custo / valorIngresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

  return string1 >= string2

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

  return array[array.length-1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

const primElemento = array[0]
const ultiElemento = array[array.length-1]

array.splice(0, 1, ultiElemento)
array.splice(array.length-1, 1, primElemento)

return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

  return string1.toUpperCase() === string2.toUpperCase()

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

  const anoAtual = Number(prompt("Em que ano estamos?"))
  const anoNasc = Number(prompt("Qual seu ano de nascimento?"))
  const anoCartIden = Number(prompt("Em qual ano sua carteira de identidade foi emitida?"))

  const idade = anoAtual - anoNasc
  const renCartIden = anoAtual - anoCartIden

  const vinteAnos = idade <= 20 && renCartIden >= 5
  const maiorDeVinteAnos = idade < 50 && idade > 20 && renCartIden >= 10
  const maiorDeCinquenta = idade > 50 && renCartIden >= 15

  const resultadoRenovacao = vinteAnos || maiorDeVinteAnos || maiorDeCinquenta

  console.log(resultadoRenovacao)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

  let ano400 = (ano % 400) === 0
  let ano4 = (ano % 4) === 0
  let ano100 = (ano % 100) !== 0

  const anoBissexto = ano400 || ano4 && ano100

  // o ano divisível por 400 é sempre bissexto OU ||
  // ele precisa ser divisível por 4 E &&
  // não pode ser divisivel por 100
  // ou seja se o ano400 for TRUE, o ano4 será TRUE e o ano100 será FALSE, retorna true -- bissexto
  // se o ano400 for FALSE, o ano4 precisa ser TRUE e ano100 precisa ser TRUE (não pode ser divisível por 100) (para ser bissexto)
  // se o ano400 for FALSE, o ano4 for TRUE, e o ano100 for FALSE (divisível por 100) então não é bissexto
  // se o ano400 for FALSE e o ano4 for FALSE, não é bissexto (ano100 também será false)

  return anoBissexto
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

  const maiorDeDezoito = prompt("Você tem mais de 18 anos? Responda sim ou nao.")
  const ensinoMedio = prompt("Você tem ensino médio completo? Responda sim ou nao.")
  const disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso? Responda sim ou nao")

  let condicao1 = maiorDeDezoito === "sim"
  let condicao2 = ensinoMedio === "sim"
  let condicao3 = disponibilidade === "sim"

  const validadeInscricao = condicao1 && condicao2 && condicao3 
  
  console.log(validadeInscricao)
}