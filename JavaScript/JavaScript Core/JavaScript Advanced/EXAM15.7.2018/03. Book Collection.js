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
        let book = {}
        if(genre===undefined){
            book  = {bookName: bookName, bookAuthor: bookAuthor}
        } else {
            book  = {bookName: bookName, bookAuthor: bookAuthor, genre: genre}
        }

        if(this.shelf.length === this.shelfCapacity){
            this.shelf.shift()
            this.shelf.push(book)
        } else {
            this.shelf.push(book)
        }

        this.shelf.sort((a,b) => a.bookAuthor.localeCompare(b.bookAuthor))
        return this
    }
    throwAwayBook(bookName){
        for (let i = 0; i < this.shelf.length; i++) {
            if(this.shelf[i].bookName === bookName){
                this.shelf.splice(i,1)
                return
            }

        }
    }
    showBooks(genre){

        let output = `Results for search "${genre}":\n`
        let books =[]
        for (let book of this.shelf) {
            if(book.genre === genre){
                books.push(`\uD83D\uDCD6 ${book.bookAuthor} - "${book.bookName}"`)
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
                books.push(`\uD83D\uDCD6 "${book.bookName}" - ${book.bookAuthor}`)
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




