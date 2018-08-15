function timer() {
    let time = 0
    let isRuning = false
    let interval
    $('#start-timer').on('click', function () {
        if(!isRuning){
            interval = setInterval(step, 1000)
            isRuning = true
        }
    })
    $('#stop-timer').on('click', function () {
        clearInterval(interval)
        isRuning = false
    })

    function step() {
        time++
        $('#seconds').text(('0' + Math.trunc(time%60)).slice(-2))
        $('#minutes').text(('0' + Math.trunc((time/60)%60)).slice(-2))
        $('#hours').text(('0' + Math.trunc(time/3600)).slice(-2))

    }
}