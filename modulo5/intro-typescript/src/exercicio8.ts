function stringReversa (frase: string): string {

    const split: string[] = frase.split("")
    const reverse: string[] = split.reverse()
    const join: string = reverse.join("")

    return join
}

console.log(stringReversa("abcde"))