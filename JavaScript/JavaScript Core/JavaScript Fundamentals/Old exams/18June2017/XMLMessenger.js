function solve(input) {
    let validator = /^<message((?:\s+[a-z]+="[A-Za-z0-9 .]+"\s*?)*)>((?:.|\n)+?)<\/message>$/

    let tokens = validator.exec(input)

    if(!tokens){
        console.log('Invalid message format')
        return
    }

    let message = tokens[2].split('\n')

    let regex = /\s+([a-z]+)="([A-Za-z0-9 .]+)"\s*?/g
    let sender =''
    let recipient = ''
    let matches
    while(matches = regex.exec(tokens[1])){
        if(matches[1]==='to'){
            recipient = matches[2]
        }
        if(matches[1]==='from'){
            sender = matches[2]
        }
    }
    if(sender==='' || recipient===''){
        console.log('Missing attributes')
        return
    }

    console.log(`<article>\n  <div>From: <span class="sender">${sender}</span></div>\n  <div>To: <span class="recipient">${recipient}</span></div>\n  <div>`)

    for (let msg of message) {
        console.log(`    <p>${msg}</p>`)

    }
    console.log('  </div>\n</article>')

}
solve('<message to="Bob" from="Alice" timestamp="1497254114">Same old, same old\nLet\'s go out for a beer</message>')
//solve('<message from="John Doe" to="Alice">Not much, just chillin. How about you?</message>')