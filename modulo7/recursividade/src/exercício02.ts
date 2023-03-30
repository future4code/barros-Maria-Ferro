export const sum = (n: number): number => {
    if (n <= 0) {
        return 0
    }

    return n + sum(n - 1)
}