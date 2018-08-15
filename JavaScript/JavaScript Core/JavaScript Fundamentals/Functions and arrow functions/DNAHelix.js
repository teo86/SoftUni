function solve(input) {

    for (let i = 0; i < input; i++) {

        let a = i%4
        let b = i%5

        console.log(draw(a,b))


    }
    function draw(a,b) {
        let str = ''
        switch (b) {
            case 0:
                str = 'AT'
                break;
            case 1:
                str = 'CG'
                break;
            case 2:
                str = 'TT'
                break;
            case 3:
                str = 'AG'
                break;
            case 4:
                str = 'GG'
                break;
        }

        let result = ''

        switch(a){
            case 0:
                result = `**${str[0]}${str[1]}**`
                return result;
            case 1:
                result = `*${str[0]}--${str[1]}*`
                return result;
            case 2:
                result = `${str[0]}----${str[1]}`
                return result;
            case 3:
                result = `*${str[0]}--${str[1]}*`
                return result;
        }

    }
}
solve(4)