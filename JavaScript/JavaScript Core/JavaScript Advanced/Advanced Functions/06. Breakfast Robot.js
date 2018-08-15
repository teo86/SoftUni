let manager = (function ()  {
    let ingredients = {};
    ingredients['protein'] = 0;
    ingredients['carbohydrate'] = 0;
    ingredients['fat'] = 0;
    ingredients['flavour'] = 0;


    return function (comm) {
        let tokens = comm.split(' ')
        let action = tokens[0]
        let microelement = tokens[1]
        let quantity = tokens[2]
        switch(action) {
            case 'restock':
                quantity = Number(quantity)
                ingredients[microelement] += quantity
                return 'Success'
            case 'prepare':
                let message = ''
                switch (microelement) {
                    case 'apple':
                        if (ingredients['flavour'] < quantity * 2) {
                            message = 'Error: not enough flavour in stock'
                        }
                        if (ingredients['carbohydrate'] < quantity) {
                            message = 'Error: not enough carbohydrate in stock'
                        }
                        if (message === '') {
                            ingredients['flavour'] -= (quantity * 2)
                            ingredients['carbohydrate'] -= quantity
                            message = 'Success'
                        }
                        return message

                    case 'coke':
                        if (ingredients['flavour'] < quantity * 20) {
                            message = 'Error: not enough flavour in stock'
                        }
                        if (ingredients['carbohydrate'] < quantity * 10) {
                            message = 'Error: not enough carbohydrate in stock'
                        }
                        if (message === '') {
                            ingredients['flavour'] -= (quantity * 20)
                            ingredients['carbohydrate'] -= (quantity * 10)
                            message = 'Success'
                        }
                        return message
                    case 'burger':
                        if (ingredients['flavour'] < quantity * 3) {
                            message = 'Error: not enough flavour in stock'
                        }
                        if (ingredients['fat'] < quantity * 7) {
                            message = 'Error: not enough fat in stock'
                        }
                        if (ingredients['carbohydrate'] < quantity * 5) {
                            message = 'Error: not enough carbohydrate in stock'
                        }
                        if (message === '') {
                            ingredients['flavour'] -= (quantity * 3)
                            ingredients['fat'] -= (quantity * 7)
                            ingredients['carbohydrate'] -= (quantity * 5)
                            message = 'Success'
                        }
                        return message

                    case 'omelet':
                        if (ingredients['flavour'] < quantity) {
                            message = 'Error: not enough flavour in stock'
                        }
                        if (ingredients['fat'] < quantity) {
                            message = 'Error: not enough fat in stock'
                        }
                        if (ingredients['protein'] < quantity * 5) {
                            message = 'Error: not enough protein in stock'
                        }

                        if (message === '') {
                            ingredients['flavour'] -= quantity
                            ingredients['fat'] -= quantity
                            ingredients['protein'] -= (quantity * 5)
                            message = 'Success'
                        }
                        return message

                    case 'cheverme':
                        if (ingredients['flavour'] < quantity * 10) {
                            message = 'Error: not enough flavour in stock'
                        }
                        if (ingredients['fat'] < quantity * 10) {
                            message = 'Error: not enough fat in stock'
                        }
                        if (ingredients['carbohydrate'] < quantity * 10) {
                            message = 'Error: not enough carbohydrate in stock'
                        }
                        if (ingredients['protein'] < quantity * 10) {
                            message = 'Error: not enough protein in stock'
                        }

                        if (message === '') {
                            ingredients['flavour'] -= (quantity * 10)
                            ingredients['fat'] -= (quantity * 10)
                            ingredients['carbohydrate'] -= (quantity * 10)
                            ingredients['protein'] -= (quantity * 10)
                            message = 'Success'
                        }
                        return message

                }

            case 'report':
                return `protein=${ingredients['protein']} carbohydrate=${ingredients['carbohydrate']} fat=${ingredients['fat']} flavour=${ingredients['flavour']}`

        }
    }
})()
console.log(manager("restock carbohydrate 100"))
console.log(manager("restock flavour 100"))
console.log(manager("restock protein 100"))
console.log(manager("restock fat 100"))
console.log(manager("report"))
console.log(manager("prepare coke 2"))
console.log(manager("report"))
console.log(manager("prepare omelet 1"))
console.log(manager("report"))
