function array_filled(n, val)
{
    return Array.apply(null, Array(n)).map(Number.prototype.valueOf,val);
}

console.log(array_filled(2, 3));//(number of elements, value of element)
console.log(array_filled(7, 9));
