let array1 = [1,2,3];
let array2 = [2,30,1];

for (let i = 0; i < array2.length; i++) {
    array1.push(array2[i]);

}
let array = [...new Set(array1)];
console.log(array);

//

let array3 = [1,2,3];
let array4 = [2,30,1];

array3= array3.concat(array4);
console.log(array3);