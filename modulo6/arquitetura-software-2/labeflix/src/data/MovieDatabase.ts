import { Movie } from "../types/Movie";
import { BaseDatabase } from "./BaseDatabase";

export class MovieDatabase extends BaseDatabase {
    private static TABLE_NAME = "LABEFLIX_MOVIE";

    public createMovie = async (movie: Movie): Promise<void> => {
        try {

            await MovieDatabase.connection(MovieDatabase.TABLE_NAME).insert({
                id: movie.id,
                title: movie.title,
                description: movie.description,
                duration_in_minutes: movie.duration,
                year_of_release: movie.releaseYear
            })

        } catch (error: any) {
            throw new Error(error.message);   
        }
    }
}