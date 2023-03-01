import { BaseDatabase } from "./BaseDatabase";
import { user } from "../model/user"

export class UserDatabase extends BaseDatabase {

    createUser = async(user: user) => {
        try {
            await UserDatabase.connection("labook_users").insert({user})
        } catch (error) {
            return (error)
        }
    };
}