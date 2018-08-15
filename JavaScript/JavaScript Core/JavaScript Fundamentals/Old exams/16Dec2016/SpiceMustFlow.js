function solve(input) {
    let yield =Number(input[0])
    let days = 0
    let totalSpice = 0

    while(yield>=100){
        totalSpice+= yield
        days++
        yield-=10
        totalSpice-=26
        if(yield<100){
            totalSpice-=26
        }
    }
    console.log(days)
    console.log(totalSpice)

}
solve(['111'])