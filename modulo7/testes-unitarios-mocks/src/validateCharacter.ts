import { Character } from "./model/Character"

export const validateCharacter = (character: Character): boolean => {
    if (!character.name || 
        character.health === undefined || 
        character.defense === undefined || 
        character.strength === undefined) {
            return false
    }

    if (character.health <= 0 || character.defense <= 0 || character.strength <= 0) {
        return false
    }

    return true
}