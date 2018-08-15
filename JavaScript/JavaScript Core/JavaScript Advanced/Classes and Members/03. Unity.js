class Rat {
    constructor(name){
        this.name = name
        this.unitedRats = []
    }
    getRats() {
        return this.unitedRats
    }
    unite(rat) {
        if(rat instanceof Rat) {
            return this.unitedRats.push(rat)
        }

    }
    toString() {
        let output = []
        output.push(this.name)
        for (let rat of this.unitedRats) {
            output.push('##' + rat.name)
        }
        return output.join('\n')
    }
}
let test = new Rat("Pesho");
console.log(test.toString()); //Pesho

console.log(test.getRats()); //[]

test.unite(new Rat("Gosho"));
test.unite("Sasho");
console.log(test.getRats());
//[ Rat { name: 'Gosho', unitedRats: [] },
//  Rat { name: 'Sasho', unitedRats: [] } ]

console.log(test.toString());
