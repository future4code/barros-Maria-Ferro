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

let usersList = users

app.get("/users", (req: Request, res: Response) => {
    res.status(200).send(usersList)
})

// exercício 05 e 06 no arquivo data.ts

// exercício 07

let postList = posts

app.get("/posts", (req: Request, res: Response) => {
    res.status(200).send(postList)
})

//exercício 08

app.get("/users/:id/posts", (req: Request, res: Response) => {
    const userId: number = Number(req.params.id)
    const findId = postList.find(post => post.userId === userId)

    if (!userId) {
        res.status(400).send("Informe um id de usuário.")
    } else if (!findId) {
        res.status(400).send("Não há usuários com o id informado.")
    } else {
        const postFilteredList = postList.filter((post) => {
            return post.userId === userId
        })

        res.status(200).send(postFilteredList)
    }
})

// exercício 09

app.delete("/posts/:postId", (req: Request, res: Response) => {
    const postId: number = Number(req.params.postId)
    const findPost = postList.find(post => post.id === postId)

    if (!postId) {
        res.status(400).send("Informe o id do post a ser deletado.")
    } else if (!findPost) {
        res.status(400).send("Post não encontrado.")
    } else {
        const newPostList = postList.filter((post) => {
            return post.id !== postId
        })

        postList = newPostList

        res.status(200).send(postList)
    }
})

// exercício 10

app.delete("/users/:id", (req: Request, res: Response) => {
    const toBeDeletedId: number = Number(req.params.id)
    const findUser = usersList.find(user => user.id === toBeDeletedId)

    if (!toBeDeletedId) {
        res.status(400).send("Informe o id do usuário a ser deletado.")
    } else if (!findUser) {
        res.status(400).send("Usuário não encontrado.")
    } else {
        const newUsersList = usersList.filter((user) => {
            return user.id !== toBeDeletedId
        })

        usersList = newUsersList

        res.status(200).send(usersList)
    }
})



app.listen(3003, () => {
    console.log("Server running on http://localhost:3003")
})