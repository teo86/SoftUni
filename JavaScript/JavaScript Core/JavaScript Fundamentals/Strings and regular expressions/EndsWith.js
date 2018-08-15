function solve(str,substr) {
    if(str.substring(str.length-substr.length)===substr){
        console.log('true')
    } else {
        console.log('false')
    }
}
solve('The new iPhone has no headphones jack.','o headphones jack.')