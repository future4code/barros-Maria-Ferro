export const printAsc = (n: number): void => {
    if (n >= 0) {
        printAsc(n - 1)
        console.log(n)
    }
}

export const printDesc = (n: number): void => {
    if (n >= 0) {
        console.log(n)
        printDesc(n - 1)
    }
}