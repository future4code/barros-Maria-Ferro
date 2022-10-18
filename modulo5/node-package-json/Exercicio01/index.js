// EXERCÍCIO 01

// A. Precisamos determinar uma variável que receba estes parâmetros, através do process.argv, que é uma array de strings que recebe os comandos, sendo que os dois primeiros argumentos são fixos [0] e [1]. Portanto, precisamos começar pelo [2], ou pela posição maior que essa que queremos acessar.

// B.

const nameUser = process.argv[2]
const ageUser = Number(process.argv[3])

const nameAndAge = (name, age) => {
    return `Olá, ${name}! Você tem ${age} anos.`
}

// console.log(nameAndAge(nameUser, ageUser))

// C.

const nameAndAgeFuture = (name, age) => {
    return `Olá, ${name}! Você tem ${age} anos. Em sete anos, você terá ${age+7}.`
}

const red = '\u001b[31m'
const message = nameAndAgeFuture(nameUser, ageUser)

console.log(red + message)