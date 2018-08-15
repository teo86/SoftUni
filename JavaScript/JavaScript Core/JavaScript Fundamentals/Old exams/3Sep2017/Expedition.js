function solve(matrix ,secondaryMatrix, coord, startCoord) {

    for (let co of coord) {

        let x = co[0]
        let y = co[1]

        if(x>=0 && x< matrix.length && y>=0 && y<matrix[0].length){
            let xEnd = x+secondaryMatrix.length
            let yEnd =y+secondaryMatrix[0].length
            if(xEnd>matrix.length){
                xEnd=matrix.length
            }
            if(yEnd>matrix[0].length){
                yEnd=matrix[0].length
            }
            for (let row = x; row < xEnd; row++) {
                for (let col = y; col < yEnd; col++) {
                    if(secondaryMatrix[row-x][col-y] ===1 ){
                        if(matrix[row][col] === 0){
                            matrix[row][col]=1
                        } else {
                            matrix[row][col] = 0
                        }
                    }
                }
            }
        }
    }
    let path = []
    let bool = true
    //path.push(startCoord)
    //let x = startCoord[0]
    //let y = startCoord[1]
    let point = {x:startCoord[0],y:startCoord[1]}
    //console.log(matrix)


        path.push(`x${+point.x},y${+point.y}`)
        point = chooseSide(point)
     while(bool){
        let xa = +point.x
        let ya = +point.y
        if(xa + 1>=matrix.length){
            console.log(path.length)
            return console.log('Bottom')
        } else if(xa - 1<0){
            console.log(path.length)
            return console.log('Top')
        } else if(ya + 1>=matrix[point.x].length){
            console.log(path.length)
            return console.log('Right')
        } else if(ya - 1 <0){
            console.log(path.length)
            return console.log('Left')
        } else {
            point = chooseSide(point)
        }
    }
    function chooseSide(p) {
        let xa = +p.x
        let ya = +p.y
        let pr = `x${xa},y${ya+1}`//{x:xa,y:ya+1}
        let pl = `x${xa},y${ya-1}`//{x:xa,y:ya-1}
        let pd = `x${xa+1},y${ya}`//{x:xa+1,y:ya}
        let pu = `x${xa-1},y${ya}`//{x:xa-1,y:ya}
        if(ya+1 <matrix[xa].length && matrix[xa][ya+1]===0 && !path.includes(pr)){
            ya++
            p.y = ya
            path.push(`x${p.x},y${p.y}`)
            return p
        } else if(ya-1>=0 && matrix[xa][ya-1]===0&& !path.includes(pl)){
            ya--
            p.y = ya
            path.push(`x${p.x},y${p.y}`)
            return p
        } else if(xa+1<matrix.length && matrix[xa+1][ya]===0&& !path.includes(pd)){
            xa++
            p.x = xa
            path.push(`x${p.x},y${p.y}`)
            return p
        } else if(xa-1>=0 && matrix[xa-1][ya]===0 && !path.includes(pu)){
            xa--
            p.x = xa
            path.push(`x${p.x},y${p.y}`)
            return p
        } else {
            console.log(path.length)
            let quadrant
            if(xa< matrix.length/2 && ya>=matrix[xa].length/2){
                quadrant = 1
            } else if(xa< matrix.length/2 &&  ya < matrix[xa].length/2){
                quadrant = 2
            } else if(xa>= matrix.length/2 && ya<matrix[xa].length/2){
                quadrant = 3
            } else {
                quadrant = 4
            }
            bool = false
            return console.log(`Dead end ${quadrant}`)
        }

    }

    //console.log(matrix)
}
/*solve([[1, 1, 0, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 0, 0, 0, 1],
        [1, 0, 0, 1, 0, 0, 0, 1],
        [0, 0, 0, 1, 1, 0, 0, 1],
        [1, 0, 0, 1, 1, 1, 1, 1],
        [1, 0, 1, 1, 0, 1, 0, 0]],
    [[0, 1, 1],
        [0, 1, 0],
        [1, 1, 0]],
    [[1, 1],
        [2, 3],
        [5, 3]],
    [0, 2]

)*/
solve([[0, 0, 1, 0, 1, 0, 1, 1, 1, 1],
    [1, 0, 1, 0, 1, 1, 1, 0, 0, 1],
    [0, 0, 1, 0, 1, 0, 0, 1, 0, 1],
    [0, 0, 0, 0, 0, 0, 1, 1, 0, 1],
    [0, 1, 1, 0, 1, 1, 0, 1, 0, 1],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 1, 1, 0, 1],
    [1, 0, 1, 1, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 1, 0, 1, 1, 1, 0],
    [1, 0, 0, 0, 1, 1, 1, 1, 0, 0]],
    [[1, 1, 0, 1, 0, 1],
        [0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1],
        [1, 0, 1, 0, 1, 0],
        [1, 1, 1, 0, 1, 1],
        [1, 0, 1, 0, 1, 1]],
    [[0, 0],
        [1, 1],
        [5, 4],
        [7, 1]],
    [8, 9]
    )
