// Cadastro de Clientes

const clientes = [
	{ id: 1, nome: "Fulano" },
	{ id: 2, nome: "Ciclano" },
	{ id: 3, nome: "Beltrano" },
	{ id: 4, nome: "Fulana" }
]

const adicionarClientes = (id, nome) => {
    let idExistente = false

    for (let i = 0; i < clientes.length; i++) {
       if (clientes[i].id === id) {
        idExistente = true
       }
    }

    if(idExistente) {
        return `Erro. Parâmetro inválido (id já existe).`
    } else {
        clientes.push( {id: id, nome: nome} )
        return clientes
    }

}

console.log(adicionarClientes(2, "Bananinha"))
console.log(adicionarClientes(5, "Bananinha"))

// Geração de Tabuada

let tabuada = []

const gerarTabuada = (num) => {
    if (typeof num !== 'number') {
        return "Erro. Parâmetro inválido (Deve ser um número)."
    } else if (num > 10 || num < 1) {
        return "Erro. Parâmetro inválido (Número precisa ser entre 1 e 10)."
    } else {

    tabuada = [
        `${num} x 0 = ${num * 0}`,
        `${num} x 1 = ${num * 1}`, 
        `${num} x 2 = ${num * 2}`,
        `${num} x 3 = ${num * 3}`,
        `${num} x 4 = ${num * 4}`,
        `${num} x 5 = ${num * 5}`,
        `${num} x 6 = ${num * 6}`,
        `${num} x 7 = ${num * 7}`,
        `${num} x 8 = ${num * 8}`,
        `${num} x 9 = ${num * 9}`,
        `${num} x 10 = ${num * 10}`]

    return tabuada
    }
}

console.log(gerarTabuada(7))
console.log(gerarTabuada("3"))
console.log(gerarTabuada(30))
console.log(gerarTabuada(-1))