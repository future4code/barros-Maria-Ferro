import { Character } from "./model/Character";
import { validateCharacter } from "./validateCharacter";

export const performAttack = (attacker: Character, defender: Character, validator: (input: Character) => boolean) => {

    const characters = {attacker: attacker, defender: defender}

    const validateAttacker = validator(attacker)
    if (!validateAttacker) {
        throw new Error("Invalid Character.")
    }

    const validateDefender = validator(defender)
    if (!validateDefender) {
        throw new Error("Invalid Character.")
    }

    if (defender.defense <= attacker.strength) {
        const result =  attacker.strength - defender.defense
        defender.health -= result
    }

    return characters
}

const attacker = {
    name: "Spoink",
    health: 1500,
    strength: 150,
    defense: 100
}

const defender = {
    name: "Pikachu",
    health: 1500,
    strength: 150,
    defense: 100
}

// console.log(performAttack(attacker, defender, validateCharacter))

//c
// A diferentça entre a implementação direta e a inversão de implementação é que na primeira precisamos importar a função a ser utilizada, enquanto que na segunda passamos essa função como parâmetro, o que permitir testar a função performAttack mais livremente.