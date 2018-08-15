function solve(input) {
    let result = new Set()
    for (let str of input) {
        result.add(str)
    }
    let output = []
    for (let name of result) {
        output.push(name)
    }
    output.sort((a,b) => {
        if(a.length>b.length){
            return 1
        } else if(a.length<b.length){
            return -1
        }
        return a.localeCompare(b)
    })

    console.log(output.join("\n"))
}
solve(['Ashton','Kutcher','Ariel','Lilly','Keyden','Aizen','Billy','Braston'])