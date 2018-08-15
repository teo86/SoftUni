function solve(input) {

    for (let i = 0; i < input.length; i+=2) {
        let a = input[i]
        let b = input[i+1]

        checkLocation(a,b)
    }

    function checkLocation(a,b){

        if(a>=8 && a<=9 && b>=0 && b<=1){
            console.log('Tokelau')
        } else if (a>=1 && a<=3 && b>=1 && b<=3){
            console.log('Tuvalu')
        } else if (a>=5 && a<=7 && b>=3 && b<=6) {
            console.log('Samoa')
        } else if(a>=0 &&a<=2 && b>=6 && b<=8) {
            console.log('Tonga')
        } else if(a>=4 && a<=9 && b>=7 &&b<=8) {
            console.log('Cook')
        } else {
            console.log('On the bottom of the ocean')
        }
    }

}
solve([4,2,1.5,6.5,1,3])