//----------------------------------Element By Tagname----------------

// const tagList = document.getElementsByTagName("h2");//access by tag name
// console.log(tagList);

// const tagList = document.getElementsByTagName("h2")[0];//access the first tag by tag name.You can place your own index number like [0],[1],[2]..........
// console.log(tagList.innerText);//for showing the text of index-1 tag

//looping way -01
// const tagList = document.getElementsByTagName("h2");
// for (const tag of tagList) {
//     console.log(tag.innerText);
// }

//looping way -02
const tagList = document.getElementsByTagName("h2");
for (let i = 0; i < tagList.length; i++) {
  console.log(tagList[i].innerText);
}


//-------------------------------Element By class------------------------------

const classList = document.getElementsByClassName("test")
// console.log(classList);

for (const classTag of classList) {
    console.log(classTag.innerText);
}


//-----------------------------------element by ID------------------------------

const h1 = document.getElementById("first");
// console.log(h1.innerText);
h1.innerText = 'Playing With DOM';//----------changing the inner Text ----------
console.log(h1);


//--------------------------------------Query Selector------------------------
//for access id name you have to give '#' before id name and for class name you have to give '.' before class name...You can loop it or acess by index . Because it is array type.

// const element = document.querySelector("h2");///It will give the first
const element = document.querySelectorAll("h2");//for access all.
console.log(element);