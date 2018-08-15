function solve(input) {
    let result = {}

    for (let str of input) {
        let [name, price] = str.split(' : ')
        result[name] = +price

    }
    let sorted = Object.keys(result).sort()

    let key = ''
    for (let i = 0; i < sorted.length; i++) {
        if(key!==sorted[i][0]){
            key = sorted[i][0]
            console.log(key)
        }
        console.log(` ${sorted[i]}: ${result[sorted[i]]}`)

    }
}
solve(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10'
])