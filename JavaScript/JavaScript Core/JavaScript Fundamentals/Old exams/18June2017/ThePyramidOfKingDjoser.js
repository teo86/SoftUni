function solve(base, increment) {
    let stone =0
    let marble = 0
    let lapiz = 0
    let gold =0
    let count = 0
    while(base>2){
        count++
        let totalBlocs = base*base
        if(count%5 !== 0 ) {
            marble += ((base-1) * 4)
            stone+= (totalBlocs-((base-1) * 4))
        } else {
            lapiz += ((base-1) * 4)
            stone+= (totalBlocs-((base-1) * 4))
        }
        base -= 2
    }

    stone = Math.ceil(stone*increment)
    marble = Math.ceil(marble*increment)
    lapiz = Math.ceil(lapiz*increment)
    gold += Math.ceil(base*base*increment)
    let height = Math.floor((count+1) * increment)

    console.log(`Stone required: ${stone}\nMarble required: ${marble}\nLapis Lazuli required: ${lapiz}\nGold required: ${gold}\nFinal pyramid height: ${height}`
)

}
solve(12, 1)