function compression (str: string): string {
    const arrStr: string[] = str.split("")
    let newArray: string[] = []
    let charCount = 1

    for (let i = 0; i < arrStr.length; i++) {
       if (arrStr[i + 1] === arrStr[i]) {
            charCount++
        } else {
            newArray.push(arrStr[i], charCount.toString())
            charCount = 1
        }
    }

    const newString = newArray.join("")

    return newArray.length > arrStr.length ? str : newString
}

console.log(compression("aabbb"))
console.log(compression("aabcccccaaa"))
console.log(compression("accurate"))
console.log(compression("escola"))
console.log(compression("accuraaaaaaaaaate"))