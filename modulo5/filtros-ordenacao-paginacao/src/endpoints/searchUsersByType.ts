import { Request, Response } from "express"
import { connection } from "../data/connection"

export async function searchUsersByType(req: Request, res: Response): Promise<void> {
    let errorCode = 400
    let type = req.params.type as string
        
    try {

        if (!type || type === ":type") {
            type = "%"
        }

        const result = await connection("aula48_exercicio")
        .where("type", "like", `%${type}%`)

        if (result.length < 1) {
            errorCode = 404
            throw new Error("Nenhum usuário encontrado.")
        }

        res.status(200).send(result)
        
    } catch (error:any) {
        res.status(errorCode).send(error.message)
    }
}