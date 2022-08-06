var number = 756875675674564;
var str = number.toString();
var array = [str[0]];

for (var i = 1; i < str.length; i++){
    if (str[i -1] % 2 == 0 && str[i] % 2 == 0) {
        array.push('-'+ str[i]);
    }
    else{
        array.push(str[i]);
    }
   
}
console.log(array.join(''));