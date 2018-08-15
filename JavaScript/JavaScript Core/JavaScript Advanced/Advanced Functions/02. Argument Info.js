function solve() {
    let obj = {}
    let sorted = []

    for (let i = 0; i < arguments.length; i++) {
        let arg = arguments[i]
        let type = typeof arg
        console.log(type + ': ' + arg)

        if(!obj.hasOwnProperty(type)){
            obj[type]=1
            sorted.push(type)
        } else {
            obj[type]++
        }

    }
    sorted = sorted.sort((a,b)=> obj[b]-obj[a])
    for (let sortArg of sorted) {
        console.log(`${sortArg} = ${obj[sortArg]}`)
    }
}