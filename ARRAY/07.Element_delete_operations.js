delete_any_position = () => {
  var pos = 2,
    item;

  var size = array.length;
  item = array[pos - 1]; // for printing the deletion data....
  for (var i = pos - 1; i < size - 1; i++) {
    array[i] = array[i + 1];
  }
  size--;
  console.log(`Updated Array is = ${array}`);
};

delete_at_last = () =>
{
    var deleted_element = array.pop();
    console.log(deleted_element);
    console.log(`Updated Array ${array}`);
}
delete_at_first = () =>
{
    var deleted_element = array.shift();
    console.log(deleted_element);
    console.log(`Updated Array ${array}`);
}
specific_element = () =>
{
    element = 77
    var pos = array.indexOf(element);
    var item;

    var size = array.length;
    item = array[pos]; // for printing the deletion data....
    for (var i = pos; i < size - 1; i++) {
      array[i] = array[i + 1];
    }
    size--;
    console.log(`Updated Array is = ${array}`);
}

var array = [45, 66, 44, 77, 23, 45, 45, 89];
// delete_any_position();
// delete_at_last();
// delete_at_first();
specific_element();