import { Request, Response } from "express";
import { MovieBusiness } from "../business/MovieBusiness";

export class MovieController {

    insertMovie = async(req: Request, res: Response): Promise<void> => {
        try {
            const input: any = {
                title: req.body.title,
                description: req.body.description,
                duration: req.body.duration,
                releaseYear: req.body.releaseYear
            }

            const movieBusiness = new MovieBusiness
            await movieBusiness.createMovie(input)

            res.status(201).send({message: "New movie inserted."})
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }
}