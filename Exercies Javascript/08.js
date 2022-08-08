// You are given a triangle with the sides 9, 8, 9. Write a program to check
// whether a triangle is Isosceles or not using if-else.

const side1 = 9;
const side2 = 8;
const side3 = 9;

if(side1 === side2 && side1 != side3 || side2 === side3 && side2 != side1 || side1 === side3 && side2 != side1)
{
    console.log("This is a Isosceles Triangle");
}
else{
    console.log("This is not a Isosceles Triangle");
}