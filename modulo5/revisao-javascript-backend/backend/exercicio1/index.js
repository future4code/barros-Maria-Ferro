const converteCelsius = (temperatura, escala) => {
    if (typeof temperatura !== 'number') {
        return 'Erro. Parâmetro inválido (Temperatura deve ser um número).'
    } else {
    switch (escala) {
        case "K":
            const kelvin = temperatura - 273;
            return `${temperatura}° Celsius é equivalente a ${kelvin} Kelvin.`;
            break;
        case "F":
            const fahrenheit = 1.8 * temperatura + 32;
            return `${temperatura}° Celsius é equivalente a ${fahrenheit}° Fahrenheit.`;
            break;
        default: 
            return 'Erro. Parâmetro inválido (Escala deve ser "K" ou "F").'
    }}
}

console.log(converteCelsius(45, "K"))
console.log(converteCelsius(37, "F"))

console.log(converteCelsius("trinta", "F"))
console.log(converteCelsius(30, "G"))
console.log(converteCelsius(30, "k"))