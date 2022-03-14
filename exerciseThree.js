function sortedItems(myArr) {
  let evenArray = [];
  let oddArray = [];
  let charArray = [];

  for (i in myArr) {
    if (myArr[i] % 2 === 0) {
      evenArray.push(myArr[i]);
    } else if (myArr[i] % 2 === 1) {
      oddArray.push(myArr[i]);
    } else {
      charArray.push(myArr[i]);
    }
  }

  return { evens: evenArray, odds: oddArray, chars: charArray };
}
console.log(sortedItems([4.0, 6.0, "r", 5, "d", 7]));
