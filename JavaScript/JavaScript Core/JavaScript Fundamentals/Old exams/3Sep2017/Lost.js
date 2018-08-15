function solve(keyWord, text) {
    let regex = new RegExp(keyWord+ '(.+)' + keyWord,'gm')
    let message = regex.exec(text)
    message = message[1]

    let pattern = /.?\s*?(north|east){1}.*?\s??([0-9]{2}).*?\s*?,.*?\s*?([0-9]{6})/gmi
    let northStr
    let eastStr
    let match
    while (match = pattern.exec(text)){
        if(match[1].toLowerCase() === 'north'){
            northStr = match[2]+  '.'+ match[3] + ' N'
        } else {
            eastStr = match[2]+  '.'+ match[3] + ' E'
        }
    }

    console.log(northStr + '\n' + eastStr +'\n'+ 'Message: ' + message)

}

solve('4ds',
'eaSt 19,432567noRt north east 53,123456north 43,3213454dsNot all those who wander are lost.4dsnorth 47,874532'
)
solve('keyword',
    '\tkeyword  let them eat cake!keywordNORTHEASTNORTH again42,north234567,dsae345East\t23,\n432568')