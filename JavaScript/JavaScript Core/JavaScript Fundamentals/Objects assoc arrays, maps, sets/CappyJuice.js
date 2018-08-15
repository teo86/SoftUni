function solve(input) {
    let map = new Map()
    let obj = {}

    for (let product of input) {
        let [juice,quantity] = product.split(' => ')
        if(!obj.hasOwnProperty(juice)){
            obj[juice]= 0
        }
        obj[juice] += +quantity

        if(obj[juice]>=1000) {
            let bottles = Math.trunc(obj[juice] / 1000)
            obj[juice]=obj[juice]%1000
            if(!map.has(juice)){
                map.set(juice, 0)
            }
            map.set(juice, map.get(juice)+bottles)
        }

    }
    for (let [juice,quantity] of map) {
        console.log(`${juice} => ${quantity}`)

    }
}
solve(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549'])
solve(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'
])