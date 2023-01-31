import { UserDatabase } from "../data/UserDatabase";
import { CustomError, InvalidEmail, InvalidPassword, UserNotFound } from "../error/customError";
import {
  UserInputDTO,
  user,
  LoginInputDTO,
} from "../model/user";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export class UserBusiness {
  public createUser = async (input: UserInputDTO) => {
    try {
        const { name, nickname, email, password } = input

        if (
           !name ||
           !nickname ||
           !email ||
           !password
        ) {
           throw new CustomError(400, 'Preencha os campos "name","nickname", "email" e "password"')
        }

        if (password.length < 6) {
            throw new InvalidPassword()
        }

        if (!email.includes("@")) {
            throw new InvalidEmail()
        }

        const idGenerator = new IdGenerator()
        const id: string = idGenerator.generateId()

        const userDatabase = new UserDatabase()
        await userDatabase.insertUser({
           id,
           name,
           nickname,
           email,
           password
        })

        const authenticator = new Authenticator
        const token = authenticator.generateToken({id})

        return token
        
    } catch (error:any) {
        throw new CustomError(error.statusCode, error.message);
    }
  };

  public login = async(input: LoginInputDTO) => {
    try {
    
    const {email, password} = input

    if (!email || !password
     ) {
        throw new CustomError(400, 'Preencha os campos "email" e "password"')
     }

     if (password.length < 6) {
        throw new InvalidPassword()
     }

     if (!email.includes("@")) {
        throw new InvalidEmail()
     }

     const userDatabase = new UserDatabase()
     const user = await userDatabase.findUserByEmail(email);

     if (!user) {
        throw new UserNotFound()
     }

     if (user.password !== password) {
        throw new InvalidPassword()
     }

     const authenticator = new Authenticator
     const token = authenticator.generateToken({id: user.id})

     return token
     
 } catch (error:any) {
    throw new CustomError(error.statusCode, error.message);
 }

  };

  public getProfile = async(id: string): Promise<user> => {
    try {
      const userDataBase = new UserDatabase()
      const result = await userDataBase.getProfile(id)

      return result
    } catch (error:any) {
      throw new CustomError(error.statusCode, error.message);
    }
  };
}
