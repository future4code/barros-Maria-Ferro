export const printArray = (arr: Array<any>, index: number = 0): void => {
    if (index < arr.length) {
        console.log(arr[index])
        printArray(arr, index + 1)
    }
}