class Player {
    constructor(nickName){
        this.nickName = nickName
        this._scores = []
    }

    addScore(score){
        if(!isNaN(score) && score !== null){
            this._scores.push(+score)
            this._scores.sort((b,c) => c-b)
        }
        return this
    }
    get scoreCount() {
        return this._scores.length
    }

    get highestScore() {
        return this._scores[0]
    }

    get topFiveScore() {
        let n
        let result = []
        if(this._scores.length>5){
            n = 5
        } else {
            n = this._scores.length
        }
        for (let i = 0; i < n; i++) {
            result.push(this._scores[i])
        }
        return result
    }

    toString(){

            return `${this.nickName}: [${this._scores}]`

    }

}

let peter = new Player("Peter");
console.log('Highest score: ' + peter.highestScore);
console.log(`Top 5 score: [${peter.topFiveScore}]`);
console.log('' + peter); console.log('Score count: ' + peter.scoreCount);

peter.addScore(450); peter.addScore(200);
console.log('Highest score: ' + peter.highestScore);
console.log(`Top 5 score: [${peter.topFiveScore}]`);
console.log('' + peter);

peter.addScore(2000);
peter.addScore(300);
peter.addScore(50);
peter.addScore(700);
peter.addScore(700);

console.log('Highest score: ' + peter.highestScore);
console.log(`Top 5 score: [${peter.topFiveScore}]`);
console.log('' + peter);
console.log('Score count: ' + peter.scoreCount);

console.log();
let maria = new Player("Maria")
    maria.addScore(350)
    maria.addScore(779)
    maria.addScore(180);
console.log('Highest score: ' + maria.highestScore);
console.log(`Top 5 score: [${maria.topFiveScore}]`);
console.log('' + maria);