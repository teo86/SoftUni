function solve(str,substr) {
    if(str.substring(0,substr.length)===substr){
        console.log('true')
    } else {
        console.log('false')
    }

}
solve('Marketing Fundamentals, starting 19/10/2016','Marketing Fundamentals, sta')