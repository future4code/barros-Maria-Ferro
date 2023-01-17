import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { user } from "../types/user";

export class UserController {
    
    createUser = async (req: Request, res: Response): Promise<void> => {
        try {
            const input: any = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }

            const userBusiness = new UserBusiness()
            await userBusiness.createUser(input)

            res.status(201).send({message: "Usuário criado com sucesso."})
        } catch (error:any) {
            res.status(400).send(error.message)            
        }
    }

    getAllUsers = async(req: Request, res: Response): Promise<void> => {
        try {

            const userBusiness = new UserBusiness()
            const users = await userBusiness.getAllUsers()

            res.status(200).send(users)
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

    deleteUser = async(req: Request, res: Response): Promise<void> => {
        try {

            const id = req.params.id
            const userBusiness = new UserBusiness()
            await userBusiness.deleteUser(id)

            res.status(200).send({message: "Usuário deletado com sucesso!"})
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }
}