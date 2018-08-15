function solve(input) {
    let result =[]
    let regex = /\b_([A-Za-z0-9]+)\b/g
    let match
    while(match = regex.exec(input)){
        result.push(match[1])
    }
    console.log(result.join(','))
}
solve('The _id and _age variables are both integers.')
solve('__invalidVariable _evenMoreInvalidVariable_ _validVariable')