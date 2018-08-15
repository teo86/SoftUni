function solve(input) {
    let money = 0
    let gold = 0
    let bitcoins = 0
    let day = 0

    for (let i = 1; i <= input.length; i++) {
        gold = +input[i-1]
        if(i%3===0){
            gold = gold - (gold*0.3)
        }
        money += gold * 67.51
        if(money>=11949.16){
            if (bitcoins===0){
                day = i
            }
            bitcoins += (money/11949.16 | 0)
            money = money%11949.16
        }
    }
    console.log(`Bought bitcoins: ${bitcoins}`)
    if(day>0){
        console.log(`Day of the first purchased bitcoin: ${day}`)
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`)
}
solve(['100','200','300'])
console.log()
solve(['50','100'])
console.log()
solve(['3124.15','504.212','2511.124'])