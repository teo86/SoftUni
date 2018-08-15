function solve(map,commands) {
    let matrix  =[]
    for (let i = 0; i < 5; i++) {
        matrix.push([])
    }
    for (let row = 0; row < matrix.length; row++) {
        let nums = map[row].split(' ').map(Number)
        for (let col = 0; col < nums.length; col++) {
            matrix[row].push(nums[col])
        }
    }
    for (let command of commands) {
        let [comm , num] = command.split(' ')

        switch (comm){
            case 'breeze':
                let index = +num
                for (let i = 0; i < matrix[index].length; i++) {
                    if(matrix[index][i] - 15< 0){
                        matrix[index][i] = 0
                    } else {
                        matrix[index][i] -=15
                    }
                }
                break
            case 'gale':
                let index2 = +num
                for (let i = 0; i < matrix.length; i++) {
                    if(matrix[i][index2] - 20< 0){
                        matrix[i][index2] = 0
                    } else {
                        matrix[i][index2] -=20
                    }
                }
                break
            case 'smog':
                let value = +num
                for (let row = 0; row < matrix.length; row++) {
                    for (let col = 0; col < matrix[row].length; col++) {
                        matrix[row][col]+=value
                    }
                }
                break
        }
    }
    let result = []
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if(matrix[row][col]>=50){
                result.push(`[${row}-${col}]`)
            }
        }
    }
    if(result.length === 0) {
        console.log('No polluted areas')
    } else {
        console.log(`Polluted areas: ${result.join(', ')}`)
    }
}
solve([
        "5 7 72 14 4",
        "41 35 37 27 33",
        "23 16 27 42 12",
        "2 20 28 39 14",
        "16 34 31 10 24",
    ],
    ["breeze 1", "gale 2", "smog 25"]
)
solve([
        "5 7 3 28 32",
        "41 12 49 30 33",
        "3 16 20 42 12",
        "2 20 10 39 14",
        "7 34 4 27 24",
    ],
    [
        "smog 11", "gale 3",
        "breeze 1", "smog 2"
    ]
)
solve([
        "5 7 2 14 4",
        "21 14 2 5 3",
        "3 16 7 42 12",
        "2 20 8 39 14",
        "7 34 1 10 24",
    ],
    ["breeze 1", "gale 2", "smog 35"]
)