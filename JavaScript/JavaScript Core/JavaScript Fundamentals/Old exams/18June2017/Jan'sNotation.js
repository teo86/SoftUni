function solve(input) {
let result = []

    for (let i = 0; i < input.length; i++) {

    switch(input[i]){
        case '*':
            if(result.length>=2){
                let b = result.pop()
                let a = result.pop()
                result.push(a*b)
            } else {
                return console.log('Error: not enough operands!')
            }
            break;
        case '/':
            if(result.length>=2){
                let b = result.pop()
                let a = result.pop()
                result.push(a/b)
            } else {
                return console.log('Error: not enough operands!')
            }
            break;
        case '+':
            if(result.length>=2){
                let b = result.pop()
                let a = result.pop()
                result.push(a+b)
            } else {
                return console.log('Error: not enough operands!')
            }
            break;
        case '-':
            if(result.length>=2){
                let b = result.pop()
                let a = result.pop()
                result.push(a-b)
            } else {
                return console.log('Error: not enough operands!')
            }
            break;
        default:
            result.push(+input[i])
            break;
    }
    }

    if(result.length>1){
    console.log('Error: too many operands!')
    } else {
    console.log(result[0])
    }
}
solve([5,'*'])
solve([-1,
    1,
    '+',
    101,
    '*',
    18,
    '+',
    3,
    '/']
)