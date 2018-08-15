function roadRadar(input) {
    let speed = Number(input[0])
    let area = input[1]
    let overSpeed = ''
    if(checkOverLimit(speed,area)){
        console.log(overSpeed)
    }

    function checkOverLimit(speed,area) {

        switch(area){
            case 'motorway':
                if(speed>130){
                    let difr = speed -130;
                    if(difr<=20){
                        overSpeed = 'speeding'
                    } else if(difr>20 && difr<=40){
                        overSpeed = 'excessive speeding'
                    } else {
                        overSpeed = 'reckless driving'
                    }
                    return true;
                } else{
                    return false
                }
            case 'interstate':
                if(speed>90){
                    let difr = speed -90;
                    if(difr<=20){
                        overSpeed = 'speeding'
                    } else if(difr>20 && difr<=40){
                        overSpeed = 'excessive speeding'
                    } else {
                        overSpeed = 'reckless driving'
                    }
                    return true;
                } else{
                    return false
                }
            case 'city':
                if(speed>50){
                    let difr = speed -50;
                    if(difr<=20){
                        overSpeed = 'speeding'
                    } else if(difr>20 && difr<=40){
                        overSpeed = 'excessive speeding'
                    } else {
                        overSpeed = 'reckless driving'
                    }
                    return true;
                } else{
                    return false
                }
            case 'residential':
                if(speed>20){
                    let difr = speed -20;
                    if(difr<=20){
                        overSpeed = 'speeding'
                    } else if(difr>20 && difr<=40){
                        overSpeed = 'excessive speeding'
                    } else {
                        overSpeed = 'reckless driving'
                    }
                    return true;
                } else{
                    return false
                }

        }

    }
}
roadRadar([21, 'residential'])