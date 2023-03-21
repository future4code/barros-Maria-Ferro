import { Casino, LOCATION, NACIONALITY, User, verifyAge } from "../src/verifyAge"

describe("Test expected results of verifyAge", () => {
    test("Brazilian user with minimum age to enter a Brazilian Casino", () => {
        const casino01: Casino = {name: "Casino01", location: LOCATION.BRAZIL}
        const users01: User[] = [
            {
                name: "Maria",
                age: 29,
                nacionality: NACIONALITY.BRAZILIAN
            }
        ]

        expect(verifyAge(casino01, users01)).toEqual({
            brazilians: {
                allowed: ["Maria"],
                unallowed: []
            },
            americans: {
                allowed: [],
                unallowed: []
            }
        })
    });

    test("American user with minimum age to enter a Brazilian Casino", () => {
        const casino02: Casino = {name: "Casino02", location: LOCATION.BRAZIL}
        const users02: User[] = [
            {
                name: "John",
                age: 18,
                nacionality: NACIONALITY.AMERICAN
            }
        ]

        expect(verifyAge(casino02, users02)).toEqual({
            brazilians: {
                allowed: [],
                unallowed: []
            },
            americans: {
                allowed: ["John"],
                unallowed: []
            }
        })
    });

    test("Americans and Brazilians users, 19 years old, American Casino", () => {
        const casino03: Casino = {name: "Casino03", location: LOCATION.EUA}
        const users03: User[] = [
            {
                name: "David",
                age: 19,
                nacionality: NACIONALITY.AMERICAN
            },
            {
                name: "Jessica",
                age: 19,
                nacionality: NACIONALITY.AMERICAN
            },
            {
                name: "Carolina",
                age: 19,
                nacionality: NACIONALITY.BRAZILIAN
            },
            {
                name: "Douglas",
                age: 19,
                nacionality: NACIONALITY.BRAZILIAN
            }
        ]

        const result = verifyAge(casino03, users03)

        expect(result.brazilians.unallowed).toEqual(["Carolina", "Douglas"])
        expect(result.americans.unallowed).toEqual(["David", "Jessica"])

    });

    test("Americans, 21 years old, and Brazilians users, 19 years old, American Casino", () => {
        const casino04: Casino = {name: "Casino04", location: LOCATION.EUA}
        const users04: User[] = [
            {
                name: "David",
                age: 21,
                nacionality: NACIONALITY.AMERICAN
            },
            {
                name: "Jessica",
                age: 21,
                nacionality: NACIONALITY.AMERICAN
            },
            {
                name: "Carolina",
                age: 19,
                nacionality: NACIONALITY.BRAZILIAN
            },
            {
                name: "Douglas",
                age: 19,
                nacionality: NACIONALITY.BRAZILIAN
            }
        ]

        const result = verifyAge(casino04, users04)

        expect(result.brazilians.unallowed).toEqual(["Carolina", "Douglas"])
        expect(result.americans.allowed).toEqual(["David", "Jessica"])
        
    });

    test("Allowed array length greater than 0 and less than 2.", () => {
        const casino01: Casino = {name: "Casino01", location: LOCATION.BRAZIL}
        const users01: User[] = [
            {
                name: "Maria",
                age: 29,
                nacionality: NACIONALITY.BRAZILIAN
            }
        ]

        const result = verifyAge(casino01, users01)

        expect(result.brazilians.allowed.length).toBeGreaterThan(0)
        expect(result.brazilians.allowed.length).toBeLessThan(2)
    });

    test("Unallowed array length equals 0.", () => {
        const casino05: Casino = {name: "Casino05", location: LOCATION.BRAZIL}
        const users05: User[] = [
            {
                name: "Ryan",
                age: 29,
                nacionality: NACIONALITY.AMERICAN
            }
        ]

        const result = verifyAge(casino05, users05)

        expect(result.americans.unallowed.length).toBe(0)

    });

    test("Americans and Brazilians users, 19 years old, American Casino", () => {
        const casino03: Casino = {name: "Casino03", location: LOCATION.EUA}
        const users03: User[] = [
            {
                name: "David",
                age: 19,
                nacionality: NACIONALITY.AMERICAN
            },
            {
                name: "Jessica",
                age: 19,
                nacionality: NACIONALITY.AMERICAN
            },
            {
                name: "Carolina",
                age: 19,
                nacionality: NACIONALITY.BRAZILIAN
            },
            {
                name: "Douglas",
                age: 19,
                nacionality: NACIONALITY.BRAZILIAN
            }
        ]

        const result = verifyAge(casino03, users03)

        expect(result.brazilians.unallowed).toEqual(expect.arrayContaining(["Carolina"]))
        expect(result.americans.unallowed).toEqual(expect.arrayContaining(["David"]))

    });

    test("Americans, 21 years old, and Brazilians users, 19 years old, American Casino", () => {
        const casino04: Casino = {name: "Casino04", location: LOCATION.EUA}
        const users04: User[] = [
            {
                name: "David",
                age: 21,
                nacionality: NACIONALITY.AMERICAN
            },
            {
                name: "Jessica",
                age: 21,
                nacionality: NACIONALITY.AMERICAN
            },
            {
                name: "Carolina",
                age: 19,
                nacionality: NACIONALITY.BRAZILIAN
            },
            {
                name: "Douglas",
                age: 19,
                nacionality: NACIONALITY.BRAZILIAN
            }
        ]

        const result = verifyAge(casino04, users04)

        expect(result.brazilians.unallowed.length).toBeGreaterThan(1)
        expect(result.americans.unallowed.length).toBeLessThan(1)
        expect(result.americans.allowed.length).toBe(2)
        
    });
})