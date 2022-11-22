import { Request, Response } from "express"
import { connection } from "../data/connection"

export async function getPagination(req: Request, res: Response): Promise<void> {
    let errorCode = 400
    let page = Number(req.query.page)
        
    try {

        if (isNaN(page) || page < 1) {
            page = 1
            }
                        
        let offset = 5 * (page - 1)

        const result = await connection("aula48_exercicio")
        .limit(5)
        .offset(offset)

        if (result.length < 1) {
            errorCode = 404
            throw new Error("Nenhum usuário encontrado.")
        }

        res.status(200).send(result)
        
    } catch (error:any) {
        res.status(errorCode).send(error.message)
    }
}