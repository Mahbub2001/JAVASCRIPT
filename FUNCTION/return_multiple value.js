//-------------------------------------------Way-1----------------------------
/*
how to return :
function getValues() {
    return [getFirstValue(), getSecondValue()];
}

how to access :

var values = getValues();
var first = values[0];
var second = values[1];

OR,,,,,,
const [first, second] = getValues()
*/

//-----------------------------------------Way-2----------------------------------------------
/*
how to return :
function getValues() {
    return {
        first: getFirstValue(),
        second: getSecondValue(),
    };
}
how to access :

var values = getValues();
var first = values.first;
var second = values.second;

OR,,,,
const {first, second} = getValues();

*/