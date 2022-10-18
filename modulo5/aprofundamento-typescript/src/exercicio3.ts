type Post = {
    autor: string,
    texto: string
}

const posts: Post[] = [
    {
      autor: "Alvo Dumbledore",
      texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
      autor: "Severo Snape",
      texto: "Menos 10 pontos para Grifinória!"
    },
    {
      autor: "Hermione Granger",
      texto: "É levi-ô-sa, não levio-sá!"
    },
    {
      autor: "Dobby",
      texto: "Dobby é um elfo livre!"
    },
    {
      autor: "Lord Voldemort",
      texto: "Avada Kedavra!"
    }
]

function buscarPostsPorAutor(posts: Post[], autorInformado: string): Post[] {
    return posts.filter(
      (post) => {
        return post.autor === autorInformado
      }
    )
}

// As entradas da função são uma array com os dados dos posts (autor e texto) e uma string contendo um autor fornecido pelo usuário. A saída é uma array filtrada com os dados informados.

const busca = process.argv[2]
console.table(buscarPostsPorAutor(posts, busca))