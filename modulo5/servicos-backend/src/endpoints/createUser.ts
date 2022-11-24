import { Request, Response } from "express";
import { connection } from "../data/connection";
import { getFullAddress } from "../services/getFullAddress";
import transporter from "../services/mailTransporter";
import { user } from "../types";

export const createUser = async (req: Request, res: Response): Promise<void> => {
    let errorCode = 400
    try {
        const { name, zipcode, number, complement } = req.body

        if (!name || !zipcode || !number) {
            errorCode = 422
            throw new Error("Name, Zipcode e Number são obrigatórios.");
        }

        const address = await getFullAddress(zipcode)

        if (!address.logradouro || !address.bairro || !address.cidade || !address.estado) {
            throw new Error("CEP não encontrado, por gentileza verifique e tente novamente.");
        }

        const newUser: user = {
            nome: name,
            cep: zipcode,
            logradouro: address.logradouro,
            numero: number,
            complemento: complement,
            bairro: address.bairro,
            cidade: address.cidade,
            estado: address.estado
        }

        await connection("ex_servicos_backend")
        .insert(newUser)

        const send = await transporter.sendMail({
            from: process.env.NODEMAILER_USER,
            to: "projetos_jbl-aaaaiax6fosqmlb2s7ipkez3d4@labenualunos.slack.com",
            subject: "[BARROS - Maria Fernandez de Moura Ferro]",
            text: "Utilizei o objeto {from:, to:, subject:, text:}"
        })

        //o e-mail não envia, da mesma forma que não estava funcionando para o professor na aula.

        res.status(201).send("Usuário criado com sucesso!")

    } catch (error:any) {
        res.status(errorCode).send(error.message)
    }
}