// EXERCÍCIO 02

const operation = process.argv[2]
const number1 = Number(process.argv[3])
const number2 = Number(process.argv[4])

const mathOperation = (op, num1, num2) => {
    switch(op) {
        case 'add':
            return num1 + num2;
            break
        case 'sub':
            return num1 - num2;
            break
        case 'mult':
            return num1 * num2;
            break
        case 'div':
            return num1 / num2;
            break
        default: 
            return "Operação inválida."
    }
}

console.log(mathOperation(operation, number1, number2))