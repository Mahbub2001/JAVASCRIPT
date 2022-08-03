myfunction = (a) => 
{
    var sum = 0;//if you don't initialize sum= 0, it will display garbage value
    i = a.length;
    while (i--) {
     sum += Math.pow(a[i],2);
    }
    return sum;
}
console.log(myfunction([0,1,2,3,4])); 