import { Request, Response } from 'express'
import connection from '../database/connection'

export const getStock = async (req: Request, res: Response): Promise<void> => {
    try {
        const stock = await connection("Case_Products").select("name", "qty_stock")

        res.status(200).send(stock)
    } catch (error:any) {
        res.send(error.message)
    }
}