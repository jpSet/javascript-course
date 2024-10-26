let firstName = 'Jonas'
console.log(firstName);

const COUNTRY = 'Canada';
const CONTINENT = 'America';
let population = 11;

let language;

language = 'English';

let isIsland = false;
console.log(`${COUNTRY} is a island -> ${isIsland} :- ` + typeof (isIsland));
console.log(`Population -> ${population} million :- ` + typeof (population));
console.log(`Country -> ${COUNTRY} :- ` + typeof (country));
console.log(`Language -> ${language} :- ` + typeof (language));

//Basic Operators
let alfPopulation = population / 2;
population++;
console.log(population);

let portugalMorePopulation = population > 6;
let lessThanAverage = population < 33;

console.log(`${COUNTRY} is in ${CONTINENT}, and its ${population} million people speaks ${language}.`)

// Taking Decisions: if / else Statements
if (population < 33) console.log(`${COUNTRY}´s population is ${33 - population} below average.`);

// Type Conversion and Coercion
console.log('9' - '5'); // 4
console.log('19' - '13' + '17'); // -> 617
console.log('19' - '13' + 17); // -> 23
console.log('123' < 57); // -> false
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 1143

// Equality Operators: == vs. ===
/*const numNeighbours = prompt('How many neighbour countries does your contry have?');

if (numNeighbours === 1) {
    console.log('Only 1 border');
    console.log(typeof (numNeighbours));
}
else if (numNeighbours > 1) {
    console.log('More than 1 border');
    console.log(typeof (numNeighbours));
}
else {
    console.log('No borders.');
    console.log(typeof (numNeighbours));
}
*/

// Logical Operators
if (population < 50 && language === 'English' && !isIsland) {
    console.log(`You should live in ${COUNTRY}.`);
}
else {
    console.log(`${COUNTRY} does not meet your criteria :(`)
}

/*language = prompt("Point a language:");
//The switch Statement
switch (language) {
    case 'chinese':
    case 'mandarim':
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too :D');
        break;
}
*/

// The Conditional (Ternary) Operator
console.log(`Portugal's population is ${(population>33) ? 'above' : 'bellow'}  average.`);
