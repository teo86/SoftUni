function solve(input) {
    let result = [input[0]]

    for (let i = 1; i < input.length; i++) {
        if(Number(input[i])>=Number(result[result.length-1])){
            result.push(input[i])
        }

    }

    result.forEach(x => console.log(x))
}
solve([1,3,8,4,10,12,3,2,24])