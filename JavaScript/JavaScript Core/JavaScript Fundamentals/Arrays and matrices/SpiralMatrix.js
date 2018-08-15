function solve(row,col) {

    let matrix = []
    for (let i = 0; i < row; i++) {
        matrix.push([])

    }
    let num =1
    let startRow = 0
    let startCol = 0
    let endRow = row-1
    let endCol = col -1

    while(startRow<=endRow || startCol<= endCol){

        for (let i = startCol; i <= endCol; i++) {
            matrix[startRow][i] = num
            num++

        }
        for (let i = startRow+1; i <= endRow; i++) {
            matrix[i][endCol]=num
            num++

        }
        for (let i = endCol-1; i >= startCol; i--) {
            matrix[endRow][i] = num
            num++

        }
        for (let i = endRow-1; i >= startRow+1; i--) {
            matrix[i][startCol]=num
            num++

        }
        startRow++
        startCol++
        endRow--
        endCol--
    }
    for (let obj of matrix) {
        console.log(obj.join(' '));
    }


}
solve(3,3)
solve(5,5)