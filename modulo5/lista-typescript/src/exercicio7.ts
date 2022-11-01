type Estoque = {
    nome: string,
    quantidade: number,
    valorUnitario: number
}

const ajustaPreco = (preco: number): string => {
	const valorAjustado: string = preco.toFixed(2).replace('.', ',')
	return "R$ "+valorAjustado
}

const estoque: Estoque[] = [
	{ nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040},
	{ nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0},
	{ nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5},
	{ nome: "O precioso", quantidade: 1, valorUnitario: 9181.923},
	{ nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17},
	{ nome: "Plumbus", quantidade: 13, valorUnitario: 140.44},
	{ nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915}
]

type NovoEstoque = {
    nome: string,
    quantidade: number,
    valorUnitario: string
}

function organizarEstoque(lista: Estoque[]): NovoEstoque[] {
    const listaDePrecos: string[] = lista.map((item) => {
        return ajustaPreco(item.valorUnitario)
    })

    let novoEstoque: NovoEstoque[] = []

    for (let i = 0; i < lista.length; i++) {
        novoEstoque.push(
            {nome: lista[i].nome, quantidade: lista[i].quantidade, valorUnitario: listaDePrecos[i]}
        )
    }

    function ordenar (a: NovoEstoque, b: NovoEstoque) {
        if (a.quantidade < b.quantidade) {
            return -1
        } else if (a.quantidade > b.quantidade) {
            return 1
        } else {
            return 0
        }
    }

    return novoEstoque.sort(ordenar)
    
}

console.table(organizarEstoque(estoque))