//a
// Precisamos criar um mock da função validate character, pois é esta função que está sendo passada como parâmetro para a função performAttack.

import { performAttack } from "../src/performAttack"

//b 
const mockValid = jest.fn(() => {
    return true
})

//c
const mockInvalid = jest.fn(() => {
    return false
})

describe("Test performAttack", () => {
    test("Valid values, defenser loses 200 health", () => {
        const mock = jest.fn(() => {
            return true
        })

        const attacker = {
            name: "Spoink",
            health: 1500,
            strength: 300,
            defense: 100
        }
        
        const defender = {
            name: "Pikachu",
            health: 1500,
            strength: 150,
            defense: 100
        }

        const result = performAttack(attacker, defender, mock)

        expect(result.defender.health).toBe(1300)
        expect(mock).toHaveBeenCalled()
        expect(mock).toHaveBeenCalledTimes(2)
        expect(mock).toHaveReturnedTimes(2)
        
    });

    test("Invalid values, catch error", () => {
        expect.assertions(4)
        const mock = jest.fn(() => {
            return false
        })

        const attacker = {
            name: "Spoink",
            health: 1500,
            strength: 300,
            defense: 100
        }
        
        const defender = {
            name: "Pikachu",
            health: 1500,
            strength: 150,
            defense: 100
        }

        try {
           performAttack(attacker, defender, mock)
        } catch(error:any) {
            expect(error.message).toBe("Invalid Character.")
            expect(mock).toHaveBeenCalled()
            expect(mock).toHaveBeenCalledTimes(1)
            expect(mock).toHaveReturnedTimes(1)
        }
    })
})