// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

//01A.

//Será impresso no console:
// console.log(filme.elenco[0]) -> Matheus Nachtergaele
// console.log(filme.elenco[filme.elenco.length - 1]) -> Virginia Cavendish
// console.log(filme.transmissoesHoje[2]) -> {canal: Globo, horário: 14h}

//02A.

//console.log(cachorro) -> nome: Juca, idade: 3, raca: SRD
//console.log(gato) -> nome: Juba, idade: 3, raca: SRD
//console.log(tartaruga) -> nome: Jubo, idade: 3, raca: SRD

//02B. Essa sintaxe dos três pontos pega as informações do objeto anterior e copia para o novo objeto, mantendo as mesmas informações caso não sejam alteradas, mas é possível alterar como foi feito com o nome dos animais no exercício anterior.

//03A.

//console.log(minhaFuncao(pessoa, "backender")) -> false
//console.log(minhaFuncao(pessoa, "altura")) -> Irá retornar undefined.

//03B. Primeiro foi impresso 'false' porque o código retornou pessoa["backender"], ou seja, estava buscando o valor de backender dentro do objeto pessoa. Já depos foi impresso undefined porque "altura" não foi definido no objeto.

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

//01A.

const pessoa = {
    nome: "Luiza",
    apelido: ["Lu", "Luluca", "Lulu"]
}

function frase(objeto) {
    console.log(`Eu sou ${objeto.nome}, mas pode me chamar de ${objeto.apelido[0]}, ${objeto.apelido[1]} ou ${objeto.apelido[2]}.`)
    
}

frase(pessoa)

//01B.

const pessoa2 = {
    ...pessoa,
    apelido: ["Fofa", "Lubs", "Queri"]
}

frase(pessoa2)

//02A.

const usuario1 = {
    nome: "Matheus",
    idade: 27,
    profissão: "Estudante"
}

const usuario2 = {
    nome: "Luiz",
    idade: 65,
    profissão: "Advogado"
}

//02B.

function array(usuario) {
    return [usuario.nome, usuario.nome.length, usuario.idade, usuario.profissão, usuario.profissão.length]

}

console.log(array(usuario1))
console.log(array(usuario2))

//03A.

let carrinho = []

//03B.

const fruta1 = {
    nome: "Banana",
    disponibilidade: true
}

const fruta2 = {
    nome: "Mamão",
    disponibilidade: true
}

const fruta3 = {
    nome: "Melão",
    disponibilidade: true
}

//03C.

function compras(fruta) {
    return carrinho.push(fruta)
}

compras(fruta1)
compras(fruta2)
compras(fruta3)

//04C.

console.log(carrinho)

//DESAFIOS

//01.

function novoUsuario(nome, idade, profissao) {
    nome = prompt("Digite seu nome.")
    idade = Number(prompt("Digite sua idade."))
    profissao = prompt("Digite sua profissão.")

    const newObject = {
        nome: `${nome}`,
        idade: `${idade}`,
        profissao: `${profissao}`
    }
    
    console.log(newObject, typeof(newObject))
    
}

novoUsuario()

//02.

function filmes(filme1, filme2) {

    return `O primeiro filme foi lançado antes do segundo? ${filme1.ano <= filme2.ano}
O primeiro filme foi lançado no mesmo ano do segundo? ${filme1.ano === filme2.ano}`
}

const filme1 = {
    nome: "O Grande Truque",
    ano: 2006
}

const filme2 = {
    nome: "Scooby-Doo",
    ano: 2002
}

console.log(filmes(filme1, filme2))

//03.

function estoque(fruta) {
    return fruta = {
        ...fruta,
        disponibilidade: !fruta.disponibilidade
    }
}

console.log(estoque(fruta1))
console.log(estoque(fruta2))
console.log(estoque(fruta3))