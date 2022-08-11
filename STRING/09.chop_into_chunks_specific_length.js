function stringChop(str , n)
{
    let newArray = [];

    if (typeof n == 'undefined' || n <= 0) {
        return [str];
    }
    if (n > 0) {
        for (let i = 0; i < str.length; i+=n) {
            newArray.push(str.slice(i,i+n));   
        }
    }
    return newArray;
}
console.log(stringChop('w3resource'));
console.log(stringChop('w3resource',2));
console.log(stringChop('w3resource',3));
console.log(stringChop('w3resource',0));
