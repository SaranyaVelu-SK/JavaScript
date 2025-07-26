function removeDuplicates(arr) {
  // your code here
  let charSet = new Set();
  let newArr=[]
  for (let i = 0; i < arr.length; i++){
    if (!charSet.has(arr[i])) {
      charSet.add(arr[i]);
      newArr.push(arr[i])
    }
  }
  return newArr;
}
removeDuplicates([1, 2, 2, 3, 4, 4])
module.exports = removeDuplicates;