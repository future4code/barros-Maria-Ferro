// Podemos representar uma matriz por meio de um objeto de arrays, conforme abaixo:

const matrix: Matrix = {
    1: [1, 2, 3],
    2: [4, 5, 6],
    3: [7, 8, 9]
}

interface Matrix {
    [key: number]: number[]
}

function changeMatrix(matrix: Matrix, lineIndex: number, columnIndex: number, value: number): Matrix {
    if (matrix[lineIndex] === undefined || matrix[lineIndex][columnIndex-1] === undefined) {
        throw new Error ("Fora do intervalo da matriz")
    }

    matrix[lineIndex][columnIndex - 1] = value

    return matrix
}

console.table(changeMatrix(matrix, 1, 3, 50))
console.table(changeMatrix(matrix, 4, 2, 50))