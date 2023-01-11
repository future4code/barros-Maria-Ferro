import { Request, Response } from "express"
import connection from "../database/connection"
import { PurchasesDatabase } from "../database/PurchasesDatabase"
import { TABLE_PRODUCTS, TABLE_PURCHASES, TABLE_USERS } from "../database/tableNames"

export const getUserPurchases = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const id = req.params.id

        const purchases = new PurchasesDatabase()
        const result = await purchases.getPurchasesById(id)

        res.status(200).send({ purchases: result })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}