enum GENRE {
	ACTION = "ação",
	DRAMA = "drama",
	COMEDY = "comédia",
	ROMANCE = "romance",
	HORROR = "terror"
}

type Catalogue = {
    name: string,
    releaseDate: number,
    movieGenre: GENRE,
    pontuation?: number
}

function organizeCatalogue(name: string, releaseDate: number, movieGenre: GENRE, pontuation?: number): Catalogue {

    let movieInfo: Catalogue = {
        name: name,
        releaseDate: releaseDate,
        movieGenre: movieGenre, 
    }

    if (!pontuation) {
        return movieInfo
    } else {
        movieInfo = {
            name: name,
            releaseDate: releaseDate,
            movieGenre: movieGenre,
            pontuation: pontuation
        }
        return movieInfo
    }
}

console.log(organizeCatalogue("Mean Girls", 2004, GENRE.COMEDY, 84))
console.log(organizeCatalogue("The Prestige", 2006, GENRE.DRAMA))