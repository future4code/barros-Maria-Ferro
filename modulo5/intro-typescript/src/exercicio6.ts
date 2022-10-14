function calculo(num1: number, num2: number): void {
    console.log(`A soma de ${num1} mais ${num2} é igual a ${num1 + num2}.`)
    console.log(`A subtração de ${num1} por ${num2} é igual a ${num1 - num2}.`)
    console.log(`A multiplicação de ${num1} por ${num2} é igual a ${num1 * num2}.`)

    if(num1 > num2) {
        console.log(`${num1} é maior que ${num2}.`)
    } else if (num2 > num1) {
        console.log(`${num2} é maior que ${num1}.`)
    } else if (num1 === num2) {
        console.log("Ambos os números são iguais.")
    }
}

calculo(45, 23)