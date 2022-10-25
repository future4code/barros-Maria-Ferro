import express, {Response, Request} from 'express'
import cors from 'cors'
import { users, posts } from './data'

const app = express()
app.use(express.json())
app.use(cors())

// exercício 01

app.get("/", (req: Request, res: Response) => {
    res.status(200).send("Funcionando.")
})

// exercício 02 e 03 no arquivo data.ts

// exercício 04

app.get("/users", (req: Request, res: Response) => {
    res.status(200).send(users)
})

// exercício 05 e 06 no arquivo data.ts

// exercício 07

app.get("/posts", (req: Request, res: Response) => {
    res.status(200).send(posts)
})

//exercício 08

app.get("/users/:id/posts", (req: Request, res: Response) => {
    const userId: number = Number(req.params.id)
    const findId = posts.find(post => post.userId === userId)

    if (!userId) {
        res.status(400).send("Informe um id de usuário.")
    } else if (!findId) {
        res.status(400).send("Não há usuários com o id informado.")
    } else {
        const postList = posts.filter((post) => {
            return post.userId === userId
        })

        res.status(200).send(postList)
    }
})

app.listen(3003, () => {
    console.log("Server running on http://localhost:3003")
})