function solve(input) {
    let result = []
    for (let i = 0; i < input.length; i++) {
        let regex = /(www\.)([A-Za-z0-9-]+)(\.[a-z]+)+/gm
        let match
        while(match = regex.exec(input[i])){
            result.push(match[0])
        }

    }
    console.log(result.join('\n'))
}
solve(['Join WebStars now for free, at www.web-stars.com','You can also support our partners:',
        'Internet - www.internet.com','WebSpiders - www.webspiders101.com','Sentinel - www.sentinel.-ko'])