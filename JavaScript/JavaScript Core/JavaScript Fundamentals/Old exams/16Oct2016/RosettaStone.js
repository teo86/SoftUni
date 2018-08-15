function solve(input) {
    let tempNum = Number(input[0])
    let tempMatrix = []
    let matrix = []
    let letters = []
    letters.push(' ')

    for (let i = 0; i < 26 ; i++) {
        letters.push(String.fromCharCode(65+i))

    }

    for (let i = 0; i < tempNum; i++) {
        tempMatrix.push([])
        let arr = input[i+1].split(' ')
        for (let j = 0; j < arr.length; j++) {
            tempMatrix[i].push(Number(arr[j]))

        }

    }
    for (let i = tempNum+1; i < input.length; i++) {
        matrix.push([])
        let arr = input[i].split(' ')
        for (let j = 0; j < arr.length; j++) {
            matrix[i-(tempNum+1)].push(Number(arr[j]))

        }

    }

    for (let row = 0; row < matrix.length; row+=tempNum) {
        for (let tempRow = 0; tempRow < tempNum; tempRow++) {
            for (let col = 0; col < matrix[row].length; col+=tempMatrix[tempRow].length) {
                for (let tempCol = 0; tempCol < tempMatrix[tempRow].length; tempCol++) {
                    if((row+tempRow)<matrix.length && ((col+tempCol)< matrix[row].length)){
                        matrix[row+tempRow][col+tempCol]+=tempMatrix[tempRow][tempCol]
                    }

                }

            }

        }

    }
    let output = ''
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            output+=letters[(matrix[row][col])%27]

        }

    }
    console.log(output)

}
solve([ '2',
    '59 36',
    '82 52',
    '4 18 25 19 8',
    '4 2 8 2 18',
    '23 14 22 0 22',
    '2 17 13 19 20',
    '0 9 0 22 22' ])
solve([ '2',
    '31 32',
    '74 37',
    '19 0 23 25',
    '22 3 12 17',
    '5 9 23 11',
    '12 18 10 22' ]
)
solve(['1',
    '1 3 13',
    '12 22 14 13 25 0 4 24 23',
    '18 24 2 25 22 0 0 11 18',
    '8 25 6 26 8 23 13 4 14',
    '14 3 14 10 6 1 6 16 14',
    '11 12 2 10 24 2 13 24 0',
    '24 24 10 14 15 25 18 24 12',
    '4 24 0 8 4 22 19 22 14',
    '0 11 18 26 1 19 18 13 15',
    '8 15 14 26 24 14 26 24 14'])