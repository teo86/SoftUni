class Repository {
    constructor(props){
        this.props = props
        this.data = new Map()
        this.id = -1
    }
    validate(entity){
        let propNames = Object.getOwnPropertyNames(this.props)
        let entytyNames = Object.getOwnPropertyNames(entity)
        //let check = true
        for (let name of propNames) {
            if(!entytyNames.includes(name)){
                throw new Error(`Property ${name} is missing from the entity!`)
            }
        }
        for (let name of propNames) {
            if(typeof entity[name] !== this.props[name]){
                throw new TypeError(`Property ${name} is of incorrect type!`)
            }
        }
        return true
    }

    add(entyty){
        if(this.validate(entyty)) {
            this.id++
            this.data.set(this.id, entyty)
            return this.id
        }
    }

    get(id){
        if(!this.data.has(id)){
            throw new Error(`Entity with id: ${id} does not exist!`)
        }
        return this.data.get(id)
    }

    update(id,newEntity){
        if(!this.data.has(id)){
            throw new Error(`Entity with id: ${id} does not exist!`)
        }
        if(this.validate(newEntity)){
            this.data.set(id,newEntity)
        }
    }

    del(id){
        if(!this.data.has(id)){
            throw new Error(`Entity with id: ${id} does not exist!`)
        }
        this.data.delete(id)
    }
    get count(){
        let num = 0
        this.data.forEach(m => num++)
        return num
    }

}

// Initialize props object
let properties = {
    name: "string",
    age: "number",
    birthday: "object"
};
//Initialize the repository
let repository = new Repository(properties);
// Add two entities
let entity = {
    name: "Kiril",
    age: 19,
    birthday: new Date(1998, 0, 7)
};
console.log(repository.add(entity)); // Returns 0
console.log(repository.add(entity)); // Returns 1
console.log(repository.get(0));
// {"name":"Kiril","age":19,"birthday":"1998-01-06T22:00:00.000Z"}
console.log(repository.get(1));
// {"name":"Kiril","age":19,"birthday":"1998-01-06T22:00:00.000Z"}
//Update an entity
entity = {
    name: 'Valio',
    age: 19,
    birthday: new Date(1998, 0, 7)
};
repository.update(1, entity);
console.log(repository.get(1));
// {"name":"Valio","age":19,"birthday":"1998-01-06T22:00:00.000Z"}
// Delete an entity
repository.del(0);
console.log(repository.count); // Returns 1
let anotherEntity = {
    name1: 'Nakov',
    age: 26,
    birthday: new Date(1991, 0, 21)
};
//repository.add(anotherEntity); // should throw an Error
anotherEntity = {
    name: 'Nakov',
    age: 26,
    birthday: 1991
};
//repository.add(anotherEntity); // should throw a TypeError
//repository.del(-1); // should throw Error for invalid id


