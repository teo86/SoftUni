function increment(str) {
    let selector = str
    let text = $('<textarea></textarea>')
    $(text).prop('disabled', true).val('0').addClass('counter')
    $(text).appendTo(selector)
    let incrButton = $('<button></button>')
    $(incrButton).addClass('btn').text('Increment').attr('id','incrementBtn')
    $(incrButton).appendTo(selector)
    let addButton = $('<button></button>')
    $(addButton).addClass('btn').text('Add').attr('id','addBtn')
    $(addButton).appendTo(selector)
    let list = $('<ul></ul>')
    $(list).addClass('results')
    $(list).appendTo(selector)

    $(incrButton).on('click', function () {
        $(text).val( Number($(text).val()) + 1)
    })
    $(addButton).on('click', function () {
        let num = $(text).val()
        $(list).append(`<li>${num}</li>`)
    })
}
