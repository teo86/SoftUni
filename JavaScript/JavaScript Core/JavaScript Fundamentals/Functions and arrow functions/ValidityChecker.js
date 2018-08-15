function solve(input) {

    let pointA = {x:input[0], y:input[1]}
    let pointB = {x:input[2], y:input[3]}
    let point0 = {x:0 , y:0}
    let val1 = 'invalid'
    let val2 = 'invalid'
    let val3 = 'invalid'

    if (check(pointA,point0)){
        val1 = 'valid'
    }
    if (check(pointB,point0)){
        val2 = 'valid'
    }
    if (check(pointA,pointB)){
        val3 = 'valid'
    }

    console.log(`{${pointA.x}, ${pointA.y}} to {0, 0} is ${val1}`)
    console.log(`{${pointB.x}, ${pointB.y}} to {0, 0} is ${val2}`)
    console.log(`{${pointA.x}, ${pointA.y}} to {${pointB.x}, ${pointB.y}} is ${val3}`)

    function check(a,b) {

        let d1 = Math.sqrt(((a.x - b.x)**2)+((a.y - b.y)**2))

        if(Number.isInteger(d1) ) {
            return true;
        }
        return false;

    }
    
}
solve([2,1,1,1])