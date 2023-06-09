let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
    let valueInYen = valueInDollar * 1.206 * 127.9
    return valueInYen;
}

const fromYenToPound = function(valueInYen){
    let valueInPound = 0.0078186 * valueInYen * 0.8
    return valueInPound;
}

const sum = (a,b) => {
    return a + b
}


module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };