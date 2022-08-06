var array = [45, 66, 44, 77, 23, 45, 45, 89];

out = [];
obj = {};

for (let i = 0; i < array.length; i++) {
  obj[array[i]] = 100;
}
for (var i in obj)
{
    out.push(i);
}
console.log(out);

//OR,
//By set
var array = [45, 66, 44, 77, 23, 45, 45, 89];

var array2 = [...new Set(array)];
console.log(array2);

