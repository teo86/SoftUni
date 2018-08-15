function attachEvents() {
    const LOCATIONURL = 'https://judgetests.firebaseio.com/locations.json'
    const  CURENTCONDURL = 'https://judgetests.firebaseio.com/forecast/today/'
    const THREEDAYSURL = 'https://judgetests.firebaseio.com/forecast/upcoming/'
    const forecElement = $('#forecast')
    const upcomingElement = $('#upcoming')


    let pic = {
        Sunny:'&#x2600;',
        "Partly sunny": '&#x26C5;',
        Overcast:'&#x2601;',
        Rain:'&#x2614;',
        Degrees:'&#176;'
}

    $('#submit').on('click', getWeather)

    async function getWeather() {
        let location = $('#location').val()
        let code = ''
        await $.ajax({
            method: 'GET',
            url: LOCATIONURL
        }).then(function (res) {
            for (let loc of res) {
                if(loc.name === location){
                    code = loc.code
                }
            }
            $.ajax({
                method:"GET",
                url: CURENTCONDURL + code + '.json'
            }).then(function (res) {
                let locationName = res.name
                let weather  = res.forecast
                forecElement.css('display', 'block')

                let spCl = $('<span class="condition"></span>')

                let spanCondPic = $(`<span class="condition symbol">${pic[weather.condition]}</span>`)
                let spanName = $(`<span class="forecast-data">${locationName}</span>`)
                let spanTemp = $(`<span class="forecast-data">${weather.low}${pic.Degrees}/${weather.high}${pic.Degrees}</span>`)
                let spanCond = $(`<span class="forecast-data">${weather.condition}</span>`)

                spCl.append(spanName)
                spCl.append(spanTemp)
                spCl.append(spanCond)

                $('#current').append(spanCondPic)
                $('#current').append(spCl)




            }).catch(handleError)

            $.ajax({
                method: 'GET',
                url: THREEDAYSURL + code + '.json'
            }).then(function (res) {
                let threeD = res.forecast
                let locationName = res.name
                for (let forec of threeD) {
                    let spUpcoming = $('<span class="upcoming"></span>')
                    let spanCondPic = $(`<span class="symbol">${pic[forec.condition]}</span>`)
                    let spanTemp = $(`<span class="forecast-data">${forec.low}${pic.Degrees}/${forec.high}${pic.Degrees}</span>`)
                    let spanCond = $(`<span class="forecast-data">${forec.condition}</span>`)
                    spUpcoming.append(spanCondPic)
                    spUpcoming.append(spanTemp)
                    spUpcoming.append(spanCond)
                    upcomingElement.append(spUpcoming)
                }


            }).catch(handleError)

        }).catch(handleError)
    }
    function handleError(error) {
        $('#forecast').text('Error')
    }
}