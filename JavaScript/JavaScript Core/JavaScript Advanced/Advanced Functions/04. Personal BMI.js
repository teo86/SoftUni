function solve(name, age, weight, height) {
    /*let arr = []
    for (let arg  of arguments) {
        arr.push(arg)
    }*/
    let bmi = Math.round(weight / ((height / 100) ** 2))
    let patientCharts = {
        name: name,
        personalInfo: {
            age: age,
            weight: weight,
            height: height
        },
        BMI: bmi,
        status: checkStatus(bmi)
    }
    function checkStatus(bmi) {
        if(bmi<18.5){
            return 'underweight'
        } else if(bmi<25){
            return 'normal'
        } else if(bmi<30){
            return 'overweight'
        } else if(bmi>=30){
            return 'obese'
        }

    }
    if(patientCharts.status === 'obese'){
        patientCharts['recommendation'] = 'admission required'
    }

    return patientCharts

}
solve('Peter', 29, 75, 182)
console.log()
solve('Honey Boo Boo', 9, 57, 137)