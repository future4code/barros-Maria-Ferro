function checkOneEdit (str1: string, str2: string): boolean {
    const arrStr1: string[] = str1.split("")
    const arrStr2: string[] = str2.split("")

    let result = false

    if (arrStr1.length === arrStr2.length) {
        let changes = 0
        for (let i = 0; i < arrStr1.length; i++) {
            arrStr1[i] === arrStr2[i] ? changes = changes : changes += 1
        }

        changes > 1 ? result = false : result = true
        
        return result
    }

    else if (arrStr1.length === arrStr2.length + 1) {
        for (let i = 0; i < arrStr2.length; i++) {
            arrStr1[i] === arrStr2[i] ? result = true : result = false
        }

        return result
    }
    
    else if (arrStr1.length === arrStr2.length - 1) {
        for (let i = 0; i < arrStr1.length; i++) {
            arrStr1[i] === arrStr2[i] ? result = true : result = false
        }

        return result

    }

    else {
        result = false
        return result
    }

}

console.log(checkOneEdit("banan", "banana"))
console.log(checkOneEdit("bananak", "banana"))
console.log(checkOneEdit("panana", "banana"))
console.log(checkOneEdit("bananaaa", "banana"))
console.log(checkOneEdit("coelhos", "bananas"))