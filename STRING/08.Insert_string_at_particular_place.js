insert = function insert(mainString, insertString, position) {
  if (typeof pos == "undefined") {
    position = 0;
  }
  if (typeof insertString == "undefined") {
    insertString = " ";
  }
  return mainString.slice(0, position) + insertString + mainString.slice(position);
}
let mainString = "He is a good boy.";
let insertString = "Because ";
let position = 18;
console.log(insert(mainString));
console.log(insert(mainString, insertString));
console.log(insert(mainString,insertString,position));
