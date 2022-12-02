import { Request, Response } from "express"
import { connection } from "../data/connection"

export async function sortUsers(req: Request, res: Response): Promise<void> {
    let errorCode = 400
    let sort = req.query.sort as string
    let order = req.query.order as string
        
    try {

        if (!sort) {
            sort = "email"
        }

        if (sort !== "name" && sort !== "type") {
            sort = "email"
        }

        if (order && order.toUpperCase() !== "ASC" && order.toUpperCase() !== "DESC") {
            order = "ASC"
        }

        const result = await connection("aula48_exercicio")
        .orderBy(sort, order)

        if (result.length < 1) {
            errorCode = 404
            throw new Error("Nenhum usuário encontrado.")
        }

        res.status(200).send(result)
        
    } catch (error:any) {
        res.status(errorCode).send(error.message)
    }
}