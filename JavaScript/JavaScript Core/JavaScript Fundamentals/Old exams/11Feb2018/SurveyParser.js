function solve(input) {
    let pattern = /<cat><text>((?:.|\n)*)<\/text><\/cat>\s*<cat>((?:.|\n)*)<\/cat>/g
    let match
    let section1 =''
    let section2 =''
    let match1 = input.match(/<svg>(.|\n)*<\/svg>/g)
    if(!match1){
        console.log('No survey found')
        return
    }
    while(match = pattern.exec(match1[0])){
        section1 = match[1]
        section2 = match[2]
    }

    let pattern1 = /(?:.|\n)*\[((?:.|\n)*)](?:.|\n)*/g
    let lable = ''
    let match2
    while(match2 = pattern1.exec(section1)){
        lable = match2[1]
    }
    /*while(match = pattern.exec(section2)){
        lable = match[1]
    }*/
    let nums =[]
    let count = 0
    let pattern2 = /\s*<g><val>([0-9]+)<\/val>([0-9]+)<\/g>/g
    /*while(match = pattern.exec(section1)){
        nums.push(+match[1] * +match[2])
        count+= +match[2]
    }*/
    let match3
    while(match3 = pattern2.exec(section2)){
        if(+match3[1]>0 && +match3[1]<=10){
            nums.push(+match3[1] * +match3[2])
            count+= +match3[2]
        }
    }
    if(lable==='' || nums.length===0){
        console.log('Invalid format')
    } else {
        let sum =0
        for (let i = 0; i < nums.length; i++) {
            sum+=nums[i]
        }
        if(count===0){
            console.log(`${lable}: 0`)

        }else {
            console.log(`${lable}: ${+(sum / count).toFixed(2)}`)
        }
    }


}
solve('<p>Some random text</p><svg><cat><text>How do you rate our food? [Food - General]</text></cat><cat><g><val>1</val>0</g><g><val>2</val>1</g><g><val>3</val>3</g><g><val>4</val>10</g><g><val>5</val>7</g></cat></svg><p>Some more random text</p>')
solve('<svg><cat><text>How do you rate the special menu? [Food - Special]</text></cat> <cat><g><val>1</val>5</g><g><val>5</val>13</g><g><val>10</val>22</g></cat></svg>')
solve("<p>How do you suggest we improve our service?</p><p>More tacos.</p><p>It\'s great, don\'t mess with it!</p><p>I\'d like to have the option for delivery</p>")
solve('<svg><cat><text>Which is your favourite meal [afrom our selection?</text></cat><cat><g><val>1</val>0</g><g><val>Prawns</val>31</g><g><val>Crab Langoon</val>12</g><g><val>Calamari</val>17</g></cat></svg>')