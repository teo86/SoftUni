function solve() {
    let myObj = {
        extend: function (obj) {
            for (let parentProp of Object.keys(obj)) {
                if(typeof obj[parentProp] === "function"){
                    Object.getPrototypeOf(myObj)[parentProp] = obj[parentProp]
                } else{
                    myObj[parentProp] = obj[parentProp]
                }
            }
        }
    }
    return myObj
}
solve()