var array = [34, 34, 55, 2, 34, 77, 35, 46, 77, 34, 99];
var initial = 1;
var count = 0;
var itemName;

for (var i = 0; i < array.length; i++) {
  for (let j = i; j < array.length; j++) {
    if (array[i] == array[j]) {
      count++;
    }
    if (initial < count) {
      initial = count;
      itemName = array[i];
    }
  }
  count = 0;
}

console.log(`${itemName}  ${initial} times `) ;

