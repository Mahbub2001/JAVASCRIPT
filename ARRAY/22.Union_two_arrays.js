function union(array1,array2)
{
    if (array1 === null || array2 === null) {
        return  0;
    }

    const obj={};

    for(var i in array1){
        obj[array1[i]] = array1[i];
    }
    for(var i in array2){
        obj[array2[i]] = array2[i];
    }

    const array3 = [];

    for(var j in obj)
    {
        if (obj.hasOwnProperty(j)) //for check if the property is located on the object, otherwise it returns false.
        array3.push(obj[j]);
    }
    return array3;
}

console.log((union([1,2,3],[100,2,1,10])));