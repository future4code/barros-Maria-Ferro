import { performPurchase } from "../src/performPurchase"

describe("Test expected results of performPurchase", () => {
    const user = {
        name: "Maria",
        balance: 1000
    }

    test("When purchase's value is less than total balance, should return new user", () => {
        expect(performPurchase(user, 500)).toEqual({
            name: "Maria",
            balance: 500
        })
    });

    test("When purchase's value and total balance are the same, should return new user, balance 0", () => {
        expect(performPurchase(user, 1000)).toEqual({
            name: "Maria",
            balance: 0
        })
    });

    test("When purchase's value is greater than total balance, should return undefined", () => {
        expect(performPurchase(user, 1500)).toBe(undefined)
    });
    
});

