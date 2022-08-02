// local process(descending)
var numbers = [45, 22, 66, 11, 33, 25, 45];

for (var i = 0; i < numbers.length; i++) {
  for (var j = i + 1; j < numbers.length; j++) {
    var temp = 0;
    if (numbers[i] < numbers[j]) {
      temp = numbers[i];
      numbers[i] = numbers[j];
      numbers[j] = temp;
    }
  }
}
console.log(numbers);

// local process(ascending)
var number = [23, 2, 34, 24, 11, 55, 22, 44, 9];

for (var i = 0; i < number.length; i++) {
  for (var j = i + 1; j < number.length; j++) {
    var temp = 0;
    if (number[i] > number[j]) {
      temp = number[i];
      number[i] = number[j];
      number[j] = temp;
    }
  }
}
console.log(number);

//library function:
// ascending order:
var numbers1 = [34, 44, 12, 33, 22, 25, 38];

numbers.sort(function (a ,b) {
    return a - b;
})
console.log(numbers);

// descending order:
var number1 = [23,23,55,12,34,21,66,11];

number1.sort(function (a ,b) {
    return b - a;
})
console.log(number1);