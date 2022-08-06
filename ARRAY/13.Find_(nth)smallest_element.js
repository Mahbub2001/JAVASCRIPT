const arr = ['20','120','111','215','54','78', '120'];   
let intArray = arr.map(Number); // convert into number if needed.......otherwise it doesn't need
intArray = [...new Set(intArray)]; // Remove duplicate numbers
const secondSmallestNumber = intArray.sort((a,b) => 
{
   return a - b;
})[1];//give the index number that you want ..like for first smallest you have to give 0, for second smallest you have to give 1, third smallest give 2.......................


console.log(secondSmallestNumber) // 120