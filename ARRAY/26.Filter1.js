const array = [443,26,234,5,22,66,22,66,34,23,65,22,1,7];

function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]////



////////////////////////
const numbers = [12,5,23,45,11,18,9,55,61,1];
const bigNUms = numbers.filter(number => number > 20);
const tiny = numbers.filter(n => n < 10);
const even = numbers.filter(number => number %2 === 0);
console.log(bigNUms,tiny,even);



//////////////////
const products = [
  {id : 1 , name: "laptop" , price : 45000},
  {id : 1 , name: "mobile" , price : 80000},
  {id : 1 , name: "watch" , price : 35000},
  {id : 1 , name: "tablet" , price : 23000},
];

// const expensive = products.filter(product => product.price > 100000);
// const expensive = products.filter(product => product.price > 100);
const expensive = products.filter(product => product.price < 100);
console.log(expensive);