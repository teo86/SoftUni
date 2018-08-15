function solve(input) {
    let sum = input[0].reduce((a,b)=> a+b)

    for (let row = 0; row < input.length; row++) {
        let current = input[row].reduce((a,b) => a+b)
        if( sum !== current){
             return console.log('false')

        }
        current = 0

    }
    for (let col = 0; col < input[0].length; col++) {
        let current = 0
        for (let row = 0; row < input.length; row++) {
            current+= input[row][col]

        }
        if( sum !== current){
            return console.log('false')

        }

    }

    console.log('true')
}
solve([[4,5,6],[6,5,4],[5,5,5]])
solve([[11,32,45],[21,0,1],[21,1,1]])
solve([[1,0,0],[0,0,1],[0,1,0]])