function find_duplicate_in_array(array){
const count = {}
const result = []

array.forEach(item => {
    if (count[item]) {
       count[item] +=1
       return
    }
    count[item] = 1
})

for (let i in count){
    if (count[i] >=2){
        result.push(i)
    }
}

// console.log(count)
return result;

}
const items2 = [1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6]
var c = find_duplicate_in_array(items2);
console.log(`Duplicates elements are : ${c}`);


// The forEach() method calls a function for each element in an array.