function solve(input) {
    let arr = input.sort().sort((a,b)=> {
        if (a.length> b.length){
            return 1;
        } else if(a.length<b.length){
            return -1;
        } else {
            return 0

        }
    } )
    arr.forEach(x => console.log(x))
}
solve(['test','Deny','omen','Default'])