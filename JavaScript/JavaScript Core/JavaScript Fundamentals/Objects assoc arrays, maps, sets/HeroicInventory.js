function solve(input) {
    let result = []

    for (let i = 0; i < input.length; i++) {
        let [name,level,items] = input[i].split(/ \/ /g).filter(a => a!=='')
        let stufs = []
        if(items){
            stufs = items.split(/, /g).filter(a => a!=='')
        }
        let obj = {name: name, level: +level, items: stufs}
        result.push(obj)

    }
    console.log(JSON.stringify(result))
}
solve(['Isacc / 25','Derek / 12 / BarrelVest, DestructionSword','Hes / 1 / Desolator, Sentinel, Antara'])