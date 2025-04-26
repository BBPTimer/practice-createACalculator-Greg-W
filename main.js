function calculateAbsoluteValue(number) {
    return Math.abs(number);
}

function calculatePower(base, exponent) {
    return Math.pow(base, exponent);
}

function findSquareRoot(number) {
    return Math.sqrt(number);
}

function findMinimum(numberArr) {
    return Math.min(...numberArr);
}

function findMaximum(numberArr) {
    return Math.max(...numberArr);
}

function generateRandomNumber(min, max) {
    return Math.trunc(Math.random() * (max - min) + min);
}

function roundCustom(number, decimalPlaces) {
    let multipleOfTen = Math.pow(10, decimalPlaces);
    return Math.round(number * multipleOfTen) / multipleOfTen;
}

const menuItems = ['Absolute Value Calculation', 'Power Calculation', 'Square Root Finder', 'Maximum and Minimum Finder', 'Random Number Generator', 'Custom Rounding'];
let readlineSync = require('readline-sync');
let userInput = readlineSync.keyInSelect(menuItems, 'Select a menu item');

while (userInput !== -1) {
    if (userInput === 0) {
        let number = readlineSync.questionInt('Number: ')
        console.log(calculateAbsoluteValue(number));
    }
    if (userInput === 1) {
        let base = readlineSync.questionInt('Base: ');
        let exponent = readlineSync.questionInt('Exponent: ');
        console.log(calculatePower(base, exponent));
    }
    if (userInput === 2) {
        let number = readlineSync.questionInt('Number: ')
        console.log(findSquareRoot(number));
    }
    if (userInput === 3) {
        let numberArr = readlineSync.question('Enter list of comma-separated numbers: ').split(",");
        console.log(`Minimum: ${findMinimum(numberArr)}`);
        console.log(`Maximum: ${findMaximum(numberArr)}`);
    }
    if (userInput === 4) {
        let min = readlineSync.questionInt('Lower bound of range: ');
        let max = readlineSync.questionInt('Upper bound of range: ');
        console.log(generateRandomNumber(min, max));
    }
    if (userInput === 5) {
        let number = readlineSync.questionFloat('Number: ');
        let decimalPlaces = readlineSync.questionInt('Decimal places: ');
        console.log(roundCustom(number, decimalPlaces));
    }
    userInput = readlineSync.keyInSelect(menuItems, 'Select a menu item');
}