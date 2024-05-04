const array = [11, 12, 14];
console.log(array);

const index = array.indexOf(11);
if (index > -1) { // only splice array when item is found
  array.splice(index, 1); // 2nd parameter means remove one item only
}
// array = [2, 9]
console.log(array);