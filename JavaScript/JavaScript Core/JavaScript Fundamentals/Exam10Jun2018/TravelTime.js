function solve(input) {
    let result = {}

    for (let str of input) {
        let [country,townInput,price] = str.split(' > ')
        price = +price
        let town =''
         if(townInput.charCodeAt(0)>=97 && townInput.charCodeAt(0)<=122) {
             town += townInput[0].toUpperCase()
             for (let i = 1; i < townInput.length; i++) {
                 town += townInput[i]

             }
         }else{
            town = townInput
         }

         if(!result.hasOwnProperty(country)){
            result[country] = {}
         }
         if(!result[country].hasOwnProperty(town)){
            result[country][town] = price
         } else {
            if(result[country][town]>price){
                result[country][town] = price
            }
         }

    }
    let sortedCountryes = Object.keys(result).sort((a,b)=> a.localeCompare(b))

    for (let country of sortedCountryes) {
        let sortedCities = Object.keys(result[country]).sort((a,b)=>{
            return result[country][a] - result[country][b]
        })
        let output = country +' ->'
        for (let city of sortedCities) {
            output+=' '+ city + ' -> ' + result[country][city]
        }
        console.log(output)
    }

}
solve(["Bulgaria > Sofia > 500",
    "Bulgaria > sopot > 800",
    "Bulgaria > silistra > 50",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200" ]
)