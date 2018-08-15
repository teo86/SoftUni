function solve(input) {
    let width = input[0]
    let height = input[1]
    let x = input[2]
    let y = input[3]

    let matrix = []

    for (let i = 0; i < height; i++) {
        matrix.push([])

    }

    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
            matrix[row][col] = (Math.max((Math.abs(row-x)),(Math.abs(col - y))))+1

        }

    }
    matrix.forEach(x => console.log(x.join(' ')))
}
solve([4,4,0,0])
console.log()
solve([5,5,2,2])