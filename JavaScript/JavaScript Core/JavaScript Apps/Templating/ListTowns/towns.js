function attachEvents() {
    let root = $('#root')
    $('#btnLoadTowns').on('click', function () {
        root.empty()
        let town = $('#towns').val().split(', ')
        let data = {town: town}
        let tempList = Handlebars.compile($('#towns-template').html())

        let result = tempList(data)

        root.append(result)

    })
}