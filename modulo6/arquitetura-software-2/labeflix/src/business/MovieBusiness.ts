import { v4 as generateId } from 'uuid'
import { MovieDatabase } from '../data/MovieDatabase';

export class MovieBusiness {

    createMovie = async(input: any): Promise<void> => {

        try {
            const {title, description, duration, releaseYear} = input

            if (!title || !description || !duration || !releaseYear) {
                throw new Error("Check the information provided and try again.");  
            }

            if (duration < 0) {
                throw new Error('Movie duration can not be under 0 minutes.');
            }

            const id = generateId()

            const movieDatabase = new MovieDatabase
            await movieDatabase.createMovie({
                id, title, description, duration, releaseYear
            })
        } catch (error:any) {
            throw new Error(error.message);
        }
    }
}