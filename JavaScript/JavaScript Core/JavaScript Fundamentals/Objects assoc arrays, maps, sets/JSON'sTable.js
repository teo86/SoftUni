function solve(input) {
    let result = '<table>\n'

    for (let str of input) {
        let obj = JSON.parse(str)

        result+=`  <tr>\n    <td>${obj.name}</td>\n    <td>${obj.position}</td>\n    <td>${obj.salary}</td>\n  <tr>\n`
    }
    console.log(result + '</table>')
}
solve(['{"name":"Pesho","position":"Promenliva","salary":100000}',
'{"name":"Teo","position":"Lecturer","salary":1000}',
'{"name":"Georgi","position":"Lecturer","salary":1000}'])