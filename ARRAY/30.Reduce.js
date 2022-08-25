const numbers = [1,2,3,4,5];
//.reduce(accumulator Function , initial value)
//There ared two parameter in accumulator function
const total = numbers.reduce( (previous,current) =>previous + current , 0);
console.log(total);