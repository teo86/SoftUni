function solve(input) {
    let str = input.split(' ')
    let result = []
    for (let i = 0; i < str.length; i++) {
        result.push(str[i][0].toUpperCase() + str[i].substr(1).toLowerCase())

    }
    console.log(result.join(' '))

}
solve('Capitalize these words')
solve('Was that Easy? tRY thIs onE for SiZe!')