function validarCPF(cpf: string): boolean {
    let resultado: boolean = false

    let converterCPF: string = cpf
    converterCPF = converterCPF.replace(/\./g, "")
    converterCPF = converterCPF.replace("-", "")
    const stringCPF: string[] = converterCPF.split("")
    const numberCPF: number[] = stringCPF.map((item) => {
        return Number(item)
    })

    const verificarNumerosIguais: boolean = numberCPF.every(n => n === numberCPF[0])
    if (verificarNumerosIguais) {
        return resultado
    } else {

        let DV1: number = 0
        let multplicadorDV1: number = 10
        let somaDV1: number = 0

        for (let i = 0; i < numberCPF.length - 2; i++) {
            let contaDV1: number = numberCPF[i] * multplicadorDV1
            somaDV1 += contaDV1
            multplicadorDV1--
        }

        const modulo11DV1: number = somaDV1 % 11
        DV1 = 11 - modulo11DV1

        if (DV1 >= 10) {
            DV1 = 0
        }

        if (DV1 !== numberCPF[9]) {
            return resultado
        } else {

            let DV2: number = 0
            let multplicadorDV2: number = 11
            let somaDV2: number = 0

            for (let i = 0; i < numberCPF.length - 1; i++) {
                let contaDV2: number = numberCPF[i] * multplicadorDV2
                somaDV2 += contaDV2
                multplicadorDV2--
            }

            const modulo11DV2: number = somaDV2 % 11
            DV2 = 11 - modulo11DV2

            if (DV2 >= 10) {
                DV2 = 0
            }

            if (DV2 !== numberCPF[10]) {
                return resultado
            } else {
                return !resultado
            }
        }
    }
}

console.log(validarCPF("088.149.849-13"))
console.log(validarCPF("111.111.111-11"))
console.log(validarCPF("003.478.745-89"))
console.log(validarCPF("222.222.222-22"))
console.log(validarCPF("088.149.839-41"))