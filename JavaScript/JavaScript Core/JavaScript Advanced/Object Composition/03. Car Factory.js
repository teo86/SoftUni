function solve(obj) {
    let carOffer = {
        model: obj['model'],
        engine: chooseEngine(obj['power']),
        carriage: chooseCariege(obj['carriage']),
        wheels: choseWheelsSize(obj['wheelsize'])
    }
    function chooseEngine(num) {
        let engine = {}
        if(num<=105){
            engine['power'] = 90
            engine['volume'] = 1800
        } else if(num<=160){
            engine['power'] = 120
            engine['volume'] = 2400
        } else {
            engine['power'] = 200
            engine['volume'] = 3500
        }
        return engine
    }
    function chooseCariege(type) {
        let carriage ={}
        if(type==='coupe'){
            carriage['type'] = 'coupe'
            carriage['color'] = obj['color']
        } else {
            carriage['type'] = 'hatchback'
            carriage['color'] = obj['color']
        }
        return carriage
    }
    function choseWheelsSize(num) {
        let wheels = []
        if(num%2===0){
            num-=1
        }
        for (let i = 0; i < 4; i++) {
            wheels.push(num)
        }
        return wheels
    }

    //console.log(carOffer)
    return carOffer
}
solve({ model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14 }
)