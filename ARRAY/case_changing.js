var swapCase = function(letters){
    var newLetters = "";
    for(var i = 0; i<letters.length; i++){
        if(letters[i] === letters[i].toLowerCase()){
            newLetters += letters[i].toUpperCase();
        }else {
            newLetters += letters[i].toLowerCase();
        }
    }

    return newLetters;
}

var text = 'The Quick Brown Fox';

var swappedText = swapCase(text); 
console.log(swappedText);