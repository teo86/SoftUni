function solve(arr, str) {
    let obj = {
        'asc': function () {
            arr.sort((a,b)=> a-b)
        },
        'desc': function () {
            arr.sort((a,b)=>b-a)
        }
    }
    obj[str]()
    return arr
}
solve([14, 7, 17, 6, 8], 'asc')