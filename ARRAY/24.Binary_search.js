const binary = (val,array) =>
{
    let lower = 0;
    let upper = array.length - 1;

    while (lower <= upper) {
        const middle = lower + Math.floor((upper - lower)/2)

        if (val === array[middle]) {
            return middle;
        }

        if (val <  array[middle]){
            upper = middle - 1;
        }
        else{
            lower = middle + 1;
        }
    }
    return false;
}

const values = [0,1,2,3,4,5,6,7,8,9,10];

console.log(binary(7,values));
console.log(binary(55,values));