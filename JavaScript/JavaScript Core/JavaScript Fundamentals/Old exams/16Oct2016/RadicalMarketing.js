function solve(input) {

    let people = []
    let subscribe = []
    for (let i = 0; i < input.length; i++) {

        if(input[i].length===1){
            people.push(input[i])
        } else {
            subscribe.push(input[i])
        }

    }

    people = people.filter((v,i) =>people.indexOf(v)===i)

    let matrix = []

    for (let i = 0; i < people.length; i++) {
        matrix.push([])
        matrix[i].push(people[i])

    }

    for (let i = 0; i < subscribe.length; i++) {
        let firstPerson = subscribe[i][0]
        let secondPerson = subscribe[i][2]

        for (let j = 0; j < matrix.length; j++) {
            if(matrix[j][0]=== secondPerson && people.includes(firstPerson,secondPerson) && firstPerson!==secondPerson){
                matrix[j].push(firstPerson)
            }

        }
    }
    for (let i = 0; i < matrix.length; i++) {
        matrix[i] = matrix[i].filter((v,ind) =>matrix[i].indexOf(v)===ind)

    }
    let result = matrix[0]
    for (let i = 1; i < matrix.length; i++) {
        if(matrix[i].length>result.length){
            result = matrix[i]
        } else if(matrix[i].length===result.length){
            let a = count(matrix,matrix[i][0])
            let b = count(matrix,result[0])
            if(a>b){
                result = matrix[i]
            }
        }

    }
    function count(matrix,name) {
        let count =0
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                if(matrix[row][col]===name){
                    count++
                }

            }

        }
        return count
    }

    console.log(result[0])
    for (let i = 1; i < result.length; i++) {
        console.log(i+'.'+' '+result[i])

    }

}
solve(['A','B','C','D','A-B','B-A','C-A','D-A'])
solve(['J', 'G','P','R','C','J-G','G-J','P-R','R-P','C-J'])
solve(['P','P-R',
    'R',
    'P-R',
    'P-E',
    'E',
    'P-E',
    'P-L',
    'L',
    'P-L',
    'P-A',
    'A',
    'P-A',
    'P-S',
    'S',
    'P-S',
    'P-T',
    'T',
    'P-T',
    'T-P'])