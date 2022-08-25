/*
Before map

const output = [];
for (const number of numbers) {
    const doubled = number*2;
    output.push(doubled);
}

function getdoubles ( numbers){
    const output = [];
for (const number of numbers) {
    const doubled = number*2;
    output.push(doubled);
}
return output;
}

const result = getdoubles(numbers);

*/


const numbers = [2,8,4,6,3];
/*
get an array
for every elements of the array do something
store the result n an array 
return the result array*/

const doubleIt = num => num*2
const makeDoubled1 = numbers.map(doubleIt);

// or,
const makeDoubled = numbers.map(num => num*2);
console.log(makeDoubled);

const fiveTimes = [1,2,3,4,5].map(x => x*5)
console.log(fiveTimes);

