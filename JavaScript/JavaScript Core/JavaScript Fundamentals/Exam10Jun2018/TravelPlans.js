function solve(input) {
    let total =0
    let specilized =0
    let clumsy =0
    for (let str of input) {
        let [proffesion, offer] = str.split(' : ')
        if(+offer >= 200){
            if( proffesion==='Programming' ||proffesion==='Hardware maintenance' ||
                proffesion==='Cooking' ||proffesion==='Translating' ||proffesion==='Designing'){
                specilized++
                total+= +offer - (+offer*0.2)
                if(specilized%2 === 0){
                    total+=200
                }
            }
        }
        if(proffesion==='Driving' || proffesion==='Managing' ||
            proffesion==='Fishing' ||proffesion==='Gardening'){
            total+= +offer

        } else if(proffesion==='Singing' ||proffesion==='Accounting' ||proffesion==='Teaching' ||
            proffesion==='Exam-Making' ||proffesion==='Acting' ||proffesion==='Writing' ||
            proffesion==='Lecturing' ||proffesion==='Modeling' ||proffesion==='Nursing'){
            clumsy++
            if(clumsy%2===0){
                total+= +offer-(+offer*0.05)
            } else if(clumsy%3===0){
                total+= +offer-(+offer*0.10)
            }else{
                total+= +offer
            }

        }

    }
    console.log(`Final sum: ${total.toFixed(2)}`)
    if(total>=1000){
        console.log(`Mariyka earned ${(total-1000).toFixed(2)} gold more.`)
    } else{
        console.log(`Mariyka need to earn ${(1000-total).toFixed(2)} gold more to continue in the next task.`)
    }
}
solve(["Programming : 500", "Driving : 243", "Singing : 100", "Cooking : 199"])
solve(["Programming : 500", "Driving : 243.55", "Acting : 200", "Singing : 100", "Cooking : 199", "Hardware maintenance : 800", "Gardening : 700", "Programming : 500"])