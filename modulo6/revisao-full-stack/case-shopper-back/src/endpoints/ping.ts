import {Request, Response} from 'express';

export const ping = async (req: Request, res: Response): Promise<void> => {
    let errorCode = 404

    try {
        res.status(200).send("Pong!")
    } catch (error:any) {
        res.status(errorCode).send(error.message)
    }
}