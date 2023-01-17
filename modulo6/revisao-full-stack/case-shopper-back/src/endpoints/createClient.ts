import {Request, Response} from 'express';
import connection from '../database/connection';

export const createClient = async (req: Request, res: Response): Promise<void> => {
    let errorCode = 400
    const name = req.body.name

    try {
        if (!name) {
            errorCode = 422
            throw new Error("Insira o nome do usuário.");
        }

        if (name.length < 2) {
            errorCode = 422
            throw new Error("Nome de usuário precisa ter mais de 2 caracteres.");
        }
        
        const newClient = {name}

        await connection("Case_Clients")
        .insert(newClient)

        res.status(201).send("Cliente adicionado.")
    } catch (error:any) {
        res.status(errorCode).send(error.message)
    }
}