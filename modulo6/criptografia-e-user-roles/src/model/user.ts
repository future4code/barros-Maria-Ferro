export type user = {
   id: string,
   email: string,
   password: string,
   name: string,
   nickname: string,
   role: string
}

export interface UserInputDTO {
   name: string,
   nickname: string,
   email: string,
   password: string,
   role: string
}

export interface LoginInputDTO {
   email: string,
   password: string
}