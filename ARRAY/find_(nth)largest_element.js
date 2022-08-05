// var array1 = [54,324,667,45,23,66];

// console.log(Math.max.apply(null,array1));

const arr = ['20','120','111','215','54','78', '120'];   
let intArray = arr.map(Number); // convert into number if needed.......otherwise it doesn't need
intArray = [...new Set(intArray)]; // Remove duplicate numbers
const secondLargestNumber = intArray.sort((a,b) => 
{
   return b - a;
})[1];//give the index number that you want ..like for first largest you have to give 0, for second largest you have to give 1, third largest give 2.......................


console.log(secondLargestNumber) // 120