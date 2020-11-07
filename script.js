// spread operator
// Expands elements of an array in places like argumnents and function calls
function addFourAges(a, b, c, d){
    return a + b + c + d;
}

var sumOne = addFourAges(18, 24, 28, 32);
console.log(sumOne);

// passing array into a function
// using apply method to receive an array
// ES5
var ages = [18, 24, 28, 32];
var sumTwo = addFourAges.apply(null, ages);
console.log(sumTwo);

// ES6
// using spread operator to expand ages array into its components
const sumThree = addFourAges(...ages);
console.log(sumThree);

// joining two arrays
// also adding new array element using spread operator 
const mainaFamily = ['Michael', 'Anne', 'Mary', 'Wycliffe', 'Joyce', 'Miriam', 'Abigail'];
const muchumiFamily = ['Maurice', 'Taraji', 'Annah'];
const wholeFamily = [...mainaFamily, 'Asher', ...muchumiFamily];
console.log(wholeFamily);

// spread operator in a nodelist
// NB:all query selectors in JS return a nodelist
// changing text color of h1 and p html elements
// node
const heading = document.querySelector('h1');
// nodelist
const paragraph = document.querySelectorAll('p');
// spread operator
const all = [heading, ...paragraph];

// converting nodelist to an array
Array.from(all).forEach(cur => cur.style.color = 'purple');
