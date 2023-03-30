export const sumLoop = (n: number): number => {
    let sum = 0
    for (n; n >= 0; n--) {
        sum += n
    }

    return sum
}