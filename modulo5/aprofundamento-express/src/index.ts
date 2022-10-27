import express, {Request, Response} from 'express'
import cors from 'cors'
import { toDoList } from './data'

const app = express()
app.use(express.json())
app.use(cors())

// exercício 01

app.get("/ping", (req: Request, res: Response) => {
    res.status(200).send("pong")
})

// exercício 02 no arquivo types.ts

// exercício 03 no arquivo data.ts

// exercício 04

app.get("/todos", (req: Request, res: Response) => {
    const completeStatus = req.query.status

    let filteredList

    if (!completeStatus) {
        res.status(400).send("Adicione 'false' ou 'true' ao parâmetro completed.")
    } else if (completeStatus === 'false') {
        filteredList = toDoList.filter((item) => {
            return item.completed === false
        })
    } else if (completeStatus === 'true') {
        filteredList = toDoList.filter((item) => {
            return item.completed === true
        })
    } else {
        res.status(400).send("Adicione 'false' ou 'true' ao parâmetro completed.")
    }

    res.status(200).send(filteredList)
})

// exercício 05

let uptadedToDoList = toDoList

app.post("/todos", (req: Request, res: Response) => {
    const {title, completed} = req.body
    const userIdToAdd = req.headers.authorization

    if (!userIdToAdd) {
        res.status(400).send("Adicione o id de usuário correspondente.")
    } else if (!title || !completed) {
        res.status(400).send("Um ou mais parâmetros faltando na requisição.")
    } else {
        uptadedToDoList.push({
            userId: userIdToAdd,
            id: Date.now(),
            title: title,
            completed: completed
        })
    }

    res.status(200).send(uptadedToDoList)
})

// exercício 06

app.put("/todos/:taskId", (req: Request, res: Response) => {
    const taskToEdit = Number(req.params.taskId)
    const userId = req.headers.authorization

    if (!userId) {
        res.status(400).send("Adicione o id de usuário.")
    } else if (!taskToEdit) {
        res.status(400).send("Adicione o id da tarefa que deseja alterar o status.")
    } else {
        for (let i = 0; i < toDoList.length; i++) {
            if (toDoList[i].id === taskToEdit) {
                toDoList[i].completed = !toDoList[i].completed
            }
        }
    }

    res.status(200).send(toDoList)
})

// exercício 07

app.delete("/todos/:taskId", (req: Request, res: Response) => {

    let newList = toDoList

    const taskToDelete = Number(req.params.taskId)
    const userId = req.headers.authorization

    if (!userId) {
        res.status(400).send("Adicione o id de usuário.")
    } else if (!taskToDelete) {
        res.status(400).send("Adicione o id da tarefa que deseja excluir.")
    } else {
        newList = toDoList.filter((task) => {
            return task.id !== taskToDelete
        })
    }

    res.status(200).send(newList)
})

// exerício 08

app.get("/todos/:user", (req: Request, res: Response) => {
    const userId = req.params.user
    const findUser = toDoList.find(user => user.userId === userId)

    if (!userId) {
        res.status(400).send("Adicione o id de usuário.")
    } else if (!findUser) {
        res.status(400).send("Não há usuários com o id informado.")
    } else {
        const filteredByUser = toDoList.filter((user) =>{
            return user.userId === userId
        })

        res.status(200).send(filteredByUser)
    }
})

// exercício 09: link da documentação no PR

app.listen(3003, () => {
    console.log("Server running on http://localhost:3003/")
})