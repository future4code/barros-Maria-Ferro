import { UserDatabase } from "../data/UserDatabase";
import { CustomError, InvalidEmail, InvalidPassword, Unauthorized, UserNotFound } from "../error/customError";
import { AuthenticationData } from "../model/authenticationData";
import {
  UserInputDTO,
  user,
  LoginInputDTO,
} from "../model/user";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

const idGenerator = new IdGenerator()
const userDatabase = new UserDatabase()
const hashManager = new HashManager()
const authenticator = new Authenticator()

export class UserBusiness {
  public createUser = async (input: UserInputDTO) => {
    try {
        const { name, nickname, email, password, role } = input

        if (
           !name ||
           !nickname ||
           !email ||
           !password ||
           !role
        ) {
           throw new CustomError(400, 'Preencha os campos "name","nickname", "email", "password" e "role"')
        }

        if (password.length < 6) {
            throw new InvalidPassword()
        }

        if (role.toUpperCase() !== "NORMAL" && role.toUpperCase() !== "ADMIN") {
         throw new CustomError(400, "'Role' deve assumir os valores 'NORMAL' ou 'ADMIN'.")
        }

        if (!email.includes("@")) {
            throw new InvalidEmail()
        }

        const id: string = idGenerator.generateId()

        const cypherPassword = await hashManager.hash(password)

        await userDatabase.insertUser({
           id,
           name,
           nickname,
           email,
           password: cypherPassword,
           role: role.toUpperCase()
        })

        const authenticator = new Authenticator
        const token = authenticator.generateToken({id, role})

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

     const user = await userDatabase.findUserByEmail(email);

     if (!user) {
      throw new UserNotFound()
     }

     const passwordIsCorrect = await hashManager.compare(password, user.password)

     if (!passwordIsCorrect) {
      throw new InvalidPassword()
     }

     const token = authenticator.generateToken({id: user.id, role: user.role})

     return token
     
 } catch (error:any) {
    throw new CustomError(error.statusCode, error.message);
 }

  };

  public getProfile = async({id, role}: AuthenticationData): Promise<user> => {
    try {

      if (role !== "NORMAL") {
         throw new Unauthorized()
      }

      const result = await userDatabase.getProfile(id)

      return result
    } catch (error:any) {
      throw new CustomError(error.statusCode, error.message);
    }
  };
}
