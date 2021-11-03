

const chalk = require('chalk')
const processArray = process.argv.slice(2)
const convertTo = processArray[0]
const number = processArray[1]


//Variable for the Output value.
let answer = "";

//Formula to Convert celcius to fahrenheit
const toF = function (num1){
    answer = (num1 * 9/5) + 32 
    console.log(chalk.green(`${num1}°C to Celcius =  ${answer}°F` ))
}
//Formula to convert fahrenheit to celcius
const toC = function(num2){
    answer = (num2 - 32) * 5/9
    console.log(chalk.green(`${num2}°F to Fahrenheit =  ${answer}°C` ))
}
//Convertion to Fahrenheit

if (convertTo === "toF"){

    toF(number)
}
//Convertion to Celcius
else if (convertTo === "toC"){

    toC(number)
}

else{
    console.log(chalk.red('Please follow instruction!!'))
}


