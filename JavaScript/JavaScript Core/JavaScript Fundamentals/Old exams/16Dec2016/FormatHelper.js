function solve(input) {
    let str = input[0]

    let regex = /\s*[.,!?:;]\s*/g

    str = str.replace(regex, m => m.trim())

    str = str.replace(/(\.|,|!|\?|:|;)/g, "$1 ")
    str = str.replace(/\s+(\.|,|!|\?|:|;)/g, "$1")
    str = str.replace(/(\.) (\d+)/g, "$1$2")
    str = str.replace(/"\s*([^"]+?)\s*"/g, '"$1"')


    console.log(str)
}
solve(['Make,sure to give:proper spacing where is needed... !AS'])
solve(['Terribly formatted text      .  With chaotic spacings." Terrible "    "quoting   "! Also this date is pretty confusing : 20   .   12.  16 .'])