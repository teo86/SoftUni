function showView(viewName) {
    $('main > section').hide()
    $('#'+ viewName).show()
}

function showHideMenuLinks() {
    $('#linkHome').show()
    if(localStorage.getItem('authToken')===null){
        $('#linkLogin').show()
        $('#linkRegister').show()
        $('#linkCreateAd').hide()
        $('#linkListAds').hide()
        $('#linkLogout').hide()
        $('#loggedInUser').hide()
    } else {
        $('#linkLogin').hide()
        $('#linkRegister').hide()
        $('#linkCreateAd').show()
        $('#linkListAds').show()
        $('#linkLogout').show()
        $('#loggedInUser').show()
    }
}

function showInfo(message) {
    let infoBox = $('#infoBox')
    infoBox.text(message)
    infoBox.show()
    setTimeout(function() {
        $('#infoBox').fadeOut()
    }, 3000)
}

function showError(errorMsg) {
    let errorBox = $('#errorBox')
    errorBox.text("Error: " + errorMsg)
    errorBox.show()
    setTimeout(function() {
        $('#errorBox').fadeOut()
    }, 3000)
}

function showHomeView() {
    showView('viewHome')
}

function showLoginView() {
    showView('viewLogin')
    $('#formLogin').trigger('reset')
}

function showRegisterView() {
    $('#formRegister').trigger('reset')
    showView('viewRegister')
}

function showCreateAdView() {
    $('#formCreateAd').trigger('reset')
    showView('viewCreateAd')
}
