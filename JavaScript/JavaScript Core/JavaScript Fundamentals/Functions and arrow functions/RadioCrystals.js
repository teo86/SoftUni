function solve(input) {

    let goal =input[0]
    for (let i = 1; i < input.length; i++) {
        let start = input[i]
        operation(start)
    }

    function operation(num) {

        let start = num
        let cut =0
        let lap =0
        let grind =0
        let etch =0

        function transportingAndWashing(num) {
            console.log('Transporting and washing')
            return Math.floor(num)
        }

        console.log(`Processing chunk ${start} microns`)

        while (start / 4 >= goal) {
            start = start / 4
            cut++
            if (start / 4 < goal) {
                console.log(`Cut x${cut}`)
                start = transportingAndWashing(start)
            }
        }
        while ((start - start * 0.2) >= goal) {
            start = start - start * 0.2
            lap++
            if ((start - start * 0.2) < goal) {
                console.log(`Lap x${lap}`)
                start = transportingAndWashing(start)
            }
        }
        while (start - 20 >= goal) {
            start = start - 20
            grind++
            if (start - 20 < goal) {
                console.log(`Grind x${grind}`)
                start = transportingAndWashing(start)
            }
        }
        while (start > goal) {
            start = start - 2
            etch++
            if (start - 2 < goal - 1) {
                console.log(`Etch x${etch}`)
                start = transportingAndWashing(start)
            }
        }
        if (start === goal - 1) {
            console.log('X-ray x1')
            start = start + 1
        }
        console.log(`Finished crystal ${start} microns`)
    }
}
solve([1000, 4000, 8100])