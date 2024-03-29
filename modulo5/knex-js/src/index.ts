import express, {Request, Response} from 'express'
import cors from 'cors'
import connection from './database/connection'

const app = express()
app.use(express.json())
app.use(cors())

// Exercício 01
// A) Quando utilizamos o raw, temos o retorno exato do que é devolvido pelo MySQL, que além da resposta da query, também tem os dados do próprio banco de dados. Por isso precisamos definir o primeiro retorno da array, para vermos somente a resposta da query.

// B)
app.get("/actors", async (req: Request, res: Response): Promise<void> => {
    const name = req.query.name
    let errorCode = 400
    let result

    try {
        if (!name) {
            errorCode = 422
            throw new Error("Informe o parâmetro de busca (nome).");
        }

        result = await connection.raw(`
            SELECT * FROM Actor WHERE name = "${name}"
        `)


        res.status(200).send(result[0])


    } catch (e:any) {
        res.status(errorCode).send(e.message)
    }
})

// C)
app.get("/actors/gender", async (req: Request, res: Response): Promise<void> => {
    const gender = req.query.gender as string
    let errorCode = 400
    let result

    try {
        if (!gender || (gender !== 'male' && gender !== 'female')) {
            errorCode = 422
            throw new Error("Informe 'male' ou 'female'.");
        }

        result = await connection.raw(`
            SELECT COUNT(*) FROM Actor WHERE gender = "${gender}"
        `)

        res.status(200).send(result[0][0])
        
    } catch (e:any) {
        res.status(errorCode).send(e.message)
    }
    
})

// Exercício 02
// A)
app.patch("/actors/:id/salary", async (req: Request, res: Response): Promise<void> => {
    const id = req.params.id
    const {salary} = req.body
    let errorCode = 400

    try {
        if (!id || id === ":id") {
            errorCode = 422
            throw new Error("Informe o id do usuário.");
        }

        if (!salary) {
            errorCode = 422
            throw new Error("Informe o novo salário.");
        }

        let getActors = await connection("Actor")
        const findId = getActors.find(actor => actor.id === id)

        if (!findId) {
            errorCode = 422
            throw new Error("Id não encontrado no banco de dados.");
        }

        await connection("Actor").update( {salary: salary} ).where( {id: id} )

        res.status(200).send(`Salário alterado com sucesso.`)

    } catch (e:any) {
        res.status(errorCode).send(e.message)
    }
})

// B)
app.delete("/actors/:id", async (req: Request, res: Response): Promise<void> => {
    const id = req.params.id as string
    let errorCode = 400

    try {
        if (!id || id === ":id") {
            errorCode = 422
            throw new Error("Informe o id do usuário.");
        }

        let getActors = await connection("Actor")
        const findId = getActors.find(actor => actor.id === id)

        if (!findId) {
            errorCode = 422
            throw new Error("Id não encontrado no banco de dados.");
        }

        await connection("Actor")
        .delete()
        .where ( {id: id} )

        res.status(200).send(`Ator deletado com sucesso.`)

    } catch (e:any) {
        res.status(errorCode).send(e.message)
    }
})

//C)
app.get("/actors/salary/:gender", async (req: Request, res: Response): Promise<void> => {
    const gender = req.params.gender as string
    let errorCode = 400
    let result

    try {
        if (!gender || (gender !== 'male' && gender !== 'female')) {
            errorCode = 422
            throw new Error("Informe 'male' ou 'female'.");
        }

        result = await connection("Actor")
        .avg("salary")
        .where( {gender: gender} )

        res.status(200).send(result)
        
    } catch (e:any) {
        res.status(errorCode).send(e.message)
    }
})

// Exercício 03
//A)
app.get("/actors/:id", async (req: Request, res: Response): Promise<void> => {
    const id = req.params.id as string
    let errorCode = 400
    let result

    try {
        if (!id || id === ":id") {
            errorCode = 422
            throw new Error("Informe o id do usuário.");
        }

        let getActors = await connection("Actor")
        const findId = getActors.find(actor => actor.id === id)

        if (!findId) {
            errorCode = 422
            throw new Error("Id não encontrado no banco de dados.");
        }

        result = await connection("Actor").where ( {id: id} )

        res.status(200).send(result)

    } catch (e:any) {
        res.status(errorCode).send(e.message)
    }
})

//B)
app.get("/actors", async (req: Request, res: Response): Promise<void> => {
    const gender = req.query.gender as string
    let errorCode = 400
    let result

    try {
        if (!gender || (gender !== 'male' && gender !== 'female')) {
            errorCode = 422
            throw new Error("Informe 'male' ou 'female'.");
        }

        result = await connection("Actor")
        .count('*')
        .where( {gender: gender} )

        res.status(200).send(result)
        
    } catch (e:any) {
        res.status(errorCode).send(e.message)
    }
    
})

// Exercício 04
// Esses endpoints já foram feitos nas questões A e B do Exercício 02.

// Exercício 05
app.post("/movies", async (req: Request, res: Response): Promise<void> => {
    const {id, title, summary, release_date, playing_limit_date} = req.body
    let errorCode = 400

    try {
        if (!id || !title || !summary || !release_date || !playing_limit_date) {
            errorCode = 422
            throw new Error("Uma ou mais informações faltando.");
        }

        await connection("Movies")
        .insert( {id, title, summary, release_date, playing_limit_date} )

        res.status(201).send(`Novo filme adicionado na tabela.`)
    } catch (e:any) {
       res.status(errorCode).send(e.message) 
    }
})

//Exercício 06
app.get("/movies/all", async (req: Request, res: Response): Promise<void> => {
    let result
    try {

        result = await connection("Movies").limit(15)
        res.status(200).send(result)

    } catch (e:any) {
       res.status(404).send(e.message) 
    }
})

//Exercício 07
app.get("/movies/search", async (req: Request, res: Response): Promise<void> => {
    const query = req.query.query as string
    let errorCode = 400
    let result

    try {

        if (!query) {
            errorCode = 422
            throw new Error("Adicione o parâmetro de busca.");
        }

        result = await connection("Movies")
        .whereILike("title", `%${query}%`)
        .orWhereILike("summary", `%${query}%`)
        .orderBy("release_date", "desc")

        res.status(200).send(result)

    } catch (e:any) {
       res.status(404).send(e.message) 
    }
})

app.listen(3003, () => {
    console.log("Server running on port 3003.")
})