// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

/* 1.
const bool1 = true
const bool2 = false
const bool3 = !bool2 (esse é TRUE)

let resultado = bool1 && bool2
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)

console.log("d. ", typeof resultado) */

//1. 

// a. false - (true && false resulta em false)

// b. false - (true && false && true resulta em false)

// c. true - (!resultado é true; bool1 || bool2 é true, só seria false se ambos fossem false; então true && true resulta em true)

// d. boolean

/* 2.
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma) */

// 2. O problema é que o prompt só recebe valores em STRING, então para poder somar os resultados, é preciso transforma-los em número, usando o comando Number.
// No console será impresso um número após o outro, como se fosse um texto, ou seja se colocarmos "12" e "25", o console retornará "1225".

// 3. O código poderia ser escrito da seguinte forma, para dar certo:

let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma)

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// 1.

let suaIdade = Number(prompt('Qual é sua idade?'))
let idadeAmigo = Number(prompt ('Qual é a idade do seu melhor amigo ou melhor amiga?'))
let idadeMaior = suaIdade > idadeAmigo
let difIdade = suaIdade - idadeAmigo

console.log (`c. Sua idade é maior do que a do seu melhor amigo? - ${idadeMaior}`)
console.log (`d. A diferença entre ambas as idades é ${difIdade}.`)

// 2.

let numPar = Number(prompt('Digite um número PAR.'))
console.log (numPar % 2)

// 2c. O padrão é que todos os resultados são O, pois divisões de números pares por dois sempre são inteiras, não há resto.
// 2d. Caso seja inserido um número ímpar, haverá resto, pois números ímpares não são diviseis por 2, sempre sobrará.

// 3.

let idadeAnos = Number(prompt('Qual é sua idade?'))
let idadeMeses = idadeAnos * 12
let idadeDias = idadeAnos * 365
let idadeHoras = idadeDias * 24

console.log(`a. A sua idade em meses é ${idadeMeses} meses.`)
console.log(`b. A sua idade em dias é ${idadeDias} dias.`)
console.log(`c. A sua idade em horas é ${idadeHoras} horas.`)

// 4. 

let numeroUm = Number(prompt('Digite um número.'))
let numeroDois = Number(prompt('Digite outro número.'))

console.log(`O número um é ${numeroUm} e o número dois é ${numeroDois}.`)

resultado = numeroUm > numeroDois

console.log(`O primeiro número é maior que o segundo? ${resultado}`)

resultado = numeroUm === numeroDois

console.log(`O primeiro número é igual ao segundo? ${resultado}`)

let restoUm = numeroUm % numeroDois
resultado = restoUm === 0

console.log(`O primeiro número é divisível pelo segundo? ${resultado}`)

let restoDois = numeroDois % numeroUm
resultado = restoDois === 0

console.log(`O segundo número é divisível pelo primeiro? ${resultado}`)

// DESAFIOS!!

//1.

let graus_fahrenheit
let graus_celsius

graus_fahrenheit = 77
graus_celsius = 80

let kelvin = (graus_fahrenheit - 32) * (5/9) + 273.15
let fahrenheit = (graus_celsius) * (9/5) + 32

console.log(`a). O valor de 77°F em Kelvin é ${kelvin}K`)

console.log(`b). O valor de 80°C em Fahrenheit é ${fahrenheit}°F`)

graus_celsius = 30
fahrenheit = (graus_celsius) * (9/5) + 32
kelvin = (fahrenheit - 32) * (5/9) + 273.15

console.log(`c). O valor de 30°C em Fahrenheit é ${fahrenheit}°F e em Kelvin é ${kelvin}K`)

graus_celsius = Number(prompt('Qual valor Celsius você deseja converter?'))
fahrenheit = (graus_celsius) * (9/5) + 32
kelvin = (fahrenheit - 32) * (5/9) + 273.15
console.log(`d). O valor de ${graus_celsius}°C em Fahrenheit é ${fahrenheit}°F e em Kelvin é ${kelvin}K`)

//2. 

let kwHr
kwHr = 280
let valorEnergia = kwHr * 0.05

console.log(`a. O valor a ser pago por uma residência que consome 280 quilowatt-hora é R$${valorEnergia}.`)

let desconto = valorEnergia - (valorEnergia * 0.15)

console.log(`a. O valor a ser pago por uma residência que consome 280 quilowatt-hora, com desconto de 15%, é R$${desconto}.`)

//3. 

//a. 

let lb = 201
const lbToKg = lb / 2.205

console.log(`201lb equivalem a ${lbToKg} kg.`)

//b. 

let oz = 10.5
const ozToKg = oz / 35.274

console.log(`10.5oz equivalem a ${ozToKg} kg.`)

//c.

let mi = 100
const miToM = mi * 1609

console.log(`100mi equivalem a ${miToM} m.`)

//d.

let ft = 50
const ftToM = ft / 3.281

console.log(`50ft equivalem a ${ftToM} m.`)

//e.

let gal = 103.56
const galToL = gal * 3.785

console.log(`103.56gal equivalem a ${galToL} l.`)

//f.

let xic = 450
let xicToL = xic * 0.24

console.log(`450xic equivalem a ${xicToL} l.`)

//g. 

xic = Number(prompt('Qual é o número de xícaras que você quer converter para litros?'))
xicToL = xic * 0.24
console.log(`O valor de ${xic} xícaras em Litros é ${xicToL} l.`)