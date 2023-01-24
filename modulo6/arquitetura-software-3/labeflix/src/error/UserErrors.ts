import { CustomError } from "./CustomError";

export class InvalidEmail extends CustomError {
    constructor() {
        super(400, "Invalid Email")
    }
}

export class MissingData extends CustomError {
    constructor() {
        super(400, "Please check the information provided and try again.")
    }
}

export class InvalidPassword extends CustomError {
    constructor() {
        super(400, "Password needs to be at least 6 characteres.")
    }
}