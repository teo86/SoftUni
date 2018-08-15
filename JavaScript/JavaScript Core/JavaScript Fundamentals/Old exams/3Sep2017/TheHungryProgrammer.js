function solve(food,commands) {

    let count = 0

    for (let i = 0; i < commands.length; i++) {
        if(commands[i] === 'End'){
            if(food.length>0){
                console.log(`Meals left: ${food.join(', ')}`)
            } else {
                console.log('The food is gone')
            }
            console.log(`Meals eaten: ${count}`)
            return
        }
        let [command, str1, str2] = commands[i].split(' ')

        switch(command){
            case 'Serve':
                if(food.length>0){
                    let meal = food.pop()
                    console.log(meal + ' served!')
                }
                break;
            case 'Add':
                if(str1) {
                    food.unshift(str1)
                }
                break;
            case 'Shift':
                if(str1 && str2 && +str1>=0 && +str2>=0 && +str1<food.length && +str2<food.length){
                    let temp = food[+str1]
                    food[+str1] = food[+str2]
                    food[+str2] = temp
                }
                break;
            case 'Eat':
                if(food.length>0){
                    let meal = food.shift()
                    console.log(meal + ' eaten')
                    count++
                }
                break;
            case 'Consume':
                if(str1 && str2 && +str1>=0 && +str2>=0 && +str1<food.length && +str2<food.length && +str1<=+str2){
                    food.splice(+str1, +str2+1 - str1)
                    count+= (+str2+1 - +str1)
                    console.log('Burp!')
                }

                break;
        }


    }

}
solve(['fries', 'fish', 'beer', 'chicken', 'beer', 'eggs'],
    ['Add spaghetti',
        'Shift 0 1',
        'Consume 1 4',
        'End']
)
solve(['bacon', 'veggies', 'chicken'],
    ['Add',
        'End',]
)
solve(['chicken', 'steak', 'eggs'],
    ['Serve',
        'Eat',
        'End',
        'Consume 0 1']
)