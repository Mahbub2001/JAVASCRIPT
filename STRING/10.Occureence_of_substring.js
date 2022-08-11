
// ---------------Shortcurt-----------------

let mainString = "The quick brown fox jumps over the lazy dog";
let SubString = "tHe";
let count = new RegExp(SubString, "gi");//"g" is for case sensitive and "gi" is for case-insensetitive...
console.log(mainString.match(count).length);