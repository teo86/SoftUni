$(() => {
    renderCatTemplate();

    function renderCatTemplate() {
        let allCats = $('#allCats')
        allCats.empty()
        let data = {cat:cats}
        let template = Handlebars.compile($('#cat-template').html())

        let result = template(data)
        allCats.append(result)
    }

})
function ShowStatus(id) {
    let info = $(`#${id}`)
    info.toggle()
    let button = info.parent().find('button')
    if(button.text()==='Hide status code'){
        button.text('Show status code')
    }else {
        button.text('Hide status code')
    }


    // let infoBox = info.parent().parent().find('img')
    // infoBox.toggle()
}