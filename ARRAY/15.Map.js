// Some Documentation of maping
/*
Definition and Usage
map() creates a new array from calling a function for every array element.

map() calls a function once for each element in an array.

map() does not execute the function for empty elements.

map() does not change the original array.


Syntax:
arr.map(function(element, index, array){  }, this);
The callback function() is called on each array element, and the map() method always passes the current element, the index of the current element, and the whole array object to it.

The this argument will be used inside the callback function. By default, its value is undefined . For example, here's how to change the this value to the number 80:

let arr = [2, 3, 5, 7]

arr.map(function(element, index, array){
	console.log(this) // 80
}, 80);

let arr = [2, 3, 5, 7]

arr.map(function(element, index, array){
    console.log(element);
    console.log(index);
    console.log(array);
    return element;
}, 80);
*/


//Example-1


function myFunction(num) {
  return num * 10;
}
const numbers = [23,55,66,77];
const newArr = numbers.map(myFunction)
console.log(newArr);




