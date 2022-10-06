const primeiraLista = [
	{
		nome: "Banana"
	},
	{
		nome: "Laranja"
	}, 
    {
        nome: "Morango"
    },
    {
        nome: "Abacate"
    }
]

const segundaLista= [
	{
		nome: "Laranja"
	},
	{
		nome: "Cebola"
	},
    {
        nome: "Cenoura"
    },
    {
        nome: "Morango"
    },
    {
        nome: "Mamão"
    }
]

const geraItensUnicos = (lista1, lista2) => {

    const novaLista = [...lista1, ...lista2]

     for (let i = 0; i < novaLista.length; i++) {
        let check = novaLista[i].nome
        for (let y = i+1; y < novaLista.length; y++) {
            if (check === novaLista[y].nome) {
                novaLista.splice(y,1)
                y--
            }
        }
    }

    return novaLista
}

console.log(geraItensUnicos(primeiraLista, segundaLista))