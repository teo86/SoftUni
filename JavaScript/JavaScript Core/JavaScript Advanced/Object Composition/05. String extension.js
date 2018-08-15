(function () {
    String.prototype.ensureStart = function (str){
        let toCheck = this.substr(0,str.length)
        if(toCheck!==str){
            return (str + this)
        }
        return '' + this
    }
    String.prototype.ensureEnd = function (str) {
        let toCheck = this.substr(-str.length)
        console.log(toCheck)
        if(toCheck!==str){
            return (this + str)
        }
        return '' + this
    }
    String.prototype.isEmpty = function () {
        if(this.toString() === ''){
            return true
        }
        return false
    }
    String.prototype.truncate = function (n) {
        let str = '' + this
        if(str.length<=n){
            return str
        }
        else{
            let arr = str.split(' ').filter(x => x!=='')
            if(n<=3){
                str = '.'.repeat(n)
                return str
            }

            if(arr[0].length >=n){
                str = arr[0].substr(0, n-3)+'...'
                return str
            } else {
                str = arr[0]
                for (let i = 1; i < arr.length; i++) {
                    if(str.length+arr[i].length+4<=n) {
                        str += ' ' + arr[i]
                    } else {
                        break
                    }
                }
                str+='...'
                return str
            }

        }
    }
    String.format = function (str,...arr) {
        for (let i = 0; i < arr.length; i++) {
            let repl = `{${i}}`
            str = str.replace(repl,arr[i])

        }
        return str
    }
})()
let str = 'the quick brown fox jumps over the lazy dog'
str = str.truncate(45)
console.log(str)
str = str.truncate(43)
console.log(str)
str = str.truncate(25)
console.log(str)
str = str.truncate(10)
console.log(str)
console.log(String.hasOwnProperty('format'))