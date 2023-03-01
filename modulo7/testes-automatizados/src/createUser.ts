import { UserDatabase } from "./data/UserDatabase";
import { CustomError } from "./error/CustomError";
import { user } from "./model/user";

export const createUser = async (user: user) => {
    try {

        const userDataBase = new UserDatabase()
        await userDataBase.createUser(user)
        return "Success!"

    } catch (err) {
        throw new CustomError(400, "An error occurred.");
    }
}