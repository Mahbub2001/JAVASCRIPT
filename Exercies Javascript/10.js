// Write a function called make_avg() which will take an array of
// integers and the size of that array and return the average of those values.

make_avg = (arr,len) =>
{
    let sum = 0;
    for (let i = 0; i < len; i++) {
        sum +=arr[i];
        
    }
    return sum;
}

arr = [34,34,55,121,5,11,5];
let len = arr.length;
const result = make_avg(arr,len);
console.log(result);

