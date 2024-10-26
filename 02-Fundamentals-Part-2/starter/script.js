'use strict'; //forbids us to do certain things and creates visible errors for us 

// Example of bug not reported without 'strict mode'
let hasDriversLicense = false;

const passTest = true;
if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

function logger() {
    console.log('My Name is Jonas');
}

//calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrageJuice = fruitProcessor(2, 4);
console.log(appleOrageJuice);
