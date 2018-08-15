function solve(input) {
    let delimiter = input[1]
    let companys = input[0].split(delimiter).map(x=>x.trim())
    let valid =[]
    let invalid =[]

    for (let i = 2; i < input.length; i++) {
        let check = true
        for (let j = 0; j < companys.length; j++) {
            let toCheck = input[i].toLowerCase()
            if(toCheck.indexOf(companys[j])===-1){
                check = false
                break
            }
        }
        if(check){
            valid.push(input[i].toLowerCase())

        }else{
            invalid.push(input[i].toLowerCase())
        }

    }
    if(valid.length>=1 && invalid.length>=1){
        console.log('ValidSentences')
        for (let i = 1; i <= valid.length; i++) {
            console.log(`${i}. ${valid[i-1]}`)

        }
        console.log('='.repeat(30))
        console.log('InvalidSentences')
        for (let i = 1; i <= invalid.length; i++) {
            console.log(`${i}. ${invalid[i-1]}`)

        }
    } else if(valid.length>=1){
        console.log('ValidSentences')
        for (let i = 1; i <= valid.length; i++) {
            console.log(`${i}. ${valid[i-1]}`)

        }
    } else if(invalid.length>=1){
        console.log('InvalidSentences')
        for (let i = 1; i <= invalid.length; i++) {
            console.log(`${i}. ${invalid[i-1]}`)

        }
    }

}
solve(["bulgariatour@, minkatrans@, koftipochivkaltd",
    "@,",
    "Mincho e KoftiPochivkaLTD Tip 123  ve MinkaTrans BulgariaTour",
    "dqdo mraz some text but is KoftiPochivkaLTD MinkaTrans",
    "someone continues as no "]
)
console.log()
solve(["bulgariatour@, minkatrans@, koftipochivkaltd",
    "@,",
    "Mincho  e KoftiPochivkaLTD Tip 123  ve MinkaTrans BulgariaTour",
    "We will koftipochivkaLTD travel e expenses no MinkaTrans mu e BulgariaTour",
    "dqdo BuLGariaTOUR mraz some text but is KoftiPochivkaLTD minkaTRANS"]
)