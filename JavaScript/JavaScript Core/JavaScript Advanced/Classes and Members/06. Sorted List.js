class SortedList {
    constructor(){
        this.collection = []
        this.size = 0
    }
    add(el){
        this.collection.push(+el)
        this.collection.sort((a,b)=> a-b)
        this.size++
        return this.collection
    }
    remove(index){
        if(index< this.collection.length && index>=0){
            this.collection.splice(index,1)
            this.size--
            return this.collection
        }
        return this.collection
    }
    get(index){
        if(index< this.collection.length && index>=0){
            return this.collection[index]
        }
    }
}
let myList = new SortedList()
myList.add(2)
myList.add(3)
myList.add(8)
myList.add(7)
myList.add(9)
myList.remove(2)
console.log(myList.get(2))
console.log(myList)
