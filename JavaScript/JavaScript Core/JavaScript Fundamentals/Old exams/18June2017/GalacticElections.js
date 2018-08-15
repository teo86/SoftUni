function solve(input) {

    for (let i = 0; i < input.length; i++) {
        for (let j = input.length-1; j >= 0; j--) {
            if(input[i].candidate === input[j].candidate && input[i].system === input[j].system && i!==j){
                input[i].votes+=input[j].votes
                input.splice(j,1)

            }

        }


    }

    for (let i = 0; i < input.length; i++) {
        let max =input[i].votes
        for (let j = input.length-1; j >= 0; j--) {
            if(input[i].system === input[j].system && i!==j){
                max +=input[j].votes
                if(input[j].votes>= input[i].votes){
                    input[i].candidate = input[j].candidate
                    input[i].votes = input[j].votes


                }
                input.splice(j,1)
            }

        }
        input[i].votes = max

    }

    let result = {}
    let totalVotes = 0

    for (let obj of input) {
        if(!result.hasOwnProperty(obj.candidate)){
            result[obj.candidate] = 0
        }
        result[obj.candidate]+=obj.votes
        totalVotes+=obj.votes


    }

    let sortedResult = Object.keys(result).sort((a,b)=> result[b]-result[a])
    let sortedInput = input.sort((a,b) => b.votes - a.votes)


    if(Object.keys(result).length === 1 ){
        console.log(`${sortedResult[0]} wins with ${totalVotes} votes`)
        console.log(`${sortedResult[0]} wins unopposed!`)
    } else if(result[sortedResult[0]]> totalVotes/2){
        console.log(`${sortedResult[0]} wins with ${result[sortedResult[0]]} votes`)
        console.log(`Runner up: ${sortedResult[1]}`)
        for (let obj of sortedInput) {
            if(obj.candidate===sortedResult[1]){
                console.log(`${obj.system}: ${obj.votes}`)
            }
        }
    } else {
        let percent1 = Math.floor((result[sortedResult[0]]/totalVotes)*100)
        let percent2 = Math.floor((result[sortedResult[1]]/totalVotes)*100)

        console.log(`Runoff between ${sortedResult[0]} with ${percent1}% and ${sortedResult[1]} with ${percent2}%`)
    }



}

solve()