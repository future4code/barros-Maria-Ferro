const userInput = require("readline-sync")

// A

type Pratos = {
    nome: string,
    custo: number,
    valor: number,
    ingredientes: string[]
}

let listaDePratos: Pratos[] = [
    {
        nome: "Omelete",
        custo: 5,
        valor: 15,
        ingredientes: ["Ovo", "Cebola", "Salsinha"]
    },
    {
        nome: "Macarrão ao molho de tomate",
        custo: 7,
        valor: 19.9,
        ingredientes: ["Macarrão", "Tomate pelado", "Manjericão", "Cebola", "Alho"]
    }
]

function cadastrarPrato(): Pratos[] {
    let nome: string = userInput.question("Qual o nome do prato?")
    let custo: number = userInput.question("Qual o custo de montagem do prato?")
    let valor: number = userInput.question("Qual o valor de venda do prato?")
    let ingredientes: string = userInput.question("Qual a lista de ingredientes?")

    const listaDeIngredientes = ingredientes.split(", ")

    const novoPrato: Pratos = {
        nome: nome, 
        custo: custo,
        valor: valor,
        ingredientes: listaDeIngredientes
    }

    listaDePratos.push(novoPrato)

    return listaDePratos
}

// console.table(cadastrarPrato())

// B

function buscarValor(nome: string): number {
    let valorPrato: number = 0

    listaDePratos.forEach((item: Pratos) => {
        if (item.nome === nome) {
            valorPrato = item.valor
        }
    })

    return valorPrato
}

console.log(buscarValor("Omelete"))

// C

type Vendas = {
    nomeCliente: string
    nomePrato: string
}

let listaDeVendas: Vendas[] = []

function venda(): Vendas[] {
    let nome = userInput.question("Qual o seu nome?")
    let prato = userInput.question("Qual prato você deseja comprar?")

    const novaVenda: Vendas = {
        nomeCliente: nome,
        nomePrato: prato
    }

    listaDeVendas.push(novaVenda)

    return listaDeVendas   
}

// D

function calcularLucro(): number {
    let lucro: number = 0

    listaDePratos.forEach((item: Pratos) => {
        lucro -= item.custo
        lucro += item.valor
        return lucro
    })

    return lucro
}

console.log(calcularLucro())