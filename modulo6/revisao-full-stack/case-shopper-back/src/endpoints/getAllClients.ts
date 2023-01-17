import { Request, Response } from 'express'
import connection from '../database/connection'

export const getAllClients = async (req: Request, res: Response): Promise<void> => {
    try {
        const clients = await connection("Case_Clients")

        res.status(200).send(clients)
    } catch (error:any) {
        res.send(error.message)
    }
}