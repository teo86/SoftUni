function solve(arrObj, matrix) {
    let kingdoms = {}

    for (let obj of arrObj) {
        if(!kingdoms.hasOwnProperty(obj['kingdom'])){
            kingdoms[obj['kingdom']] = {}
        }
        if(!kingdoms[obj['kingdom']].hasOwnProperty(obj['general'])){
            kingdoms[obj['kingdom']][obj['general']] = {army: 0, win:0, lose: 0}
        }
        kingdoms[obj['kingdom']][obj['general']].army += +obj['army']
        kingdoms[obj['kingdom']]['wins']= 0
        kingdoms[obj['kingdom']]['lose']= 0
    }
    if(matrix) {
        for (let arr of matrix) {
            let attK = arr[0]
            let attG = arr[1]
            let defK = arr[2]
            let defG = arr[3]
            if (attK !== defK) {
                if (kingdoms[attK][attG]['army'] > kingdoms[defK][defG]['army']) {
                    kingdoms[attK].wins += 1
                    kingdoms[defK].lose += 1
                    kingdoms[attK][attG]['win'] += 1
                    kingdoms[defK][defG]['lose'] += 1
                    kingdoms[attK][attG]['army'] = Math.floor(kingdoms[attK][attG]['army'] + (kingdoms[attK][attG]['army'] * 0.1))
                    kingdoms[defK][defG]['army'] = Math.floor(kingdoms[defK][defG]['army'] - (kingdoms[defK][defG]['army'] * 0.1))
                } else if (kingdoms[attK][attG]['army'] < kingdoms[defK][defG]['army']) {
                    kingdoms[defK].wins += 1
                    kingdoms[attK].lose += 1
                    kingdoms[attK][attG]['lose'] += 1
                    kingdoms[defK][defG]['win'] += 1
                    kingdoms[defK][defG]['army'] = Math.floor(kingdoms[defK][defG]['army'] + (kingdoms[defK][defG]['army'] * 0.1))
                    kingdoms[attK][attG]['army'] = Math.floor(kingdoms[attK][attG]['army'] - (kingdoms[attK][attG]['army'] * 0.1))
                }
            }


        }
    }
    let winner = Object.keys(kingdoms).sort((a,b) => {
        if(kingdoms[b].wins > kingdoms[a].wins){
            return 1
        } else if (kingdoms[a].wins > kingdoms[b].wins){
            return -1
        }else {
            if(kingdoms[b].lose > kingdoms[a].lose){
                return -1
            } else if(kingdoms[b].lose < kingdoms[a].lose){
                return 1
            } else {
                return a.localeCompare(b )
            }
        }

    } )
    let sortedGenerals = Object.keys(kingdoms[winner[0]]).filter(a => a!=='wins' && a!=='lose').sort((a,b)=>{
        if(kingdoms[winner[0]][a].army > kingdoms[winner[0]][b].army){
            return -1
        } else {
            return 1
        }
    })

    console.log(`Winner: ${winner[0]}`)
    for (let gen of sortedGenerals) {
        console.log(`/\\general: ${gen}`)
        console.log(`---army: ${kingdoms[winner[0]][gen].army}`)
        console.log(`---wins: ${kingdoms[winner[0]][gen].win}`)
        console.log(`---losses: ${kingdoms[winner[0]][gen].lose}`)

    }
    //console.log(sortedGenerals)
    //console.log(kingdoms)
}
solve([ { kingdom: "Maiden Way", general: "Merek", army: 5000 },
        { kingdom: "Stonegate", general: "Ulric", army: 4900 },
        { kingdom: "Stonegate", general: "Doran", army: 70000 },
        { kingdom: "YorkenShire", general: "Quinn", army: 0 },
        { kingdom: "YorkenShire", general: "Quinn", army: 2000 },
        { kingdom: "Maiden Way", general: "Berinon", army: 100000 } ]
    /*[ ["YorkenShire", "Quinn", "Stonegate", "Ulric"],
        ["Stonegate", "Ulric", "Stonegate", "Doran"],
        ["Stonegate", "Doran", "Maiden Way", "Merek"],
        ["Stonegate", "Ulric", "Maiden Way", "Merek"],
        ["Maiden Way", "Berinon", "Stonegate", "Ulric"] ]*/
)