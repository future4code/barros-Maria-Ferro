// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()

    //DESAFIO
    // let revertido = []
    // for (let i = 0; i < array.length; i++) {
    //     revertido[i] = array[array.length-i-1]
    // }

    // return revertido

}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    // array.sort((a, b) => a - b)
    // return array
    
    //DESAFIO
    let menor = Infinity
    let arrayOrdenado = []
    let tamanho = array.length + 1

    for (let h = 0; h < tamanho; h++) {
        arrayOrdenado.push(menor)
        let index = array.indexOf(menor, 0)
        if(index > -1) {
            array.splice(index, 1)
        }
        menor = Infinity
        for (let i = 0; i < array.length; i++) {
            if (array[i] < menor) {
            menor = array[i]
            }
        }
}

    arrayOrdenado.shift()
    return arrayOrdenado
    
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const pares = array.filter((numero) => {
        return (numero % 2 === 0)
    })

    return pares

    //DESAFIO:
    // let pares = []
    // for (let i = 0; i < array.length; i++) {
    //     if (array[i] % 2 === 0) {
    //     pares.push(array[i])
    //     }
    // }
    // return pares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const pares = array.filter((numero) => {
        return (numero % 2 === 0)
    })
    
    const potencia = pares.map((numero) => {
        return (Math.pow(numero, 2))
    })

    return potencia

}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maior = -Infinity
    for (i = 0; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i]
        }
    }

    return maior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maior
    let menor

    if (num1 > num2) {
        maior = num1
        menor = num2
    } else if (num1 < num2) {
        maior = num2
        menor = num1
    } else if (num1 === num2) {
        maior = num1
        menor = num2
    }

    let divisivel = maior % menor === 0

    let subtracao = maior - menor

    return {
        maiorNumero: (maior),
        maiorDivisivelPorMenor: (divisivel),
        diferenca: (subtracao)
    }

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let pares = []
    for (let i = 0; pares.length < n; i++) {
        if (i % 2 === 0) {
            pares.push(i)
        }
    }

    return pares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if ((ladoA === ladoB) && (ladoA === ladoC)) {
        return "Equilátero"
        } else if ((ladoA === ladoB) || (ladoB === ladoC) || (ladoA === ladoC)) {
          return "Isósceles"
        } else {
        return "Escaleno"
      }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    array.sort((a, b) => a - b)

    let segundos = []
    segundos.push(array[array.length-2])
    segundos.push(array[1])
    
    return segundos
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    const elenco = filme.atores.join(", ")

    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${elenco}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    return {...pessoa,
    nome: "ANÔNIMO"}
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    const autorizados = pessoas.filter((pessoas) => {
        return (pessoas.idade > 14 && pessoas.idade <= 60 && pessoas.altura >= 1.5)
    })

    return autorizados
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    const naoAutorizados = pessoas.filter((pessoas) => {
        return (pessoas.idade <= 14 || pessoas.idade > 60 || pessoas.altura < 1.5)
    })

    return naoAutorizados
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    for (let i = 0; i < contas.length; i++) {
        let comprasTotal = contas[i].compras.reduce(function(comprasTotal, valor) {
            return comprasTotal + valor
          }, 0)
          contas[i].saldoTotal -= comprasTotal
          contas[i].compras = []
          comprasTotal = 0
        }

    return contas
    
    //OBS: Eu havia feito esse método abaixo com o map, deu certo mas ele retornava uma nova array, não a mesma. Então estudei o método reduce e consegui fazer pelo método acima e deu certo também.
    // const saldoAtualizado = contas.map((conta) => {
    //     let totalCompras = 0

    //     for (let compra of conta.compras) {
    //         totalCompras += compra
    //         }

    //     return {...conta,
    //         saldoTotal: (conta.saldoTotal - totalCompras),
    //         compras: []}
    // })

    // return saldoAtualizado
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    function comparar (a, b) {
        if (a.nome < b.nome) {
            return -1
        } else if (a.nome > b.nome) {
            return 1
        } else {
            return 0
        }
    }

    return consultas.sort(comparar) 
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    for (let i = 0; i < consultas.length; i++) {
        consultas[i].dataDaConsulta = consultas[i].dataDaConsulta.split("/")
    }
        for ( let i = 0; i < 3; i++) {
            function comparar (a, b) {
                if (a.dataDaConsulta[i] < b.dataDaConsulta[i]) {
                    return -1
                } else if (a.dataDaConsulta[i] > b.dataDaConsulta[i]) {
                    return 1
                } else {
                    return 0
                }
            }

            consultas.sort(comparar)
        }
    
    for (let i = 0; i < consultas.length; i++) {
        consultas[i].dataDaConsulta = consultas[i].dataDaConsulta.join("/")    
    }

    return consultas
}