enum classProdutos {
    VERÃO = "verão",
    INVERNO = "inverno",
    BANHO = "banho",
    INTIMAS = "íntimas"
}

type Produtos = {
    nome: string,
    preço: number,
    class: classProdutos
}

const listaDeProtudos: Produtos[] = [
    {
        nome: "Blusa",
        preço: 49,
        class: classProdutos.VERÃO
    },
    {
        nome: "Casaco",
        preço: 229,
        class: classProdutos.INVERNO
    },
    {
        nome: "Maiô",
        preço: 109,
        class: classProdutos.BANHO
    },
    {
        nome: "Pijama",
        preço: 79,
        class: classProdutos.INTIMAS
    }
]

function aplicarDesconto (lista: Produtos[]) {
    return lista.map((item: Produtos) => {
        switch(item.class) {
            case "verão":
                return {...item, preçoComDesconto: item.preço - (item.preço * 0.05)}
                break;
            case "inverno":
                return {...item, preçoComDesconto: item.preço - (item.preço * 0.10)}
                break;
            case "banho":                 
                return {...item, preçoComDesconto: item.preço - (item.preço * 0.04)}
                break;
            case "íntimas":
                return {...item, preçoComDesconto: item.preço - (item.preço * 0.07)}
                break;
        }
    })
}

console.table(aplicarDesconto(listaDeProtudos))