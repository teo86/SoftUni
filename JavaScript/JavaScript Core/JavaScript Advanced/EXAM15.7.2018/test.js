class BookCollection {
    constructor(shelfGenre, room, shelfCapacity){
        this.room = room;
        this.shelfGenre = shelfGenre;
        this.shelf = [];
        this.shelfCapacity = shelfCapacity;
    }


    get room() {
        return this._room;
    }

    set room(room) {
        if(room ==='livingRoom' || room ==='bedRoom' || room ==='closet'){
            this._room = room
        } else {
            throw (`Cannot have book shelf in ${room}`)
        }
    }

    addBook(bookName, bookAuthor, genre){
        let book = []
        if(genre===undefined){
            book.push(bookName,bookAuthor)
        } else {
            book.push(bookName,bookAuthor,genre)
        }

        if(this.shelf.length === this.shelfCapacity){
            this.shelf.shift()
        }
        this.shelf.push(book)

        this.shelf.sort((a,b) => a[1].localeCompare(b[1]))
        return this
    }
    throwAwayBook(bookName){
        for (let i = 0; i < this.shelf.length; i++) {
            if(this.shelf[i][0] === bookName){
                this.shelf.splice(i,1)
                return
            }

        }
    }
    showBooks(genre){

        let output = `Results for search "${genre}":\n`
        let books =[]
        for (let book of this.shelf) {
            if(book[2] === genre){
                books.push(`\uD83D\uDCD6 ${book[1]} - "${book[0]}"`)
            }
        }
        output+=books.join('\n')
        return output
    }

    get shelfCondition(){
        return this.shelfCapacity - this.shelf.length
    }

    toString(){
        if(this.shelf.length===0){
            return "It's an empty shelf"
        }
        else {
            let result = `"${this.shelfGenre}" shelf in ${this.room} contains:\n`
            let books =[]
            for (let book of this.shelf) {
                books.push(`\uD83D\uDCD6 "${book[0]}" - ${book[1]}`)
            }
            result+= books.join('\n')
            return result
        }
    }
}

let room = new BookCollection('M','livingRoom',3)
room.addBook('0','0','0').addBook('1','1','2').addBook('2','2','2')
console.log(room.shelfCondition);
console.log(room.showBooks('2'));
console.log()
console.log(room.toString());
room.throwAwayBook('1')
console.log(room.shelfCondition);
console.log()
console.log(room.toString());
room.addBook('3','3','3')
console.log()
console.log(room.toString());
console.log(room.shelfCondition);