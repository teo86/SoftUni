function addSticker() {
    let title = $('.title')
    let content = $('.content')
    let list = $('#sticker-list')

    if(title.val() !== '' && content.val() !== ''){
        let note  = $('<li class="note-content">')
        let button = $('<a class="button">').text('x').on('click', function () {
            note.remove()

        })
        let h2 = $('<h2>').text(title.val())
        let p = $('<p>').text(content.val())
        note.append(button)
        note.append(h2)
        note.append('<hr>')
        note.append(p)

        list.append(note)

        title.val('')
        content.val('')
    }
}