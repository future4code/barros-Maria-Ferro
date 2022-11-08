import express, { Request, Response } from 'express'
import cors from 'cors'
import { users } from './data'

const app = express()
app.use(express.json())
app.use(cors())

// exercício 01

app.get("/users", (req: Request, res: Response) => {
    res.status(200).send(users)
})

// Utilizamos o método GET.
// Indicamos a entidade através do path, nesse caso estou chamando apenas de users.

// exercício 02

app.get("/users/type", (req: Request, res: Response) => {
    const userType = req.query.type as string
    let errorCode = 400

    try {
    
        if (!userType) {
            errorCode = 404
            throw new Error("Informe o tipo desejado.");
        }

        if (userType.toUpperCase() !== "ADMIN" && userType.toUpperCase() !== "NORMAL") {
            errorCode = 422
            throw new Error("Tipo inexistente. Informe ADMIN ou NORMAL.");
        }

        const typeList = users.filter((user) => {
            return user.type === userType.toUpperCase()
        })

        res.status(200).send(typeList)
        
    } catch (err:any) {
        res.status(errorCode).send(err.message)
    }
})

// Estou passando os parâmetros por query, pois trata-se de uma busca.
// Criei uma condição de que eles sejam ou ADMIN ou NORMAL.

// exercício 03

app.get("/users/search", (req: Request, res: Response) => {
    const userName = req.query.name as string
    let errorCode = 400

    try {
        if (!userName) {
            errorCode = 422
            throw new Error("Informe o parâmetro de busca.");
        }

        const searchUser = users.find(user => user.name.toLowerCase() === userName.toLowerCase())

        if (!searchUser) {
            errorCode = 404
            throw new Error("Nenhum usuário não encontrado.");
        }

        const usersFound = users.filter((user) => {
            return userName.toLowerCase() === user.name.toLowerCase()
        })

        res.status(200).send(usersFound)

    } catch (err:any) {
        res.status(errorCode).send(err.message)
    }
})

// Para buscas, normalmente utilizamos o query.

// exercício 04

app.post("/users", (req: Request, res: Response) => {
    const {name, email, type, age} = req.body
    let errorCode = 400

    try {
        if (!name || !email || !type || !age) {
            errorCode = 422
            throw new Error("Um ou mais parâmetros faltando.");
        }

        if (type.toUpperCase() !== "ADMIN" && type.toUpperCase() !== "NORMAL") {
            errorCode = 422
            throw new Error("Tipo de usuário não encontrado. Fornecer ADMIN ou NORMAL.");  
        }

        users.push({
            id: Date.now(),
            name,
            email,
            type,
            age
        })

        res.status(201).send(users)

        
    } catch (error:any) {
        res.status(errorCode).send(error.message)
    }
})

// Ao mudar o método para put, a requisição ainda completa sem problemas;
// O método PUT é indicado para editarmos um item já existente, portanto não é indicado nesse caso em que estamos criando um novo.

// exercício 05

app.put('/users/:id', (req:Request, res:Response) => {
    const {name} = req.body
    const userId = Number(req.params.id)
    let errorCode = 400

    try {
        
        const findUser = users.find(user => userId === user.id)

        if (!findUser) {
            errorCode = 404
            throw new Error("Id de usuário não encontrado.");
        }

        if (!name) {
            errorCode - 422
            throw new Error("Informar novo nome.");
            
        }
        
        for (let user of users) {
            if (user.id === userId) {
                user.name = `${name} - ALTERADO`
            }
        }

        res.status(201).end()
        
    } catch (error:any) {
        res.status(errorCode).send(error.message)
    }
})

// exercício 06

app.patch('/users/:id', (req:Request, res:Response) => {
    const {name} = req.body
    const userId = Number(req.params.id)
    let errorCode = 400

    try {
        
        const findUser = users.find(user => userId === user.id)

        if (!findUser) {
            errorCode = 404
            throw new Error("Id de usuário não encontrado.");
        }

        if (!name) {
            errorCode - 422
            throw new Error("Informar novo nome.");
            
        }
        
        for (let user of users) {
            if (user.id === userId) {
                user.name = `${name} - REALTERADO`
            }
        }

        res.status(201).end()
        
    } catch (error:any) {
        res.status(errorCode).send(error.message)
    }
})

// exercício 07

app.delete('/users/:id', (req:Request, res:Response) => {
    const userId = Number(req.params.id)
    let errorCode = 400

    try {
        
        const findUser = users.find(user => userId === user.id)

        if (!findUser) {
            errorCode = 404
            throw new Error("Id de usuário não encontrado.");
        }
    
        const newList = users.filter((user) => {
            return user.id !== userId
        })

        res.status(201).send(newList)
        
    } catch (error:any) {
        res.status(errorCode).send(error.message)
    }
})


app.listen(3003, () => {
    console.log("Server running on port 3003.")
})