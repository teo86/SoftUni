function validate() {


    $('#company').on('change', function () {
        if($('#company').is(':checked', true)){
            $('#companyInfo').css('display', '')
        } else {
            $('#companyInfo').css('display', 'none')
        }
    })
    $('#submit').on('click', function (ev) {
        ev.preventDefault()
        let valid = true
        let userPatt = /^[A-Za-z0-9]{3,20}$/g
        let emailPatt = /@.*\./g
        let passPatt = /^\w{5,15}$/g
        //let confPassPatt = /^\w{5,15}$/g
        if($('#username').val().match(userPatt)){
            $('#username').css('border-color', '')
        } else {
            $('#username').css('border-color', 'red')
            valid = false
        }
        if($('#email').val().match(emailPatt)){
            $('#email').css('border-color', '')
        } else {
            $('#email').css('border-color', 'red')
            valid = false
        }
        if($('#password').val().match(passPatt) && $('#confirm-password').val() === $('#password').val()){
            $('#password').css('border-color', '')
        } else {
            $('#password').css('border-color', 'red')
            valid = false
        }
        if($('#confirm-password').val() === $('#password').val() && $('#confirm-password').val().match(passPatt)){
            $('#confirm-password').css('border-color', '')
        } else {
            $('#confirm-password').css('border-color', 'red')
            valid = false
        }
        if($('#company').is(':checked', true)){
            if(Number($('#companyNumber').val())>=1000 && Number($('#companyNumber').val())<=9999){
                $('#companyNumber').css('border', 'none')
                console.log($('#companyNumber').val());
            } else {
                $('#companyNumber').css('border-color', 'red')
                console.log($('#companyNumber').val());
                valid = false
            }
        }
        if(valid){
            $('#valid').css('display', '')
        } else{
            $('#valid').css('display', 'none')
        }
    })
}
