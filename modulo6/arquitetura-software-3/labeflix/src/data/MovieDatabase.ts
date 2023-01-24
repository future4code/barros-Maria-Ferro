import { InsertMovieInputDTO } from "../model/MovieDTO";
import { BaseDatabase } from "./BaseDatabase";

export class MovieDatabase extends BaseDatabase {
    private static TABLE_NAME = "LABEFLIX_MOVIE";

    public createMovie = async (movie: InsertMovieInputDTO): Promise<void> => {
        try {

            await MovieDatabase.connection(MovieDatabase.TABLE_NAME).insert({movie})

        } catch (error: any) {
            throw new Error(error.message);   
        }
    }
}