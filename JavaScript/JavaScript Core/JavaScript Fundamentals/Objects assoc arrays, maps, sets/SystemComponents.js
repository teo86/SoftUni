function solve(input) {
    let result = {}

    for (let str of input) {
        let [system, component, subcomp] = str.split(' | ')

        if(!result.hasOwnProperty(system)){
            result[system] = new Object()
        }
        if(!result[system].hasOwnProperty(component)){
            result[system][component] = []
        }
        result[system][component].push(subcomp)
    }
    let firstSort = Object.keys(result)
        .sort((a,b) => {
            if(Object.keys(result[a]).length>Object.keys(result[b]).length){
                return -1
            } else if(Object.keys(result[a]).length < Object.keys(result[b]).length){
                return 1
            }
            return a.toLowerCase().localeCompare(b.toLowerCase())
    })
    for (let key of firstSort) {
        let secondSort = Object.keys(result[key]).sort((a,b) => {
            if(result[key][a].length > result[key][b].length){
                return -1
            } else if (result[key][a].length < result[key][b].length){
                return 1
            }
            return a.toLowerCase().localeCompare(b.toLowerCase())
        })
        console.log(key)
        for (let inKey of secondSort) {
            console.log('|||' + inKey)
            for (let i = 0; i < result[key][inKey].length; i++) {
                console.log('||||||' + result[key][inKey][i])

            }
        }
    }

}
solve(['SULS | Main Site | Home Page',
'SULS | Main Site | Login Page',
'SULS | Main Site | Register Page',
'SULS | Judge Site | Login Page',
'SULS | Judge Site | Submittion Page',
'Lambda | CoreA | A23',
'SULS | Digital Site | Login Page',
'Lambda | CoreB | B24',
'Lambda | CoreA | A24',
'Lambda | CoreA | A25',
'Lambda | CoreC | C4',
'Indice | Session | Default Storage',
'Indice | Session | Default Security'])