const BASE_URL = 'https://baas.kinvey.com/'
const APP_KEY = 'kid_Hyur34347'
const APP_SECRET = 'bac39ab93d2e45ed9c80cf197ebd52fb'
const AUTH_HEADERS = {'Authorization': "Basic " + btoa(APP_KEY + ":" + APP_SECRET)}

function loginUser() {
    let username = $('#formLogin input[name="username"]').val()
    let password = $('#formLogin input[name="passwd"]').val()
    username = htmlEscape(username)
    password = htmlEscape(password)


    $.ajax({
        method:'POST',
        url:BASE_URL + 'user/' + APP_KEY + '/login',
        headers: AUTH_HEADERS,
        data: {username, password}
    }).then(function (res) {
        signInUser(res, 'Login successful.')
    }).catch(handleAjaxError)
}

function registerUser() {
    let username = $('#formRegister input[name="username"]').val()
    let password = $('#formRegister input[name="passwd"]').val()
    username = htmlEscape(username)
    password = htmlEscape(password)


    if(username,password){
        $.ajax({
            method: "POST",
            url: BASE_URL + 'user/' + APP_KEY + '/',
            headers: AUTH_HEADERS,
            data: {username, password}
        }).then(function (res) {
            signInUser(res, 'Registration successful.')
        }).catch(handleAjaxError)
    } else {
        showError('Please fill all fields!')
    }


}

function saveAuthInSession(userInfo) {
    localStorage.setItem('authToken', userInfo._kmd.authtoken)
    localStorage.setItem('username', userInfo.username)
    localStorage.setItem('userId', userInfo._id)
}

function logoutUser() {
    $.ajax({
        method: 'POST',
        url: BASE_URL +  'user/' + APP_KEY + '/_logout',
        headers: {Authorization: 'Kinvey ' + localStorage.getItem('authToken')}
    })
    localStorage.clear()
    showHomeView()
    showHideMenuLinks()
    $('#loggedInUser').text("")
    showInfo('Logout successful.')
}

function signInUser(res, message) {
    saveAuthInSession(res)
    showHideMenuLinks()
    showHomeView()
    $('#loggedInUser').text("Hello " + res.username + "!")
    showInfo(message)
}

function createAd() {
    let title = htmlEscape($('#formCreateAd input[name="title"]').val().trim())
    let description = htmlEscape($('#formCreateAd textarea[name="description"]').val().trim())
    let datePublished = htmlEscape($('#formCreateAd input[name="datePublished"]').val().trim())
    let price = +htmlEscape(($('#formCreateAd input[name="price"]').val()).trim())
    let image = htmlEscape($('#formCreateAd input[name="image"]').val().trim())
    price = +price.toFixed(2)
    let views = 0
    let publisher = localStorage.getItem('username')

    if(title && description && datePublished && price){
        $.ajax({
            method: 'POST',
            url: BASE_URL + 'appdata/' + APP_KEY + '/ads',
            headers: {Authorization: 'Kinvey ' + localStorage.getItem('authToken')},
            data: {title,description,datePublished,price,publisher,image, views}
        }).then(function (res) {
            listAds()
            showInfo('Ad created.')
        }).catch(handleAjaxError)
    } else {
        showError('Please fill all fields!')
    }
}

function listAds() {
    $.ajax({
        method: 'GET',
        url: BASE_URL + 'appdata/' + APP_KEY + '/ads',
        headers: {Authorization: 'Kinvey ' + localStorage.getItem('authToken')}
    }).then(function (res) {
        displayAds(res)
    }).catch(handleAjaxError)
}

function displayAds(ads) {

    let sectionAd = $('#viewAds')
    showView('viewAds')

    if(ads.length===0){
        sectionAd.empty()
        sectionAd.append($('<h2>Advertisements</h2>'))
        sectionAd.append($('<div>No advertisements available</div>'))
    } else {
        sectionAd.empty()
        sectionAd.append($('<h1 class="titleForm">Advertisements</h1>'))
        let divAds = $('<div id="ads" class="ads">')
        let table = $('<table>')
        let tr1 = $('<tr><th>Title</th><th>Publisher</th><th>Description</th><th>Price</th><th>Date Published</th><th>Actions</th></tr>')
        table.append(tr1)
        let sortedAds = ads.sort((a,b) => Number(b.views) - Number(a.views))
        for (let ad of sortedAds) {

            let tr2 = $(`<tr><td>${ad.title}</td><td>${ad.publisher}</td><td>${ad.description}</td><td>${ad.price}</td><td>${ad.datePublished}</td></tr>`)
            let td = $('<td>')
            let aView = $('<a href="#">[Read More]</a>').on('click',function () {
                displayDetails(ad)
            })
            td.append(aView)
            if(ad._acl.creator === localStorage.getItem("userId")){
                //let td = $('<td>')
                let aDel = $('<a href="#">[Delete]</a>').on('click', function () {
                    deleteAd(ad)
                })
                let aEdit = $('<a href="#">[Edit]</a>').on('click', function () {
                    loadAdForEdit(ad)
                })

                td.append(aDel).append(aEdit)
            }
            tr2.append(td)
            table.append(tr2)
        }

        divAds.append(table)
        sectionAd.append(divAds)
    }
}

function displayDetails(ad) {
    let sectionDetails = $('#viewAdDetails')
    sectionDetails.empty()
    showView('viewAdDetails')
    let views = Number(ad.views)
    views++

    sectionDetails.append($('<div>').append(
        $('<img>').attr('src', ad.image),
        $('<br>'),
        $('<label>').text('Title:'),
        $('<h1>').text(ad.title),
        $('<label>').text('Description:'),
        $('<p>').text(ad.description),
        $('<label>').text('Publisher:'),
        $('<div>').text(ad.publisher),
        $('<label>').text('Date:'),
        $('<div>').text(ad.datePublished),
        $('<label>').text('Views:'),
        $('<div>').text(views)))
    let obj = {
        title: ad.title,
        description: ad.description,
        datePublished: ad.datePublished,
        price: ad.price,
        publisher: ad.publisher,
        image: ad.image,
        views: views
    }

    $.ajax({
        method: 'PUT',
        url: BASE_URL + 'appdata/' + APP_KEY + '/ads/' + ad._id,
        headers: {Authorization: 'Kinvey ' + localStorage.getItem('authToken')},
        data: obj
    }).catch(handleAjaxError)

}

function deleteAd(ad) {
    $.ajax({
        method: 'DELETE',
        url: BASE_URL + 'appdata/' + APP_KEY + '/ads/' + ad._id,
        headers: {Authorization: 'Kinvey ' + localStorage.getItem('authToken')},
    }).then(function () {
        listAds()
        showInfo('Advertisement deleted.')
    }).catch(handleAjaxError)
}

function loadAdForEdit(ad) {
    showView('viewEditAd')

    $('#formEditAd input[name="title"]').val(ad.title)
    $('#formEditAd textarea[name="description"]').val(ad.description)
    $('#formEditAd input[name="datePublished"]').val(ad.datePublished)
    $('#formEditAd input[name="price"]').val(ad.price)
    $('#formEditAd input[name="image"]').val(ad.image)
    $('#formEditAd input[name="publisher"]').val(ad.publisher)
    $('#formEditAd input[name="id"]').val(ad._id)
    $('#formEditAd input[name="views"]').val(ad.views)

}

function editAd() {
    let title = htmlEscape($('#formEditAd input[name="title"]').val().trim())
    let description = htmlEscape($('#formEditAd textarea[name="description"]').val().trim())
    let datePublished = htmlEscape($('#formEditAd input[name="datePublished"]').val().trim())
    let price = +htmlEscape($('#formEditAd input[name="price"]').val().trim())
    let publisher = $('#formEditAd input[name="publisher"]').val()
    let image = $('#formEditAd input[name="image"]').val()
    let id = $('#formEditAd input[name="id"]').val()
    let views = $('#formEditAd input[name="views"]').val()
    price = +price.toFixed(2)

    if(title && description && datePublished && price){
        $.ajax({
            method: 'PUT',
            url: BASE_URL + 'appdata/' + APP_KEY + '/ads/' + id,
            headers: {Authorization: 'Kinvey ' + localStorage.getItem('authToken')},
            data: {title, description, datePublished, price, publisher, image, views}
        }).then(function (res) {
            listAds()
            showInfo('Advertisement edited.')
        }).catch(handleAjaxError)
    } else {
        showError('Please fill all fields!')
    }
}

function handleAjaxError(response) {
    let errorMsg = JSON.stringify(response)
    if (response.readyState === 0)
        errorMsg = "Cannot connect due to network error."
    if (response.responseJSON && response.responseJSON.description)
        errorMsg = response.responseJSON.description
    showError(errorMsg)
}

function htmlEscape(str) {
    return str.replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}