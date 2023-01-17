import { user } from "../types/user";
import { BaseDatabase } from "./BaseDatabase"

export class UserDatabase extends BaseDatabase {

    createUser = async(user: user): Promise<void> => {
        
        try {
            await UserDatabase.connection.insert({
                id: user.id,
                name: user.name,
                email: user.email,
                password: user.password
            })
            .into("User_Arq")

        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    getAllUsers = async(): Promise<user[]> => {
        try {

            const result: user[] = await UserDatabase.connection("User_Arq").select()
            return result

        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    deleteUser = async(id: string): Promise<void> => {
        try {
            await UserDatabase.connection("User_Arq").delete()
            .where({id: id})

        } catch (error:any) {
            throw new Error(error.message);
        }
    }
}