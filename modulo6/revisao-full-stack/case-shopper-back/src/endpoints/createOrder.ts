import { Request, Response } from 'express'
import connection from '../database/connection'
import { TProduct } from '../models/Products'

export const createOrder = async (req: Request, res: Response): Promise<void> => {
    let errorCode = 400
    const { delivery_date, fk_client } = req.body
    const products: TProduct[] = req.body.products

    try {

        if (products.length === 0) {
            errorCode = 422
            throw new Error("Insira ao menos um produto na lista.");
        }
        
        if (!delivery_date) {
            errorCode = 422
            throw new Error("Insira data de entrega.");
        }

        if (!fk_client) {
            errorCode = 422
            throw new Error("Id de usuário faltando.");
        }

        const idsProducts = products.map((product) => product.id)

        const stockProducts = await connection.select("qty_stock").from("Case_Products")
        .whereIn("id", idsProducts)

        for (let i = 0; i < products.length; i++) {
            if (products[i].qty > stockProducts[i].qty) {
                throw new Error("Estoque indisponível.");
            }
        }

        products.forEach(async product => {

            const newOrder = { order_date: new Date().toISOString().slice(0,10), delivery_date, qty: product.qty, fk_client, fk_product: product.id }

            await connection("Case_Orders").insert(newOrder)

            const getStock = await connection("Case_Products")
            .select("qty_stock")
            .where({id: product.id})

            const qty_stock = Number(getStock[0].qty_stock)

            await connection("Case_Products")
            .update({qty_stock: qty_stock - product.qty })
            .where({id: product.id})
            
        });

        res.status(201).send("Novo pedido adicionado.")
        
    } catch (error:any) {
        res.status(errorCode).send(error.message)
    }
}