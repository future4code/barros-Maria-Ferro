import { Request, Response } from 'express'
import connection from '../database/connection'

export const getAllProducts = async (req: Request, res: Response): Promise<void> => {
    try {
        const products = await connection("Case_Products")

        res.status(200).send(products)
    } catch (error:any) {
        res.send(error.message)
    }
}