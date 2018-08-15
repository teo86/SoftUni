class Stringer {
    constructor(string, length){
        this.innerString = string
        this.innerLength = length
    }

    increase(num) {
        return this.innerLength+=num
    }
    decrease(num){
        this.innerLength-=num
        if(this.innerLength<0){
            return this.innerLength =0
        } else {
            return this.innerLength
        }
    }
    toString(){
        let output = ''
        if(this.innerLength>= this.innerString.length){
            output = this.innerString
        } else {
            for (let i = 0; i < this.innerLength; i++) {
                output+=this.innerString[i]
            }
            output+='...'
        }
        return output
    }
}
let test = new Stringer("Test", 5);
console.log(test.toString()); //Test

test.decrease(3);
console.log(test.toString()); //Te...

test.decrease(5);
console.log(test.toString()); //...

test.increase(4);
console.log(test.toString()); //Test
