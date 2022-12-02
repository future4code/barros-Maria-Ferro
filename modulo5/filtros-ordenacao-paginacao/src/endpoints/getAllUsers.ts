import { Request, Response } from "express"
import { connection } from "../data/connection"

export async function getAllUsers(req: Request, res: Response): Promise<void> {
        
        try {
            const result = await connection("aula48_exercicio")
            res.status(200).send(result)
            
        } catch (error:any) {
            res.status(500).send(error.message)
        }
}