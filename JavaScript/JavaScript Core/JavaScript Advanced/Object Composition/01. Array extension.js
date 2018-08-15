(function () {
    Array.prototype.last = function () {
        return this[this.length - 1]
    }
    Array.prototype.skip = function (n) {
        let result = []
        for (let i = n; i < this.length; i++) {
            result.push(this[i])
        }
        return result
    }
    Array.prototype.take = function (n) {
        let result = []
        for (let i = 0; i < n; i++) {
            result.push(this[i])
        }
        return result
    }
    Array.prototype.sum = function () {
        this.reduce((a,b)=> a+b)
        return this.reduce((a,b)=> a+b)
    }
    Array.prototype.average = function () {
        let num = this.length
        let sum = this.reduce((a,b)=> a+b)
        return sum/num
    }


})()
let arr = [1,2,3]
console.log(arr.sum());