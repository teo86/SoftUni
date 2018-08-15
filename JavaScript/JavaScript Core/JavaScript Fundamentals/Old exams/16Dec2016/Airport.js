function solve(input) {
    let result = {}
    let landedPlanes = []
    let departuredPlanes = []

    for (let str of input) {
        let [plane, town, passengers, action] = str.split(' ')
        if(checkStatus(plane,action)){
            if(!result.hasOwnProperty(town)){
                result[town] = {arrivals: 0, departures: 0}
            }
            if(!result[town].hasOwnProperty(plane)){
                result[town][plane] = action
                passangers(result[town], +passengers, action)

            } else {
                passangers(result[town], +passengers, action)
                if(result[town][plane]==='land'){
                    result[town][plane] = 'depart'
                } else {
                    result[town][plane]='land'
                }
            }
        }


    }
    function checkStatus(plane, action){
        if (action === 'land'){
            if(landedPlanes.includes(plane)){
                return false
            } else {
                landedPlanes.push(plane)
                if(departuredPlanes.includes(plane)){
                    departuredPlanes.splice(departuredPlanes.indexOf(plane), 1)
                }
                return true
            }
        } else {
            if(!landedPlanes.includes(plane) || departuredPlanes.includes(plane)){
                return false
            } else {
                landedPlanes.splice(landedPlanes.indexOf(plane), 1)
                departuredPlanes.push(plane)
                return true
            }
        }
    }
    function passangers(obj, num, action) {
        if(action==='land'){
            obj.arrivals += num
        } else {
            obj.departures += num
        }
        
    }
    console.log('Planes left:')
    landedPlanes.sort((a,b) => a.toLowerCase().localeCompare(b.toLowerCase())).forEach(x => console.log('- ' + x))
    let sorted = Object.keys(result).sort((a,b) => {
        if(result[a].arrivals>result[b].arrivals) {
            return -1
        } else if(result[a].arrivals < result[b].arrivals){
            return 1
        }else {
            return a.toLowerCase().localeCompare(b.toLowerCase())
        }
    })
    for (let town of sorted) {
        console.log(town)
        console.log('Arrivals: ' + result[town].arrivals)
        console.log('Departures: ' + result[town].departures)
        let sortedPlanes = Object.keys(result[town]).sort((a,b) => a.toLowerCase().localeCompare(b.toLowerCase()))
        console.log('Planes:')
        for (let plane of sortedPlanes) {
            if(plane!=='arrivals' && plane!=='departures'){
                console.log('-- ' + plane)
            }
        }
    }
}
//solve(['Boeing474 Madrid 300 land','AirForceOne WashingtonDC 178 land','Airbus London 265 depart','ATR72 WashingtonDC 272 land','ATR72 Madrid 135 depart'])
solve(['RTA72 London 140 land',
    'RTA72 Brussels 240 depart',
    'RTA72 Sofia 450 land',
    'RTA72 Lisbon 240 depart',
    'RTA72 Berlin 350 land',
    'RTA72 Otava 201 depart',
    'RTA72 Haga 350 land',
    'RTA72 Otava 201 depart',
    'RTA72 Dortmund 150 land',
    'RTA72 Montana 243 depart',
    'RTA72 Monreal 350 land',
    'RTA72 NewYork 201 depart',
    'RTA72 Pekin 350 land',
    'RTA72 Tokyo 201 depart',
    'RTA72 Warshaw 350 land',
    'RTA72 Riga 201 depart'])