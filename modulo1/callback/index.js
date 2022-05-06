//EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

//01. Será impresso no console uma nova array de mesmo tamanho, contendo todas as mesmas informações dos objetos da array original.
//02. Será impresso no console numa nova array = ["Amanda Rangel", "Laís Petra", "Letícia Chijo"].
//03. Este programa está filtrando as informações da array original, para que retorne apenas os objetos em que o apelido seja diferente de "Chijo". Então aparecerá no console uma nova array com apenas os dois primeiros objetos.

//EXERCÍCIOS DE ESCRITA DE CÓDIGO

//01. 

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 //A.
 
 const nomesDoguinhos = pets.map((doguinhos, index, array) => {
     return doguinhos.nome
 })

 console.log(nomesDoguinhos)

 //B. 

 const cachorrosSalsicha = pets.filter((doguinhos, index, array) => {
    return doguinhos.raca === "Salsicha"
 })

 console.log(cachorrosSalsicha)

 //C.

 const poodles = pets.filter((doguinhos, index, array) => {
    return doguinhos.raca === "Poodle" 
 })

 const mensagemDonos = poodles.map((poodles, index, array) => {
     return `Você ganhou um cupom de desconto de 10% para tosar o/a ${poodles.nome}`
 })

 console.log(mensagemDonos)

 //02.

 const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 //A. 

 const nomeProdutos = produtos.map((produto, index, array) => {
    return produto.nome
 })

 console.log(nomeProdutos)

//B. 

const produtosDesconto = produtos.map((produto, index, array) => {
       return {
           nome: produto.nome,
           preco: (produto.preco - produto.preco * 0.05).toFixed(2)
       }
})

console.log(produtosDesconto)

//C. 

const bebidas = produtos.filter((produto, index, array) => {
    return produto.categoria === "Bebidas"
})

console.log(bebidas)

//D. 

const ype = produtos.filter((produto, index, array) => {
    return produto.nome.includes("Ypê")

})

console.log(ype)

//E.

const produtosYpe = ype.map((produto, index, array) => {
    return `Compre ${produto.nome} por ${produto.preco}`
})

console.log(produtosYpe)

//DESAFIOS

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]

//A. 

const pokemonAlfa = pokemons.map((pokemon, index, array) => {
    return pokemon.nome
})

pokemonAlfa.sort()
console.log(pokemonAlfa)

//B. 

const tipoPokemon = pokemons.map((pokemon, index, array) => {
    return pokemon.tipo
})

let arrayIndex = []
let arrayTipo = []

for (let i = 0; i < tipoPokemon.length; i++) {
    const index = tipoPokemon.indexOf(tipoPokemon[i])
    arrayIndex.push(index)
    if (arrayIndex[i] === i) {
        arrayTipo.push(tipoPokemon[i])
    }
}

console.log(arrayTipo)