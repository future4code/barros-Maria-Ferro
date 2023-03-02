import { validateCharacter } from "../src/validateCharacter"

describe("test function validateCharacter", () => {
    //a
    test("Empty name, should return false.", () => {
        const character01 = {
            name: "",
            health: 1500,
            defense: 20,
            strength: 35
        }

        expect(validateCharacter(character01)).toBe(false)
    });
    //b
    test("Health 0, should return false", () => {
        const character02 = {
            name: "Spoink",
            health: 0,
            defense: 20,
            strength: 35
        }

        expect(validateCharacter(character02)).toBe(false)
    });
    //c
    test("Strength 0, should return false", () => {
        const character03 = {
            name: "Spoink",
            health: 1500,
            defense: 20,
            strength: 0
        }

        expect(validateCharacter(character03)).toBe(false)
    });
    //d
    test("Defense 0, should return false", () => {
        const character04 = {
            name: "Spoink",
            health: 1500,
            defense: 0,
            strength: 35
        }

        expect(validateCharacter(character04)).toBe(false)
    });
    //e
    test("Negative values, should return false", () => {
        const character05 = {
            name: "Spoink",
            health: -1500,
            defense: 20,
            strength: 35
        }

        expect(validateCharacter(character05)).toBe(false)
    });
    //f
    test("Valid values, should return true", () => {
        const character06 = {
            name: "Spoink",
            health: 1500,
            defense: 20,
            strength: 35
        }

        expect(validateCharacter(character06)).toBe(true)
    });
})