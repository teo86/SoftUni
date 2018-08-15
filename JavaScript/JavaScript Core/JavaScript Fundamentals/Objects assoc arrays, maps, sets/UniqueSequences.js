function solve(input) {
    let result = []

    for (let arr of input) {
        let res = []
        res = arr.split(/[[\], ]+/g).filter(a => a!=='').map(Number).sort((a,b) => b-a)
        result.push(res)
    }
    result.sort((a,b) => a.length - b.length)
    let output = new Set()
    for (let arr of result) {
        output.add(JSON.stringify(arr))
    }

    for (let arr of output) {
        console.log(`[${JSON.parse(arr).map(Number).join(', ')}]`)
    }
}
solve(['[-3, -2, -1, 0, 1, 2, 3, 4]',
    '[10, 1, -17, 0, 2, 13]',
    '[4, -3, 3, -2, 2, -1, 1, 0]'])
solve(['[7.14, 7.180, 7.339, 80.099]', '[7.339, 80.0990, 7.140000, 7.18]', '[7.339, 7.180, 7.14, 80.099]'])