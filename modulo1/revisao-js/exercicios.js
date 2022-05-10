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
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    array.sort((a, b) => a - b)
    return array
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const pares = array.filter((numero) => {
        return (numero % 2 === 0)
    })

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
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}