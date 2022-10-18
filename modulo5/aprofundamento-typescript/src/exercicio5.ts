type Consultas = {
    nome: string,
    idade: number,
    dataDaConsulta: string
}

const listaConsultas: Consultas[] = [
    { nome: "João", idade: 23, dataDaConsulta: "01/10/2021" },
    { nome: "Pedro", idade: 31, dataDaConsulta: "02/07/2021" },
    { nome: "Paula", idade: 26, dataDaConsulta: "03/11/2021" },
    { nome: "Márcia", idade: 45, dataDaConsulta: "04/05/2021" }
]

function ordenarConsultas (lista: Consultas[]): Consultas[] {
    function comparar (a: Consultas, b: Consultas): number {
        if (a.nome < b.nome) {
            return -1
        } else if (a.nome > b.nome) {
            return 1
        } else {
            return 0
        }
    }

    return lista.sort(comparar) 
}

console.table(ordenarConsultas(listaConsultas))
  