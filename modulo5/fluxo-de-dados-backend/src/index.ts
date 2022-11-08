import express, {Request, Response} from 'express'
import cors from 'cors'
import { productList } from './data'

const app = express()
app.use(express.json())
app.use(cors())

// exercício 01

app.get("/test", (req: Request, res: Response) => {
    res.status(201).send("Servidor rodando na porta 3003!")
})

// exercício 02 no arquivo data.ts
// exercício 03 nos arquivos data.ts e type.ts

// exercício 04

app.post("/products", (req: Request, res: Response) => {
    const {name, price} = req.body


    try {
        if (!name) {
            const error = new Error ("Adicione o nome do produto.")
            error.name = "InvalidValue"
            throw error
        }

        if (!price) {
            const error = new Error ("Adicione o valor do produto.")
            error.name = "InvalidValue"
            throw error
        }

        if (typeof name !== 'string') {
            const error = new Error ("O nome do produto precisa ser uma string.")
            error.name = "InvalidType"
            throw error
        }

        if (typeof price !== 'number') {
            const error = new Error ("O preço precisa ser um número.")
            error.name = "InvalidType"
            throw error
        }

        if (Number(price) <= 0) {
            const error = new Error ("O preço precisa ser maior que 0.")
            error.name = "InvalidValue"
            throw error
        }

        productList.push(
            {
                id:Date.now().toString(),
                name,
                price
            }
        )

        res.status(201).send(productList)

    } catch (err: any) {
        if (err.name === "InvalidValue") {
            res.status(422).send(err.message)
        } else if (err.name === "InvalidType") {
            res.status(400).send(err.message)
        } else {
            res.status(500).send(err.message)
        }
    }
})

// exercício 05

app.get("/products", (req: Request, res: Response) => {
    const product = req.query.name

    try {
        const searchProduct = productList.find(item => item.name === product)

        if (product && !searchProduct) {
            const error = new Error ("Produto não encontrado.")
            error.name = "NotFound"
            throw error
        }

        if (!product) {
            res.status(200).send(productList)
        } else {
            const findProducts = productList.filter((item) => {
                return item.name === product
            })
    
            res.status(200).send(findProducts)
        }
    } catch (err:any) {
        if (err.name === "NotFound") {
            res.status(404).send(err.message)
        } else {
            res.status(500).send(err. message)
        }
    }
})

// exercício 06

app.put("/products", (req: Request, res: Response) => {
    const productId = req.query.id
    const {name, price} = req.body

    try {

        if (!productId) {
            const error = new Error ("Id não informado.")
            error.name = "IdNotFound"
            throw error
        }

        const selectedProduct = productList.find((product) => {
            return product.id === productId
        })

        if (!selectedProduct) {
            const error = new Error ("Id inexistente.")
            error.name = "IdNotFound"
            throw error
        }

        if (name === null && price === null) {
            const error = new Error ("Insira pelo menos uma propriedade para alterar.")
            error.name = "InvalidValue"
            throw error
        }
        
        if (typeof price !== 'number') {
            const error = new Error ("O preço precisa ser um número.")
            error.name = "InvalidType"
            throw error
        }

        if (Number(price) <= 0) {
            const error = new Error ("O preço precisa ser maior que 0.")
            error.name = "InvalidValue"
            throw error
        }

        if (name && price === null) {
            selectedProduct.name = name
            res.status(200).send(productList)
        }

        if (name === null && price) {
            selectedProduct.price = price
            res.status(200).send(productList)
        }
        
        if (name && price) {
            selectedProduct.name = name
            selectedProduct.price = price
            res.status(200).send(productList)
        }

    } catch (err:any) {
        if (err.name === "IdNotFound") {
            res.status(404).send(err.message)
        } else if (err.name === "InvalidValue") {
            res.status(422).send(err.message)
        } else if (err.name === "InvalidType") {
            res.status(400).send(err.message)
        } else {
            res.status(500).send(err.message)
        }
    }
})

// exercício 07

app.delete("/products", (req: Request, res: Response) => {
    const productToDelete = req.query.id

    try {

        if (!productToDelete) {
            const error = new Error ("Id do produto não informado.")
            error.name = "IdNotFound"
            throw error
        }

        const selectedProduct = productList.find((product) => {
            return product.id === productToDelete
        })

        if (!selectedProduct) {
            const error = new Error ("Id do produto não existente.")
            error.name = "IdNotFound"
            throw error
        }

        let productListUpdated = productList.filter((item) => {
            return item.id !== productToDelete
        })

        res.status(200).send(productListUpdated)

    } catch (err:any) {
        if (err.name === "IdNotFound") {
            res.status(404).send(err.message)
        } else {
            res.status(500).send(err.message)
        }
    }
})

// exercício 08, 09 e 10 já implementados nos exercícios acima
// exercício 11 implementado no exercício 05
// exercício 12 tentei fazer no exercício 06

app.listen(3003, () => {
    console.log("Server running on http://localhost:3003/")
})