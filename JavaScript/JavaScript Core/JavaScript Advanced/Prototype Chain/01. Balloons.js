function solve() {
    class Balloon {
        constructor(color,gasWeight){
            this.color = color
            this.gasWeight = gasWeight
        }
    }
    class PartyBalloon extends Balloon{
        constructor(color,gasWeight,ribbonColor, ribbonLength){
            super(color,gasWeight)
            this.ribbonColor = ribbonColor
            this.ribbonLength = ribbonLength
            this._ribbon = {color: this.ribbonColor, length: this.ribbonLength}
        }
        get ribbon() {
            return this._ribbon
        }
    }
    class BirthdayBalloon extends PartyBalloon {
        constructor(color,gasWeight,ribbonColor, ribbonLength,text){
            super(color,gasWeight,ribbonColor, ribbonLength)
            this._text = text
        }

        get text() {
            return this._text
        }
    }

    return {Balloon,PartyBalloon,BirthdayBalloon}
}
let result = solve()
let Balloon = result.Balloon
let PartyBalloon = result.PartyBalloon
let BirthdayBalloon = result.BirthdayBalloon

let bb = new BirthdayBalloon('blue',5,'red',6,'abc')
console.log(bb)
