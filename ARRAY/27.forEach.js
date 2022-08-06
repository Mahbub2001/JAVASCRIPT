const color = ['red', 'blue', 'black'];
const copyItems = [];

// for (let i = 0; i < items.length; i++) {
//     copyItems.push(items[i]);
// }
 
color.forEach((i) => {
  copyItems.push(i);
});
console.log(copyItems);




const number = [3,4,5,6];
const number1=[];

number.forEach((i) =>
{
    number1.push(i*10);
});
console.log(number1);





const queue = [34,35,36]

const queueInfo = queue.forEach(function(name, index, arr) {
    const next = index + 1 < arr.length ? arr[index + 1] : "no one"

    console.log(`${name} is at position ${index + 1}, the next is ${next}`)
})
