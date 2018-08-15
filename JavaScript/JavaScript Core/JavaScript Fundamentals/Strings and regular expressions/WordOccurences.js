function solve(sentense,word) {
    let regex = new RegExp(`\\b${word}\\b`,'gi')
    let count = 0
    let match
    while(match = regex.exec(sentense)){
        count++
    }
    console.log(count)
}
solve('There was one. Therefore I bought it. I wouldn�t buy it otherwise.','there')
solve('How do you plan on achieving that? How? How can you even think of that?','how')