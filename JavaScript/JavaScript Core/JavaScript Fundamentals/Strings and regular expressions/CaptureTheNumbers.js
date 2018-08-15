function solve(input) {
    let result =[]
    for (let i = 0; i < input.length; i++) {
        if(input[i].match(/\d+/g)) {
            result.push(input[i].match(/\d+/g).join(' '))
        }
    }
    console.log(result.join(' '))
}
solve(['The300','What is that?','I think it’s the 3rd movie.','Lets watch it at 22:45'])