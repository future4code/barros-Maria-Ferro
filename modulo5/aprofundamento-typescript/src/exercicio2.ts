type Estatisticas = {
    maior: number,
    menor: number,
    media: number
}

function obterEstatisticas(numeros: number[]): Estatisticas {

    const numerosOrdenados: number[] = numeros.sort(
        (a, b) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: Estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

// A -- A entrada dessa função é uma array de números. A saída é um objeto que define o maior número, o menor e a média entre todos.
// B -- Outras variáveis: numerosOrdenados também é uma array de números; soma é um número; estatísticas é um objeto com três propriedades, todas números, já definido na saída da função.
// C

type AmostraDeDados = {
    numeros: number[],
    obterEstatisticas: (numeros: number[]) => Estatisticas
}

const dados: AmostraDeDados = {
    numeros: [12, 25, 47, 41, 68],
    obterEstatisticas
}

console.log(dados.obterEstatisticas(dados.numeros))