function solve(input) {
    let rotation  = Number(input.pop())
    rotation = rotation % input.length

    for (let i = 0; i < rotation; i++) {
        input.unshift(input.pop())

    }
    console.log(input.join(' '))
}
solve(['Banana','Orange','Coconut','Apple','15'])