myfunction = (array) =>
{
    var sum =0 ;
    var product = 1;
    for (var i = 0; i < array.length; i++) {
        
        sum += array[i];
        product *= array[i];
    }
    return [sum , product];
}
array = [1, 2, 3, 4, 5, 6];
var calculate = myfunction(array);
console.log(calculate[0]);
console.log(calculate[1]);