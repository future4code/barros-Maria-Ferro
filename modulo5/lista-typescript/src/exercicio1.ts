function info(name: string, DOB: string): string {

    let dateOfBirth: string[] = DOB.split("/")
    let month: string = ""

    switch(dateOfBirth[1]) {
        case '01':
            month = "janeiro";
            break;
        case '02':
            month = "fevereiro";
            break;
        case '03':
            month = "março";
            break;
        case '04':
            month = "abril";
            break;
        case '05':
            month = "maio";
            break;
        case '06':
            month = "junho";
            break;
        case '07':
            month = "julho";
            break;
        case '08':
            month = "agosto";
            break;
        case '09':
            month = "setembro";
            break;
        case '10':
            month = "outubro";
            break;
        case '11':
            month = "novembro";
            break;
        case '12':
            month = "dezembro";
            break;
        default:
            month = "ERROR_FORMATO_INVÁLIDO"
            break;
    }

    return `Olá, me chamo ${name}, nasci no dia ${dateOfBirth[0]}, do mês de ${month}, do ano de ${dateOfBirth[2]}.`
}

console.log(info("Maria", "07/07/1993"))
console.log(info("Matheus", "21/12/1994"))