//There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays.


function sumArray(a, b) {
    var c = [];
    for (var i = 0; i < Math.max(a.length, b.length); i++) {
      c.push((a[i] || 0) + (b[i] || 0));
    }
    return c;
}


array1 =[1,0,2,3,4] ;
array2 =[3,5,6,7,8,13] ;

let sum = sumArray(array1,array2);
console.log(sum);

