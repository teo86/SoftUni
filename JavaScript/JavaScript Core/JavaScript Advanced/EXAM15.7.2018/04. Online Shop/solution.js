function onlineShop(selector) {
    let form = `<div id="header">Online Shop Inventory</div>
    <div class="block">
        <label class="field">Product details:</label>
        <br>
        <input placeholder="Enter product" class="custom-select">
        <input class="input1" id="price" type="number" min="1" max="999999" value="1"><label class="text">BGN</label>
        <input class="input1" id="quantity" type="number" min="1" value="1"><label class="text">Qty.</label>
        <button id="submit" class="button" disabled>Submit</button>
        <br><br>
        <label class="field">Inventory:</label>
        <br>
        <ul class="display">
        </ul>
        <br>
        <label class="field">Capacity:</label><input id="capacity" readonly>
        <label class="field">(maximum capacity is 150 items.)</label>
        <br>
        <label class="field">Price:</label><input id="sum" readonly>
        <label class="field">BGN</label>
    </div>`;
    $(selector).html(form);
    let item = $('.custom-select')
    let button = $('.button')
    let price = $('#price')
    let quantity = $('#quantity')
    let totPr = $('#sum')
    let totQuan = $('#shelfCapacity')

    $(item).on('input change' ,function () {
        if($(this).val() !== '') {
            $(button).prop('disabled', false)
        } else {
            $(button).prop('disabled', true)
        }
    })

    $(button).on('click', function () {
        if($(item).val() !== '' && $(price).val() !== '' && $(quantity).val() !== '') {
            let list = $('.display')
            $(list).append($('<li>').text(`Product: ${$(item).val()} Price: ${$(price).val()} Quantity: ${$(quantity).val()}`))


            if($(totPr).val()=== ''){
                $(totPr).val(''+$(price).val())
            } else {
                let sum = +($(totPr).val())
                sum += +($(price).val())
                $(totPr).val(''+sum)
            }
            if($(totQuan).val()=== ''){
                $(totQuan).val(''+$(quantity).val())
            } else {
                let sum = +($(totQuan).val())
                sum += +($(quantity).val())
                $(totQuan).val(''+sum)
            }

            $(item).val('')
            $(price).val('1')
            $(quantity).val('1')
            $(button).prop('disabled', true)

            if(+($(totQuan).val())>=150){
                $(item).prop('disabled', true)
                $(price).prop('disabled', true)
                $(quantity).prop('disabled', true)
                $(button).prop('disabled', true)
                $(totQuan).val('full')
                $(totQuan).addClass('fullCapacity')

            }
        }

    })
}
