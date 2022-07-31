// Converting Arrays to Strings
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.join(" * "));

// delete the last element of array :
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var element = fruits.pop();
console.log(fruits);

// Add element at the last of the array :
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var element = fruits.push('mango');
console.log(fruits);

// remove the first element of array :
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var element = fruits.shift();
console.log(fruits);

// Add element at the first of the array :
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var element = fruits.unshift('mango');
console.log(fruits);

//Changing Elements:
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[0] = "Kiwi";
console.log(fruits);

//The length property provides an easy way to append a new element to an array:
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[fruits.length] = "Kiwi";
console.log(fruits);

//merging two arrays:
var myGirls = ["Cecilie", "Lone"];
var myBoys = ["Emil", "Tobias", "Linus"];
var allStudents = myGirls.concat(myBoys);
console.log(allStudents);

//merging multi arrays:
var arr1 = ["Cecilie", "Lone"];
var arr2 = ["Emil", "Tobias", "Linus"];
var arr3 = ["Robin", "Morgan"];
var myChildren = arr1.concat(arr2, arr3);
console.log(myChildren);


// The splice() method adds new items to an array.
// The first parameter (2) defines the position where new elements should be added (spliced in).
// The second parameter (0) defines how many elements should be removed.
// The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 1, "Lemon", "Kiwi");
console.log(fruits);

//The slice() method slices out a piece of an array into a new array.
// The method then selects elements from the start argument, and up to (but not including) the end argument.
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 3);
console.log(citrus);