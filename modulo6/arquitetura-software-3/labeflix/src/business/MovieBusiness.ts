import { MovieDatabase } from '../data/MovieDatabase';
import { DurationInvalid, MissingData, ReleaseYearInvalid } from '../error/TaskErrors';
import { InsertMovieInputDTO, MovieInputDTO } from '../model/MovieDTO';
import { generateId } from '../services/idGenerator';

export class MovieBusiness {

    createMovie = async(input: MovieInputDTO): Promise<void> => {

        try {
            const {title, description, duration, releaseYear} = input

            if (!title || !description || !duration || !releaseYear) {
                throw new MissingData()
            }

            if (duration < 0) {
                throw new DurationInvalid()
            }

            if (releaseYear < 1850) {
                throw new ReleaseYearInvalid()
            }
 
            const id = generateId()

            const movieDatabase = new MovieDatabase

            const movieInput: InsertMovieInputDTO = {
                id: id,
                title: title,
                description: description,
                duration_in_minutes: duration,
                year_of_release: releaseYear
            }

            await movieDatabase.createMovie(movieInput)
        } catch (error:any) {
            throw new Error(error.message);
        }
    }
}