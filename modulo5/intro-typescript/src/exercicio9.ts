const userInputEx9 = require("readline-sync")

function estLabenu (): boolean {

    const idade: number = userInputEx9.question("Qual a sua idade?")
    const ensinoMédio: string = userInputEx9.question("Voce possui ensino medio completo? Responda S ou N.")
    const horas: number = userInputEx9.question("Quantas horas voce tem disponivel na semana para o curso?")
    const modalidade: string = userInputEx9.question("O seu curso sera o 'integral' ou 'noturno'?")

    const resposta: boolean = idade < 18 || ensinoMédio === "N" || (modalidade === "noturno" && horas < 20) || (modalidade === "integral" && horas < 40)

    return !resposta
}


console.log(estLabenu())