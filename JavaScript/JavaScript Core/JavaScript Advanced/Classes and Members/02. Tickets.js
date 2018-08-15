function solve(arr,str) {
    let result = []
    class Ticket {
        constructor(destination,price,status){
            this.destination = destination
            this.price = Number(price)
            this.status = status
        }
    }

    for (let string of arr) {
        let [destination,price,status] = string.split('|')
        result.push(new Ticket(destination,price,status))

    }
    if(str==='destination'){
        result.sort((a,b) => a.destination.localeCompare(b.destination))
    } else if(str==='status'){
        result.sort((a,b) => a.status.localeCompare(b.status))

    } else {
        result.sort((a,b) => a.price - b.price)
    }
    return result
}
solve(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'price'
)