export interface MovieInputDTO {
    title: string,
    description: string,
    duration: number,
    releaseYear: number
}

export interface InsertMovieInputDTO {
    id: string,
    title: string,
    description: string,
    duration_in_minutes: number,
    year_of_release: number
}