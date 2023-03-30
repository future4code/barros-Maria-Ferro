import { printAsc, printDesc } from "./exercicio01";
import { sum } from "./exercício02";
import { sumLoop } from "./exercício03";
import { printArray } from "./exercício04";

console.log("Exercício 01 a:")
printAsc(5)
console.log("Exercício 01 b:")
printDesc(5)

console.log("Exercício 02:")
console.log(sum(10))
console.log(sum(4))

console.log("Exercício 03:")
console.log(sumLoop(10))
console.log(sumLoop(4))

console.log("Exercício 04:")
printArray([10, 20, 30, 40, 50])
printArray(["Banana", "Morango", "Melancia"])
