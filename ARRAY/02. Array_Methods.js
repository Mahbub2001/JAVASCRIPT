//---------------------------------------Method - 1------------------------------------------
//Array.at(index)
//get index value
const array1 = [23,55,77,22,1,5];
var index = 1;//[0,1,2,3,4,5,6]
console.log(`At index ${index} the element is ${array1.at(index)}`);
var index = -2;//[-6,-5,-4,-3,-2,-1]
console.log(`At index ${index} the element is ${array1.at(index)}`);




//---------------------------------------Method - 2------------------------------------------
//Array.concat(value,value,........)
//adding multuple array . it return a new array...
const num1 = [33, 21, 6];
const num2 = [42,15, 26];
const num3 = [71, 12, 76];
const numbers = num1.concat(num2, num3);
console.log(numbers);




//---------------------------------------Method - 3---------------------------------------
//Array.copyWithin()
//Syntax:
// copyWithin(target) target is the index where copy will begin
// copyWithin(target, start)
// copyWithin(target, start, end)
//It will return modified array
const arr = ['a', 'b', 'c', 'd', 'e'];
// copy to index 0 the element at index 3
console.log(arr.copyWithin(0, 3, 4));
// copy to index 1 all elements from index 3 to the end
console.log(arr.copyWithin(1, 3));




//---------------------------------------Method - 4------------------------------------------
//Array.fill(value,start,end)//end is the before of ending index
//it returns the modified arrray
const arr2 = [3,4,5,6,7,8];
console.log(arr2.fill(100,2,3));
const arr3 = [3,4,5,6,7,8];
console.log(arr3.fill(50,2,5));
const arr4 = [3,4,5,6,7,8];
console.log(arr4.fill(99));




//---------------------------------------Method - 5------------------------------------------
//Array.filter()
const number = [45,66,33,88,22,3,5,6,233,773,22];

const result = number.filter(number => number > 20);

console.log(result);