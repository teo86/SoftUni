function solve(num) {

    function sumNum(num){

        let check = String(num)
        let sum = 0

        for (let i = 0; i < check.length; i++) {
            sum+=Number(check[i])

        }
        return sum / check.length;
    }

    let result = String(num)

    while(sumNum(result)<=5){
        result+='9'

    }
    console.log(result)


}
solve(101)