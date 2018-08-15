function solve(input) {
    let startPoint = +input[0]
    let endPoint = +input[1]
    let rightWord = input[2]
    let text = input[3]

    let match = text.match(/\b[A-Z]{1}.+[A-Z]{1}\b/g)
    let country = match[0]
    let toreplays = country.slice(startPoint, endPoint+1)
    let country1 = country.replace(toreplays , rightWord)
    let charToChange = country1[country1.length-1]
    country1 = country1.replace(charToChange, charToChange.toLowerCase())


    let pattern = /[0-9]{3}(?:\.?[0-9]+)?/g

    let nums
    let word = ''
    while(nums = pattern.exec(text)){
        let numToChange = Math.ceil(+nums[0])
        if(numToChange<1000 && numToChange>99) {
            word += String.fromCharCode(numToChange)
        }
    }
    charToChange = word[0]
    word = word.replace(charToChange, charToChange.toUpperCase())
    console.log(`${country1} => ${word}`)

}
solve(["3", "3", "g","114 sDfia 1, riDl10 conf1111in$4%#ed117 likewise it humanity aTe114.223432 BultoriA - Varnd railLery101 an unpacked as he"])
solve(["1", "4","loveni", "SerbiA 67 – sDf1d17ia aTe 1, 108 confin$4%#ed likewise it humanity  Bulg35aria - VarnA railLery1a0s1 111 an unpacked as 109 he"])