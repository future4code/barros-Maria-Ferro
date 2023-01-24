import { CustomError } from "./CustomError";

export class MissingData extends CustomError {
    constructor() {
        super(400, "Please check the information provided and try again.")
    }
}

export class DurationInvalid extends CustomError {
    constructor() {
        super(400, "Movie duration can not be under 0 minutes.")
    }
}

export class ReleaseYearInvalid extends CustomError {
    constructor() {
        super(400, "Release Year invalid.")
    }
}