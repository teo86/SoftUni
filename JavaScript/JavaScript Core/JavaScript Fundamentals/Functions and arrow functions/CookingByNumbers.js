function solve(input) {

    let num = Number(input[0])

    for (let i = 1; i < input.length; i++) {
        let operation = input[i]
        num = cookingNum(num, operation);
        console.log(num);


    }
    function cookingNum(num , operation){
        switch(operation) {
            case 'chop':
                return num / 2;
            case 'dice':
                return Math.sqrt(num);
            case 'spice':
                return num+1;
            case 'bake':
                return num*3;
            case 'fillet':
                return num - (num*0.2);
        }
    }

}
solve([9, 'dice','spice','chop','bake','fillet'])