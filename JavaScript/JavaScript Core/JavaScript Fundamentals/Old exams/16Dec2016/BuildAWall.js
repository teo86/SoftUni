function solve(input) {
    let sections = []
    for (let i = 0; i < input.length; i++) {
        sections.push(Number(input[i]))

    }
    sections.sort((a,b) => a-b)

    let yards = []

    while(sections[0]!==30){
        let count = 0
        for (let i = 0; i < sections.length; i++) {
            if(sections[i]!==30){
                count++
                sections[i]++
            }

        }
        yards.push(195*count)
    }
    console.log(yards.join(', '))
    let totalYards = yards.reduce((a,b)=>a+b)
    let cost = totalYards*1900
    console.log(cost + ' ' + 'pesos')
}
solve(['21','25','28'])