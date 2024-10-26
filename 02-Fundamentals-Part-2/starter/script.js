'use strict'; //forbids us to do certain things and creates visible errors for us 

// Example of bug not reported without 'strict mode'
let hasDriversLicense = false;

const passTest = true;
if(passTest) hasDriversLicense=true;
if(hasDriversLicense)console.log('I can drive :D');


