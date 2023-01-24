import { UserDatabase } from "../data/UserDatabase"
import { InvalidEmail, InvalidPassword, MissingData } from "../error/UserErrors"
import { User } from "../model/User"
import { UserInputDTO } from "../model/UserDTO"
import { generateId } from "../services/idGenerator"

export class UserBusiness {
  async create({ email, name, password }: UserInputDTO):Promise<void> {

    if (!email || !name || !password) {
      throw new MissingData()
    }

    if (!email.includes("@")) {
      throw new InvalidEmail()
    }

    if (password.length < 6) {
      throw new InvalidPassword()
    }

    const id = generateId()

    const userDatabase = new UserDatabase()
    await userDatabase.create({
      id,
      name,
      email,
      password
    })
  }

  getAllUsers = async (): Promise<User[]> => {
    try {

      const userDatabase = new UserDatabase()
      const result = await userDatabase.getAllUsers()
      return result
      
    } catch (error:any) {
      throw new Error(error.message);
    }
  }

}
