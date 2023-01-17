import { UserDatabase } from "../data/UserDatabase";
import { user } from "../types/user";

export class UserBusiness {

    createUser = async (input:any): Promise<void> => {
        try {
            const {name, email, password} = input

            if (!name || !email || !password) {
                throw new Error("Nome, email ou senha faltando.");
            }

            if (name.length < 2) {
                throw new Error("Nome precisa possui mair que 2 caracteres.");
            }

            if (password.length < 6) {
                throw new Error("Senha precisa possuir mais do que 6 caracteres.");
            }

            const id: string = Date.now().toString()

            const userDatabase = new UserDatabase()
            await userDatabase.createUser({
                id,
                name,
                email,
                password
            })
            
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    getAllUsers = async(): Promise<user[]> => {
        try {
            const userDatabase = new UserDatabase()
            return await userDatabase.getAllUsers()
            
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    deleteUser = async(id: string): Promise<void> => {
        try {

            if (!id || id === ":id") {
                throw new Error("Id de usuário não informado.");
            }

            const userDatabase = new UserDatabase()

            const allUsers = await userDatabase.getAllUsers()
            const findUser = allUsers.find(user => user.id === id)

            if(!findUser) {
                throw new Error("Id de usuário não encontrado.");
            }

            await userDatabase.deleteUser(id)

        } catch (error:any) {
            throw new Error(error.message);
            
        }
    }
}