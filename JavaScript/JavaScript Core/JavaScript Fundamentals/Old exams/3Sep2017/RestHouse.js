function solve(input) {
    let rooms = input[0]
    let guests = input[1]

    let doubleRooms = []
    let tripleRooms = []
    for (let room of rooms) {
        if(room['type']==='triple'){
            tripleRooms.push(room.number)
        } else {
            doubleRooms.push(room.number)
        }
    }

    let tea = 0

    let double = {}
    let triple ={}

    for (let guest of guests) {
        if(guest['first']['gender']!==guest['second']['gender']){
            let accomodate = false
            for (let room of doubleRooms) {
                if(!double.hasOwnProperty(room)){
                    double[room] = []
                    double[room].push({name:guest['first']['name'], age:guest['first']['age']})
                    double[room].push({name:guest['second']['name'], age:guest['second']['age']})
                    accomodate =true
                    break
                }
            }
            if(accomodate===false){
                let count = 0
                for (let room of tripleRooms) {
                    if(triple[room].length<3 ){
                        if(triple[room][0].gender === guest['first']['gender']){
                            count++
                            triple[room].push({name:guest['first']['name'], age:guest['first']['age'], gender:guest['first']['gender']})
                            delete guest['first']
                        }else if(triple[room][0].gender === guest['second']['gender']){
                            count++
                            triple[room].push({name:guest[second][name], age:guest[second][age], gender:guest[second][gender]})
                            delete guest[second]
                        }
                    }
                }
                tea+=2-count
            }
        } else {
            let accomodate = false
            for (let room of tripleRooms) {
                if(!triple.hasOwnProperty(room)){
                    triple[room] = []
                    triple[room].push({name:guest['first']['name'], age:guest['first']['age'], gender:guest['first']['gender']})
                    triple[room].push({name:guest['second']['name'], age:guest['second']['age'], gender:guest['second']['gender']})
                    accomodate = true
                    break
                }
            }
            if(accomodate===false){
                let count = 0
                for (let room of tripleRooms) {
                    if(triple[room].length<3 && triple[room][0]['gender'] === guest['first']['gender']){
                        if(triple[room].length===1 && count ===0){
                            triple[room].push({name:guest['first']['name'], age:guest['first']['age'], gender:guest['first']['gender']})
                            triple[room].push({name:guest['second']['name'], age:guest['second']['age'], gender:guest['second']['gender']})
                            count = 2
                        }else if(count===0){
                            triple[room].push({name:guest['first']['name'], age:guest['first']['age'], gender:guest['first']['gender']})
                            count++
                        } else {
                            triple[room].push({name:guest['second']['name'], age:guest['second']['age'], gender:guest['second']['gender']})
                            count++
                        }
                    }
                }
                tea+=2-count
            }

        }


    }
    doubleRooms.sort((a,b)=> a.localeCompare(b))
    tripleRooms.sort((a,b)=> a.localeCompare(b))

    for (let room of doubleRooms) {
        console.log(room)
        let sortedNames = Object.keys(double[room]).sort((a,b)=>a.localeCompare(b))
        console.log(sortedNames)
        if(sortedNames.length>-1){
            for (let name of sortedNames) {
                console.log(name)
                console.log(double[room][name]['age'])
            }
        }
    }
    console.log(double)
    console.log(triple)

}
solve([[ { number: '206', type: 'double-bedded' },
        { number: '311', type: 'triple' } ],
    [ { first: { name: 'Tanya Popova', gender: 'female', age: 24 },
        second: { name: 'Miglena Yovcheva', gender: 'female', age: 23 } },
        { first: { name: 'Katerina Stefanova', gender: 'female', age: 23 },
            second: { name: 'Angel Nachev', gender: 'male', age: 22 } },
        { first: { name: 'Tatyana Germanova', gender: 'female', age: 23 },
            second: { name: 'Boryana Baeva', gender: 'female', age: 22 } } ]]
)
/*
solve([[{ number: '101A', type: 'double-bedded' },{ number: '104', type: 'triple' },{ number: '101B', type: 'double-bedded' },{ number: '102', type: 'triple' } ],
    [ { first: { name: 'Sushi & Chicken', gender: 'female', age: 15 },second: { name: 'Salisa Debelisa', gender: 'female', age: 25 }},{ first: { name: 'Daenerys Targaryen', gender: 'female', age: 20 },
            second: { name: 'Jeko Snejev', gender: 'male', age: 18 } },
        { first: { name: 'Pesho Goshov', gender: 'male', age: 20 },
            second: { name: 'Gosho Peshov', gender: 'male', age: 18 } },
        { first: { name: 'Conor McGregor', gender: 'male', age: 29 },
            second: { name: 'Floyd Mayweather', gender: 'male', age: 40 } } ]]
)*/
