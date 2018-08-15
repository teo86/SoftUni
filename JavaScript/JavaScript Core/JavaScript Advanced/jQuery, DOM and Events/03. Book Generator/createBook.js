function createBook(selector, title, author, isbn) {
    let num = 0
    num++
    let id = 'book' + num
    let div = $('<div></div>')
    let titleP = $('<p></p>').text(title).addClass('title')
    let authorP = $('<p></p>').text(author).addClass('author')
    let isbnP = $('<p></p>').text(isbn).addClass('isbn')
    let btn1 = $('<button></button>').text('Select').on('click', function () {
        div.css('border', "2px solid blue")

    })
    let btn2 = $('<button></button>').text('Deselect').on('click', function () {
        div.css('border', "")
    })
    div.attr('id',id).append(titleP).append(authorP).append(isbnP).append(btn1).append(btn2)
    $(selector).append(div)
}