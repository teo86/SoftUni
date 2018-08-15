function solve(input) {
    let matrix = []
    let sum1=0
    let sum2 =0
    for (let i = 0; i < input.length; i++) {
        let arr = input[i].split(' ').map(x => Number(x))
        matrix.push(arr)

    }

    for (let i = 0; i < matrix.length; i++) {
        sum1+=matrix[i][i]

    }
    for (let i = 0; i < matrix.length; i++) {
        sum2 += matrix[matrix.length-1-i][i]

    }

    if(sum1 === sum2){
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                if(row!==col && row+col!==matrix.length-1 ){
                    matrix[row][col] = sum1
                }

            }

        }
        matrix.forEach(x => console.log(x.join(' ')))
    } else {
        matrix.forEach(x => console.log(x.join(' ')))
    }
}
solve(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
)
console.log()
solve(['1 1 1',
    '1 1 1',
    '1 1 0']
)