function solve(input) {
    let specialKey = input.shift().toLowerCase();

    for (let i = 0; i < input.length; i++) {
        let words = input[i].trim().split(' ')

        for (let j = 0; j < words.length; j++) {
            if(words[j].toLowerCase()===specialKey.toLowerCase()){
                let index =1
                while(words[j+index]===''){
                    index++
                }
                let toChange = words[j+index]
                words[j+index] = decoding(toChange)

            }

        }
        console.log(words.join(' '))

    }
    function decoding(str) {
        let word = str
        if(word.match(/[^A-Z!#%$.,]/) || word.length<8){
            return word
        }

        word = word.replace(/!/g , '1')
        word = word.replace(/%/g , '2')
        word = word.replace(/#/g , '3')
        word = word.replace(/\$/g , '4')

        for (let i = 0; i < word.length; i++) {
            if(word.charCodeAt(i)>= 65 && word.charCodeAt(i)<= 90){
                word = word.replace((word.charAt(i)),(word.charAt(i).toLowerCase()))
            } else if (word.charCodeAt(i)>= 97 && word.charCodeAt(i)<= 122){
                word = word.replace((word.charAt(i)),(word.charAt(i).toUpperCase()))
            }

        }
        return word

    }

}
solve(['test',
    'Lets do the alphabet,',
    'test ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    'hope the test WORKED,',
    'now on to testing partial things',
    'like this test here,',
    'test AABBCCDDEEFFGGHH, test IJKLMNOP',
    'test QRSTUVWXYZ.',
    '    a random test ASJGTKEWGTOQETAN and here test QWBTKQASPPM'
])
console.log()
solve(['secret',
'    Random text with secrets EVERYWHERE',
'secret HEREHERE and one secret OVERTHEREANDEVERYWHERE',
'secret SECRETTIME, and secret KINDATHERE.',
'    secret ONELINER',
'and maybe secret FALSESE or secret TRUESECRET or secret ENDONCOMA,',
'    here are three secrets one secret OVERHERE, one secret OVERTHERE and one secret DISSAPPOINT'])