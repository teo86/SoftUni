function solve(input) {
    let point1 = {x:input[0], y:input[1]}
    let point2 = {x:input[2], y:input[3]}
    let point3 = {x:input[4], y:input[5]}

    function calculateDistance(a,b,c) {

        let distance123 = Math.sqrt(((a.x-b.x)**2)+((a.y-b.y)**2))+
            Math.sqrt(((b.x-c.x)**2)+((b.y-c.y)**2))
        let distance213 = Math.sqrt(((a.x-b.x)**2)+((a.y-b.y)**2))+
            Math.sqrt(((a.x-c.x)**2)+((a.y-c.y)**2))
        let distance132 = Math.sqrt(((a.x-c.x)**2)+((a.y-c.y)**2))+
            Math.sqrt(((b.x-c.x)**2)+((b.y-c.y)**2))

        if(distance123<=distance132 && distance123<=distance213){
            console.log(`1->2->3: ${distance123}`)
        } else if(distance132 < distance123 && distance132<=distance213){
            console.log(`1->3->2: ${distance132}`)
        } else {
            console.log(`2->1->3: ${distance213}`)
        }
    }

    calculateDistance(point1,point2,point3)


}
solve([-1,-2,3.5,0,0,2])