// You are given three numbers 13, 79, and 45. Write a program that will
// print the largest number using if-else.

const number1 = 13;
const number2 = 79;
const number3 = 45;

if (number1 > number2) {
    if (number1 > number3) {
        console.log('Largest number is ' + number1);
    }
    else{
        console.log('Largest number is ' + number3);
    }
}
else if(number2 > number1){
    if (number2 > number3) {
        console.log(`largest number is ${number2}`);
    }
    else{
        console.log(`Largest number is ${number3}`);
    }
}