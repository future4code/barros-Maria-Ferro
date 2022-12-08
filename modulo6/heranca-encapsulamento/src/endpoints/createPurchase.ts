import { Request, Response } from "express"
import { ProductDatabase } from "../database/ProductDatabase"
import { PurchasesDatabase } from "../database/PurchasesDatabase"
import { UserDatabase } from "../database/UserDatabase"
import { Product } from "../models/Product"
import { Purchase, PurchaseDB } from "../models/Purchase"

export const createPurchase = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const userId = req.body.userId
        const productId = req.body.productId
        const quantity = req.body.quantity

        if (!userId || !productId || !quantity) {
            throw new Error("Body inválido.")
        }

        const findUser = new UserDatabase()
        const userFound = await findUser.getUserById(userId)

        if (userFound.length < 1) {
            errorCode = 404
            throw new Error("Id de usuário não encontrado.");
        }

        const findProduct = new ProductDatabase()
        const productFound = await findProduct.getProductById(productId)

        if (productFound.length < 1) {
            errorCode = 404
            throw new Error("Id de usuário não encontrado.");
        }

        const product = new Product(
            productFound[0].id,
            productFound[0].name,
            productFound[0].price
        )

        const purchase = new Purchase(
            Date.now().toString(),
            userId,
            productId,
            quantity,
            product.getPrice() * quantity
        )

       const addPurchase = new PurchasesDatabase()
       await addPurchase
       .createPurchase(purchase.getId(), purchase.getUserId(), purchase.getProductId(), purchase.getQuantity(), purchase.getTotalPrice())

        res.status(201).send({ message: "Compra registrada", purchase: purchase })

    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}