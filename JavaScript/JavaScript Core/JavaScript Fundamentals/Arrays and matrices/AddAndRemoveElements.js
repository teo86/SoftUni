function solve(input) {
    let result =[]

    for (let i = 1; i <= input.length; i++) {
        if(input[i-1]==='add'){
            result.push(i)
        } else {
            result.pop()
        }

    }

    if(result.length===0){
        console.log('Empty')
    } else {
        for (let num of result) {
            console.log(num)
        }
    }
}
solve(['remove'])