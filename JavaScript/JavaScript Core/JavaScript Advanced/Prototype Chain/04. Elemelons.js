function solve() {

    class Melon {
        constructor(weight,melonSort){
            if(new.target === 'Melon'){
                throw new TypeError('Abstract class cannot be instantiated directly')
            }
            this.weight = weight
            this.melonSort = melonSort
        }
    }
    class Watermelon extends Melon{
        constructor(weight,melonSort){
            super(weight,melonSort)

        }
        get elementIndex(){
            return this.weight*this.melonSort.length
        }

        toString(){
            return `Element: Water\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`
        }
    }
    class Firemelon extends Melon{
        constructor(weight,melonSort){
            super(weight,melonSort)

        }
        get elementIndex(){
            return this.weight*this.melonSort.length
        }

        toString(){
            return `Element: Fire\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`
        }
    }
    class Earthmelon extends Melon{
        constructor(weight,melonSort){
            super(weight,melonSort)

        }
        get elementIndex(){
            return this.weight*this.melonSort.length
        }

        toString(){
            return `Element: Earth\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`
        }
    }
    class Airmelon extends Melon{
        constructor(weight,melonSort){
            super(weight,melonSort)

        }
        get elementIndex(){
            return this.weight*this.melonSort.length
        }

        toString(){
            return `Element: Air\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`
        }
    }
    class Melolemonmelon extends Watermelon{
        constructor(weight,melonSort){
            super(weight,melonSort)
            this.element = 'Water'
            this.elements = ['Fire','Earth','Air','Water']

        }
        get elementIndex(){
            return this.weight*this.melonSort.length
        }
        morph(){
            let currentElem = this.elements.shift()
            this.element = currentElem
            this.elements.push(currentElem)
        }

        toString(){
            return `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`
        }
    }
    return {Melon,Watermelon,Earthmelon,Airmelon,Firemelon,Melolemonmelon}
}
let result = solve()
let Melolemonmelon = result.Melolemonmelon
let Melon = result.Melon
let Watermelon = result.Watermelon

let m = new Melolemonmelon(10, 'super')
console.log(m.toString())
m.morph()
m.morph()
console.log(m.toString())