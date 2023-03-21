export enum LOCATION {
    EUA = "EUA",
    BRAZIL = "BRAZIL",
}
  
export enum NACIONALITY {
    BRAZILIAN = "BRAZILIAN",
    AMERICAN = "AMERICAN",
}
  
export interface User {
    name: string;
    age: number;
    nacionality: NACIONALITY;
}
  
export interface Casino {
    name: string;
    location: LOCATION;
}

interface Result {
    brazilians: ResultItem;
    americans: ResultItem;
}
  
interface ResultItem {
    allowed: string[];
    unallowed: string[];
}

export const verifyAge = (casino: Casino, users: User[]): Result => {

    let result: Result = {
        brazilians: {
            allowed: [],
            unallowed: []
        },
        americans: {
            allowed: [],
            unallowed: []
        }
    }

    let minimumAge: number

    if (casino.location === "EUA") {
        minimumAge = 21
    } else {
        minimumAge = 18
    }

    for (let i = 0; i < users.length; i++) {
        if (users[i].nacionality === "AMERICAN" && users[i].age < minimumAge) {
            result.americans.unallowed.push(users[i].name)
        }

        if (users[i].nacionality === "AMERICAN" && users[i].age >= minimumAge) {
            result.americans.allowed.push(users[i].name)
        }

        if (users[i].nacionality === "BRAZILIAN" && users[i].age < minimumAge) {
            result.brazilians.unallowed.push(users[i].name)
        }

        if (users[i].nacionality === "BRAZILIAN" && users[i].age >= minimumAge) {
            result.brazilians.allowed.push(users[i].name)
        }
    }

    return result
}