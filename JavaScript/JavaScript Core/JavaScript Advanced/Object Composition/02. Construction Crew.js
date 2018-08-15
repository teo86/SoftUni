function solve(obj) {
    if(obj['handsShaking']===true){
        let alcohol = 0.1 * obj['weight'] * obj['experience']
        obj['bloodAlcoholLevel']+=alcohol
        obj['handsShaking'] = false
    }
    console.log(obj)
    return obj
}
solve({ weight: 80,
    experience: 1,
    bloodAlcoholLevel: 0,
    handsShaking: true }
)